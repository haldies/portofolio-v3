import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Lead AI Instructor",
      organization: "Bangkit Academy by Google, Tokopedia, Gojek, & Traveloka",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `Haldies consistently demonstrated exceptional technical aptitude and leadership qualities throughout the Bangkit Academy program. His ability to grasp complex machine learning concepts and apply them to real-world problems was remarkable.\n\nWhat sets him apart is his natural teaching ability - he often helped fellow participants understand difficult concepts, showing both technical depth and communication skills that are rare to find.`,
      rating: 5,
      date: "March 2024",
      projectContext: "Bangkit Academy 2024 Cohort - Top 10% Graduate"
    },
    {
      id: 2,
      name: "Ahmad Rizki Pratama",
      role: "Senior ML Engineer",
      organization: "Laskar AI Program Mentor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `Working with Haldies on the capstone project was an absolute pleasure. His approach to problem-solving is methodical yet creative, and his implementation of the recommendation system exceeded all expectations.\n\nThe model achieved 94% accuracy, but more importantly, he documented everything meticulously and made the solution scalable. His code quality and attention to best practices are impressive for someone at his level.`,
      rating: 5,
      date: "February 2024",
      projectContext: "Best Capstone Project - Laskar AI Program"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Data Science Team Lead",
      organization: "TechCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: `I had the opportunity to collaborate with Haldies on a computer vision project, and I was impressed by his technical skills and professional approach. He quickly understood our requirements and delivered a solution that not only met but exceeded our expectations.\n\nHis ability to explain complex AI concepts in simple terms made him an excellent bridge between our technical and business teams.`,
      rating: 5,
      date: "January 2024",
      projectContext: "Freelance Computer Vision Project"
    },
    {
      id: 4,
      name: "Kevin Tan",
      role: "Fellow Bangkit Graduate",
      organization: "Software Engineer at Gojek",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: `Haldies was not just a peer but a mentor to many of us in the Bangkit program. His willingness to share knowledge and help others succeed created a positive learning environment for everyone.\n\nHis TikTok content on AI concepts helped me understand topics I was struggling with. He has a gift for making complex topics accessible and engaging.`,
      rating: 5,
      date: "March 2024",
      projectContext: "Bangkit Academy Peer Collaboration"
    },
    {
      id: 5,
      name: "Dr. Michael Thompson",
      role: "Professor of Computer Science",
      organization: "University Academic Advisor",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      content: `Throughout his academic journey, Haldies has shown exceptional dedication to learning and research. His final project on neural network optimization was among the best I've supervised in recent years.\n\nWhat impressed me most was his ability to bridge theoretical concepts with practical applications, demonstrating both academic rigor and industry readiness.`,
      rating: 5,
      date: "December 2023",
      projectContext: "Academic Capstone Project Supervision"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-warning fill-current" : "text-muted"}
      />
    ));
  };

  return (
    <div className="bg-card rounded-brand-lg p-6 shadow-brand-subtle border border-border">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-brand flex items-center justify-center mr-3">
          <Icon name="MessageSquare" size={20} className="text-accent" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Testimonials & Recommendations</h2>
          <p className="text-sm text-text-secondary">What colleagues and mentors say about working with me</p>
        </div>
      </div>
      {/* Main Testimonial Display */}
      <div className="relative">
        <div className="bg-muted/30 rounded-brand-lg p-6 mb-6">
          {/* Quote Icon */}
          <div className="absolute top-4 right-4">
            <Icon name="Quote" size={24} className="text-accent/30" />
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-foreground leading-relaxed whitespace-pre-line">
              {testimonials?.[activeTestimonial]?.content}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-3">
              {renderStars(testimonials?.[activeTestimonial]?.rating)}
            </div>
            <span className="text-sm text-text-secondary">
              {testimonials?.[activeTestimonial]?.rating}/5 stars
            </span>
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src={testimonials?.[activeTestimonial]?.avatar}
                alt={testimonials?.[activeTestimonial]?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-foreground">
                  {testimonials?.[activeTestimonial]?.name}
                </h4>
                <p className="text-sm text-text-secondary">
                  {testimonials?.[activeTestimonial]?.role}
                </p>
                <p className="text-xs text-text-secondary">
                  {testimonials?.[activeTestimonial]?.organization}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-text-secondary">
                {testimonials?.[activeTestimonial]?.date}
              </div>
              <div className="text-xs text-accent">
                {testimonials?.[activeTestimonial]?.projectContext}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevTestimonial}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-brand focus-brand"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-brand focus-brand ${
                  index === activeTestimonial ? 'bg-accent' : 'bg-muted'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-brand focus-brand"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
      {/* Testimonial Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">{testimonials?.length}</div>
          <div className="text-sm text-text-secondary">Recommendations</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-warning">5.0</div>
          <div className="text-sm text-text-secondary">Average Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-success">100%</div>
          <div className="text-sm text-text-secondary">Would Recommend</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">3</div>
          <div className="text-sm text-text-secondary">Industry Sectors</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;