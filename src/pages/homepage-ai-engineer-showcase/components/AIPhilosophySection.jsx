import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const AIPhilosophySection = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const philosophies = [
    {
      id: 'accessible',
      title: 'Making AI Accessible',
      subtitle: 'Bridging the Gap Between Complex and Simple',
      description: 'AI shouldn\'t be locked away in academic papers or corporate labs. My mission is to democratize AI knowledge, making cutting-edge concepts understandable and applicable for everyone - from students to business leaders.',
      icon: 'Users',
      color: 'from-blue-500 to-indigo-600',
      stats: {
        reach: '50K+ learners',
        content: '200+ videos',
        languages: '3 languages'
      },
      principles: [
        'Complex concepts explained simply',
        'Hands-on learning experiences',
        'Real-world application focus',
        'Community-driven education'
      ]
    },
    {
      id: 'ethical',
      title: 'Ethical AI Development',
      subtitle: 'Building Responsible AI Solutions',
      description: 'Every AI system I develop considers its impact on society. I believe in transparent, fair, and accountable AI that serves humanity while respecting privacy, diversity, and human values.',
      icon: 'Shield',
      color: 'from-green-500 to-emerald-600',
      stats: {
        projects: '15+ ethical reviews',
        bias: '< 5% variance',
        transparency: '100% documented'
      },
      principles: [
        'Bias detection and mitigation',
        'Transparent decision processes',
        'Privacy-first design',
        'Inclusive AI development'
      ]
    },
    {
      id: 'practical',
      title: 'Theory Meets Practice',
      subtitle: 'Solving Real Problems with AI',
      description: 'While I appreciate the elegance of theoretical AI, my passion lies in applying these concepts to solve tangible problems. Every project starts with a real-world challenge and ends with measurable impact.',
      icon: 'Target',
      color: 'from-purple-500 to-pink-600',
      stats: {
        accuracy: '95%+ avg',
        deployment: '12 production systems',
        impact: '100K+ users served'
      },
      principles: [
        'Problem-first approach',
        'Measurable outcomes',
        'Scalable solutions',
        'User-centered design'
      ]
    },
    {
      id: 'continuous',
      title: 'Continuous Learning',
      subtitle: 'Evolving with AI\'s Rapid Pace',
      description: 'AI evolves at breakneck speed, and so must we. I\'m committed to lifelong learning, staying current with research, experimenting with new techniques, and sharing discoveries with the community.',
      icon: 'TrendingUp',
      color: 'from-orange-500 to-red-600',
      stats: {
        papers: '50+ research papers',
        courses: '25+ certifications',
        experiments: '100+ prototypes'
      },
      principles: [
        'Daily learning habit',
        'Research-backed decisions',
        'Experimental mindset',
        'Knowledge sharing culture'
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhilosophy((prev) => (prev + 1) % philosophies?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentPhilosophy = philosophies?.[activePhilosophy];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My AI Philosophy
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The principles and beliefs that guide my approach to artificial intelligence development and education
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Philosophy Navigation */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {philosophies?.map((philosophy, index) => (
              <button
                key={philosophy?.id}
                onClick={() => setActivePhilosophy(index)}
                className={`
                  p-4 rounded-brand-lg border transition-all duration-300 text-left
                  ${index === activePhilosophy 
                    ? 'border-accent bg-accent/10 shadow-brand-medium' 
                    : 'border-border bg-card hover:border-accent/50 hover:bg-accent/5'
                  }
                `}
              >
                <div className={`
                  w-12 h-12 rounded-full bg-gradient-to-r ${philosophy?.color} 
                  flex items-center justify-center mb-3
                  ${index === activePhilosophy ? 'scale-110' : ''}
                  transition-transform duration-300
                `}>
                  <Icon name={philosophy?.icon} size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {philosophy?.title}
                </h3>
                <p className="text-xs text-text-secondary">
                  {philosophy?.subtitle}
                </p>
              </button>
            ))}
          </div>

          {/* Main Philosophy Display */}
          <div className={`
            bg-card border border-border rounded-brand-lg p-8 shadow-brand-large
            transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`
                    w-16 h-16 rounded-full bg-gradient-to-r ${currentPhilosophy?.color} 
                    flex items-center justify-center shadow-brand-medium
                  `}>
                    <Icon name={currentPhilosophy?.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {currentPhilosophy?.title}
                    </h3>
                    <p className="text-text-secondary">
                      {currentPhilosophy?.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed text-lg">
                  {currentPhilosophy?.description}
                </p>

                {/* Core Principles */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">
                    Core Principles:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentPhilosophy?.principles?.map((principle, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`
                          w-2 h-2 rounded-full bg-gradient-to-r ${currentPhilosophy?.color}
                        `}></div>
                        <span className="text-sm text-text-secondary">
                          {principle}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats & Metrics */}
              <div className="space-y-6">
                <h4 className="font-semibold text-foreground text-center">
                  Impact Metrics
                </h4>
                
                <div className="grid gap-4">
                  {Object.entries(currentPhilosophy?.stats)?.map(([key, value], index) => (
                    <div 
                      key={key}
                      className="flex items-center justify-between p-4 bg-muted rounded-brand"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-text-secondary capitalize">
                        {key?.replace(/([A-Z])/g, ' $1')?.trim()}:
                      </span>
                      <span className="font-bold text-foreground">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Visual Representation */}
                <div className="relative">
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${currentPhilosophy?.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${(activePhilosophy + 1) * 25}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-text-secondary">
                    <span>Philosophy Impact</span>
                    <span>{(activePhilosophy + 1) * 25}%</span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-accent pl-4 italic text-text-secondary">
                  "AI is not about replacing human intelligence, but augmenting it to solve problems we couldn't tackle before."
                  <footer className="text-sm mt-2 text-foreground font-medium">
                    - Haldies Gerhardien Pasya
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Philosophy Timeline */}
          <div className="mt-12">
            <div className="flex items-center justify-center space-x-4">
              {philosophies?.map((_, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className={`
                      w-4 h-4 rounded-full transition-all duration-300 cursor-pointer
                      ${index === activePhilosophy 
                        ? 'bg-accent scale-125 shadow-brand-subtle' 
                        : 'bg-muted hover:bg-muted-foreground/20'
                      }
                    `}
                    onClick={() => setActivePhilosophy(index)}
                  ></div>
                  {index < philosophies?.length - 1 && (
                    <div className={`
                      w-12 h-0.5 mx-2 transition-colors duration-300
                      ${index < activePhilosophy ? 'bg-accent' : 'bg-muted'}
                    `}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Interested in collaborating on AI projects that align with these principles?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-brand font-medium hover:bg-accent/90 transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
                <span>Let's Discuss Ideas</span>
              </a>
              <a
                href="/knowledge-hub-educational-content"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-border text-foreground rounded-brand font-medium hover:bg-muted transition-colors"
              >
                <Icon name="BookOpen" size={16} />
                <span>Explore My Content</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPhilosophySection;