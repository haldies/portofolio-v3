import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Meteors from '../../../components/ui/meteors';

// Belum ada file logo -> tampilkan sebagai teks satu baris.
const trustedBrands = [
  'Drspecs',
  'Isvandiary Law Firm',
  'Hagepos',
  'AJM',
  'Zushi',
  'Javasuperfood',
];

const HeroSection = ({ ready = true }) => {
  const sectionRef = useRef(null);
  const [parallax, setParallax] = useState({ bg: 0, mid1: 0, mid2: 0, x: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const partnerLoop = [...trustedBrands, ...trustedBrands];

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

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden"
    >
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
        <div className="absolute inset-0">
          {ready && <Meteors number={15} className="opacity-80" />}
        </div>
      </div>
      {/* Subtle Accents */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute -top-10 -left-10 w-64 h-64 bg-slate-200 rounded-full blur-3xl will-change-transform ${ready ? 'animate-float-soft' : ''}`}
          style={{ transform: `translate3d(${parallax.x}px, ${parallax.mid1}px, 0)` }}
        />
        <div
          className={`absolute top-32 right-0 w-80 h-80 bg-slate-300 rounded-full blur-3xl will-change-transform ${ready ? 'animate-float-soft' : ''}`}
          style={{ animationDelay: '2s', transform: `translate3d(${parallax.x * -0.6}px, ${parallax.mid2}px, 0)` }}
        />
        <div
          className={`absolute bottom-10 left-1/2 w-72 h-72 bg-slate-200 rounded-full blur-3xl will-change-transform ${ready ? 'animate-float-soft' : ''}`}
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
          className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] will-change-transform space-y-12"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: 'transform 120ms ease-out',
          }}
        >
          {/* Centered Content */}
          <div className={`space-y-8 w-full max-w-3xl text-center ${ready ? 'animate-fade-slide-up' : 'opacity-0'}`}>
            <div className="space-y-5">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-primary leading-tight">
                Otomatiskan Pekerjaan Kembangkan Bisnis Lebih Cepat
              </h1>

              <p className="text-base sm:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto">
                Saya Haldies. Saya merancang website, sistem internal, dan workflow AI yang rapi, personal, dan langsung kepakai.
              </p>
            </div>

          <div className="flex flex-row items-center justify-center gap-6 w-full max-w-xs sm:max-w-none mx-auto">
            <Button
              variant="default"
              size="xl"
              asChild
              className="w-auto rounded-full px-7"
            >
              <Link to="/contact">
                Konsultasi
              </Link>
            </Button>

            <a
              href="#services"
              className="
                inline-flex items-center
                text-base font-medium
                text-foreground
                whitespace-nowrap
                transition-colors duration-200
                hover:text-foreground/60
              "
            >
              Lihat Layanan
              <span className="ml-1 text-lg leading-none">›</span>
            </a>
          </div>

          </div>

          {/* Trusted Brands Marquee - teks satu baris */}
          <div className={`w-full max-w-5xl mx-auto px-4 mt-16 lg:mt-24 ${ready ? 'animate-fade-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Dipercaya Oleh
            </div>
            <div className="relative overflow-hidden rounded-sm backdrop-blur [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
              <div className={`${ready ? 'marquee-track' : 'flex'} items-center gap-12 px-10 py-4`}>
                {partnerLoop.map((brand, index) => {
                  const isDuplicate = index >= trustedBrands.length;
                  return (
                    <span
                      key={`${brand}-${index}`}
                      aria-hidden={isDuplicate}
                      className="whitespace-nowrap text-lg font-semibold tracking-tight text-primary/70 transition-colors duration-300 hover:text-primary"
                    >
                      {brand}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
