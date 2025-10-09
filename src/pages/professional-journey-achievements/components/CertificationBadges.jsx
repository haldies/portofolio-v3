import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const certificateFiles = import.meta.glob('../../../../public/assets/certificate/*.pdf', {
  eager: true,
  as: 'url',
});

let pdfjsLoaderPromise;

const loadPdfPreviewer = async () => {
  if (!pdfjsLoaderPromise) {
    pdfjsLoaderPromise = Promise.all([
      import('pdfjs-dist'),
      import('pdfjs-dist/build/pdf.worker.min.mjs?url').catch(() =>
        import('pdfjs-dist/build/pdf.worker.mjs?url'),
      ),
    ]).then(([pdfjsLib, workerModule]) => {
      if (pdfjsLib?.GlobalWorkerOptions) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = workerModule?.default;
      }
      return pdfjsLib;
    });
  }
  return pdfjsLoaderPromise;
};

const KNOWN_ORGANIZATIONS = [
  'AWS',
  'Amazon',
  'Google',
  'IBM',
  'TensorFlow',
  'Coursera',
  'Bangkit',
  'Laskar',
  'Dicoding',
];

const LEARNING_PARTNERS = [
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'Amazon Web Services',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
  },
  {
    name: 'Coursera',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Coursera_logo.svg',
  },
  {
    name: 'Dicoding',
    logo: 'https://dicoding-web-img.sgp1.digitaloceanspaces.com/original/commons/logo-square.png',
  },
];

