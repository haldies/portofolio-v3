import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const contactOptions = [
    {
      id: 'hiring',
      title: 'Rekrutmen & Hiring',
      description: 'Mau merekrut talenta AI untuk tim atau organisasimu',
      icon: 'Users',
      color: 'bg-primary',
      features: ['Review CV & Portofolio', 'Jadwal Interview Teknis', 'Diskusi Gaji & Timeline', 'Verifikasi Referensi'],
      responseTime: '4–6 jam',
      preferredMethod: 'Email + LinkedIn'
    },
    {
      id: 'collaboration',
      title: 'Kolaborasi Proyek',
      description: 'Sesama AI engineer yang mau kolaborasi di project inovatif',
      icon: 'GitBranch',
      color: 'bg-secondary',
      features: ['Diskusi Scope Teknis', 'Akses Repositori GitHub', 'Review Kode & Feedback', 'Perencanaan Development Bersama'],
      responseTime: '2–4 jam',
      preferredMethod: 'GitHub + Email'
    },
    {
      id: 'consulting',
      title: 'Konsultasi AI',
      description: 'Pemilik bisnis yang mau eksplorasi implementasi dan strategi AI',
      icon: 'Lightbulb',
      color: 'bg-accent',
      features: ['Penyusunan Strategi AI', 'Analisis Kelayakan Teknis', 'Roadmap Implementasi', 'Penilaian ROI'],
      responseTime: '6–12 jam',
      preferredMethod: 'Video Call + Email'
    },
    {
      id: 'mentorship',
      title: 'Belajar & Mentorship',
      description: 'Pelajar dan calon AI engineer yang butuh bimbingan',
      icon: 'GraduationCap',
      color: 'bg-trust-purple',
      features: ['Arahan Jalur Karier', 'Rencana Pengembangan Skill', 'Review Proyek & Feedback', 'Insight Industri'],
      responseTime: '1–2 hari',
      preferredMethod: 'Video Call + Discord'
    },
    {
      id: 'speaking',
      title: 'Pembicara Acara',
      description: 'Panitia konferensi dan penyelenggara acara',
      icon: 'Mic',
      color: 'bg-warning',
      features: ['Presentasi Keynote', 'Workshop Teknis', 'Diskusi Panel', 'Konten Edukasi'],
      responseTime: '12–24 jam',
      preferredMethod: 'Email + Kalender'
    },
    {
      id: 'media',
      title: 'Media & Wawancara',
      description: 'Jurnalis, podcaster, dan kreator konten',
      icon: 'Camera',
      color: 'bg-error',
      features: ['Wawancara Teknis', 'Komentar Industri AI', 'Pembuatan Konten Edukasi', 'Insight Kepakaran'],
      responseTime: '6–12 jam',
      preferredMethod: 'Email + Media Sosial'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Pilih Jalur Kolaborasimu
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Pilih opsi yang paling sesuai dengan kebutuhanmu, dan saya akan balas
            dengan info yang paling relevan plus langkah berikutnya.
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactOptions?.map((option) => (
            <div
              key={option?.id}
              className={`relative bg-card border border-border rounded-brand-lg p-6 cursor-pointer transition-brand hover-lift ${
                selectedOption === option?.id ? 'ring-2 ring-accent shadow-brand-large' : 'hover:shadow-brand-medium'
              }`}
              onClick={() => setSelectedOption(selectedOption === option?.id ? null : option?.id)}
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${option?.color} rounded-brand flex items-center justify-center mb-4`}>
                <Icon name={option?.icon} size={24} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-primary mb-2">
                {option?.title}
              </h3>
              <p className="text-text-secondary mb-4">
                {option?.description}
              </p>

              {/* Response Info */}
              <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{option?.responseTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MessageSquare" size={14} />
                  <span className="text-xs">{option?.preferredMethod}</span>
                </div>
              </div>

              {/* Expandable Details */}
              {selectedOption === option?.id && (
                <div className="border-t border-border pt-4 mt-4">
                  <h4 className="font-medium text-primary mb-3">Yang akan saya bantu:</h4>
                  <ul className="space-y-2">
                    {option?.features?.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="Check" size={14} className="text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="default"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="mt-4 w-full"
                  >
                    Mulai
                  </Button>
                </div>
              )}

              {/* Selection Indicator */}
              {selectedOption === option?.id && (
                <div className="absolute top-4 right-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center">
          <p className="text-text-secondary mb-4">
            Masih bingung pilih yang mana? Santai aja!
          </p>
          <Button
            variant="outline"
            size="lg"
            iconName="MessageCircle"
            iconPosition="left"
          >
            Kirim Pertanyaan Umum
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;