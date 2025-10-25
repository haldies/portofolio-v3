import React from 'react';
import { cn } from '../../utils/cn';

const defaultPrimaryIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const defaultSecondaryIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const FooterCTA = ({
  title = 'Ready to Build the Future with AI?',
  description = "Let's collaborate on thoughtful AI solutions that create meaningful impact. From concept to deployment, I'm here to help bring your vision to life.",
  primaryAction = {
    href: '/contact',
    label: 'Start Your AI Project',
    icon: defaultPrimaryIcon
  },
  secondaryAction = {
    href: '/ai-playground',
    label: 'Explore AI Playground',
    icon: defaultSecondaryIcon
  },
  className,
  containerClassName,
  actionsWrapperClassName
}) => {
  const renderAction = (action, variant) => {
    if (!action) return null;
    const hasHref = typeof action.href === 'string' && action.href.length > 0;
    if (!hasHref && typeof action.onClick !== 'function') {
      return null;
    }
    const {
      href,
      label,
      icon,
      target,
      rel,
      className: actionClassName,
      onClick,
      type = 'button'
    } = action;
    if (!label) return null;
    const baseClasses =
      variant === 'primary'
        ? 'inline-flex items-center space-x-2 px-8 py-4 bg-foreground text-white rounded-full font-medium hover:bg-foreground/90 transition-colors text-base'
        : 'inline-flex items-center space-x-2 px-8 py-4 border border-slate-300 text-foreground rounded-full font-medium hover:bg-slate-100 transition-colors text-base';

    const content = (
      <>
        <span>{label}</span>
        {icon || (variant === 'primary' ? defaultPrimaryIcon : defaultSecondaryIcon)}
      </>
    );

    if (hasHref) {
      return (
        <a
          key={variant}
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={cn(baseClasses, actionClassName)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        key={variant}
        type={type}
        onClick={onClick}
        className={cn(baseClasses, actionClassName)}
      >
        {content}
      </button>
    );
  };

  return (
    <section
      className={cn(
        'py-20 bg-gradient-to-r from-slate-100 via-white to-slate-100 border-t border-slate-200/70',
        className
      )}
    >
      <div
        className={cn(
          'container mx-auto px-4 sm:px-6 lg:px-8 text-center',
          containerClassName
        )}
      >
        {title && (
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        {(primaryAction || secondaryAction) && (
          <div
            className={cn(
              'flex flex-col sm:flex-row gap-4 justify-center',
              actionsWrapperClassName
            )}
          >
            {renderAction(primaryAction, 'primary')}
            {renderAction(secondaryAction, 'secondary')}
          </div>
        )}
      </div>
    </section>
  );
};

export default FooterCTA;
