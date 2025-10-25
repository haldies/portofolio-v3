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
      detailHref: '/projects/google-lens-clone',
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
      detailHref: '/projects/image-classification-skin-type',
      codeHref: 'https://github.com/haldies/personalization-engine',
      liveHref: 'https://demo.haldies.com/personalization'
    },
    {
      id: 4,
      title: 'Zushi NFT Landing Page',
      description: 'Landing page responsif untuk proyek kripto Zushi yang menyoroti inovasi, keamanan, dan keberlanjutan mata uang digital.',
      image: '/assets/Projekan/web-nft.jpg',
      category: 'Frontend Development',
      tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      detailHref: '/projects/zushi-nft',
      liveHref: 'https://demo.haldies.com/zushi-nft'
    }
  ];


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
