import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineItem = ({ item, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'in-progress':
        return 'bg-warning text-warning-foreground';
      case 'upcoming':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  const getIconName = (type) => {
    switch (type) {
      case 'education':
        return 'GraduationCap';
      case 'certification':
        return 'Award';
      case 'project':
        return 'Code';
      case 'achievement':
        return 'Trophy';
      default:
        return 'Calendar';
    }
  };

  return (
    <div className="group relative flex items-start gap-6 pb-12 last:pb-0">
      {/* Journey Line (dashed, map-like) */}
      {!isLast && (
        <div
          className="absolute left-6 top-14 w-[2px] h-[calc(100%-2rem)] bg-repeat-y bg-[length:2px_12px] bg-[linear-gradient(to_bottom,rgba(148,163,184,0.6)_8px,transparent_8px)] group-hover:bg-[linear-gradient(to_bottom,rgba(56,189,248,0.8)_8px,transparent_8px)] transition-colors duration-300"
        />
      )}
      {/* Timeline Icon */}
      <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full shadow-xl shadow-accent/10 ring-8 ring-background ${getStatusColor(item?.status)}`}>
        <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping" aria-hidden="true" />
        <Icon name={getIconName(item?.type)} size={20} className="transition-transform duration-300 group-hover:scale-110" />
      </div>
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_70px_-20px_rgba(56,189,248,0.35)] backdrop-blur-sm">
          {/* Subtle map grid background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40 mix-blend-luminosity"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)",
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="p-5 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4 sm:mb-5">
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-text-secondary">
                    <Icon name={getIconName(item?.type)} size={14} />
                    {item?.type?.replace('_', ' ')}
                  </span>
                  {item?.achievement && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent shadow-inner">
                      <Icon name="Star" size={14} />
                      {item?.achievement}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {item?.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-text-secondary">
                  <span className="inline-flex items-center gap-2">
                    <Icon name="Building2" size={16} className="text-accent" />
                    {item?.organization}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Icon name="CalendarDays" size={16} className="text-accent" />
                    {item?.period}
                  </span>
                </div>
              </div>
              {item?.logo && (
                <div className="hidden xs:block shrink-0 rounded-2xl border border-border/60 bg-background/80 p-3 shadow-inner">
                  <Image
                    src={item?.logo}
                    alt={`${item?.organization} logo`}
                    className="w-14 h-14 object-contain"
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-[0.95rem] sm:text-base text-text-secondary leading-relaxed mb-5 sm:mb-6">
              {item?.description}
            </p>

            {/* Skills Tags */}
            {item?.skills && item?.skills?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                {item?.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-border/60 bg-muted/60 px-3 py-1 text-xs font-medium text-text-secondary transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Expand/Collapse Button */}
            {item?.details && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 focus-brand"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? 'Show Less Details' : 'Show Full Impact'}</span>
                <Icon
                  name="ChevronDown"
                  size={16}
                  className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                />
              </button>
            )}
          </div>

          {/* Expanded Details */}
          {item?.details && (
            <div
              className={`px-6 sm:px-8 pb-8 pt-0 transition-[max-height,opacity] duration-300 ease-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
              <div className="mt-6 pt-6 border-t border-border/60 space-y-5">
                {item?.details?.learningOutcomes && (
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-text-secondary mb-3">
                      Learning Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {item?.details?.learningOutcomes?.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                          <Icon name="CheckCircle2" size={16} className="mt-0.5 text-success" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item?.details?.projects && (
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-text-secondary mb-3">
                      Key Projects
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {item?.details?.projects?.map((project, index) => (
                        <div key={index} className="rounded-2xl border border-border/60 bg-muted/50 px-4 py-3">
                          <h5 className="text-sm font-semibold text-foreground mb-1">
                            {project?.name}
                          </h5>
                          <p className="text-xs text-text-secondary leading-relaxed">
                            {project?.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item?.details?.metrics && (
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-text-secondary mb-3">
                      Impact Metrics
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {item?.details?.metrics?.map((metric, index) => (
                        <div key={index} className="rounded-2xl bg-card border border-border/60 px-4 py-3 text-center shadow-brand-subtle">
                          <div className="text-xl font-bold text-accent">
                            {metric?.value}
                          </div>
                          <div className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                            {metric?.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
