import React from 'react';

import Button from '../../../components/ui/Button';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-innovation-green rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Available for New Opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Let's Build the Future of
            <span className="block bg-gradient-to-r from-innovation-green to-conversion-amber bg-clip-text text-transparent">
              AI Together
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Whether you're looking to hire AI talent, collaborate on cutting-edge projects, 
            or explore AI solutions for your business, I'm here to help turn your vision into reality.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-innovation-green">24h</div>
              <div className="text-sm text-white/80">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-conversion-amber">50+</div>
              <div className="text-sm text-white/80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-trust-purple">95%</div>
              <div className="text-sm text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Global</div>
              <div className="text-sm text-white/80">Remote Ready</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              Schedule a Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="border-white text-white hover:bg-white/10"
            >
              Quick Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;