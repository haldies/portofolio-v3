import React from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Header from 'components/ui/Header';

const KnowledgeHubEducationalContent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Knowledge Hub & Educational Content - Haldies Portfolio</title>
        <meta name="description" content="Explore AI education content, tutorials, and insights from Haldies. Learn machine learning, deep learning, and AI development through videos, articles, and interactive tutorials." />
        <meta name="keywords" content="AI education, machine learning tutorials, deep learning, computer vision, NLP, AI career, data science" />
      </Helmet>
      <Header />

      <main className="pt-20 pb-24">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute -top-32 right-16 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" />
            <div className="absolute -bottom-40 left-12 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:px-8">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-2 text-sm uppercase tracking-[0.3em] text-white/70">
              <Icon name="BookOpen" size={18} />
              Knowledge Hub
            </span>

            <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
              AI Education & Insights
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-white/70 sm:text-xl">
              We&apos;re crafting a curated library of AI explainers, tutorials, and learning paths. Soon,
              you&apos;ll be able to explore everything from foundational concepts to production-ready workflows.
            </p>

            <div className="mt-12 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-left shadow-lg shadow-black/30 backdrop-blur">
              <p className="text-base uppercase tracking-[0.4em] text-white/60">Coming Soon</p>
              <p className="mt-4 text-2xl font-medium text-white">
                The Knowledge Hub is almost ready.
              </p>
              <p className="mt-4 text-base text-white/70">
                Get notified when the experience launches and be the first to access early resources,
                learning playlists, and interactive deep dives.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                In Preparation
              </div>
            </div>
          </div>
        </section>

        {/* Teaser */}
        <section className="mx-auto mt-20 max-w-6xl px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Guided Learning Paths',
                description:
                  'Structured roadmaps for ML, MLOps, and responsible AI with curated resources and checkpoints.',
              },
              {
                title: 'Hands-on Labs',
                description:
                  'Practical notebooks and datasets designed to translate theory into working prototypes.',
              },
              {
                title: 'Thought Leadership',
                description:
                  'Short essays and videos on emerging AI trends, ethical considerations, and real-world deployments.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 rounded-3xl border border-border bg-card/80 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <span className="rounded-full bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                    Soon
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default KnowledgeHubEducationalContent;
