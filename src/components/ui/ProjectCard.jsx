import React from 'react';
import Image from '../AppImage';
import Button from './Button';
import { cn } from '../../utils/cn';

const ProjectCard = ({
  image,
  title,
  description,
  tags = [],
  category,
  className,
  imageClassName,
  contentClassName,
  detailHref,
  liveHref,
  codeHref,
  detailLabel = 'Detail Project',
  liveLabel = 'Live Demo',
  detailIcon = 'FileText',
  liveIcon = 'ExternalLink',
  children
}) => {
  const detailLink = detailHref || codeHref;
  const renderActionButton = (href, label, iconName) => {
    if (!href) return null;
    const isInternalLink = href.startsWith('/');

    if (isInternalLink) {
      return (
        <Button variant="outline" size="sm" iconName={iconName} asChild>
          <a href={href}>{label}</a>
        </Button>
      );
    }

    return (
      <Button
        variant="outline"
        size="sm"
        iconName={iconName}
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.open(href, '_blank', 'noopener,noreferrer');
          }
        }}
      >
        {label}
      </Button>
    );
  };

  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-2xl border-2 border-gray-300 bg-card/80 shadow-brand-subtle transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl',
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
          <span className="absolute top-7 left-6 rounded-full bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground backdrop-blur">
            {category}
          </span>
        )}
      </div>
      <div className={cn('pb-6 px-6', contentClassName)}>
        <h2 className="mb-2 text-2xl font-semibold text-foreground">{title}</h2>
        {description && (
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{description}</p>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground/80">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 transition-colors duration-200 group-hover:border-foreground/40 group-hover:text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {(detailLink || liveHref) && (
          <div className="mt-6 flex flex-wrap gap-2">
            {renderActionButton(detailLink, detailLabel, detailIcon)}
            {renderActionButton(liveHref, liveLabel, liveIcon)}
          </div>
        )}
        {children}
      </div>
    </article>
  );
};

export default ProjectCard;
