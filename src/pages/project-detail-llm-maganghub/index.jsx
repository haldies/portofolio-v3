import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import NotFound from '../NotFound';

const projectDetails = {
  'llm-maganghub': {
    badgeLabel: 'Internship Tracker',
    title: 'MagangHub Tracker',
    summary:
      'Gak nyangka iseng-iseng bikin website malah dipakai banyak orang. Awalnya cuma mau daftar MagangHub Kemnaker sambil live TikTok, tapi proses cari lowongan dan cek kuota terasa ribet, jadi gue bikin versi sendiri yang lebih simple buat semua orang.',
    impactMetrics: [
      { label: 'Response Accuracy', value: '92.4%' },
      { label: 'Time Saved / Query', value: '6.5 minutes' },
      { label: 'Active Daily Users', value: '180+' }
    ],
    highlights: [
      {
        title: 'Quota & Applicant Insights',
        description:
          'Lowongan menampilkan sisa kuota dan jumlah pelamar secara real-time, jadi pengguna bisa analisis peluang keterima sebelum daftar.'
      },
      {
        title: 'Smart Filtering Experience',
        description:
          'Filter lengkap berdasarkan peluang, provinsi, jurusan, sampai lowongan paling banyak dan paling sedikit pelamar supaya pencarian terasa lebih terarah.'
      },
      {
        title: 'JobCart & AI Recommendation',
        description:
          'Fitur JobCart bantu simpan kandidat lowongan sementara eksperimen Gemini LLM lagi digarap buat rekomendasi otomatis tiga pilihan terbaik sesuai CV.'
      }
    ],
    techStack: [
      'React + Vite frontend',
      'Tailwind CSS design system',
      'Node.js proxy untuk MagangHub API',
      'Gemini LLM recommendation prototype',
      'Supabase persistence layer',
      'LaunchDarkly feature flags'
    ],
    problemStatement:
      'Dari pertama buka portal MagangHub gue ngerasa navigasinya kurang ramah: informasi peluang tersebar, kuota nggak langsung kebaca, dan peserta cuma bisa apply tiga posisi. Karena API-nya kebuka, gue compile ulang semua data biar orang-orang bisa eksplor lowongan lebih gampang sambil mantau persaingan secara transparan.',
    architectureNotes:
      'Stack ringan buat shipping cepat: React + Vite untuk front-end interaktif, Tailwind buat styling dan Gemini LLM sebagai rekomendasi lowongan makin personal.',
    videoSrc: '/assets/Projekan/video/demovideop1.mp4',
    seo: {
      title: 'MagangHub Tracker Project Detail',
      description:
        'Deep dive into the MagangHub tracker built to monitor internship quotas, applicants, saved opportunities, and AI-assisted recommendations.'
    },
    cta: {
      primaryLabel: 'Book a Discovery Call',
      primaryHref: '/contact',
      secondaryLabel: 'Back to Projects',
      secondaryHref: '/home#projects',
      demoHref: 'https://maganghub-genz.vercel.app'
    },
  },
  'google-lens-clone': {
    badgeLabel: 'Computer Vision',
    title: 'Pencarian Produk Berbasis Gambar',
    summary:
      'Fitur pencarian produk menggunakan gambar untuk membantu pengguna menemukan item serupa hanya dari foto. Sistem ini memanfaatkan embedding visual agar pencarian terasa instan dan relevan.',
    impactMetrics: [
      { label: 'Search Latency', value: '~120 ms' },
      { label: 'Image Library', value: '33k products' },
    ],
    highlights: [
      {
        title: 'Context-Aware Matching',
        description:
          'Menghasilkan embedding visual dengan MobileNet yang telah di-finetune sehingga sistem mampu memahami tekstur, warna, dan bentuk secara detail.'
      },
 
      {
        title: 'Actionable Results',
        description:
          'Hasil pencarian langsung menampilkan tautan produk dan metadata tambahan sehingga pengguna dapat melakukan penelusuran lanjutan dengan cepat.'
      }
    ],
    techStack: [
      'React + Vite frontend',
      'Tailwind CSS interface system',
      'MobileNet feature extractor',
      'similarity search index',
    ],
    problemStatement:
      'Pengguna e-commerce sering kesulitan menemukan produk serupa hanya dari kata kunci. Dengan 33 ribu gambar produk yang tersedia, dibutuhkan solusi pencarian visual yang cepat dan akurat untuk mempercepat discovery.',
    architectureNotes:
      'Frontend ringan berbasis React menangkap gambar, mengirimkannya ke service inference Node.js yang memanggil model MobileNet teroptimasi.',
    videoSrc: '',
    seo: {
      title: 'Pencarian Produk Berbasis Gambar - Project Detail',
      description:
        'Detail implementasi pencarian produk berbasis gambar dengan MobileNet untuk menemukan produk serupa secara real-time.'
    },
    cta: {
      primaryLabel: 'Schedule Vision Demo',
      primaryHref: '/contact',
      secondaryLabel: 'Back to Projects',
      secondaryHref: '/home#projects',
      demoHref: 'https://demo.haldies.com/vision-quality'
    }
  },
  'image-classification-skin-type': {
    badgeLabel: 'Machine Learning',
    title: 'AI Skin Analysis for Skincare Brands',
    summary:
      'Solusi analisis kulit berbasis AI untuk membantu brand skincare memahami kondisi pelanggan dari gambar wajah dan mengubahnya menjadi rekomendasi produk yang lebih personal.',
    impactMetrics: [
      { label: 'Model Accuracy', value: '80%' },
      { label: 'Inference Time', value: '180 ms' },
      { label: 'Dataset Variants', value: '4 skin types' }
    ],
    highlights: [
      {
        title: 'Customer Insight Engine',
        description:
          'Mengubah gambar wajah menjadi insight tipe kulit yang bisa dipakai brand untuk segmentasi pelanggan dan rekomendasi produk.'
      },
      {
        title: 'Explainable Recommendations',
        description:
          'Menggunakan visual explanation agar hasil analisis lebih mudah dipahami oleh tim produk, beauty consultant, dan pengguna akhir.'
      },
      {
        title: 'Product Recommendation Hand-off',
        description:
          'Output analisis dapat dihubungkan ke katalog produk sehingga brand bisa memberi rekomendasi skincare secara instan.'
      }
    ],
    techStack: [
      'TensorFlow CNN backbone',
      'Vision Transformer feature comparisons',
      'Flask REST inference service',
      'Supabase logging & analytics',
      'React dashboard for operators',
      'Tailwind CSS UI system'
    ],
    problemStatement:
      'Brand skincare kesulitan menilai jenis kulit pelanggan secara cepat dan konsisten. Diperlukan sistem otomatis berbasis citra untuk membantu tim beauty consultant memberikan rekomendasi awal yang akurat.',
    architectureNotes:
      'Pipeline training menggunakan TensorFlow dengan augmentasi kuat, sementara inference disajikan melalui Flask API. Dashboard React memonitor hasil klasifikasi dan mengemas rekomendasi produk ke pengguna akhir.',
    videoSrc: '',
    seo: {
      title: 'AI Skin Analysis for Skincare Brands - Project Detail',
      description:
        'Pelajari solusi analisis kulit berbasis AI untuk membantu brand skincare memberi rekomendasi produk yang lebih personal.'
    },
    cta: {
      primaryLabel: 'Discuss ML Deployment',
      primaryHref: '/contact',
      secondaryLabel: 'Back to Projects',
      secondaryHref: '/home#projects',
      demoHref: 'https://demo.haldies.com/personalization'
    }
  },
  'zushi-nft': {
    badgeLabel: 'Frontend Experience',
    title: 'Zushi Company Profile',
    summary:
      'Company profile responsif untuk memperkenalkan Zushi sebagai brand digital dengan narasi futuristik, positioning bisnis yang jelas, dan pengalaman visual yang mudah dipahami calon partner.',
    impactMetrics: [
      { label: 'Time to Build', value: '7 day' }
    ],
    highlights: [
      {
        title: 'Immersive Storytelling',
        description:
          'Konten utama "Introducing Zushi" dioptimasi dengan tipografi gradien dan micro-interactions untuk menanamkan rasa percaya sejak awal.'
      },
      {
        title: 'Responsive Motion Layouts',
        description:
          'Animasi hover dan parallax ringan diterapkan menggunakan Tailwind + vanilla JS sehingga performa tetap kencang di mobile.'
      },
    ],
    techStack: [
      'Semantic HTML foundation',
      'Tailwind CSS utility design',
      'Vanilla JavaScript micro-interactions',
    ],
    problemStatement:
      'Tim Zushi membutuhkan company profile digital yang mampu menjelaskan diferensiasi brand, nilai produk, dan peluang kolaborasi bisnis dalam format yang ringkas dan kredibel.',
    architectureNotes:
      'Proyek dibangun dengan fondasi HTML semantik dan Tailwind untuk styling cepat. Interaksi animasi dikelola menggunakan Vanila JavaScript ringan.',
    videoSrc: '',
    seo: {
      title: 'Zushi Company Profile - Project Detail',
      description:
        'Detail desain dan implementasi company profile Zushi yang menonjolkan positioning brand digital dengan performa tinggi.'
    },
    cta: {
      primaryLabel: 'Request UX Review',
      primaryHref: '/contact',
      secondaryLabel: 'View All Projects',
      secondaryHref: '/home#projects',
      demoHref: 'https://web-nft-ten.vercel.app/'
    }
  },
  lokerhub: {
    badgeLabel: 'Career Management',
    title: 'LokerHub',
    summary:
      'Platform all-in-one untuk pencari kerja Indonesia: buat CV profesional yang ATS-friendly, lacak seluruh lamaran, dan kelola perjalanan karier dengan lebih cerdas.',
    impactMetrics: [
      { label: 'CV Creation', value: 'Dalam menit' },
      { label: 'CV Format', value: 'ATS-Friendly' },
      { label: 'Job Tracking', value: 'Satu dashboard' }
    ],
    highlights: [
      {
        title: 'Application Pipeline',
        description:
          'Pantau semua lamaran dalam satu tampilan, termasuk status, jadwal interview, dan progress seleksi agar tidak ada peluang yang terlewat.'
      },
      {
        title: 'CV Management',
        description:
          'Buat CV dengan template profesional yang modern dan rapi. Simpan beberapa versi untuk setiap posisi tanpa perlu mengetik ulang dari nol.'
      },
      {
        title: 'Career Dashboard',
        description:
          'Dashboard statistik merangkum perjalanan pencarian kerja sehingga pengguna dapat fokus pada karier, bukan pada spreadsheet yang berantakan.'
      }
    ],
    techStack: [
      'ATS-friendly CV builder',
      'Professional CV templates',
      'Job application tracking',
      'Career statistics dashboard',
      'Multi-version CV management',
      'Deployed on Vercel'
    ],
    problemStatement:
      'Pencari kerja sering menghadapi format CV yang berantakan, deskripsi yang sulit ditulis, template yang kaku, serta status lamaran yang mudah terlupa. LokerHub menyatukan pembuatan CV dan pelacakan lamaran agar proses mencari kerja lebih terstruktur.',
    architectureNotes:
      'LokerHub dirancang sebagai workspace karier personal yang menyatukan CV builder, job tracker, manajemen riwayat CV, dan statistik progres dalam satu pengalaman web yang ringkas.',
    videoSrc: '',
    seo: {
      title: 'LokerHub - Project Detail',
      description:
        'LokerHub adalah dashboard personal untuk melacak lamaran kerja dan mengelola versi CV.'
    },
    cta: {
      primaryLabel: 'Discuss a Similar Product',
      primaryHref: '/contact',
      secondaryLabel: 'Back to Projects',
      secondaryHref: '/home#projects',
      demoHref: 'https://lokerhub-mu.vercel.app'
    }
  },
  'kasir-ai': {
    badgeLabel: 'Mobile Point of Sale',
    title: 'KasirAi',
    summary:
      'Aplikasi kasir mobile yang membantu pelaku usaha mengelola transaksi penjualan dengan lebih praktis, dan telah dipublikasikan di Google Play Store.',
    impactMetrics: [
      { label: 'Platform', value: 'Android' },
      { label: 'Availability', value: 'Play Store' },
      { label: 'Use Case', value: 'Point of Sale' }
    ],
    highlights: [
      {
        title: 'Kasir dalam Genggaman',
        description:
          'Menghadirkan pengalaman point-of-sale yang praktis melalui aplikasi mobile untuk mendukung aktivitas transaksi harian.'
      },
      {
        title: 'Siap Digunakan Pengguna',
        description:
          'Aplikasi telah melalui proses publikasi dan tersedia untuk diunduh melalui Google Play Store.'
      },
      {
        title: 'Berorientasi pada Operasional',
        description:
          'Dibuat untuk membantu proses kasir dan penjualan terasa lebih ringkas dalam penggunaan sehari-hari.'
      }
    ],
    techStack: [
      'Android mobile application',
      'Point-of-sale workflow',
      'Google Play Store distribution'
    ],
    problemStatement:
      'Pelaku usaha membutuhkan alat kasir yang mudah dijangkau untuk membantu proses transaksi harian. KasirAi hadir sebagai aplikasi mobile agar proses penjualan dapat dikelola secara lebih praktis.',
    architectureNotes:
      'KasirAi dikemas sebagai aplikasi Android yang didistribusikan melalui Google Play Store, dengan alur yang difokuskan untuk kebutuhan point-of-sale sehari-hari.',
    videoSrc: '',
    seo: {
      title: 'KasirAi - Project Detail',
      description:
        'KasirAi adalah aplikasi kasir mobile yang telah tersedia di Google Play Store.'
    },
    cta: {
      primaryLabel: 'Discuss a Similar Product',
      primaryHref: '/contact',
      secondaryLabel: 'Back to Projects',
      secondaryHref: '/home#projects',
      demoLabel: 'Lihat di Play Store',
      demoHref: 'https://play.google.com/store/apps/details?id=com.kasirai.kasir&hl=id'
    }
  },
  'ingat-uang': {
    badgeLabel: 'Personal Finance',
    title: 'Ingat Uang',
    summary:
      'Platform keuangan personal untuk mencatat transaksi, split bill otomatis, dan memahami pola pengeluaran melalui analisis yang mudah dibaca.',
    impactMetrics: [
      { label: 'Active Users', value: '1000+' },
      { label: 'Transactions', value: '50K+' },
      { label: 'Rating', value: '4.8★' }
    ],
    highlights: [
      {
        title: 'Smart Expense Recording',
        description:
          'Catat pengeluaran dengan cepat, termasuk melalui integrasi Siri Shortcuts untuk pencatatan berbasis suara.'
      },
      {
        title: 'AI OCR Receipt Scanner',
        description:
          'Foto struk belanja dan biarkan AI membaca item serta harga untuk mempercepat pencatatan transaksi.'
      },
      {
        title: 'Split Bill Tanpa Hitung Manual',
        description:
          'Bagikan tagihan bersama teman secara otomatis agar pembagian biaya lebih praktis dan adil.'
      },
      {
        title: 'Insights & Budget Tracking',
        description:
          'Dashboard dan laporan visual membantu pengguna memahami pola pengeluaran, mengatur budget, serta menerima pengingat.'
      }
    ],
    techStack: [
      'Personal finance web application',
      'AI OCR receipt processing',
      'Siri Shortcuts integration',
      'Interactive financial reports',
      'CSV and Excel data export',
      'Google authentication'
    ],
    problemStatement:
      'Pencatatan keuangan pribadi sering terasa merepotkan, terutama saat harus memasukkan struk satu per satu atau membagi tagihan bersama teman. Ingat Uang menyederhanakan proses tersebut agar pengguna dapat fokus pada keputusan finansialnya.',
    architectureNotes:
      'Platform ini menyatukan pencatatan transaksi, pemindaian struk berbasis OCR, split bill, laporan visual, dan pengelolaan budget dalam satu pengalaman web yang aman dan mudah diakses.',
    videoSrc: '',
    seo: {
      title: 'Ingat Uang - Project Detail',
      description:
        'Ingat Uang adalah platform cerdas untuk pencatatan pengeluaran, AI OCR struk, split bill, dan analisis keuangan personal.'
    },
    cta: {
      primaryLabel: 'Discuss a Similar Product',
      primaryHref: '/contact',
      secondaryLabel: 'Back to Projects',
      secondaryHref: '/home#projects',
      demoHref: 'https://ingatuang.vercel.app/'
    }
  },
  pdfindo: {
    badgeLabel: 'Privacy-First PDF Tools',
    title: 'PDFIndo',
    summary:
      'Kumpulan tools PDF gratis yang bekerja langsung di browser. File tidak pernah diunggah ke server, sehingga proses terasa cepat sekaligus menjaga privasi pengguna.',
    impactMetrics: [
      { label: 'File Upload', value: 'Tidak perlu' },
      { label: 'Processing', value: 'Client-side' },
      { label: 'Mode', value: 'Offline-ready' }
    ],
    highlights: [
      {
        title: 'PDF Tools Lengkap',
        description:
          'Menyediakan gabung, pisah, atur, kompres, beri nomor halaman, watermark, tanda tangan, serta konversi PDF ke JPG dan JPG ke PDF.'
      },
      {
        title: '100% Private',
        description:
          'Semua pemrosesan terjadi di perangkat pengguna, jadi dokumen tidak perlu meninggalkan browser atau dikirim ke server.'
      },
      {
        title: 'Cepat Tanpa Batas Ukuran',
        description:
          'Tanpa waktu unggah dan tanpa batas ukuran file dari sisi layanan, sehingga pekerjaan PDF dapat diselesaikan lebih cepat.'
      },
      {
        title: 'Dapat Digunakan Offline',
        description:
          'Setelah aplikasi dimuat, PDFIndo tetap dapat digunakan tanpa koneksi internet untuk kebutuhan pemrosesan dokumen dasar.'
      }
    ],
    techStack: [
      'Browser-based PDF processing',
      'Client-side file handling',
      'Offline-ready web application',
      'Privacy-first architecture'
    ],
    problemStatement:
      'Banyak tools PDF mengharuskan pengguna mengunggah dokumen pribadi ke server dan menunggu proses selesai. PDFIndo menawarkan alternatif yang lebih aman dan cepat dengan memproses dokumen langsung di perangkat pengguna.',
    architectureNotes:
      'Seluruh alur pemrosesan dirancang berjalan di browser agar file tetap berada di perangkat pengguna. Pendekatan client-side ini mengurangi waktu tunggu dan mendukung penggunaan offline setelah aplikasi dimuat.',
    videoSrc: '',
    seo: {
      title: 'PDFIndo - Project Detail',
      description:
        'PDFIndo menyediakan tools PDF gratis, cepat, dan private yang diproses sepenuhnya di browser.'
    },
    cta: {
      primaryLabel: 'Discuss a Similar Product',
      primaryHref: '/contact',
      secondaryLabel: 'Back to Projects',
      secondaryHref: '/home#projects',
      demoHref: 'https://pdfindo.vercel.app/'
    }
  },
  motosense: {
    badgeLabel: 'Audio AI Diagnosis',
    title: 'MotoSense',
    summary:
      'Diagnosis awal suara mesin motor berbasis AI. MotoSense menganalisis rekaman idle selama delapan detik untuk memberi indikasi dari delapan pola suara kerusakan.',
    impactMetrics: [
      { label: 'Recording', value: '8 detik' },
      { label: 'Damage Classes', value: '8 kelas' },
      { label: 'AI Engine', value: 'YAMNet' }
    ],
    highlights: [
      {
        title: 'Audio-guided Diagnosis',
        description:
          'Pengguna cukup merekam atau mengunggah suara mesin motor dalam kondisi idle untuk memperoleh indikasi awal kondisi komponen.'
      },
      {
        title: 'YAMNet Embedding Pipeline',
        description:
          'Audio dinormalisasi menjadi mono 16 kHz, lalu YAMNet mengekstrak embedding 1.024 dimensi sebagai dasar klasifikasi.'
      },
      {
        title: 'Eight Damage Indicators',
        description:
          'Model mengenali indikasi kampas kopling, stang seher, drive belt, piston slap, rantai tensioner, slider CVT, roller CVT, dan face drive.'
      },
      {
        title: 'Private Local History',
        description:
          'Riwayat diagnosis disimpan secara lokal di perangkat, sementara audio diproses sementara di server dan tidak disimpan.'
      }
    ],
    techStack: [
      'YAMNet audio embeddings',
      'Sequential TensorFlow Lite classifier',
      'Librosa audio normalization',
      '16 kHz mono audio pipeline',
      'LocalStorage diagnosis history'
    ],
    problemStatement:
      'Suara mesin dapat menjadi sinyal awal adanya masalah, tetapi sulit dikenali tanpa pengalaman teknis. MotoSense membantu pengguna memperoleh indikasi awal berbasis rekaman audio, bukan sebagai pengganti pemeriksaan mekanik langsung.',
    architectureNotes:
      'Rekaman audio berdurasi maksimal delapan detik dikirim ke backend untuk dinormalisasi menggunakan librosa. YAMNet menghasilkan embedding 1.024 dimensi, kemudian model Sequential TFLite menghitung probabilitas delapan kelas indikasi kerusakan.',
    videoSrc: '',
    seo: {
      title: 'MotoSense - Project Detail',
      description:
        'MotoSense adalah diagnosis awal suara mesin motor dengan YAMNet dan Sequential TensorFlow Lite.'
    },
    cta: {
      primaryLabel: 'Discuss an AI Solution',
      primaryHref: '/contact',
      secondaryLabel: 'Back to Projects',
      secondaryHref: '/home#projects',
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
          <div className="mx-auto max-w-5xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {project.badgeLabel}
            </span>
            <h1 className="mt-6 text-4xl font-semibold md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.impactMetrics.map(metric => (
                <div
                  key={metric.label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-brand-subtle"
                >
                  <div className="text-2xl font-semibold text-primary">{metric.value}</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card/90 p-6 shadow-brand-medium">
            <h2 className="text-2xl font-semibold">Product Walkthrough</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Explore key user journeys - from onboarding queries to workflow hand-offs - and see how the assistant maintains context while staying grounded in verified sources.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 bg-black">
              {project.videoSrc ? (
                <video
                  src={project.videoSrc}
                  className="h-full w-full"
                  controls
                  preload="metadata"
                  playsInline
                >
                  Your browser does not support the video tag. Download the demo to view it locally.
                </video>
              ) : (
                <div className="flex h-64 items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-center text-sm font-medium text-slate-200/80">
                  Demo walkthrough coming soon. Reach out for a guided session or prototype access.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[2fr,3fr]">
            <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-brand-subtle">
              <h2 className="text-2xl font-semibold">Problem & Outcomes</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {project.problemStatement}
              </p>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                {project.highlights.map(item => (
                  <li key={item.title} className="rounded-2xl border border-border/80 bg-background/60 p-4">
                    <h3 className="text-base font-semibold text-primary">{item.title}</h3>
                    <p className="mt-2 leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-brand-subtle">
              <h2 className="text-2xl font-semibold">Architecture Notes</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {project.architectureNotes}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {project.techStack.map(item => (
                  <li key={item} className="rounded-2xl border border-border/60 bg-background/60 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-primary/40 bg-primary/10 p-8 text-center">
            <h2 className="text-3xl font-semibold text-primary">Ready to explore a custom AI assistant for your teams?</h2>
            <p className="mt-4 text-base text-primary/80">
              I build production-ready conversational experiences that respect your knowledge assets and operational constraints.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {project.cta.demoHref && (
                <Button variant="default" size="lg" iconName="ExternalLink" iconPosition="right" asChild>
                  <a href={project.cta.demoHref} target="_blank" rel="noreferrer">{project.cta.demoLabel || 'Lihat Demo'}</a>
                </Button>
              )}
              <Button variant="default" size="lg" iconName="MessageCircle" iconPosition="left" asChild>
                <a href={project.cta.primaryHref}>{project.cta.primaryLabel}</a>
              </Button>
              <Button variant="outline" size="lg" iconName="ArrowLeft" iconPosition="left" asChild>
                <a href={project.cta.secondaryHref}>{project.cta.secondaryLabel}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetailLLMMagangHub;
