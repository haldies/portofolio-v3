import React from 'react';
import { GraduationCap, Brain, Rocket, BookOpen, FileText } from 'lucide-react';

import { bachelorCourses, laskarAICourses, laskarAIAdditional, bangkitCourses } from '../../../data/transcriptData';
import TranscriptSection from 'components/TranscriptSection';

function TranscriptApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
    

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Bachelor of Computer Science */}
        <TranscriptSection
          title="Bachelor of Computer Science (S.Kom)"
          institution="Universitas Nusa Putra"
          icon={<GraduationCap className="w-8 h-8" />}
          courses={bachelorCourses}
          achievements={["IPK 3.47", "147 SKS Completed", "Strong Foundation in CS"]}
          totalCredits={147}
          totalWeight={510}
          finalGPA={3.47}
          additionalInfo={[
            "Jumlah SKS yang diambil: 147",
            "Jumlah SKS lulus: 147", 
            "Jumlah Mutu: 510",
            "Status: Transkrip Sementara"
          ]}
        />

        {/* Laskar AI Program */}
        <TranscriptSection
          title="Laskar AI Program"
          institution="Lintasarta × Dicoding × NVIDIA"
          icon={<Brain className="w-8 h-8" />}
          courses={laskarAICourses}
          achievements={["Top 10% of 500", "Best Capstone Project", "Distinction Award"]}
          averageScore={97.34}
          additionalInfo={[
            "Distinction – Top 10% dari 500 peserta",
            "Best Capstone Project Winner",
            "Program fokus AI/ML dengan NVIDIA partnership",
            "Transkrip tambahan courses dengan rata-rata 95.50"
          ]}
        />

        {/* Additional Laskar AI Courses */}
        <div className="bg-card rounded-xl shadow-brand-large border border-border overflow-hidden mb-8">
          <div className="p-4 bg-primary text-primary-foreground">
            <h3 className="text-lg font-bold">Additional Laskar AI Courses</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-trust-purple">3</div>
                <div className="text-sm text-text-secondary">Extra Courses</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-trust-purple">95.50</div>
                <div className="text-sm text-text-secondary">Average Score</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-trust-purple">A</div>
                <div className="text-sm text-text-secondary">Grade</div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted border-b-2 border-border">
                    <th className="p-3 text-left font-semibold">KODE</th>
                    <th className="p-3 text-left font-semibold">KELAS/AKTIVITAS</th>
                    <th className="p-3 text-center font-semibold">NILAI</th>
                    <th className="p-3 text-center font-semibold">SKOR</th>
                  </tr>
                </thead>
                <tbody>
                  {laskarAIAdditional.map((course, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors bg-accent/10">
                      <td className="p-3 font-medium text-primary">{course.code}</td>
                      <td className="p-3">{course.name}</td>
                      <td className="p-3 text-center">
                        <span className="px-2 py-1 rounded font-bold bg-accent/20 text-accent">
                          {course.grade}
                        </span>
                      </td>
                      <td className="p-3 text-center font-medium">{course.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <TranscriptSection
          title="Bangkit Academy 2024"
          institution="Google × GoTo × Traveloka"
          icon={<Rocket className="w-8 h-8" />}
          courses={bangkitCourses}
          achievements={["Top 10% of 4000+", "50 Best Capstone", "ML Cohort Distinction"]}
          averageScore={96.20}
          additionalInfo={[
            "Distinction – Top 10% dari 4.000+ peserta Machine Learning Cohort",
            "50 Best Capstone Project Winner", 
            "Industry-partnered program with Google, GoTo, Traveloka",
            "Comprehensive ML specialization with hands-on projects"
          ]}
        />
      </main>

    </div>
  );
}

export default TranscriptApp;
