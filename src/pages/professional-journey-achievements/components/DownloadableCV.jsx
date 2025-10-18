import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DownloadableCV = () => {
  const [selectedFormat, setSelectedFormat] = useState('comprehensive');
  const [isGenerating, setIsGenerating] = useState(false);

  const cvFormats = [
    {
      id: 'comprehensive',
      name: 'Comprehensive CV',
      description: 'Complete professional profile with all projects, skills, and achievements',
      icon: 'FileText',
      pages: '4-5 pages',
      bestFor: 'Academic positions, senior roles, detailed evaluation'
    },
    {
      id: 'technical',
      name: 'Technical Resume',
      description: 'Focus on technical skills, programming languages, and project implementations',
      icon: 'Code',
      pages: '2-3 pages',
      bestFor: 'Software engineering, ML engineering, technical roles'
    },
    {
      id: 'executive',
      name: 'Executive Summary',
      description: 'High-level overview emphasizing leadership, impact, and business value',
      icon: 'TrendingUp',
      pages: '1-2 pages',
      bestFor: 'Management roles, consulting, business-focused positions'
    },
    {
      id: 'academic',
      name: 'Academic CV',
      description: 'Research-focused with publications, conferences, and academic achievements',
      icon: 'GraduationCap',
      pages: '3-4 pages',
      bestFor: 'Research positions, PhD applications, academic institutions'
    }
  ];

  const downloadOptions = [
    {
      format: 'PDF',
      icon: 'FileDown',
      description: 'Standard format, widely compatible',
      action: 'download-pdf'
    }
  ];

  const handleDownload = async (action) => {
    setIsGenerating(true);
    
    // Simulate download generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading ${selectedFormat} CV in ${action} format`);
    
    setIsGenerating(false);
  };

  const handleCustomization = () => {
    // This would open a customization modal or redirect to a customization page
    console.log('Opening CV customization options');
  };

  return (
    <div className="bg-card rounded-brand-lg p-6 shadow-brand-subtle border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-accent/10 rounded-brand flex items-center justify-center mr-3">
            <Icon name="Download" size={20} className="text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Download CV</h2>
            <p className="text-sm text-text-secondary">Get my resume in your preferred format</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="Settings"
          iconPosition="left"
          onClick={handleCustomization}
        >
          Customize
        </Button>
      </div>
      {/* Format Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-foreground mb-4">Choose CV Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cvFormats?.map((format) => (
            <div
              key={format?.id}
              onClick={() => setSelectedFormat(format?.id)}
              className={`p-4 rounded-brand-lg border-2 cursor-pointer transition-brand hover-lift ${
                selectedFormat === format?.id
                  ? 'border-accent bg-accent/5' :'border-border bg-muted/30 hover:border-accent/50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-brand flex items-center justify-center ${
                  selectedFormat === format?.id ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={format?.icon} size={16} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">{format?.name}</h4>
                  <p className="text-sm text-text-secondary mb-2">{format?.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-accent font-medium">{format?.pages}</span>
                    <span className="text-text-secondary">Best for: {format?.bestFor}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Download Options */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-foreground mb-4">Download Format</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {downloadOptions?.map((option) => (
            <Button
              key={option?.action}
              variant="outline"
              onClick={() => handleDownload(option?.action)}
              disabled={isGenerating}
              loading={isGenerating}
              iconName={option?.icon}
              iconPosition="left"
              className="h-auto p-4 flex-col items-start text-left"
            >
              <div className="font-medium mb-1">{option?.format}</div>
              <div className="text-xs text-text-secondary">{option?.description}</div>
            </Button>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default DownloadableCV;