import React from 'react';
import Icon from '../../../components/AppIcon';

const TikTokIntegration = () => {
  const totalStats = [
    { label: 'Followers', value: '19.1k' },
    { label: 'Total Views', value: '?.?M' },
    { label: 'Total Likes', value: '2.1M' },
    { label: 'Avg Engagement', value: '12.4%' }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Icon name="Video" size={20} className="text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              AI Education on TikTok
            </h2>
          </div>
          <p className="text-lg text-text-secondary">
            Making AI accessible through bite-sized educational content that reaches thousands of learners worldwide
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {totalStats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-card border border-border rounded-brand-lg">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikTokIntegration;
