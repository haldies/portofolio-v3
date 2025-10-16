import React from 'react';

const formatLabel = (label) =>
  label
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

const AchievementBadges = () => {
  const achievements = [
    {
      id: 'bangkit',
      title: 'Bangkit Academy 2024',
      subtitle: 'Top 10% Graduate',
      description: 'Selected among the top 10% of graduates from Google-backed Bangkit Academy, demonstrating excellence in machine learning and mobile development.',
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
      stats: {
        certs: '20+ Credentials',
        providers: 'Aws,Cousera,++',
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

        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {achievements?.map((achievement) => (
            <article
              key={achievement?.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_30px_60px_-40px_rgba(15,23,42,0.25)]"
            >
              <div className="flex flex-1 flex-col">
                <span className="inline-flex items-center self-start rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors duration-200 group-hover:border-slate-300 group-hover:text-slate-600">
                  {achievement?.subtitle}
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                  {achievement?.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {achievement?.description}
                </p>

                <div className="mt-auto pt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Key Highlights
                  </p>

                  <dl className="mt-4 space-y-3">
                    {Object.entries(achievement?.stats)?.map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between text-sm">
                        <dt className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                          {formatLabel(key)}
                        </dt>
                        <dd className="font-medium text-slate-700">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
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
