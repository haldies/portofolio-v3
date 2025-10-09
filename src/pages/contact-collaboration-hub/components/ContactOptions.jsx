import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const contactOptions = [
    {
      id: 'hiring',
      title: 'Hiring & Recruitment',
      description: 'Looking to hire AI talent for your team or organization',
      icon: 'Users',
      color: 'bg-primary',
      features: ['Resume & Portfolio Review', 'Technical Interview Scheduling', 'Salary & Timeline Discussion', 'Reference Verification'],
      responseTime: '4-6 hours',
      preferredMethod: 'Email + LinkedIn'
    },
    {
      id: 'collaboration',
      title: 'Project Collaboration',
      description: 'Fellow AI engineers seeking partnership on innovative projects',
      icon: 'GitBranch',
      color: 'bg-secondary',
      features: ['Technical Scope Discussion', 'GitHub Repository Access', 'Code Review & Feedback', 'Joint Development Planning'],
      responseTime: '2-4 hours',
      preferredMethod: 'GitHub + Email'
    },
    {
      id: 'consulting',
      title: 'AI Consulting',
      description: 'Business leaders exploring AI implementation and strategy',
      icon: 'Lightbulb',
      color: 'bg-accent',
      features: ['AI Strategy Development', 'Technical Feasibility Analysis', 'Implementation Roadmap', 'ROI Assessment'],
      responseTime: '6-12 hours',
      preferredMethod: 'Video Call + Email'
    },
    {
      id: 'mentorship',
      title: 'Learning & Mentorship',
      description: 'Students and aspiring AI engineers seeking guidance',
      icon: 'GraduationCap',
      color: 'bg-trust-purple',
      features: ['Career Path Guidance', 'Skill Development Planning', 'Project Review & Feedback', 'Industry Insights'],
      responseTime: '1-2 days',
      preferredMethod: 'Video Call + Discord'
    },
    {
      id: 'speaking',
      title: 'Speaking Engagements',
      description: 'Conference organizers and event planners',
      icon: 'Mic',
      color: 'bg-warning',
      features: ['Keynote Presentations', 'Technical Workshops', 'Panel Discussions', 'Educational Content'],
      responseTime: '12-24 hours',
      preferredMethod: 'Email + Calendar'
    },
    {
      id: 'media',
      title: 'Media & Interviews',
      description: 'Journalists, podcasters, and content creators',
      icon: 'Camera',
      color: 'bg-error',
      features: ['Technical Interviews', 'AI Industry Commentary', 'Educational Content Creation', 'Thought Leadership'],
      responseTime: '6-12 hours',
      preferredMethod: 'Email + Social Media'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Collaboration Path
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Select the option that best describes your needs, and I'll provide a tailored response 
            with the most relevant information and next steps.
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactOptions?.map((option) => (
            <div
              key={option?.id}
              className={`relative bg-card border border-border rounded-brand-lg p-6 cursor-pointer transition-brand hover-lift ${
                selectedOption === option?.id ? 'ring-2 ring-accent shadow-brand-large' : 'hover:shadow-brand-medium'
              }`}
              onClick={() => setSelectedOption(selectedOption === option?.id ? null : option?.id)}
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${option?.color} rounded-brand flex items-center justify-center mb-4`}>
                <Icon name={option?.icon} size={24} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {option?.title}
              </h3>
              <p className="text-text-secondary mb-4">
                {option?.description}
              </p>

              {/* Response Info */}
              <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{option?.responseTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MessageSquare" size={14} />
                  <span className="text-xs">{option?.preferredMethod}</span>
                </div>
              </div>

              {/* Expandable Details */}
              {selectedOption === option?.id && (
                <div className="border-t border-border pt-4 mt-4">
                  <h4 className="font-medium text-foreground mb-3">What I'll provide:</h4>
                  <ul className="space-y-2">
                    {option?.features?.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="Check" size={14} className="text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="default"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="mt-4 w-full"
                  >
                    Get Started
                  </Button>
                </div>
              )}

              {/* Selection Indicator */}
              {selectedOption === option?.id && (
                <div className="absolute top-4 right-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center">
          <p className="text-text-secondary mb-4">
            Not sure which option fits? No problem!
          </p>
          <Button
            variant="outline"
            size="lg"
            iconName="MessageCircle"
            iconPosition="left"
          >
            Send a General Inquiry
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;