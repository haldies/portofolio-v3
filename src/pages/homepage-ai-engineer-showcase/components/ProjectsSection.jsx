import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import aiEngineerProjects from '../../../data/aiEngineerProjects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 bg-white py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Judul singkat */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Portofolio
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Karya Pilihan dengan Dampak Nyata
          </h2>
        </div>

        {/* Projects List */}
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
          {aiEngineerProjects.map((project) => (
            <Link
              key={project.id}
              to={project.detailHref}
              aria-label={`Selengkapnya tentang ${project.title}`}
              className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 shadow-sm ring-1 ring-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Full-bleed image — tanpa efek zoom */}
              <Image
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Gelap gradient biar teks kebaca */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />

              {/* Judul + deskripsi di atas gambar */}
              <div className="relative flex flex-col p-6">
                <h3 className="text-xl font-bold leading-snug text-white">
                  {project.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/75">
                  {project.description}
                </p>
                <span className="mt-3 inline-flex w-fit flex-col gap-1.5 text-sm font-medium tracking-wide text-white">
                  <span className="inline-flex items-center gap-2">
                    Selengkapnya
                    <Icon
                      name="ArrowRight"
                      size={16}
                      className="-translate-x-0.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
                    />
                  </span>
                  <span className="h-px w-full origin-left scale-x-50 bg-white/40 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:bg-white/90" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
