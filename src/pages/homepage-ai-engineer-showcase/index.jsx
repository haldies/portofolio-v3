import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import AchievementBadges from './components/AchievementBadges';
import ProjectShowcase from './components/ProjectShowcase';
import TikTokIntegration from './components/TikTokIntegration';
import FooterCTA from '../../components/ui/FooterCTA';

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
        <FooterCTA />
      </main>
    </div>
  );
};

export default HomepageAIEngineerShowcase;
