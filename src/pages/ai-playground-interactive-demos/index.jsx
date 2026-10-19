import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CategoryScroller from '../../components/ui/CategoryScroller';
import ProjectCard from '../../components/ui/ProjectCard';
import FooterCTA from '../../components/ui/FooterCTA';
import aiEngineerProjects from '../../data/aiEngineerProjects';

const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = useMemo(
    () => ['Semua', ...Array.from(new Set(aiEngineerProjects.map(project => project.category)))],
    []
  );

  const filteredProjects = useMemo(
    () => (selectedCategory === 'Semua'
      ? aiEngineerProjects
      : aiEngineerProjects.filter(project => project.category === selectedCategory)),
    [selectedCategory]
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Koleksi Proyek - Portofolio Haldies</title>
        <meta
          name="description"
          content="Jelajahi kurasi proyek digital garapan Haldies. Temukan solusi elegan di bidang analitik, AI, otomasi, dan desain produk."
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
            <h1 className="mt-6 mb-4 text-4xl font-semibold text-primary md:text-5xl">
              Merancang riset AI dan eksperimen produk yang tepat guna
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
        title="Butuh bantuan mematangkan ide berikutnya?"
        description="Mari kolaborasi bikin solusi yang bermakna dan berbasis desain, yang bikin produkmu maju dengan jelas."
        primaryAction={{
          href: '/achievements',
          label: 'Lihat Semua Proyek'
        }}
        secondaryAction={{
          href: '/contact',
          label: 'Hubungi Saya'
        }}
      />
    </div>
  );
};

export default ProjectsShowcase;
