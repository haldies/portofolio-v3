export const assistantKnowledge = [
  {
    intent: 'greeting',
    keywords: ['halo', 'hai', 'hello', 'hi', 'selamat', 'pagi', 'siang', 'malam'],
    response:
      'Halo! Aku Haldies Assistant, agen AI yang siap bantu kamu eksplor portofolio ini. Mau tanya soal projek, pengalaman, atau kolaborasi? Tinggal sampaikan saja ya.'
  },
  {
    intent: 'identity',
    keywords: ['siapa', 'kamu', 'perkenalan', 'tentang', 'profil'],
    response:
      'Aku adalah asisten AI untuk portofolio Haldies Gerhardien Pasya - AI Engineer yang fokus di Machine Learning, Computer Vision, dan AI produk terapan. Aku bantu jelaskan highlight dan bantu arahkan kamu ke bagian yang relevan.'
  },
  {
    intent: 'specialization',
    keywords: ['spesialisasi', 'keahlian', 'fokus', 'expertise', 'kompetensi'],
    response:
      'Bidang utama Haldies meliputi Machine Learning, Large Language Models, Computer Vision, AI Product Research, dan data storytelling. Dia terbiasa menggabungkan riset dengan aplikasi produk nyata.'
  },
  {
    intent: 'achievements',
    keywords: ['pencapaian', 'achievement', 'prestasi', 'penghargaan', 'recognition'],
    response:
      'Beberapa highlight: Top 10% Bangkit Academy & Laskar AI, pengalaman menjadi AI Engineer di riset dan projek industri, serta keterlibatan dalam komunitas AI untuk eksperimen generatif. Detail lengkap ada di halaman Journey & Achievements.'
  },
  {
    intent: 'education',
    keywords: ['sertifikat', 'certification', 'belajar', 'course', 'pendidikan', 'training'],
    response:
      'Haldies mengikuti program AWS Generative AI, Google Cloud Skills Boost, Bangkit Academy Machine Learning Cohort, Coursera Deep Learning, Dicoding Academy, sampai Oracle OCI. Di halaman Educational Content kamu bisa download materi dan catatan belajar.'
  },
  {
    intent: 'projects_overview',
    keywords: ['projek', 'project', 'portfolio', 'contoh', 'karya'],
    response:
      'Ada lebih dari 15 projek AI yang dipamerkan - mulai dari Vision Studio, Insight Hub untuk analytics, sampai Contextual AI Assistant. Kamu bisa mampir ke halaman AI Playground untuk pengalaman interaktif atau cek detail di setiap kartu projek.'
  },
  {
    intent: 'project_maganhub',
    keywords: ['maganghub', 'llm', 'magang', 'project detail'],
    response:
      'LLM MagangHub adalah eksperimen conversational agent untuk membantu mahasiswa menavigasi magang dan job matching. Fitur utamanya termasuk sistem rekomendasi lowongan, kurasi skill gap, dan mode percakapan persona. Kamu bisa kunjungi halaman Projects lalu pilih MagangHub untuk cerita lengkapnya.'
  },
  {
    intent: 'collaboration',
    keywords: ['kolaborasi', 'collaboration', 'kerja sama', 'hubungi', 'kerjasama', 'kerja bareng'],
    response:
      'Haldies terbuka untuk kolaborasi product discovery, eksperimen AI, maupun konsultasi riset. Kamu bisa langsung menuju halaman Contact & Collaboration Hub atau kirim email ke haldiespasya@gmail.com.'
  },
  {
    intent: 'availability',
    keywords: ['tersedia', 'availability', 'status', 'kesempatan', 'open', 'opportunity'],
    response:
      'Saat ini Haldies aktif menerima peluang baru untuk projek AI, riset terapan, dan konsultasi strategi data. Ada badge "Available for New Opportunities" di halaman utama sebagai penanda.'
  },
  {
    intent: 'skills',
    keywords: ['skills', 'keterampilan', 'tools', 'tech stack', 'teknologi', 'framework'],
    response:
      'Stack teknis yang sering dipakai meliputi Python, TensorFlow, PyTorch, scikit-learn, LangChain, dan pipeline MLOps. Di sisi front-end, familiar dengan React, Tailwind, dan visualisasi data dengan D3 atau Recharts. Kamu bisa cek rubrik Skills Assessment di halaman Journey.'
  },
  {
    intent: 'cv',
    keywords: ['cv', 'curriculum', 'resume', 'download'],
    response:
      'Kamu bisa mengunduh CV terbaru langsung dari bagian "Downloadable CV" di halaman Journey & Achievements. Tinggal klik tombol download dan file PDF akan tersedia.'
  },
  {
    intent: 'social',
    keywords: ['sosial', 'social', 'linkedin', 'github', 'tiktok', 'medium'],
    response:
      'Untuk koneksi profesional, kunjungi LinkedIn @haldies. Portofolio kode tersedia di GitHub, dan konten edukasi AI sering diunggah di TikTok & Medium. Semua link sudah dirapikan di halaman Contact & Collaboration Hub.'
  },
  {
    intent: 'language',
    keywords: ['bahasa', 'language', 'komunikasi', 'speak'],
    response:
      'Haldies nyaman berkomunikasi dalam Bahasa Indonesia dan Inggris. Untuk delivery materi teknis juga bisa bilingual sesuai kebutuhan audiens.'
  },
  {
    intent: 'timeline',
    keywords: ['timeline', 'pengalaman', 'experience', 'perjalanan', 'career'],
    response:
      'Perjalanan profesionalnya dimulai dari riset kampus, kemudian fokus di proyek praktis seperti hackathon AI, freelance, hingga peran AI Engineer. Timeline lengkap bisa kamu temukan di halaman Journey & Achievements.'
  },
  {
    intent: 'default',
    keywords: [],
    response:
      'Itu topik menarik! Biar aku bantu carikan referensinya di portofolio. Kamu bisa perjelas pertanyaannya atau cek navigasi utama: Journey, Projects, Educational Content, dan Contact. Aku siap bantu step berikutnya.'
  }
];

export const assistantQuickPrompts = [
  'Apa spesialisasi AI yang lagi difokuskan?',
  'Bisa jelasin proyek LLM MagangHub?',
  'Cara terbaik untuk mulai kolaborasi sama Haldies?',
  'Sertifikasi apa saja yang sudah diselesaikan?',
  'Di mana bisa download CV terbaru?'
];

export const assistantCapabilities = [
  {
    label: 'Ringkasan Projek',
    icon: 'BriefcaseBusiness'
  },
  {
    label: 'Riset & Insight',
    icon: 'Sparkles'
  },
  {
    label: 'Roadmap Kolaborasi',
    icon: 'Route'
  },
  {
    label: 'Kurasi Konten Belajar',
    icon: 'GraduationCap'
  },
  {
    label: 'Update Peluang AI',
    icon: 'Radar'
  }
];
