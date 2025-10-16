import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import { Meteors } from '@/components/ui/meteors';

const learningPartners = [
  {
    name: 'Amazon Web Services',
    program: 'Generative AI & Cloud Practitioner',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
  },
  {
    name: 'Google',
    program: 'Google Cloud Skills Boost',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  },
  {
    name: 'Bangkit Academy',
    program: 'Machine Learning Cohort',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxwyUDWjolHziF0tAR-ehPWMui5dJyHWMzQ&s'
  },
  {
    name: 'Oracle',
    program: 'Oracle Cloud Infrastructure',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg'
  },
  {
    name: 'Coursera',
    program: 'Deep Learning Specializations',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coursera_logo_%282020%29.svg/2560px-Coursera_logo_%282020%29.svg.png'
  },
  {
    name: 'Dicoding',
    program: 'Dicoding Academy Paths',
    logo: 'https://dicoding-assets.sgp1.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2014/12/dicoding-header-logo.png'
  }
];

const HeroSection = () => {
  const [currentSpecialization, setCurrentSpecialization] = useState(0);
  const sectionRef = useRef(null);
  const [parallax, setParallax] = useState({ bg: 0, mid1: 0, mid2: 0, x: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const specializations = [
    'Data Scientist',
    'AI Engineer',
    'Machine Learning Engineer',
    'Computer Vision Specialist', 
    'AI Research',
  ];
  const partnerLoop = [...learningPartners, ...learningPartners];

  const mockSentimentAnalysis = (text) => {
    const sentiments = [
      { label: 'Positive', score: 0.85, color: 'text-green-600', bgColor: 'bg-green-100' },
      { label: 'Negative', score: 0.72, color: 'text-red-600', bgColor: 'bg-red-100' },
      { label: 'Neutral', score: 0.68, color: 'text-gray-600', bgColor: 'bg-gray-100' }
    ];
    
    const randomSentiment = sentiments?.[Math.floor(Math.random() * sentiments?.length)];
    return randomSentiment;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialization((prev) => (prev + 1) % specializations?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll-based parallax for background and accents (smoothed)
  useEffect(() => {
    if (!sectionRef?.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // Respect user preference

    let rafId = 0;
    const handleScroll = () => {
      if (!sectionRef?.current) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = sectionRef.current.getBoundingClientRect();
        const height = Math.max(rect.height, 1);
        const progress = Math.min(Math.max(-rect.top / height, 0), 1);
        const strength = window.innerWidth >= 1024 ? 1 : 0.65; // stronger on desktop

        setParallax({
          bg: progress * 90 * strength,
          mid1: progress * 160 * strength,
          mid2: progress * -120 * strength,
          x: Math.sin(progress * Math.PI) * 40 * strength,
        });
      });
    };

    // initial position
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Subtle mouse-based tilt for hero content
  const handleMouseMove = (e) => {
    if (!sectionRef?.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width; // 0-1
    const ny = (e.clientY - rect.top) / rect.height; // 0-1
    const maxTilt = 6; // degrees
    setTilt({
      x: (0.5 - ny) * maxTilt,
      y: (nx - 0.5) * maxTilt,
    });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const handleSentimentAnalysis = async () => {
    if (!sentimentInput?.trim()) return;
    
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const result = mockSentimentAnalysis(sentimentInput);
      setSentimentResult(result);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden"
    >
      <Meteors />
      {/* Local styles for subtle unique animations */}
      <style>{`
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-10px) translateX(6px) scale(1.02); }
        }
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-float-soft { animation: floatSoft 12s ease-in-out infinite; }
        .animate-fade-slide-up { animation: fadeSlideUp 450ms ease forwards; }
        .will-change-transform { will-change: transform; }
        @keyframes marqueeSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeSlide 32s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* Full Background with subtle parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed will-change-transform"
          style={{
            backgroundImage: "url('/assets/background/space-background.png')",
            transform: `translate3d(0, ${parallax.bg}px, 0)`,
            transition: 'transform 80ms linear',
          }}
        />
        {/* Readability Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/65 to-white/75" />
      </div>
      {/* Subtle Accents */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute -top-10 -left-10 w-64 h-64 bg-slate-200 rounded-full blur-3xl animate-float-soft will-change-transform"
          style={{ transform: `translate3d(${parallax.x}px, ${parallax.mid1}px, 0)` }}
        />
        <div
          className="absolute top-32 right-0 w-80 h-80 bg-slate-300 rounded-full blur-3xl animate-float-soft will-change-transform"
          style={{ animationDelay: '2s', transform: `translate3d(${parallax.x * -0.6}px, ${parallax.mid2}px, 0)` }}
        />
        <div
          className="absolute bottom-10 left-1/2 w-72 h-72 bg-slate-200 rounded-full blur-3xl animate-float-soft will-change-transform"
          style={{ animationDelay: '4s', transform: `translate3d(${parallax.x * 0.3}px, ${parallax.mid1 * 0.6}px, 0)` }}
        />
        {/* Diagonal light streak for depth */}
        <div
          className="absolute -rotate-12 top-10 left-1/4 w-[140%] h-24 opacity-40"
          style={{
            background:
              'linear-gradient(90deg, rgba(203,213,225,0) 0%, rgba(203,213,225,0.6) 50%, rgba(203,213,225,0) 100%)',
            transform: `translate3d(${parallax.x * 0.4}px, ${parallax.mid2 * 0.4}px, 0)`,
          }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div
          className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] will-change-transform"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: 'transform 120ms ease-out',
          }}
        >
          {/* Centered Content */}
          <div className="space-y-8 w-full max-w-3xl text-center animate-fade-slide-up">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center space-x-2 bg-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm font-medium mx-auto">
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
                <span>Available for New Opportunities</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Making AI Work for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                  Real Problems
                </span>
              </h1>

              <div className="text-lg sm:text-2xl text-text-secondary font-medium min-h-[2rem]">
                <span className="inline-block transition-transform duration-500 ease-in-out will-change-transform"
                  style={{ transform: `translate3d(${parallax.x * 0.1}px, 0, 0)` }}
                >
                  {specializations?.[currentSpecialization]}
                </span>
              </div>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
                Hi, I'm <strong className="text-foreground">Haldies Gerhardien Pasya</strong>, an AI Engineer passionate about bridging the gap between cutting-edge research and practical applications. I transform complex AI concepts into accessible solutions that drive real business value.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Zap"
                iconPosition="left"
                asChild
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                <Link to="/ai-playground">
                  Project AI
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="User"
                iconPosition="left"
                asChild
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                <Link to="/achievements">
                  My Journey
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-border text-center">
              <div className="space-y-1">
                <div className="text-xl sm:text-3xl font-bold text-foreground">18.7k</div>
                <div className="text-sm sm:text-base text-text-secondary">TikTok Followers</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-3xl font-bold text-foreground">Top 10%</div>
                <div className="text-sm sm:text-base text-text-secondary">Bangkit Academy & Laskar Ai</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-3xl font-bold text-foreground">15+</div>
                <div className="text-sm sm:text-base text-text-secondary">AI Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-text-secondary" />
        </div>
      </div>
      {/* Learning Partners Marquee */}
      <div className="relative z-10 px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Learning Partners & Programs
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-card/80 shadow-brand-subtle backdrop-blur">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background to-transparent" />
            <div className="marquee-track items-center gap-8 px-10 py-6">
              {partnerLoop.map((brand, index) => {
                const isDuplicate = index >= learningPartners.length;
                return (
                  <div
                    key={`${brand.name}-${index}`}
                    aria-hidden={isDuplicate}
                    className="flex min-w-[220px] items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-foreground"
                  >
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-border bg-card">
                      <Image src={brand.logo} alt={`${brand.name} logo`} className="h-10 w-10 object-contain" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground">{brand.name}</p>
                      <p className="text-xs text-text-secondary">{brand.program}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
