import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectShowcase = () => {
  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 'sentiment-analyzer',
      title: 'Real-time Sentiment Analysis Platform',
      description: 'Advanced NLP system that analyzes customer feedback sentiment in real-time, helping businesses understand customer emotions and improve service quality.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'Natural Language Processing',
      technologies: ['Python', 'TensorFlow', 'BERT', 'FastAPI', 'React'],
      metrics: {
        accuracy: '94.2%',
        processing: '< 100ms',
        languages: '12 supported'
      },
      features: [
        'Multi-language sentiment detection',
        'Real-time processing pipeline',
        'Custom model fine-tuning',
        'Interactive dashboard'
      ],
      demoUrl: '/ai-playground',
      githubUrl: 'https://github.com/haldies',
      liveUrl: '#',
      status: 'Production Ready'
    },
    {
      id: 'computer-vision',
      title: 'Smart Object Detection System',
      description: 'Computer vision solution for automated quality control in manufacturing, detecting defects and anomalies with high precision using deep learning.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      category: 'Computer Vision',
      technologies: ['PyTorch', 'YOLO', 'OpenCV', 'Docker', 'AWS'],
      metrics: {
        accuracy: '97.8%',
        speed: '30 FPS',
        defects: '15 types'
      },
      features: [
        'Real-time object detection',
        'Defect classification',
        'Automated reporting',
        'Edge deployment ready'
      ],
      demoUrl: '/ai-playground',
      githubUrl: 'https://github.com/haldies',
      liveUrl: '#',
      status: 'In Production'
    },
    {
      id: 'recommendation-engine',
      title: 'Personalized Recommendation Engine',
      description: 'Machine learning system that provides personalized product recommendations, increasing user engagement and conversion rates through advanced collaborative filtering.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: 'Machine Learning',
      technologies: ['Scikit-learn', 'Pandas', 'Redis', 'PostgreSQL', 'Flask'],
      metrics: {
        accuracy: '89.5%',
        ctr: '+23%',
        users: '100K+ active'
      },
      features: [
        'Collaborative filtering',
        'Content-based recommendations',
        'A/B testing framework',
        'Scalable architecture'
      ],
      demoUrl: '/ai-playground',
      githubUrl: 'https://github.com/haldies',
      liveUrl: '#',
      status: 'Scaling'
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
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories?.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects?.map((project) => (
              <div
                key={project?.id}
                className="group bg-card border border-border rounded-brand-lg overflow-hidden hover:shadow-brand-medium transition-all duration-300"
              >
                <div className="relative h-40">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-background/90 text-foreground text-xs font-medium rounded-full">
                      {project?.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      {project?.status}
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project?.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {project?.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project?.technologies?.slice(0, 4)?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Button variant="default" size="sm" iconName="Play" asChild>
                      <Link to={project?.demoUrl}>Demo</Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Github"
                      onClick={() => window.open(project?.githubUrl, '_blank')}
                    >
                      Code
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="ExternalLink"
                      onClick={() => window.open(project?.liveUrl, '_blank')}
                    >
                      Live
                    </Button>
                  </div>
                </div>
              </div>
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
