import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import NotFound from '../NotFound';

const projectDetails = {
  detoxmove: {
    title: 'DetoxMove',
    summary:
      'DetoxMove adalah aplikasi digital detox berbasis AI yang membantu pengguna mengurangi waktu bermain media sosial dengan menukarnya menjadi aktivitas fisik. Pengguna harus melakukan push-up yang dihitung secara otomatis menggunakan AI berbasis MediaPipe dari Google. Setiap 1 repetisi push-up memberikan 5 menit waktu akses untuk aplikasi seperti TikTok, sehingga pengguna bisa menikmati media sosial setelah bergerak dan berolahraga.',
    previewImage: '/assets/Projekan/projek-detox/Screenshot_2026-10-05-16-24-31-068_com.detoxmove.jpg',
    videoSrc: '/assets/Projekan/projek-detox/Screenrecorder-2026-10-05-14-22-25-198~2.mp4',
    gallery: [
      '/assets/Projekan/projek-detox/Screenshot_2026-10-05-16-24-31-068_com.detoxmove.jpg',
      '/assets/Projekan/projek-detox/Screenshot_2026-10-05-16-24-35-235_com.detoxmove.jpg',
      '/assets/Projekan/projek-detox/Screenshot_2026-10-05-16-24-41-069_com.detoxmove.jpg',
      '/assets/Projekan/projek-detox/Screenshot_2026-10-05-14-24-16-632_com.google.android.apps.photos.jpg'
    ],
    seo: {
      title: 'DetoxMove - Project Detail',
      description: 'Preview DetoxMove.'
    },
    cta: {
      demoLabel: 'Lihat GitHub',
      demoHref: 'https://github.com/haldies/detoxmove',
      apkLabel: 'Download Aplikasi',
      apkHref: 'https://drive.google.com/file/d/1JFiAKtJUXD7t-HdzDPltUlEfZpE3NXJd/view?usp=drivesdk'
    },
  },
  'llm-maganghub': {
    title: 'MagangHub Tracker',
    summary:
      'Tracker lowongan MagangHub untuk memantau kuota, jumlah pelamar, dan menyimpan kandidat lowongan, dengan eksperimen rekomendasi berbasis AI.',
    previewImage: '/assets/Projekan/llmmaganghub.png',
    videoSrc: '/assets/Projekan/video/demovideop1.mp4',
    seo: {
      title: 'MagangHub Tracker Project Detail',
      description: 'Preview MagangHub Tracker.'
    },
    cta: {
      demoHref: 'https://maganghub-genz.vercel.app'
    },
  },
  'google-lens-clone': {
    title: 'Pencarian Produk Berbasis Gambar',
    summary:
      'Mengembangkan fitur pencarian produk menggunakan gambar, dengan MobileNet sebagai feature extractor dan dataset 33.000 gambar produk.',
    previewImage: '/assets/images/google_lens.png',
    videoSrc: '/assets/Projekan/video/google-lens-demo.mp4',
    seo: {
      title: 'Pencarian Produk Berbasis Gambar - Project Detail',
      description: 'Preview pencarian produk berbasis gambar.'
    },
    cta: {
      demoHref: 'https://github.com/haldies/Google-lens-Clone'
    }
  },
  'image-classification-skin-type': {
    title: 'AI Skin Analysis for Skincare Brands',
    summary:
      'Solusi analisis kulit berbasis AI untuk membantu brand skincare memahami kebutuhan pelanggan dan memberi rekomendasi produk yang lebih personal.',
    previewImage: '/assets/images/CSkin_Skin_Classification.webp',
    videoSrc: '',
    seo: {
      title: 'AI Skin Analysis for Skincare Brands - Project Detail',
      description: 'Preview AI Skin Analysis.'
    },
    cta: {
      demoLabel: 'Lihat GitHub',
      demoHref: 'https://github.com/C-Skin'
    }
  },
  'zushi-nft': {
    title: 'Zushi Company Profile',
    summary:
      'Company profile responsif untuk Zushi yang memperkenalkan visi brand, nilai produk, dan positioning bisnis digital secara profesional.',
    previewImage: '/assets/Projekan/web-nft.jpg',
    videoSrc: '',
    seo: {
      title: 'Zushi Company Profile - Project Detail',
      description: 'Preview Zushi Company Profile.'
    },
    cta: {
      demoHref: 'https://web-nft-ten.vercel.app/'
    }
  },
  lokerhub: {
    title: 'LokerHub',
    summary:
      'Platform all-in-one untuk melacak lamaran kerja dan membuat CV profesional yang ATS-friendly dengan mudah dan cepat.',
    previewImage: '/assets/Projekan/lokerhub.png',
    videoSrc: '',
    seo: {
      title: 'LokerHub - Project Detail',
      description: 'Preview LokerHub.'
    },
    cta: {
      demoHref: 'https://lokerhub-mu.vercel.app'
    }
  },
  'kasir-ai': {
    title: 'KasirAi',
    summary:
      'Aplikasi kasir mobile untuk membantu operasional penjualan secara praktis. Sudah diinstall 400+ orang dengan 20 pengguna aktif setiap harinya, kini tersedia di Google Play Store.',
    previewImage: '/assets/Projekan/kasirai.png',
    videoSrc: '',
    seo: {
      title: 'KasirAi - Project Detail',
      description: 'Preview KasirAi.'
    },
    cta: {
      demoLabel: 'Lihat di Play Store',
      demoHref: 'https://play.google.com/store/apps/details?id=com.kasirai.kasir&hl=id'
    }
  },
  'isvandiary-lawfirm': {
    title: 'Isvandiary Law Firm',
    summary:
      'Company profile kantor hukum Isvandiary & Rekan untuk sengketa tambang dan lingkungan di Bandung dan Jakarta.',
    previewImage: '/assets/Projekan/isvandiary.png',
    videoSrc: '',
    seo: {
      title: 'Isvandiary Law Firm - Project Detail',
      description: 'Preview Isvandiary Law Firm.'
    },
    cta: {
      demoHref: 'https://isvandiarylawfirm.com'
    }
  },
  'ingat-uang': {
    title: 'Ingat Uang',
    summary:
      'Platform cerdas untuk mencatat pengeluaran, membagi tagihan otomatis, dan memahami kondisi keuangan personal dengan lebih mudah.',
    previewImage: '/assets/Projekan/ingatuang.png',
    videoSrc: '',
    seo: {
      title: 'Ingat Uang - Project Detail',
      description: 'Preview Ingat Uang.'
    },
    cta: {
      demoHref: 'https://ingatuang.vercel.app/'
    }
  },
  pdfindo: {
    title: 'PDFIndo',
    summary:
      'Kumpulan tools PDF gratis yang diproses langsung di browser aman, cepat, dan tanpa mengunggah file ke server.',
    previewImage: '/assets/Projekan/pdfindo.png',
    videoSrc: '',
    seo: {
      title: 'PDFIndo - Project Detail',
      description: 'Preview PDFIndo.'
    },
    cta: {
      demoHref: 'https://pdfindo.vercel.app/'
    }
  },
  motosense: {
    title: 'MotoSense',
    summary:
      'Diagnosis awal suara mesin motor berbasis AI yang mengenali delapan indikasi kerusakan dari rekaman audio selama delapan detik.',
    previewImage: '/assets/Projekan/motosense.png',
    videoSrc: '',
    seo: {
      title: 'MotoSense - Project Detail',
      description: 'Preview MotoSense.'
    },
    cta: {
      demoHref: 'https://motosenseofficial.vercel.app/'
    }
  }
};

