import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryScroller from '../../../components/ui/CategoryScroller';
import Button from '../../../components/ui/Button';
import ProjectCard from '../../../components/ui/ProjectCard';

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'MagangHub LLM ',
      description: 'Retrieval-augmented assistant that analyzes internship quotas and resumes to recommend the top three placements automatically.',
      image: '/assets/Projekan/llmmaganghub.png',
      category: 'Large Language Model',
      tags: ['Llm', 'React.js', 'tailwind', 'vite'],
      codeHref: 'https://github.com/haldies/maganghub-llm',
      liveHref: 'https://maganghub-genz.vercel.app'
    },
    {
      id: 2,
      title: 'Vision Quality Inspector',
      description: 'Edge-ready computer vision workflow that spots manufacturing defects using a fine-tuned YOLOv8 model and rapid feedback loops.',
      image: '/assets/images/logo_laskarAi.png',
      category: 'Computer Vision',
      tags: ['YOLOv8', 'TensorRT', 'MLOps', 'Edge Deployment'],
      codeHref: 'https://github.com/haldies/vision-quality-inspector',
      liveHref: 'https://demo.haldies.com/vision-quality'
    },
    {
      id: 3,
      title: 'Personalization Engine',
      description: 'Hybrid recommendation stack blending collaborative filtering and embeddings to lift engagement across content platforms.',
      image: '/assets/images/logobangkit.png',
      category: 'Machine Learning',
      tags: ['Feature Store', 'Vector Search', 'Realtime Inference', 'A/B Testing'],
      codeHref: 'https://github.com/haldies/personalization-engine',
      liveHref: 'https://demo.haldies.com/personalization'
    }
  ];

  // Compute categories and filtered list
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects?.map(p => p?.category).filter(Boolean)))],
    [projects]
  );

  const filteredProjects = useMemo(
    () => selectedCategory === 'All' ? projects : projects?.filter(p => p?.category === selectedCategory),
    [projects, selectedCategory]
  );

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured AI Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore my latest AI solutions that solve real-world problems with measurable impact
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <CategoryScroller
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
            className="mb-8"
          />

          {/* Projects Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects?.map((project) => (
              <ProjectCard
                key={project?.id}
                image={project?.image}
                title={project?.title}
                description={project?.description}
                tags={project?.tags}
                category={project?.category}
                codeHref={project?.codeHref}
                liveHref={project?.liveHref}
              />
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              iconPosition="left"
              asChild
            >
              <Link to="/ai-playground">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
