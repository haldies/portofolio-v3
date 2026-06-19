import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const socialPlatforms = [
  {
    name: 'LinkedIn',
    handle: '@haldies',
    description: 'Diskusi profesional, update kerja, dan koneksi bisnis.',
    icon: 'Linkedin',
    color: 'bg-blue-600',
    signal: 'Professional',
    activity: 'Active',
    url: 'https://linkedin.com/in/haldies-pasya',
  },
  {
    name: 'GitHub',
    handle: '@haldies',
    description: 'Workbench teknis, eksperimen, dan contoh implementasi.',
    icon: 'Github',
    color: 'bg-gray-800',
    signal: 'Code',
    activity: 'Maintained',
    url: 'https://github.com/haldies',
  },
  {
    name: 'WhatsApp',
    handle: 'Quick chat',
    description: 'Jalur tercepat untuk tanya scope, jadwal, dan kebutuhan project.',
    icon: 'MessageCircle',
    color: 'bg-green-600',
    signal: 'Fast',
    activity: 'Direct',
    url: 'https://wa.me/6289632579100',
  },
  {
    name: 'Instagram',
    handle: '@gerhardien_',
    description: 'Sisi personal, proses kreatif, dan update ringan.',
    icon: 'Instagram',
    color: 'bg-pink-600',
    signal: 'Social',
    activity: 'Casual',
    url: 'https://instagram.com/gerhardien_',
  }
];

const SocialConnect = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Pilih jalur yang paling nyaman
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Untuk project serius, form atau LinkedIn paling rapi. Untuk tanya cepat, WhatsApp bisa langsung dipakai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {socialPlatforms.map((platform) => (
            <article
              key={platform.name}
              className="bg-card border border-border rounded-lg p-6 hover-lift transition-brand"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={platform.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {platform.name}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {platform.handle}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="right"
                  onClick={() => window.open(platform.url, '_blank')}
                >
                  Open
                </Button>
              </div>

              <div className="flex items-center space-x-6 mb-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="Signal" size={14} />
                  <span>{platform.signal}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Activity" size={14} />
                  <span>{platform.activity}</span>
                </div>
              </div>

              <p className="text-text-secondary">
                {platform.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;