const ProjectDetailLLMMagangHub = () => {
  const { projectId } = useParams();
  const project = projectDetails?.[projectId];

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-primary">
      <Helmet>
        <title>{project.seo.title}</title>
        <meta name="description" content={project.seo.description} />
      </Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-semibold md:text-5xl">
              {project.title}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              {project.summary}
            </p>

            <div className="mt-8">
              {project.videoSrc ? (
                <video
                  src={project.videoSrc}
                  className="mx-auto h-auto max-h-[70vh] w-full max-w-[300px] object-contain md:max-w-[340px]"
                  autoPlay
                  muted
                  loop
                  controls
                  preload="metadata"
                  playsInline
                  poster={project.previewImage}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <a href={project.cta.demoHref} target="_blank" rel="noreferrer" aria-label={`Buka demo ${project.title}`}>
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </a>
              )}

              {project.cta.demoHref && (
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button variant="default" size="lg" iconName="ExternalLink" iconPosition="right" asChild>
                    <a href={project.cta.demoHref} target="_blank" rel="noreferrer">{project.cta.demoLabel || 'Lihat Demo'}</a>
                  </Button>
                  {project.cta.apkHref && project.cta.apkHref !== '#' && (
                    <Button variant="outline" size="lg" iconName="Download" iconPosition="left" asChild>
                      <a href={project.cta.apkHref} target="_blank" rel="noreferrer">{project.cta.apkLabel || 'Download Aplikasi'}</a>
                    </Button>
                  )}
                </div>
              )}

              {project.gallery?.length > 0 && (
                <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
                  {project.gallery.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${project.title} preview`}
                      className="h-auto max-h-[50vh] w-full object-contain"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetailLLMMagangHub;
