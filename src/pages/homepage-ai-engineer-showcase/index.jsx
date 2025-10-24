import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import AchievementBadges from './components/AchievementBadges';
import ProjectShowcase from './components/ProjectShowcase';
import TikTokIntegration from './components/TikTokIntegration';

const HomepageAIEngineerShowcase = () => {
  useEffect(() => {

    const handleSmoothScroll = (e) => {
      const target = e?.target?.getAttribute('href');
      if (target && target?.startsWith('#')) {
        e?.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Haldies Gerhardien Pasya - AI Engineer & Educator | Making AI Accessible</title>
        <meta
          name="description"
          content="AI Engineer specializing in Machine Learning, Computer Vision, and NLP. Top 10% Bangkit Academy graduate creating accessible AI education for 50K+ learners worldwide."
        />
        <meta
          name="keywords"
          content="AI Engineer, Machine Learning, Computer Vision, NLP, Bangkit Academy, TikTok AI Education, Haldies Pasya"
        />
        <meta name="author" content="Haldies Gerhardien Pasya" />
        <meta property="og:title" content="Haldies Gerhardien Pasya - AI Engineer & Educator" />
        <meta
          property="og:description"
          content="Making AI Work for Real Problems. Explore interactive AI demos, educational content, and innovative projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haldies.dev/home" />
        <link rel="canonical" href="https://haldies.dev/home" />
      </Helmet>
      <Header />
      <main className="relative">
        {/* Hero Section with Interactive AI Demo */}
        <HeroSection />


        {/* Featured Project Showcase */}
        <ProjectShowcase />
        {/* Achievement Badges with Hover Details */}
        <AchievementBadges />

        {/* TikTok Content Integration */}
        <TikTokIntegration />

        {/* Footer CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-100 via-white to-slate-100 border-t border-slate-200/70">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
              Ready to Build the Future with AI?
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Let's collaborate on thoughtful AI solutions that create meaningful impact.
              From concept to deployment, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-foreground text-white rounded-full font-medium hover:bg-foreground/90 transition-colors text-base"
              >
                <span>Start Your AI Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/ai-playground"
                className="inline-flex items-center space-x-2 px-8 py-4 border border-slate-300 text-foreground rounded-full font-medium hover:bg-slate-100 transition-colors text-base"
              >
                <span>Explore AI Playground</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomepageAIEngineerShowcase;
