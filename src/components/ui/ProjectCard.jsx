import React from 'react';
import Image from '../AppImage';
import { cn } from '../../utils/cn';

const ProjectCard = ({
  image,
  title,
  description,
  year,
  tags = [],
  category,
  className,
  imageClassName,
  contentClassName,
  detailHref,
  liveHref,
  codeHref,
  children
}) => {
  const detailLink = detailHref || codeHref;
  const isInternalLink = detailLink?.startsWith('/');

  const handleClick = () => {
    if (!detailLink) return;
    
    if (isInternalLink) {
      window.location.href = detailLink;
    } else {
      window.open(detailLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article
      onClick={handleClick}
      className={cn(
        'group relative overflow-hidden rounded-2xl border-2 border-gray-300 bg-card/80 shadow-brand-subtle transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl',
        detailLink && 'cursor-pointer',
        className
      )}
    >
      <div className="relative h-64 w-full overflow-hidden p-6 ">
        <Image
          src={image}
          alt={title}
          className={cn('h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105', imageClassName)}
        />
        {category && (
          <span className="absolute top-7 left-6 rounded-full bg-foreground/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white backdrop-blur">
            {category}
          </span>
        )}
        {year && (
          <span className="absolute top-7 right-6 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm backdrop-blur">
            {year}
          </span>
        )}
      </div>
      <div className={cn('pb-6 px-6', contentClassName)}>
        <h2 className="mb-2 text-2xl font-semibold text-primary">{title}</h2>
        {description && (
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{description}</p>
        )}
        {children}
      </div>
    </article>
  );
};

export default ProjectCard;
