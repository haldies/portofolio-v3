import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CategoryScroller from '../../components/ui/CategoryScroller';
import ProjectCard from '../../components/ui/ProjectCard';
import FooterCTA from '../../components/ui/FooterCTA';
import aiEngineerProjects from '../../data/aiEngineerProjects';

const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(aiEngineerProjects.map(project => project.category)))],
    []
  );

  const filteredProjects = useMemo(
    () => (selectedCategory === 'All'
      ? aiEngineerProjects
      : aiEngineerProjects.filter(project => project.category === selectedCategory)),
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
      <section className="pt-36 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mt-6 mb-4 text-4xl font-semibold text-foreground md:text-5xl">
              Crafting purposeful AI research and product experiments
            </h1>
          
          </div>
        </div>
      </section>
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-7xl">
          <CategoryScroller
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-2 md:gap-3 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          year={project.year}
          tags={project.tags}
          category={project.category}
              detailHref={project.detailHref}
              codeHref={project.codeHref}
              liveHref={project.liveHref}
            />
          ))}
        </div>
      </section>


      <FooterCTA
        title="Need a hand shaping your next idea?"
        description="Let's collaborate on meaningful, design-led solutions that move your product forward with intent."
        primaryAction={{
          href: '/achievements',
          label: 'View All Projects'
        }}
        secondaryAction={{
          href: '/contact',
          label: "Let's Connect"
        }}
      />
    </div>
  );
};

export default ProjectsShowcase;
