import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Instruktur Utama AI",
      organization: "Bangkit Academy by Google, Tokopedia, Gojek, & Traveloka",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `Haldies secara konsisten menunjukkan kemampuan teknis dan jiwa kepemimpinan yang luar biasa sepanjang program Bangkit Academy. Kemampuannya memahami konsep machine learning yang kompleks dan menerapkannya pada masalah nyata sangat mengesankan.\n\nYang membedakannya adalah bakat mengajarnya yang alami — ia sering membantu peserta lain memahami konsep yang sulit, menunjukkan kedalaman teknis sekaligus kemampuan komunikasi yang jarang ditemukan.`,
      rating: 5,
      date: "Maret 2024",
      projectContext: "Kohort Bangkit Academy 2024 - Lulusan Top 10%"
    },
    {
      id: 2,
      name: "Ahmad Rizki Pratama",
      role: "Insinyur ML Senior",
      organization: "Mentor Program Laskar AI",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `Bekerja dengan Haldies dalam proyek capstone adalah pengalaman yang sangat menyenangkan. Pendekatannya dalam memecahkan masalah sangat metodis namun kreatif, dan implementasi sistem rekomendasinya melampaui semua ekspektasi.\n\nModelnya mencapai akurasi 94%, tapi yang lebih penting, ia mendokumentasikan semuanya dengan teliti dan membuat solusinya skalabel. Kualitas kodenya dan perhatiannya terhadap praktik terbaik sangat mengesankan untuk seseorang di levelnya.`,
      rating: 5,
      date: "Februari 2024",
      projectContext: "Proyek Capstone Terbaik - Program Laskar AI"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Ketua Tim Data Science",
      organization: "TechCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: `Saya berkesempatan berkolaborasi dengan Haldies dalam sebuah proyek computer vision, dan saya terkesan dengan kemampuan teknis serta pendekatan profesionalnya. Ia cepat memahami kebutuhan kami dan memberikan solusi yang tidak hanya memenuhi, tapi melampaui ekspektasi kami.\n\nKemampuannya menjelaskan konsep AI yang kompleks dengan bahasa sederhana menjadikannya penghubung yang sangat baik antara tim teknis dan tim bisnis kami.`,
      rating: 5,
      date: "Januari 2024",
      projectContext: "Proyek Computer Vision Lepas"
    },
    {
      id: 4,
      name: "Kevin Tan",
      role: "Sesama Lulusan Bangkit",
      organization: "Insinyur Perangkat Lunak di Gojek",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: `Haldies bukan sekadar teman seangkatan, tapi juga mentor bagi banyak dari kami di program Bangkit. Kesediaannya berbagi ilmu dan membantu orang lain sukses menciptakan lingkungan belajar yang positif untuk semua orang.\n\nKonten TikTok-nya tentang konsep AI membantu saya memahami topik-topik yang sulit saya pahami. Ia punya bakat membuat topik yang kompleks jadi mudah dipahami dan menarik.`,
      rating: 5,
      date: "Maret 2024",
      projectContext: "Kolaborasi Sejawat Bangkit Academy"
    },
    {
      id: 5,
      name: "Dr. Michael Thompson",
      role: "Profesor Ilmu Komputer",
      organization: "Penasihat Akademik Universitas",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      content: `Sepanjang perjalanan akademiknya, Haldies menunjukkan dedikasi yang luar biasa dalam belajar dan riset. Proyek akhirnya tentang optimasi neural network termasuk yang terbaik yang pernah saya bimbing dalam beberapa tahun terakhir.\n\nYang paling mengesankan adalah kemampuannya menjembatani konsep teori dengan aplikasi praktis, menunjukkan ketelitian akademik sekaligus kesiapan industri.`,
      rating: 5,
      date: "Desember 2023",
      projectContext: "Supervisi Proyek Capstone Akademik"
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
        className={index < rating ? "fill-current" : "text-muted"}
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
          <h2 className="text-xl font-semibold text-primary">Testimoni & Rekomendasi</h2>
          <p className="text-sm text-text-secondary">Kata kolega dan mentor tentang bekerja dengan saya</p>
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
            <p className="text-primary leading-relaxed whitespace-pre-line">
              {testimonials?.[activeTestimonial]?.content}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-3">
              {renderStars(testimonials?.[activeTestimonial]?.rating)}
            </div>
            <span className="text-sm text-text-secondary">
              {testimonials?.[activeTestimonial]?.rating}/5 bintang
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
                <h4 className="font-semibold text-primary">
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
            aria-label="Testimoni sebelumnya"
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
                aria-label={`Ke testimoni ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-brand focus-brand"
            aria-label="Testimoni berikutnya"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
      {/* Testimonial Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">{testimonials?.length}</div>
          <div className="text-sm text-text-secondary">Rekomendasi</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">5.0</div>
          <div className="text-sm text-text-secondary">Rata-rata Nilai</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">100%</div>
          <div className="text-sm text-text-secondary">Merekomendasikan</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">3</div>
          <div className="text-sm text-text-secondary">Sektor Industri</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;