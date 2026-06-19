import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import AchievementBadges from './components/AchievementBadges';
import ProjectShowcase from './components/ProjectShowcase';
import ProjectsSection from './components/ProjectsSection';
import TikTokIntegration from './components/TikTokIntegration';
import FooterCTA from '../../components/ui/FooterCTA';

const HomepageAIEngineerShowcase = () => {
  const location = useLocation();

  useEffect(() => {

    const handleSmoothScroll = (e) => {
      const clickable = e?.target?.closest ? e.target.closest('a') : null;
      const target = clickable?.getAttribute('href');
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

  useEffect(() => {
    if (!location.hash) return;

    const id = window.setTimeout(() => {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);

    return () => window.clearTimeout(id);
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Buatai Studio - Website & AI Automation Agency</title>
        <meta
          name="description"
          content="Buatai Studio builds polished websites, internal tools, and practical AI automations for growing businesses."
        />
        <meta
          name="keywords"
          content="website agency, AI automation, web development, automation consultant, Buatai Studio"
        />
        <meta name="author" content="Buatai Studio" />
        <meta property="og:title" content="Buatai Studio - Website & AI Automation Agency" />
        <meta
          property="og:description"
          content="Professional, personal website and AI automation services for businesses that want cleaner systems and sharper digital presence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haldies.dev/home" />
        <link rel="canonical" href="https://haldies.dev/home" />
      </Helmet>
      <Header />
      <main className="relative">
        <HeroSection />
        <ProjectShowcase />
        <ProjectsSection />
        <AchievementBadges />
        <TikTokIntegration />
        <FooterCTA
          title="Punya website atau workflow yang perlu dibereskan?"
          description="Ceritakan kondisi bisnismu. Saya bantu petakan solusi yang realistis: mulai dari landing page, dashboard internal, sampai automasi AI yang benar-benar kepakai."
          primaryAction={{
            href: '/contact',
            label: 'Mulai Konsultasi',
          }}
          secondaryAction={{
            href: 'https://wa.me/6289632579100',
            label: 'Chat WhatsApp',
            target: '_blank',
            rel: 'noreferrer',
          }}
        />
      </main>
    </div>
  );
};

export default HomepageAIEngineerShowcase;
