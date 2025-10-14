import React from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Header from 'components/ui/Header';

const KnowledgeHubEducationalContent = () => {
  const programCategories = [
    {
      title: 'Beasiswa & Program Gratis',
      description:
        'Kumpulan program resmi yang membantu talenta digital Indonesia mempelajari AI secara terstruktur tanpa biaya.',
      highlights: [
        {
          name: 'IDCamp 2025',
          provider: 'IOH (Indosat Ooredoo Hutchison)',
          link: 'https://idcamp.ioh.co.id/',
          detail:
            '100% fokus pada AI dengan 4 jalur belajar: AI Engineer, Gen AI Engineer, MLOps Engineer, dan Data Scientist.',
        },
        {
          name: 'Dicoding x IBM SkillsBuild PIJAK',
          provider: 'Dicoding & IBM SkillsBuild',
          link: 'https://www.dicoding.com/pijak',
          detail:
            'Program komprehensif yang menggabungkan modul teknis AI dan soft skill profesional untuk kesiapan kerja.',
        },
      ],
      badge: 'Beasiswa',
    },
    {
      title: 'Learning Community & Mentorship',
      description:
        'Rencanakan kolaborasi dengan komunitas lokal untuk mempercepat pembelajaran melalui studi kasus nyata.',
      highlights: [
        {
          name: 'AI Study Group',
          provider: 'Haldies & Partners',
          link: '#',
          detail:
            'Diskusi rutin mengenai proyek mini seputar computer vision, NLP, dan generative AI dengan mentor industri.',
        },
        {
          name: 'Tech Talk Live',
          provider: 'Community Events',
          link: '#',
          detail:
            'Sesi bulanan berbagi insight roadmap karier AI, showcase portofolio, dan update tools terbaru.',
        },
      ],
      badge: 'Community',
    },
    {
      title: 'Kurasi Kursus & Sertifikasi',
      description:
        'Rekomendasi jalur belajar mandiri untuk memperkuat kompetensi teknis sekaligus menyiapkan sertifikasi.',
      highlights: [
        {
          name: 'DeepLearning.AI Specializations',
          provider: 'Coursera',
          link: 'https://www.coursera.org/deeplearning-ai',
          detail:
            'Pembelajaran mendalam untuk generative AI, LLMOps, dan machine learning production-grade.',
        },
        {
          name: 'Machine Learning Engineer Nanodegree',
          provider: 'Udacity',
          link: 'https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t',
          detail:
            'Roadmap modular untuk membangun, mendeploy, dan memonitor model machine learning skala produksi.',
        },
      ],
      badge: 'Kurasi',
    },
  ];

  const aiRoadmap = [
    {
      stage: 'Fondasi Data & Algoritma',
      focus: 'Matematika diskrit, statistik, Python untuk analitik, dan git workflow.',
      output: 'Notebook analisis eksploratif & mini project regresi.',
    },
    {
      stage: 'Machine Learning Applied',
      focus: 'Supervised & unsupervised learning, feature engineering, model evaluation.',
      output: 'Model klasifikasi siap uji dengan pipeline terstandarisasi.',
    },
    {
      stage: 'Deep Learning & Generative AI',
      focus: 'Neural network, transformer, fine-tuning LLM, dan safety-by-design.',
      output: 'Model generative AI dengan guardrail serta prompt workflow yang terdokumentasi.',
    },
    {
      stage: 'MLOps & Production',
      focus: 'CI/CD model, observabilitas, data drift monitoring, dan cost optimization.',
      output: 'Deployment blueprint (API, batch, maupun streaming) siap dirilis.',
    },
  ];

  const aiTools = [
    {
      name: 'PyTorch & Lightning',
      usage: 'Eksperimen model deep learning yang reproducible dengan konfigurasi modular.',
      stack: ['DL', 'Experimentation'],
    },
    {
      name: 'TensorFlow Extended (TFX)',
      usage: 'Pipeline produksi end-to-end dari data ingestion hingga model serving.',
      stack: ['MLOps', 'Production'],
    },
    {
      name: 'Hugging Face Hub',
      usage: 'Fine-tuning model transformer, deployment inference endpoints, dan evaluasi LLM.',
      stack: ['NLP', 'Generative AI'],
    },
    {
      name: 'LangChain + OpenAI',
      usage: 'Membangun agent dan RAG pipeline untuk skenario enterprise dan prototyping cepat.',
      stack: ['Agentic', 'Prototyping'],
    },
    {
      name: 'Weights & Biases',
      usage: 'Experiment tracking, model registry, dan observabilitas performa model.',
      stack: ['Monitoring', 'Experimentation'],
    },
    {
      name: 'Docker & Kubernetes',
      usage: 'Standarisasi environment ML serta orkestrasi deployment berskala.',
      stack: ['Infra', 'Orchestration'],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Knowledge Hub & Educational Content - Haldies Portfolio</title>
        <meta
          name="description"
          content="Temukan kurasi program belajar AI, roadmap karier, dan tools produksi yang digunakan Haldies untuk membangun solusi AI end-to-end."
        />
        <meta
          name="keywords"
          content="AI roadmap, program beasiswa AI, MLOps, generative AI, AI tools, data science learning path"
        />
      </Helmet>
      <Header />

      <main className="pt-20 pb-24">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute -top-32 right-16 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" />
            <div className="absolute -bottom-40 left-12 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:px-8">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-2 text-sm uppercase tracking-[0.3em] text-white/70">
              <Icon name="BookOpen" size={18} />
              Knowledge Hub
            </span>

            <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
              Belajar AI Dari Fondasi Hingga Produksi
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-white/70 sm:text-xl">
              Halaman ini merangkum program beasiswa, roadmap, dan tools yang saya gunakan untuk membangun solusi
              AI end-to-end. Gunakan sebagai navigasi ketika merencanakan perjalanan karier AI-mu sendiri.
            </p>

            <div className="mt-12 grid w-full max-w-4xl gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-black/30 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.4em] text-sky-200/80">Sekilas</p>
                <p className="mt-4 text-lg font-medium text-white">
                  Kurasi program resmi dan komunitas yang aktif terbuka sepanjang 2025.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-black/30 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/80">Fokus Tahun Ini</p>
                <p className="mt-4 text-lg font-medium text-white">
                  Generative AI, LLMOps, dan praktek MLOps yang production-ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Categories */}
        <section className="mx-auto mt-20 max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Kategori Program</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Info Program & Beasiswa AI</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Pilih jalur belajar yang sesuai dengan target kariermu. Setiap kategori memuat ringkasan manfaat,
                penyelenggara, serta alasan kenapa cocok untuk aspiring AI engineer.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {programCategories.map((category) => (
              <article
                key={category.title}
                className="relative flex flex-col gap-6 rounded-3xl border border-border/80 bg-card/90 p-8 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  {category.badge}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                </div>

                <div className="space-y-4">
                  {category.highlights.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl border border-border/60 bg-muted/40 p-5 transition-colors hover:border-accent hover:bg-background/60"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-base font-semibold text-foreground">{item.name}</p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent/70">
                            {item.provider}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-background/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                          Jelajahi
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AI Roadmap */}
        <section className="mx-auto mt-24 max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Roadmap AI</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Tahapan Belajar AI yang Disarankan</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Roadmap ini berbasis pengalaman pribadi membangun solusi AI untuk kebutuhan enterprise. Setiap tahap
                dilengkapi fokus kompetensi dan ekspektasi hasil yang dapat kamu validasi lewat portofolio.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[360px,1fr]">
            <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-lg shadow-black/5">
              <p className="text-xs uppercase tracking-[0.4em] text-accent/80">Strategi</p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">Milestones Penting</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Mulai dari pondasi data hingga operasionalisasi model. Pastikan tiap milestone terdokumentasi agar
                mudah dibagikan saat sesi mentoring atau evaluasi kinerja.
              </p>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-muted-foreground marker:text-accent">
                <li>Bangun kebiasaan membuat catatan eksperimen yang konsisten.</li>
                <li>Buat retro setiap fase untuk mengukur gap skill sebelum naik tahap berikutnya.</li>
                <li>Kolaborasikan roadmap dengan mentor atau rekan sejawat untuk accountability.</li>
              </ul>
            </div>

            <ol className="relative flex flex-col gap-6">
              <span className="absolute inset-y-3 left-6 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
              {aiRoadmap.map((entry, index) => (
                <li
                  key={entry.stage}
                  className="relative rounded-3xl border border-border/70 bg-muted/40 p-6 shadow-lg shadow-black/5 backdrop-blur-sm"
                >
                  <div className="absolute -left-[13px] top-7 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-background text-xs font-semibold text-accent">
                    {index + 1}
                  </div>
                  <div className="flex flex-col gap-3 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/80">{entry.stage}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{entry.focus}</p>
                    <div className="rounded-2xl bg-background/70 px-4 py-3 text-sm text-foreground">
                      <span className="font-semibold text-accent">Deliverable:</span> {entry.output}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* AI Tools */}
        <section className="mx-auto mt-24 max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Tooling</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">Tools AI yang Paling Sering Digunakan</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Perangkat berikut menjadi backbone dalam riset, eksperimen, hingga deployment. Kombinasikan sesuai
                kebutuhan proyekmu, terutama ketika menyeimbangkan kecepatan iterasi dan reliability.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiTools.map((tool) => (
              <article
                key={tool.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-card/80 p-6 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{tool.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.usage}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {tool.stack.map((badge) => (
                    <span
                      key={`${tool.name}-${badge}`}
                      className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default KnowledgeHubEducationalContent;
