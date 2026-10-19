import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import TimelineItem from './components/TimelineItem';
import SkillsAssessment from './components/SkillsAssessment';
import CertificationBadges from './components/CertificationBadges';

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
      "period": "Februari 2025 - Juli 2025",
      "achievement": "Distinction (Top 10%) & Penghargaan Proyek Capstone Terbaik",
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
            "label": "Peringkat"
          },
          {
            "value": "Best Capstone",
            "label": "Penghargaan Proyek"
          },
          {
            "value": "4",
            "label": "Anggota Tim"
          }
        ]
      }
    },
    {
      "id": 2,
      "type": "education",
      "title": "Kohort Machine Learning - Bangkit Academy",
      "organization": "Google, GoTo, & Traveloka",
      "period": "September 2024 - Desember 2024",
      "achievement": "Distinction (Top 10% dari 1.500 peserta) & 50 Capstone Terbaik",
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
            "label": "Peringkat"
          },
          {
            "value": "Top 50",
            "label": "Peringkat Proyek Capstone"
          },
          {
            "value": "7",
            "label": "Anggota Tim"
          }
        ]
      }
    },
    {
      "id": 3,
      "type": "work_experience",
      "title": "Magang Full Stack Developer",
      "organization": "GoodPets",
      "period": "Januari 2024 - Juli 2024",
      "achievement": "Mengembangkan Platform Blog dan CMS Kustom",
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
      "title": "S1 Teknik Informatika",
      "organization": "Universitas Nusa Putra - Sukabumi, Indonesia",
      "period": "September 2021 - Juli 2025",
      "achievement": "IPK 3.47",
      "description": "Lulusan Teknik Informatika dengan minat kuat pada AI Engineering, khususnya Large Language Models (LLMs) dan Computer Vision.",
      "skills": [
        "Teknik Informatika",
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
            "label": "IPK"
          },
          {
            "value": "S1",
            "label": "Gelar"
          }
        ]
      }
    },
    {
      "id": 5,
      "type": "other_activity",
      "title": "Kreator Konten Edukasi AI",
      "organization": "TikTok & Media Sosial",
      "period": "Berjalan (Di luar akademik)",
      "achievement": "Berbagi wawasan AI untuk audiens yang lebih luas",
      "description": "Secara aktif berbagi wawasan tentang AI sebagai pembuat konten edukasi di TikTok, berfokus pada penyederhanaan konsep yang kompleks bagi audiens yang lebih luas.",
      "skills": [
        "Pembuatan Konten",
        "Edukasi AI",
        "Komunikasi",
        "Media Sosial"
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
    { id: 'timeline', name: 'Linimasa Perjalanan', icon: 'Clock' },
    { id: 'skills', name: 'Penilaian Keahlian', icon: 'TrendingUp' },
    { id: 'certifications', name: 'Sertifikasi', icon: 'Award' },
    { id: 'testimonials', name: 'Transkrip', icon: 'MessageSquare' },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Memuat perjalanan profesional...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Perjalanan Profesional & Pencapaian - Portofolio Haldies</title>
        <meta name="description" content="Jelajahi perjalanan profesional, pencapaian, sertifikasi, dan keahlian Haldies di bidang rekayasa AI/ML. Unduh CV dan lihat testimoni dari para profesional industri." />
        <meta name="keywords" content="AI engineer, machine learning, professional journey, achievements, certifications, CV, resume, testimonials" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Membangun Keunggulan dalam
              <span className="text-primary block">AI & Machine Learning</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Dari fondasi akademik hingga pengakuan industri, jelajahi perjalanan saya dalam pembelajaran
              berkelanjutan, pengembangan teknis, dan kontribusi nyata untuk komunitas AI/ML.
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
                <h2 className="text-3xl font-bold text-primary mb-4">Linimasa Profesional</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Tonggak penting, pencapaian, dan pengalaman belajar yang membentuk keahlian AI/ML saya
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
                <h2 className="text-3xl font-bold text-primary mb-4">Penilaian Keahlian</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Kemahiran teknis dalam bahasa pemrograman, framework, dan perkakas
                </p>
              </div>
              <SkillsAssessment />
            </div>
          )}

          {activeSection === 'certifications' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Sertifikasi & Lencana</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Kredensial profesional dari perusahaan teknologi terkemuka dan platform edukasi
                </p>
              </div>
              <CertificationBadges />
            </div>
          )}


          {activeSection === 'testimonials' && (
            <div>
              {/* Header */}
              <header className="bg-card shadow-brand-large border-b-4 border-primary">
                <div className="max-w-7xl mx-auto px-4 py-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary rounded-full">
                        <BookOpen className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h1 className="text-4xl font-bold text-primary mb-2">
                      Perjalanan Profesional & Pencapaian
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                      Rekam jejak akademik dan pengembangan profesional yang komprehensif, menunjukkan keunggulan dalam Ilmu Komputer,
                      spesialisasi AI/ML, dan pembelajaran berkelanjutan melalui program-program unggulan.
                    </p>
                  </div>
                </div>
              </header>
              <TranscriptApp />
            </div>
          )}

        </div>
      </section>


    </div>
  );
};

export default ProfessionalJourneyAchievements;
