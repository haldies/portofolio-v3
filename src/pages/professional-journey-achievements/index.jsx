import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TimelineItem from './components/TimelineItem';
import SkillsAssessment from './components/SkillsAssessment';
import CertificationBadges from './components/CertificationBadges';
import TestimonialsSection from './components/TestimonialsSection';
import DownloadableCV from './components/DownloadableCV';

import TranscriptApp from './components/TranskriptApp';
import { BookOpen, FileText } from 'lucide-react';

const ProfessionalJourneyAchievements = () => {
  const [activeSection, setActiveSection] = useState('timeline');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => setIsLoading(false), 10);
    return () => clearTimeout(timer);
  }, []);

  const timelineData = [
    {
      "id": 1,
      "type": "achievement",
      "title": "AI Engineer - Laskar AI",
      "organization": "Laskar AI (Lintasarta, Dicoding, NVIDIA)",
      "period": "February 2025 - July 2025",
      "achievement": "Distinction (Top 10%) & Best Capstone Project Award",
      "description": "Terpilih sebagai salah satu dari 600 peserta dari 13.588 pendaftar. Merancang dan deploy model klasifikasi tipe kulit wajah menggunakan CNN, MobileNet, dan ViT. Menerapkan MLOps end-to-end di Google Cloud Platform (GCP) dan membangun inference API dengan FastAPI, serta web interface Cskin.",
      "skills": [
        "CNN",
        "MobileNet",
        "Vision Transformers (ViT)",
        "MLOps",
        "Google Cloud Platform (GCP)",
        "FastAPI",
        "Model Deployment"
      ],
      "status": "completed",
      "logo": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop&crop=center",
      "details": {
        "learningOutcomes": [
          "Pengembangan model klasifikasi citra tingkat lanjut.",
          "Penerapan MLOps untuk deployment skala produksi.",
          "Kolaborasi tim dalam desain dan deployment model.",
          "Integrasi API inference dan web interface."
        ],
        "projects": [
          {
            "name": "Cskin (Skin Type Classification Model)",
            "description": "Model klasifikasi tipe kulit wajah dari gambar menggunakan arsitektur deep learning."
          }
        ],
        "metrics": [
          {
            "value": "Top 10%",
            "label": "Ranking"
          },
          {
            "value": "Best Capstone",
            "label": "Project Award"
          },
          {
            "value": "4",
            "label": "Team Members"
          }
        ]
      }
    },
    {
      "id": 2,
      "type": "education",
      "title": "Machine Learning Cohort - Bangkit Academy",
      "organization": "Google, GoTo, & Traveloka",
      "period": "September 2024 - December 2024",
      "achievement": "Distinction (Top 10% of 1,500 participants) & Top 50 Capstone",
      "description": "Terpilih sebagai salah satu dari 4.636 peserta dari 45.841+ pendaftar. Mengembangkan model pengenalan ekspresi wajah (CNN + ViT) dan pipeline pengenalan ekspresi teks (BiLSTM + IndoBERT). Kedua model diintegrasikan menggunakan FastAPI.",
      "skills": [
        "Machine Learning",
        "TensorFlow (Expert)",
        "CNN",
        "Vision Transformer (ViT)",
        "BiLSTM",
        "IndoBERT",
        "FastAPI (Expert)",
        "NLP"
      ],
      "status": "completed",
      "logo": "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center",
      "details": {
        "learningOutcomes": [
          "Pengembangan model Computer Vision (CNN dan ViT).",
          "Penerapan NLP untuk data bahasa Indonesia (IndoBERT).",
          "Kontribusi pada training model dan deployment pipeline.",
          "Integrasi sistem kompleks menggunakan FastAPI."
        ],
        "projects": [
          {
            "name": "Facial and Text Expression Recognition Pipeline",
            "description": "Sistem gabungan untuk pengenalan ekspresi dari wajah dan teks."
          }
        ],
        "metrics": [
          {
            "value": "Top 10%",
            "label": "Ranking"
          },
          {
            "value": "Top 50",
            "label": "Capstone Project Rank"
          },
          {
            "value": "7",
            "label": "Team Members"
          }
        ]
      }
    },
    {
      "id": 3,
      "type": "work_experience",
      "title": "Full stack Developer Intern",
      "organization": "GoodPets",
      "period": "January 2024 - July 2024",
      "achievement": "Developed Blog Platform and Custom CMS",
      "description": "Merancang dan mengembangkan platform blog dari awal menggunakan Tailwind CSS, JavaScript, Prisma, MySQL, dan Next.js 13. Membangun Content Management System (CMS) yang intuitif dan mengoptimalkan performa menggunakan SSR dan CSR.",
      "skills": [
        "JavaScript (Expert)",
        "Next.js (Expert)",
        "Tailwind (Expert)",
        "Prisma",
        "MySQL",
        "SSR",
        "CSR"
      ],
      "status": "completed",
      "logo": "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center",
      "details": {
        "learningOutcomes": [
          "Pengembangan full stack menggunakan Next.js 13 dan database relasional.",
          "Implementasi desain responsif dan SEO-optimized.",
          "Pengoptimalan performa website melalui SSR dan CSR.",
          "Perancangan sistem Content Management System (CMS)."
        ]
      }
    },
    {
      "id": 4,
      "type": "education",
      "title": "S1 Informatics Engineering",
      "organization": "Universitas Nusa Putra - Sukabumi, Indonesia",
      "period": "september 2021 - july 2025",
      "achievement": "GPA 3.47",
      "description": "Lulusan Teknik Informatika dengan minat kuat pada AI Engineering, khususnya Large Language Models (LLMs) dan Computer Vision.",
      "skills": [
        "Informatics Engineering",
        "AI Engineering",
        "LLMs",
        "Computer Vision",
        "Python (Expert)"
      ],
      "status": "completed",
      "logo": "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=100&h=100&fit=crop&crop=center",
      "details": {
        "learningOutcomes": [
          "Dasar-dasar Teknik Informatika.",
          "Keterampilan mendalam di bidang AI/ML (berdasarkan pengalaman kerja dan proyek)."
        ],
        "metrics": [
          {
            "value": "3.47",
            "label": "GPA"
          },
          {
            "value": "S1",
            "label": "Degree"
          }
        ]
      }
    },
    {
      "id": 5,
      "type": "other_activity",
      "title": "AI Educational Content Creator",
      "organization": "TikTok & Social Media",
      "period": "Ongoing (Outside of academics)",
      "achievement": "Sharing AI insights for a broader audience",
      "description": "Secara aktif berbagi wawasan tentang AI sebagai pembuat konten edukasi di TikTok, berfokus pada penyederhanaan konsep yang kompleks bagi audiens yang lebih luas.",
      "skills": [
        "Content Creation",
        "AI Education",
        "Communication",
        "Social Media"
      ],
      "status": "in-progress",
      "logo": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop&crop=center",
      "details": {
        "learningOutcomes": [
          "Keterampilan komunikasi teknis yang efektif.",
          "Penyederhanaan konsep AI yang kompleks."
        ]
      }
    }
  ];

  const navigationSections = [
    { id: 'timeline', name: 'Journey Timeline', icon: 'Clock' },
    { id: 'skills', name: 'Skills Assessment', icon: 'TrendingUp' },
    { id: 'certifications', name: 'Certifications', icon: 'Award' },
    { id: 'testimonials', name: 'Transcript', icon: 'MessageSquare' },
    { id: 'download', name: 'Download CV', icon: 'Download' }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading professional journey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Journey & Achievements - Haldies Portfolio</title>
        <meta name="description" content="Explore Haldies' professional journey, achievements, certifications, and skills in AI/ML engineering. Download CV and view testimonials from industry professionals." />
        <meta name="keywords" content="AI engineer, machine learning, professional journey, achievements, certifications, CV, resume, testimonials" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              <Icon name="TrendingUp" size={16} className="mr-2" />
              Professional Journey & Achievements
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building Excellence in
              <span className="text-accent block">AI & Machine Learning</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              From academic foundations to industry recognition, explore my journey of continuous learning,
              technical growth, and impactful contributions to the AI/ML community.
            </p>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {navigationSections?.map((section) => (
              <Button
                key={section?.id}
                variant={activeSection === section?.id ? "default" : "outline"}
                size="sm"
                iconName={section?.icon}
                iconPosition="left"
                onClick={() => setActiveSection(section?.id)}
                className="transition-brand"
              >
                {section?.name}
              </Button>
            ))}
          </div>
        </div>
      </section>
      {/* Content Sections */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {activeSection === 'timeline' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Professional Timeline</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Key milestones, achievements, and learning experiences that shaped my AI/ML expertise
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                {timelineData?.map((item, index) => (
                  <TimelineItem
                    key={item?.id}
                    item={item}
                    isLast={index === timelineData?.length - 1}
                  />
                ))}
              </div>
            </div>
          )}

          {activeSection === 'skills' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Skills Assessment</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Technical proficiency across programming languages, frameworks, and tools
                </p>
              </div>
              <SkillsAssessment />
            </div>
          )}

          {activeSection === 'certifications' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Certifications & Badges</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Professional credentials from leading technology companies and educational platforms
                </p>
              </div>
              <CertificationBadges />
            </div>
          )}


          {activeSection === 'testimonials' && (
            <div>
              {/* Header */}
              <header className="bg-white shadow-lg border-b-4 border-blue-600">
                <div className="max-w-7xl mx-auto px-4 py-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-blue-600 rounded-full">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                      Professional Journey & Achievements
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Comprehensive academic and professional development records showcasing excellence in Computer Science,
                      AI/ML specialization, and continuous learning through distinguished programs.
                    </p>
                  </div>
                </div>
              </header>
              <TranscriptApp />
            </div>
          )}

          {activeSection === 'download' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Download CV</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Get my resume in your preferred format, customized for different roles and industries
                </p>
              </div>
              <DownloadableCV />
            </div>
          )}
        </div>
      </section>
      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-gradient rounded-brand-lg p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how my AI/ML expertise can contribute to your next project or team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                asChild
              >
                <a href="/contact">
                  Start a Conversation
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={() => setActiveSection('download')}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProfessionalJourneyAchievements;