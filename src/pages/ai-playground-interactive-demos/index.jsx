import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Image from '../../components/AppImage';

const projects = [
  {
    id: 'insight-hub',
    title: 'Insight Hub Dashboard',
    description:
      'A modular analytics experience that surfaces real-time KPI tracking, growth insights, and smart recommendations for business stakeholders.',
    icon: 'BarChart3',
    accent: 'bg-primary/10 text-primary',
    tags: ['React', 'TypeScript', 'Data Visualization'],
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=780&fit=crop'
  },
  {
    id: 'vision-studio',
    title: 'Vision Studio',
    description:
      'Lightweight computer vision tooling that enables quick experimentation with classification models and curated datasets.',
    icon: 'Camera',
    accent: 'bg-secondary/10 text-secondary',
    tags: ['Computer Vision', 'Inference', 'UI/UX'],
    category: 'Computer Vision',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1200&h=780&fit=crop'
  },
  {
    id: 'contextual-ai',
    title: 'Contextual AI Assistant',
    description:
      'Conversational copilot designed for learning teams with content-aware prompts, persona modes, and reusable knowledge packs.',
    icon: 'Bot',
    accent: 'bg-accent/10 text-accent',
    tags: ['AI Assistant', 'Prompt Design', 'Education'],
    category: 'AI Assistant',
    image: 'https://images.unsplash.com/photo-1686191128892-26b98c48d570?w=1200&h=780&fit=crop'
  },
  {
    id: 'content-orchestrator',
    title: 'Content Orchestrator',
    description:
      'Workflow engine that automates content planning, editorial reviews, and channel distribution with granular permissions.',
    icon: 'Layers',
    accent: 'bg-trust-purple/10 text-trust-purple',
    tags: ['Automation', 'Workflow', 'CMS'],
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=1200&h=780&fit=crop'
  },
  {
    id: 'api-observatory',
    title: 'API Observatory',
    description:
      'Monitoring suite offering availability dashboards, incident timelines, and proactive alerts for critical integrations.',
    icon: 'Radar',
    accent: 'bg-innovation-green/10 text-innovation-green',
    tags: ['SRE', 'Monitoring', 'Node.js'],
    category: 'Platform',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&h=780&fit=crop'
  },
  {
    id: 'secure-vault',
    title: 'Secure Vault',
    description:
      'Security-forward vault that combines passwordless access, hardware integration, and audit trails for enterprise teams.',
    icon: 'Shield',
    accent: 'bg-warning/10 text-warning',
    tags: ['Security', 'Identity', 'Architecture'],
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=780&fit=crop'
  }
];

const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map(project => project.category)))],
    []
  );

  const filteredProjects = useMemo(
    () => (selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory)),
    [selectedCategory]
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Project Collections - Haldies Portfolio</title>
        <meta
          name="description"
          content="Explore curated digital projects crafted by Haldies. Discover elegant solutions across analytics, AI, automation, and product design."
        />
        <meta
          name="keywords"
          content="project showcase, portfolio projects, digital products, UI design, AI projects, software portfolio"
        />
      </Helmet>
      <Header />
      <section className="pt-48 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Gerhardien Labs
            </span>
            <h1 className="mt-6 mb-4 text-4xl font-semibold text-foreground md:text-5xl">
              Crafting purposeful AI research and product experiments
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-muted-foreground md:text-xl">
              A curated collection of lab explorations, AI experiments, and platform builds that translate emerging
              research into elegant, real-world experiences.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 flex max-w-7xl flex-wrap items-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                selectedCategory === category
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border bg-card text-muted-foreground hover:border-foreground/50 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-[32px] border border-border bg-card/80 shadow-brand-subtle transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div className="p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${project.accent}`}>
                    <Icon name={project.icon} size={22} />
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{project.tags[0]}</span>
                </div>
                <h2 className="mb-4 text-2xl font-semibold text-foreground">{project.title}</h2>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground/80">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 transition-colors duration-200 group-hover:border-foreground/40 group-hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-brand-gradient rounded-brand-lg p-8 text-white">
            <h2 className="mb-4 text-3xl font-bold">Need a hand shaping your next idea?</h2>
            <p className="mb-6 text-lg opacity-90">
              Let's collaborate on meaningful, design-led solutions that move your product forward with intent.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="secondary" size="lg" iconName="FolderOpen" iconPosition="left" asChild>
                <a href="/achievements">View All Projects</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <a href="/contact">Let's Connect</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsShowcase;
