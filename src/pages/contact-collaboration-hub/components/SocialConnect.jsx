import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialConnect = () => {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      handle: '@haldies-pasya',
      description: 'Professional networking and career updates',
      icon: 'Linkedin',
      color: 'bg-blue-600',
      followers: '2.5K',
      activity: 'Active daily',
      url: 'https://linkedin.com/in/haldies-pasya',
      recentPost: 'Just published an article on "The Future of AI in Healthcare" - exploring how machine learning is revolutionizing patient care and diagnostic accuracy.'
    },
    {
      name: 'GitHub',
      handle: '@haldies-dev',
      description: 'Open source projects and code collaboration',
      icon: 'Github',
      color: 'bg-gray-800',
      followers: '1.8K',
      activity: 'Commits weekly',
      url: 'https://github.com/haldies-dev',
      recentPost: 'Released v2.0 of my AI model optimization toolkit - now with 40% faster training times and improved memory efficiency.'
    },
    {
      name: 'TikTok',
      handle: '@haldies_ai',
      description: 'AI education and tech tutorials',
      icon: 'Video',
      color: 'bg-pink-600',
      followers: '15.2K',
      activity: 'Posts 3x/week',
      url: 'https://tiktok.com/@haldies_ai',
      recentPost: '"Explaining Neural Networks in 60 seconds" - breaking down complex AI concepts into bite-sized, easy-to-understand content.'
    },
    {
      name: 'Twitter',
      handle: '@haldies_tech',
      description: 'AI industry insights and quick thoughts',
      icon: 'Twitter',
      color: 'bg-blue-500',
      followers: '3.1K',
      activity: 'Tweets daily',
      url: 'https://twitter.com/haldies_tech',
      recentPost: 'Hot take: The next breakthrough in AI won\'t come from bigger models, but from better data quality and more efficient architectures. 🧵 Thread below:'
    }
  ];

  const quickActions = [
    {
      title: 'Schedule a Call',
      description: 'Book a 30-minute consultation',
      icon: 'Calendar',
      color: 'bg-accent',
      action: 'Schedule Now'
    },
    {
      title: 'Download Resume',
      description: 'Get my latest CV and portfolio',
      icon: 'Download',
      color: 'bg-secondary',
      action: 'Download PDF'
    },
    {
      title: 'View Portfolio',
      description: 'Explore my latest AI projects',
      icon: 'FolderOpen',
      color: 'bg-trust-purple',
      action: 'View Projects'
    },
    {
      title: 'Join Newsletter',
      description: 'Weekly AI insights and tutorials',
      icon: 'Mail',
      color: 'bg-warning',
      action: 'Subscribe'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Connect Across Platforms
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Follow my journey across different platforms - from professional updates on LinkedIn 
            to educational content on TikTok and open-source contributions on GitHub.
          </p>
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {socialPlatforms?.map((platform, index) => (
            <div
              key={platform?.name}
              className="bg-card border border-border rounded-brand-lg p-6 hover-lift transition-brand"
            >
              {/* Platform Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${platform?.color} rounded-brand flex items-center justify-center`}>
                    <Icon name={platform?.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {platform?.name}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {platform?.handle}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="right"
                  onClick={() => window.open(platform?.url, '_blank')}
                >
                  Follow
                </Button>
              </div>

              {/* Platform Stats */}
              <div className="flex items-center space-x-6 mb-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} />
                  <span>{platform?.followers} followers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Activity" size={14} />
                  <span>{platform?.activity}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-4">
                {platform?.description}
              </p>

              {/* Recent Activity */}
              <div className="bg-muted rounded-brand p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="MessageSquare" size={14} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">Recent Activity</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {platform?.recentPost}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-brand-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Quick Actions
            </h3>
            <p className="text-text-secondary">
              Skip the forms - take direct action with these quick options
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions?.map((action, index) => (
              <div
                key={action?.title}
                className="bg-card border border-border rounded-brand p-6 text-center hover-lift transition-brand cursor-pointer"
              >
                <div className={`w-12 h-12 ${action?.color} rounded-brand flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={action?.icon} size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {action?.title}
                </h4>
                <p className="text-sm text-text-secondary mb-4">
                  {action?.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                >
                  {action?.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;