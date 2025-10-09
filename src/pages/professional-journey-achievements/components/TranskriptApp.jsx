import React from 'react';
import { GraduationCap, Brain, Rocket, BookOpen, FileText } from 'lucide-react';

import { bachelorCourses, laskarAICourses, laskarAIAdditional, bangkitCourses } from '../../../data/transcriptData';
import TranscriptSection from 'components/TranscriptSection';

function TranscriptApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    

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
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 text-white">
            <h3 className="text-lg font-bold">Additional Laskar AI Courses</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-sm text-gray-600">Extra Courses</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">95.50</div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">A</div>
                <div className="text-sm text-gray-600">Grade</div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-200">
                    <th className="p-3 text-left font-semibold">KODE</th>
                    <th className="p-3 text-left font-semibold">KELAS/AKTIVITAS</th>
                    <th className="p-3 text-center font-semibold">NILAI</th>
                    <th className="p-3 text-center font-semibold">SKOR</th>
                  </tr>
                </thead>
                <tbody>
                  {laskarAIAdditional.map((course, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-green-50">
                      <td className="p-3 font-medium text-blue-600">{course.code}</td>
                      <td className="p-3">{course.name}</td>
                      <td className="p-3 text-center">
                        <span className="px-2 py-1 rounded font-bold bg-green-100 text-green-800">
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

        {/* Bangkit Academy */}
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

        {/* Summary Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Achievement Summary</h2>
            <p className="text-green-100">Key metrics and accomplishments across all programs</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600">3.47 IPK</div>
                <div className="text-sm text-gray-600">Bachelor's Degree</div>
                <div className="text-xs text-gray-500 mt-1">147 SKS Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <Brain className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600">97.34</div>
                <div className="text-sm text-gray-600">Laskar AI Average</div>
                <div className="text-xs text-gray-500 mt-1">Top 10% + Best Capstone</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <Rocket className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-600">96.20</div>
                <div className="text-sm text-gray-600">Bangkit Academy</div>
                <div className="text-xs text-gray-500 mt-1">Top 10% + 50 Best Capstone</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-bold text-orange-800 mb-3">Distinguished Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Academic Excellence</h4>
                  <ul className="space-y-1 text-orange-600">
                    <li>✓ Bachelor's Degree with 3.47 IPK</li>
                    <li>✓ Strong foundation in Computer Science</li>
                    <li>✓ 147 credit hours completed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Professional Recognition</h4>
                  <ul className="space-y-1 text-orange-600">
                    <li>✓ Top 10% in multiple competitive programs</li>
                    <li>✓ Best Capstone Project awards</li>
                    <li>✓ Industry partnership program completion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}

export default TranscriptApp;
