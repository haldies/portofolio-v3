import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Header from 'components/ui/Header';

const KnowledgeHubEducationalContent = () => {
  const [activeTab, setActiveTab] = useState('programs');

  const tabs = [
    { id: 'programs', label: 'Info Program', icon: 'BookOpen' },
    { id: 'roadmap', label: 'Roadmap AI', icon: 'Route' },
    { id: 'tools', label: 'Tools', icon: 'Cpu' },
  ];

  const programHighlights = [
    {
      name: 'IDCamp 2025',
      provider: 'Indosat Ooredoo Hutchison',
      focus: 'Beasiswa AI Engineer',
      detail:
        'Program beasiswa daring dengan mentor dan capstone project yang fokus pada AI engineer dan LLMOps.',
      link: 'https://idcamp.ioh.co.id/',
    },
    {
      name: 'Dicoding x IBM SkillsBuild - PIJAK',
      provider: 'Dicoding & IBM SkillsBuild',
      focus: 'Bootcamp AI Terapan',
      detail:
        'Kolaborasi modul teknis AI dan soft skill profesional yang dirancang untuk kesiapan kerja.',
      link: 'https://www.dicoding.com/pijak',
    },
    {
      name: 'Google Bangkit Academy',
      provider: 'Google, GoTo, Traveloka',
      focus: 'Machine Learning Track',
      detail:
        'Jalur machine learning berbahasa Indonesia dengan mentor industri dan proyek produk akhir.',
      link: 'https://grow.google/intl/id_id/bangkit/',
    },
    {
      name: 'AI Catalyst Immersion',
      provider: 'Makers Institute',
      focus: 'Product AI Sprint',
      detail:
        'Program cepat 6 minggu membangun proof-of-concept generative AI untuk kebutuhan industri.',
      link: 'https://www.makersinstitute.id/',
    },
  ];

  const roadmapSteps = [
    {
      period: '1. Fondasi & Dasar',
      focus: 'Matematika dasar, Python, dan logika pemrograman.',
      detail: 'Mulai dengan kursus pengantar, gunakan buku catatan interaktif, dan latih kemampuan dengan proyek kecil.',
    },
    {
      period: '2. Data & Analitik',
      focus: 'Eksplorasi data, SQL, statistik, dan visualisasi.',
      detail:
        'Bangun pipeline sederhana, gunakan dataset publik, dan dokumentasikan insight dengan dashboard ringan.',
    },
    {
      period: '3. Machine Learning',
      focus: 'Model supervised/unsupervised, evaluasi, dan deployment dasar.',
      detail:
        'Gunakan scikit-learn atau TensorFlow, fokus pada eksperimen terukur, dan deploy versi sederhana di cloud.',
    },
    {
      period: '4. Generative & LLMOps',
      focus: 'Fine-tuning, prompt engineering, vector DB, observability.',
      detail:
        'Rancang alur RAG, kelola versi prompt, serta ukur kualitas model dengan feedback manusia.',
    },
    {
      period: '5. Production & Scaling',
      focus: 'Monitoring, MLOps workflow, dan kolaborasi lintas fungsi.',
      detail:
        'Implementasikan CI/CD, observasi performa real-time, dan iterasi berbasis feedback pengguna.',
    },
  ];

  const toolStack = [
    {
      name: 'LangChain',
      tagline: 'Framework orkestrasi LLM untuk pipeline RAG dan agentic workflow.',
      icon: 'Workflow',
    },
    {
      name: 'Weights & Biases',
      tagline: 'Tracking eksperimen, dataset, dan model untuk reproducibility.',
      icon: 'ChartNoAxesCombined',
    },
    {
      name: 'Modal',
      tagline: 'Deploy model, job, dan cron serverless dengan focus AI.',
      icon: 'Server',
    },
    {
      name: 'Supabase',
      tagline: 'Backend Postgres + storage untuk aplikasi AI ringan dan prototipe.',
      icon: 'Database',
    },
    {
      name: 'Vercel',
      tagline: 'Hosting front-end dan edge function untuk integrasi AI cepat.',
      icon: 'Globe',
    },
    {
      name: 'OpenAI API',
      tagline: 'Model LLM dan API multimodal untuk ideasi dan automasi konten.',
      icon: 'Sparkles',
    },
  ];

  const sectionVisibility = (tabId) => (activeTab === tabId ? 'block' : 'hidden lg:block');

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

      <main className="pb-24">
        <header className="border-b border-border/60 bg-card/70 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              <Icon name="BookOpen" size={16} />
              Knowledge Hub
            </span>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Kurasi Belajar AI Satu Halaman
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Navigasi cepat untuk program, roadmap, dan tools yang dipakai sehari-hari saat membangun solusi AI-end-to-end.
            </p>
          </div>
          <nav className="border-t border-border/60">
            <div className="mx-auto flex max-w-6xl overflow-x-auto px-6 sm:px-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 ${
                    activeTab === tab.id
                      ? 'border-accent text-accent'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>
        </header>

        <section
          id="programs"
          className={`${sectionVisibility('programs')} mx-auto mt-12 max-w-6xl px-6 sm:px-8`}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Info Program</p>
              <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                Beasiswa dan bootcamp yang aktif sepanjang 2025
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programHighlights.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-card p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-accent/60"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em]">
                  <span className="text-accent">{item.focus}</span>
                  <span className="text-muted-foreground">Explore</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    {item.provider}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </a>
            ))}
          </div>
        </section>

        <section
          id="roadmap"
          className={`${sectionVisibility('roadmap')} mx-auto mt-16 max-w-6xl px-6 sm:px-8`}
        >
          <div className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Roadmap AI</p>
              <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                Perjalanan berlapis dari fondasi hingga produksi
              </h2>
            </div>

            <ul className="relative flex flex-col gap-8">
              <span className="pointer-events-none absolute left-[12px] top-3 h-[calc(100%-24px)] w-px bg-border/60" />
              {roadmapSteps.map((step) => (
                <li key={step.period} className="relative pl-12">
                  <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-background text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                    <Icon name="ArrowDown" size={14} />
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    {step.period}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-foreground">{step.focus}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="tools"
          className={`${sectionVisibility('tools')} mx-auto mt-16 max-w-6xl px-6 sm:px-8`}
        >
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Tools</p>
            <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
              Stack ringan yang membantu shipping solusi AI end-to-end
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolStack.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon name={tool.icon} size={20} />
                </span>
                <div>
                  <p className="text-base font-semibold text-foreground">{tool.name}</p>
                  <p className="text-sm text-muted-foreground">{tool.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default KnowledgeHubEducationalContent;
