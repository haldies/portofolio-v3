import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import CategoryScroller from '../../components/ui/CategoryScroller';
import ProjectCard from '../../components/ui/ProjectCard';

  const projects = [
    {
      id: 1,
      title: 'MagangHub LLM ',
      description: 'Implementasi Large Language Model (LLM) untuk platform MagangHub guna meningkatkan interaksi pengguna melalui fitur  rekomendasi lowongan berbasis AI.',
      image: '/assets/Projekan/llmmaganghub.png',
      category: 'Large Language Model',
      tags: ['Llm', 'React.js', 'tailwind', 'vite'],
      detailHref: '/projects/llm-maganghub',
      liveHref: 'https://maganghub-genz.vercel.app'
    },
    {
      id: 2,
      title: 'Google lens clone',
      description: 'Mengembangkan fitur pencarian gambar mirip seperti Google Lens, menggunakan MobileNet sebagai feature extractor dan dataset 33.000 gambar produk.',
      image: '/assets/images/google_lens.png',
      category: 'Computer Vision',
      tags: ['YOLOv8', 'TensorRT', 'MLOps', 'Edge Deployment'],
      codeHref: 'https://github.com/haldies/vision-quality-inspector',
      liveHref: 'https://demo.haldies.com/vision-quality'
    },
    {
      id: 3,
      title: 'Image classification Skin Type',
      description: 'Membangun model klasifikasi citra untuk mengidentifikasi tipe kulit manusia menggunakan CNN, dengan akurasi mencapai 92% pada dataset yang beragam.',
      image: '/assets/images/CSkin_Skin_Classification.webp',
      category: 'Machine Learning',
      tags: ['image classification', 'CNN', 'TensorFlow', 'Vit', 'Flask'],
      codeHref: 'https://github.com/haldies/personalization-engine',
      liveHref: 'https://demo.haldies.com/personalization'
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
              tags={project.tags}
              category={project.category}
              detailHref={project.detailHref}
              codeHref={project.codeHref}
              liveHref={project.liveHref}
            />
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
