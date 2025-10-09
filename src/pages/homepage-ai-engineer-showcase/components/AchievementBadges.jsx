import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadges = () => {
  const achievements = [
    {
      id: 'bangkit',
      title: 'Bangkit Academy 2024',
      subtitle: 'Top 10% Graduate',
      description: 'Selected among the top 10% of graduates from Google-backed Bangkit Academy, demonstrating excellence in machine learning and mobile development.',
      icon: 'Trophy',
      color: 'from-slate-500 via-slate-600 to-slate-700',
      stats: {
        rank: 'Top 10% distinction',
        cohort: '1500 participants ',
        focus: 'Machine Learning'
      }
    },
    {
      id: 'laskar',
      title: 'Laskar AI Competition',
      subtitle: 'Best Capstone Project',
      description: 'Won the best capstone project award for developing an innovative AI solution that addresses real-world problems with measurable impact.',
      icon: 'Award',
      color: 'from-slate-500 via-slate-600 to-slate-700',
      stats: {
        position: 'Best Project',
        category: 'Healthcare',
        impact: '80% Accuracy'
      }
    },
    {
      id: 'tiktok',
      title: 'AI Education Creator',
      subtitle: '18.7k+ Followers',
      description: 'Built a strong community of AI enthusiasts through educational content, making complex AI concepts accessible to thousands of learners.',
      icon: 'Users',
      color: 'from-slate-500 via-slate-600 to-slate-700',
      stats: {
        followers: '18.7k+',
        engagement: '12% avg',
        videos: '100+ posts'
      }
    },
    {
      id: 'certification',
      title: 'AI Certifications',
      subtitle: 'Multiple Credentials',
      description: 'Earned multiple industry-recognized certifications in machine learning, Ai Engineer, and cloud AI services from leading tech companies.',
      icon: 'GraduationCap',
      color: 'from-slate-500 via-slate-600 to-slate-700',
      stats: {
        certs: '20+ Credentials',
        providers: 'Coursera, Dicoding, AWS, IBM, Google',
        validity: 'Current & Active'
      }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Recognition & Achievements
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            Validated expertise through competitive programs, industry recognition, and community impact
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {achievements?.map((achievement) => (
            <article
              key={achievement?.id}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 shadow-[0_40px_80px_-60px_rgba(15,23,42,0.45)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_60px_120px_-80px_rgba(15,23,42,0.4)]"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${achievement?.color}`} />

              <div className="flex flex-1 flex-col gap-6 p-8">
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${achievement?.color} text-white shadow-lg shadow-slate-900/10`}>
                    <Icon 
                      name={achievement?.icon} 
                      size={22} 
                      className="text-white"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                      {achievement?.subtitle}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                      {achievement?.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-500">
                    {achievement?.description}
                  </p>

                <div className="mt-auto border-t border-slate-100/80 pt-6">
                  <div className="flex flex-col gap-3">
                    {Object.entries(achievement?.stats)?.map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between text-sm">
                        <span className="uppercase tracking-[0.16em] text-xs text-slate-400">
                          {key}
                        </span>
                        <span className="font-medium text-slate-600">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementBadges;
