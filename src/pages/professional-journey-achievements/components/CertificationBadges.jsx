import React, { useCallback, useMemo, useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const certificateFiles = import.meta.glob('../../../../public/assets/certificate/jpg/*.jpg', {
  eager: false,
  as: 'url',
});

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
    .replace(/\.jpg$/i, '')
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

  const assetPathMatch = url.match(/assets\/certificate\/jpg\/.*$/);
  if (assetPathMatch) {
    return `/${assetPathMatch[0].replace(/\/\/+/g, '/')}`;
  }

  return url.replace(/\/public(?=\/)/, '');
};

const CertificateCard = React.memo(({ certificate, onOpen }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imgRef = React.useRef(null);

  React.useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Load 50px before entering viewport
        threshold: 0.01,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className="group flex flex-col overflow-hidden rounded-brand-lg border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        {!imageError ? (
          <>
            {!imageLoaded && (
              <div className="flex h-full w-full items-center justify-center bg-card">
                <div className="h-24 w-24 animate-pulse rounded-full bg-muted-foreground/20" />
              </div>
            )}
            {shouldLoad && (
              <img
                src={certificate.url}
                alt={certificate.displayName}
                className={`h-full w-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                loading="lazy"
                decoding="async"
              />
            )}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-card px-4 text-center text-xs text-muted-foreground">
            Image unavailable
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute top-3 right-3 rounded-full border border-accent/20 bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent shadow-sm backdrop-blur">
          Certificate
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-primary">
            {certificate.displayName}
          </h3>
        </div>

        <div className="mt-auto pt-4">
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
        </div>
      </div>
    </div>
  );
});

const CertificationBadges = () => {
  const [certificates, setCertificates] = useState([]);
  const [organizations, setOrganizations] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const marqueeItems = useMemo(
    () => [...LEARNING_PARTNERS, ...LEARNING_PARTNERS],
    [],
  );

  useEffect(() => {
    const loadCertificates = async () => {
      try {
        const entries = Object.entries(certificateFiles || {});
        
        const certificateList = await Promise.all(
          entries.map(async ([path, importFn], index) => {
            const url = await importFn();
            const fileName = path.split('/').pop() || `certificate-${index + 1}.jpg`;
            const displayName = formatCertificateName(fileName);

            return {
              id: index + 1,
              fileName,
              displayName,
              url: normalizeCertificateUrl(url),
            };
          })
        );

        certificateList.sort((a, b) => a.displayName.localeCompare(b.displayName));

        const organizationSet = new Set();
        certificateList.forEach((certificate) => {
          const name = certificate.displayName.toLowerCase();
          KNOWN_ORGANIZATIONS.forEach((org) => {
            if (name.includes(org.toLowerCase())) {
              organizationSet.add(org);
            }
          });
        });

        setCertificates(certificateList);
        setOrganizations(organizationSet);
      } catch (error) {
        console.error('Error loading certificates:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCertificates();
  }, []);

  const handleOpenCertificate = useCallback((url) => {
    if (typeof window !== 'undefined' && url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const totalCertificates = certificates.length;
  const totalOrganizations = organizations.size;
  const previewCoverage = totalCertificates > 0 ? 100 : 0;
  const storagePath = 'assets/certificate/jpg';

  if (isLoading) {
    return (
      <div className="bg-card rounded-brand-lg p-6 shadow-brand-subtle border border-border">
        <div className="flex items-center justify-center py-20">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-accent border-t-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-brand-lg p-6 shadow-brand-subtle border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-accent/10 rounded-brand flex items-center justify-center mr-3">
            <Icon name="Award" size={20} className="text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-primary">Certifications & Badges</h2>
            <p className="text-sm text-muted-foreground">Professional credentials and achievements</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-accent">{totalCertificates}</div>
          <div className="text-sm text-muted-foreground">Certifications</div>
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
        <div className="rounded-brand-lg border border-dashed border-border bg-muted/30 p-10 text-center text-sm text-muted-foreground">
          No certificate images found in <span className="font-medium text-primary">{storagePath}</span>.
        </div>
      )}

      <div className="mt-10 rounded-brand-lg border border-border bg-muted/30 p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="rounded-brand-lg border border-accent/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-2xl font-semibold text-accent">{totalCertificates}</div>
            <div className="text-sm text-muted-foreground">Certificates</div>
          </div>
          <div className="rounded-brand-lg border border-secondary/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-2xl font-semibold text-secondary">{totalOrganizations}</div>
            <div className="text-sm text-muted-foreground">Highlight Organizations</div>
          </div>
          <div className="rounded-brand-lg border border-primary/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-2xl font-semibold text-primary">{previewCoverage}%</div>
            <div className="text-sm text-muted-foreground">Preview Coverage</div>
          </div>
          <div className="rounded-brand-lg border border-warning/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-xs font-semibold text-primary break-all">{storagePath}</div>
            <div className="mt-1 text-sm text-muted-foreground">Storage Path</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadges;
