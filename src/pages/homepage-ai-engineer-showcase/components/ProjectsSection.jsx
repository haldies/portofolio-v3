import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import aiEngineerProjects from '../../../data/aiEngineerProjects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            Project & Produk Digital
          </h2>
          <p className="mt-3 text-base text-text-secondary">
            Koleksi aplikasi web, mobile, AI, dan tools produktivitas yang telah dibangun.
          </p>
        </div>

        {/* Projects List */}
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
          {aiEngineerProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Project Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt=""
                  className="h-full w-full bg-slate-100 object-contain p-3"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-grow flex-col p-6">
                <h3 className="text-xl font-bold text-slate-900 transition-colors duration-150 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to={project.detailHref}
                    className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label={`Lihat detail ${project.title}`}
                  >
                    Lihat detail proyek
                    <Icon name="ArrowRight" size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
