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
        <title>Buatai Studio - Jasa Website & Automasi AI</title>
        <meta
          name="description"
          content="Buatai Studio membangun website yang rapi, sistem internal, dan automasi AI praktis untuk bisnis yang sedang berkembang."
        />
        <meta
          name="keywords"
          content="jasa website, automasi AI, web development, konsultan automasi, Buatai Studio"
        />
        <meta name="author" content="Buatai Studio" />
        <meta property="og:title" content="Buatai Studio - Jasa Website & Automasi AI" />
        <meta
          property="og:description"
          content="Layanan website profesional dan automasi AI untuk bisnis yang ingin sistem lebih rapi dan kehadiran digital yang lebih tajam."
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