const formatCertificateName = (fileName = '') => {
  const cleaned = fileName
    .replace(/\.pdf$/i, '')
    .replace(/[\[\]]/g, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return cleaned
    .split(' ')
    .filter(Boolean)
    .map((word) => {
      if (word.length <= 2) return word.toUpperCase();
      if (/^[A-Z0-9]+$/.test(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

const normalizeCertificateUrl = (url = '') => {
  if (!url || typeof url !== 'string' || url.startsWith('http')) {
    return url;
  }

  const assetPathMatch = url.match(/assets\/certificate\/.*$/);
  if (assetPathMatch) {
    return `/${assetPathMatch[0].replace(/\/\/+/g, '/')}`;
  }

  return url.replace(/\/public(?=\/)/, '');
};

const CertificateCard = React.memo(({ certificate, onOpen }) => {
  const containerRef = useRef(null);
  const [canRenderPreview, setCanRenderPreview] = useState(false);
  const [previewAttempted, setPreviewAttempted] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [previewError, setPreviewError] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCanRenderPreview(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (canRenderPreview) {
      setPreviewAttempted(true);
    }
  }, [canRenderPreview]);

  useEffect(() => {
    if (!previewAttempted || previewSrc || previewError) return undefined;
    let cancelled = false;

    const renderPreview = async () => {
      try {
        const pdfjsLib = await loadPdfPreviewer();
        if (!pdfjsLib?.getDocument) {
          throw new Error('PDF loader unavailable');
        }
        const loadingTask = pdfjsLib.getDocument(certificate.url);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.3 });

        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const context = canvas.getContext('2d', { alpha: false });

        await page.render({ canvasContext: context, viewport }).promise;

        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        if (!cancelled) {
          setPreviewSrc(dataUrl);
        }
        loadingTask.destroy();
      } catch (error) {
        if (!cancelled) {
          setPreviewError(true);
        }
      }
    };

    renderPreview();

    return () => {
      cancelled = true;
    };
  }, [certificate.url, previewAttempted, previewError, previewSrc]);

  return (
    <div
      ref={containerRef}
      className="group flex flex-col overflow-hidden rounded-brand-lg border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        {previewSrc ? (
          <div
            className="h-full w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${previewSrc})` }}
          />
        ) : previewAttempted && previewError ? (
          <div className="flex h-full w-full items-center justify-center bg-card px-4 text-center text-xs text-text-secondary">
            Preview unavailable.
            <button
              type="button"
              className="ml-1 text-accent underline underline-offset-2"
              onClick={() => onOpen(certificate.url)}
            >
              Open PDF
            </button>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-card">
            <div className="h-24 w-24 animate-pulse rounded-full bg-muted-foreground/20" />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute top-3 right-3 rounded-full border border-accent/20 bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent shadow-sm backdrop-blur">
          PDF
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-foreground">
            {certificate.displayName}
          </h3>
        </div>
        <p className="mt-2 break-all text-xs text-text-secondary">
          {certificate.fileName}
        </p>

        <div className="mt-auto space-y-2 pt-4">
          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            className="w-full text-xs"
            onClick={() => onOpen(certificate.url)}
          >
            View Certificate
          </Button>
          <Button
            variant="ghost"
            size="xs"
            iconName="Download"
            iconPosition="left"
            asChild
            className="w-full justify-center text-xs"
          >
            <a href={certificate.url} download>
              Download PDF
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
});

const CertificationBadges = () => {
  const marqueeItems = useMemo(
    () => [...LEARNING_PARTNERS, ...LEARNING_PARTNERS],
    [],
  );

  const { certificates, organizations } = useMemo(() => {
    const entries = Object.entries(certificateFiles || {});

    const certificateList = entries
      .map(([path, url], index) => {
        const fileName = path.split('/').pop() || `certificate-${index + 1}.pdf`;
        const displayName = formatCertificateName(fileName);

        return {
          id: index + 1,
          fileName,
          displayName,
          url: normalizeCertificateUrl(url),
        };
      })
      .sort((a, b) => a.displayName.localeCompare(b.displayName));

    const organizationSet = new Set();
    certificateList.forEach((certificate) => {
      const name = certificate.displayName.toLowerCase();
      KNOWN_ORGANIZATIONS.forEach((org) => {
        if (name.includes(org.toLowerCase())) {
          organizationSet.add(org);
        }
      });
    });

    return {
      certificates: certificateList,
      organizations: organizationSet,
    };
  }, []);

  const handleOpenCertificate = useCallback((url) => {
    if (typeof window !== 'undefined' && url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const totalCertificates = certificates.length;
  const totalOrganizations = organizations.size;
  const previewCoverage = totalCertificates > 0 ? 100 : 0;
  const storagePath = 'assets/certificate';

  return (
    <div className="bg-card rounded-brand-lg p-6 shadow-brand-subtle border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-accent/10 rounded-brand flex items-center justify-center mr-3">
            <Icon name="Award" size={20} className="text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Certifications & Badges</h2>
            <p className="text-sm text-text-secondary">Professional credentials and achievements</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-accent">{totalCertificates}</div>
          <div className="text-sm text-text-secondary">Certifications</div>
        </div>
      </div>

      {totalCertificates > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onOpen={handleOpenCertificate}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-brand-lg border border-dashed border-border bg-muted/30 p-10 text-center text-sm text-text-secondary">
          No certificate PDFs found in <span className="font-medium text-foreground">{storagePath}</span>.
        </div>
      )}

      <div className="mt-10 rounded-brand-lg border border-border bg-muted/30 p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="rounded-brand-lg border border-accent/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-2xl font-semibold text-accent">{totalCertificates}</div>
            <div className="text-sm text-text-secondary">Certificates</div>
          </div>
          <div className="rounded-brand-lg border border-success/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-2xl font-semibold text-success">{totalOrganizations}</div>
            <div className="text-sm text-text-secondary">Highlight Organizations</div>
          </div>
          <div className="rounded-brand-lg border border-primary/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-2xl font-semibold text-primary">{previewCoverage}%</div>
            <div className="text-sm text-text-secondary">Preview Coverage</div>
          </div>
          <div className="rounded-brand-lg border border-warning/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-xs font-semibold text-foreground break-all">{storagePath}</div>
            <div className="mt-1 text-sm text-text-secondary">Storage Path</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadges;
