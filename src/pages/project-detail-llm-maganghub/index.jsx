import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import NotFound from '../NotFound';

const projectDetails = {
  'llm-maganghub': {
    badgeLabel: 'Conversational AI',
    title: 'MagangHub LLM Assistant',
    summary:
      'Personalized AI copilot that accelerates internship onboarding and day-to-day support at MagangHub. The assistant answers policy questions, surfaces SOPs, and recommends next best actions by synthesizing team knowledge.',
    impactMetrics: [
      { label: 'Response Accuracy', value: '92.4%' },
      { label: 'Time Saved / Query', value: '6.5 minutes' },
      { label: 'Active Daily Users', value: '180+' }
    ],
    highlights: [
      {
        title: 'Context-Aware Responses',
        description:
          'Combines retrieval-augmented generation (RAG) with conversation history to deliver responses grounded in the latest company knowledge base.'
      },
      {
        title: 'Team Knowledge Capture',
        description:
          'Streamlined document ingestion pipeline keeps operational playbooks and onboarding material in sync without manual updates.'
      },
      {
        title: 'Secure Workspace Controls',
        description:
          'Role-based access and audit logging ensure sensitive data is handled responsibly across squads and internship tracks.'
      }
    ],
    techStack: [
      'Next.js micro-frontend shell',
      'Python FastAPI orchestrator',
      'OpenAI GPT-4 Turbo & embeddings',
      'Pinecone vector retrieval layer',
      'PostgreSQL knowledge base',
      'LangChain evaluation harness'
    ],
    problemStatement:
      'Internship cohorts needed faster access to institutional knowledge without overwhelming mentors. We developed a secure knowledge retrieval pipeline that keeps curated content in sync and allows interns to self-serve for everyday questions while providing mentors with insight into popular queries.',
    architectureNotes:
      'Designed for rapid iteration: each module communicates through event-driven pipelines, enabling new knowledge connectors and evaluation suites with minimal rework.',
    videoSrc: '/assets/Projekan/video/demovideop1.mp4',
    seo: {
      title: 'MagangHub LLM Assistant – Project Detail',
      description:
        'Deep dive into the MagangHub conversational AI assistant built for internship onboarding, featuring secure knowledge retrieval and an interactive demo.'
    },
    cta: {
      primaryLabel: 'Book a Discovery Call',
      primaryHref: '/contact',
      secondaryLabel: 'Back to AI Playground',
      secondaryHref: '/ai-playground'
    }
  }
};

const ProjectDetailLLMMagangHub = () => {
  const { projectId } = useParams();
  const project = projectDetails?.[projectId];

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{project.seo.title}</title>
        <meta name="description" content={project.seo.description} />
      </Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {project.badgeLabel}
            </span>
            <h1 className="mt-6 text-4xl font-semibold md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.impactMetrics.map(metric => (
                <div
                  key={metric.label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-brand-subtle"
                >
                  <div className="text-2xl font-semibold text-primary">{metric.value}</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card/90 p-6 shadow-brand-medium">
            <h2 className="text-2xl font-semibold">Product Walkthrough</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Explore key user journeys—from onboarding queries to workflow hand-offs—and see how the assistant maintains context while staying grounded in verified sources.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 bg-black">
              <video
                src={project.videoSrc}
                className="h-full w-full"
                controls
                preload="metadata"
                playsInline
              >
                Your browser does not support the video tag. Download the demo to view it locally.
              </video>
            </div>
          </div>
        </section>

        <section className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[2fr,3fr]">
            <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-brand-subtle">
              <h2 className="text-2xl font-semibold">Problem & Outcomes</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {project.problemStatement}
              </p>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                {project.highlights.map(item => (
                  <li key={item.title} className="rounded-2xl border border-border/80 bg-background/60 p-4">
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-brand-subtle">
              <h2 className="text-2xl font-semibold">Architecture Notes</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {project.architectureNotes}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {project.techStack.map(item => (
                  <li key={item} className="rounded-2xl border border-border/60 bg-background/60 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-primary/40 bg-primary/10 p-8 text-center">
            <h2 className="text-3xl font-semibold text-primary">Ready to explore a custom AI assistant for your teams?</h2>
            <p className="mt-4 text-base text-primary/80">
              I build production-ready conversational experiences that respect your knowledge assets and operational constraints.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg" iconName="MessageCircle" iconPosition="left" asChild>
                <a href={project.cta.primaryHref}>{project.cta.primaryLabel}</a>
              </Button>
              <Button variant="outline" size="lg" iconName="ArrowLeft" iconPosition="left" asChild>
                <a href={project.cta.secondaryHref}>{project.cta.secondaryLabel}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetailLLMMagangHub;
