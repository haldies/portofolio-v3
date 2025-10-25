import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import NotFound from '../NotFound';

const projectDetails = {
  'llm-maganghub': {
    badgeLabel: 'Conversational AI',
    title: 'MagangHub LLM Assistant',
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
      title: 'MagangHub LLM Assistant Project Detail',
      description:
        'Deep dive into the MagangHub conversational AI assistant built for internship onboarding, featuring secure knowledge retrieval and an interactive demo.'
    },
    cta: {
      primaryLabel: 'Book a Discovery Call',
      primaryHref: '/contact',
    secondaryLabel: 'Back to AI Playground',
    secondaryHref: '/ai-playground'
    }
  },
  'google-lens-clone': {
    badgeLabel: 'Computer Vision',
    title: 'Google Lens Clone - Visual Search',
    summary:
      'Eksperimen mengkloning pengalaman Google Lens untuk membantu pengguna menemukan produk serupa hanya dengan memotret gambar. Sistem ini memanfaatkan embedding visual agar pencarian terasa instan dan relevan.',
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
      title: 'Google Lens Clone - Project Detail',
      description:
        'Detail implementasi Google Lens Clone dengan MobileNet dan Faiss untuk pencarian produk berbasis gambar secara real-time.'
    },
    cta: {
      primaryLabel: 'Schedule Vision Demo',
      primaryHref: '/contact',
      secondaryLabel: 'Back to AI Playground',
      secondaryHref: '/ai-playground'
    }
  },
  'image-classification-skin-type': {
    badgeLabel: 'Machine Learning',
    title: 'Skin Type Image Classification',
    summary:
      'Model CNN untuk mengklasifikasikan tipe kulit manusia berdasarkan citra wajah, membantu brand skincare memberikan rekomendasi produk yang lebih personal.',
    impactMetrics: [
      { label: 'Model Accuracy', value: '80%' },
      { label: 'Inference Time', value: '180 ms' },
      { label: 'Dataset Variants', value: '4 skin types' }
    ],
    highlights: [
      {
        title: 'Balanced Dataset Strategy',
        description:
          'Kurasi dataset multi-etnis dengan augmentasi adaptif agar model tidak bias terhadap warna kulit tertentu.'
      },
      {
        title: 'Explainable Predictions',
        description:
          'Menggunakan Grad-CAM heatmaps untuk menampilkan area wajah yang menjadi fokus model sehingga hasil lebih mudah dipercaya.'
      },
      {
        title: 'Seamless Product Hand-off',
        description:
          'Output model langsung terhubung ke API rekomendasi produk sehingga pengguna mendapatkan rekomendasi skincare secara instan.'
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
      title: 'Skin Type Classifier - Project Detail',
      description:
        'Pelajari arsitektur sistem klasifikasi tipe kulit berbasis CNN dan Grad-CAM untuk rekomendasi skincare yang lebih personal.'
    },
    cta: {
      primaryLabel: 'Discuss ML Deployment',
      primaryHref: '/contact',
      secondaryLabel: 'Back to AI Playground',
      secondaryHref: '/ai-playground'
    }
  },
  'zushi-nft': {
    badgeLabel: 'Frontend Experience',
    title: 'Zushi - NFT Landing Page',
    summary:
      'Landing page interaktif untuk memperkenalkan Zushi, proyek kripto yang menggabungkan narasi futuristik dengan desain neon minimalis. Dirancang agar tim marketing bisa mengkampanyekan token perdana secara cepat.',
    impactMetrics: [
      { label: 'Time to Build', value: '7 day' }
    ],
    highlights: [
      {
        title: 'Immersive Storytelling',
        description:
          'Konten hero "Introducing Zushi" dioptimasi dengan tipografi gradien dan micro-interactions untuk menanamkan rasa percaya sejak awal.'
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
      'Tim Zushi membutuhkan landing page kripto yang mampu menjelaskan diferensiasi proyek sekaligus mengajak investor awal bergabung, semuanya harus diselesaikan dalam waktu singkat.',
    architectureNotes:
      'Proyek dibangun dengan fondasi HTML semantik dan Tailwind untuk styling cepat. Interaksi animasi dikelola menggunakan Vanila JavaScript ringan.',
    videoSrc: '',
    seo: {
      title: 'Zushi NFT Landing Page - Project Detail',
      description:
        'Detail desain dan implementasi landing page Zushi yang menonjolkan narasi kripto futuristik dengan performa tinggi.'
    },
    cta: {
      primaryLabel: 'Request UX Review',
      primaryHref: '/contact',
      secondaryLabel: 'View All Projects',
      secondaryHref: '/ai-playground'
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
    <div className="min-h-screen bg-background text-foreground">
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
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
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
