import React from 'react';

const services = [
  {
    icon: 'Globe',
    title: 'Website Profesional',
    description: 'Company profile, landing page, portfolio brand, dan halaman campaign yang cepat, responsif, dan enak dibaca.',
    points: ['Copywriting struktur halaman', 'Desain responsif', 'SEO dasar dan analytics']
  },
  {
    icon: 'Cpu',
    title: 'AI Automation',
    description: 'Automasi untuk pekerjaan berulang: balas lead, ringkas dokumen, susun laporan, atau bantu operasional harian.',
    points: ['Chatbot internal', 'Workflow AI assistant', 'Integrasi form dan spreadsheet']
  },
  {
    icon: 'Layers',
    title: 'Dashboard & Internal Tools',
    description: 'Tool sederhana untuk admin, sales, operasional, atau reporting agar data tim lebih rapi dan mudah dipakai.',
    points: ['Admin panel', 'Tracking data', 'Export dan laporan']
  },
  {
    icon: 'Link',
    title: 'Integrasi Sistem',
    description: 'Menghubungkan website, database, WhatsApp, API, email, dan tools bisnis lain supaya alur kerja tidak tercecer.',
    points: ['API integration', 'Database sync', 'Notification workflow']
  },
  {
    icon: 'Activity',
    title: 'Perawatan & Optimasi',
    description: 'Bantuan teknis berkelanjutan untuk menjaga website tetap aman, cepat, dan relevan setelah launch.',
    points: ['Maintenance ringan', 'Performance check', 'Iterasi fitur']
  },
  {
    icon: 'Sparkles',
    title: 'AI-Ready Content System',
    description: 'Struktur konten, FAQ, knowledge base, dan aset digital yang siap dipakai oleh chatbot atau pencarian AI.',
    points: ['Knowledge base', 'CMS setup', 'Reusable content blocks']
  }
];

const ProjectShowcase = () => {
  return (
    <section id="services" className="scroll-mt-24 py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Left Column: Section Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
              Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary leading-tight">
              Satu partner teknis untuk website, sistem, dan automasi
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Membantu bisnis meningkatkan kredibilitas digital sekaligus mengautomasi alur kerja internal agar lebih efisien.
            </p>
          </div>

          {/* Right Column: Vertical stack of detailed service cards */}
          <div className="lg:col-span-8 space-y-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex flex-col p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                {/* Card details */}
                <div className="space-y-3 flex-grow text-left">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-150">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
