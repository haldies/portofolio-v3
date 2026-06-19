import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Audit kebutuhan',
    description: 'Kita petakan tujuan bisnis, masalah operasional, target pengguna, dan prioritas fitur yang paling berdampak.'
  },
  {
    number: '02',
    title: 'Rancang solusi',
    description: 'Saya susun struktur halaman, flow sistem, integrasi, dan scope kerja yang realistis sebelum mulai produksi.'
  },
  {
    number: '03',
    title: 'Build cepat dan rapi',
    description: 'Website atau automasi dibangun bertahap dengan preview yang jelas, sehingga keputusan bisa dibuat tanpa menebak-nebak.'
  },
  {
    number: '04',
    title: 'Launch dan rapikan',
    description: 'Setelah siap, saya bantu deployment, analytics, dokumentasi singkat, dan perbaikan kecil agar sistem nyaman dipakai.'
  }
];

const AchievementBadges = () => {
  return (
    <section id="process" className="scroll-mt-24 py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
            Dibangun seperti partner, bukan sekadar vendor
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            Saya menjaga prosesnya jelas, personal, dan cukup ringan untuk bisnis yang ingin bergerak cepat tanpa kehilangan kualitas.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="border-l border-border bg-transparent px-6 py-4"
            >
              <p className="text-sm font-semibold tracking-[0.22em] text-muted-foreground">
                {step.number}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementBadges;
