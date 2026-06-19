import React from 'react';
import Icon from '../../../components/AppIcon';

const promises = [
  {
    icon: 'MessagesSquare',
    title: 'Komunikasi jelas',
    text: 'Progress, keputusan desain, dan batasan teknis dijelaskan tanpa bahasa yang dibuat rumit.'
  },
  {
    icon: 'Gauge',
    title: 'Prioritas ke hasil',
    text: 'Setiap fitur harus punya alasan: menaikkan trust, mempercepat kerja, atau memudahkan pelanggan.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Rapi setelah launch',
    text: 'Struktur file, deployment, analytics, dan dokumentasi ringan disiapkan agar mudah dirawat.'
  }
];

const TikTokIntegration = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
              Personal Studio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Kecil, fokus, dan langsung dikerjakan oleh orang teknisnya
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              Kamu tidak dilempar ke proses yang kaku. Saya ikut memahami konteks bisnis, memberi saran teknis yang masuk akal, lalu membangun solusi yang bisa dipakai dalam operasional nyata.
            </p>
          </div>

          <div className="grid gap-4">
            {promises.map((item) => (
              <article key={item.title} className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                  <Icon name={item.icon} size={21} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikTokIntegration;
