import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryScroller from '../../../components/ui/CategoryScroller';
import Button from '../../../components/ui/Button';
import ProjectCard from '../../../components/ui/ProjectCard';
import aiEngineerProjects from '../../../data/aiEngineerProjects';

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');


  const categories = useMemo(
    () => ['All', ...Array.from(new Set(aiEngineerProjects?.map(p => p?.category).filter(Boolean)))],
    []
  );

  const filteredProjects = useMemo(
    () =>
      selectedCategory === 'All'
        ? aiEngineerProjects
        : aiEngineerProjects?.filter(p => p?.category === selectedCategory),
    [selectedCategory]
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
              year={project?.year}
              tags={project?.tags}
              category={project?.category}
              detailHref={project?.detailHref}
              codeHref={project?.codeHref}
              liveHref={project?.liveHref}
            />
          ))}
          </div>

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
