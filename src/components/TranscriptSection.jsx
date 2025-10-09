import React from 'react';
import { GraduationCap, Award, Star, Trophy, Download } from 'lucide-react';


const TranscriptSection = ({
  title,
  institution,
  icon,
  courses,
  achievements,
  totalCredits,
  totalWeight,
  finalGPA,
  averageScore,
  additionalInfo = [],
  onDownloadPDF
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-white/20 rounded-lg">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-blue-100">{institution}</p>
          </div>
          {onDownloadPDF && (
            <button
              onClick={onDownloadPDF}
              className="ml-auto bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          )}
        </div>
        
        {/* Achievements Banner */}
        {achievements.length > 0 && (
          <div className="bg-white/10 rounded-lg p-4 mt-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold text-yellow-300">Key Achievements</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {achievements.map((achievement, index) => (
                <span 
                  key={index}
                  className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Statistics */}
      <div className="p-6 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {totalCredits && (
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{totalCredits}</div>
              <div className="text-sm text-gray-600">Total SKS</div>
            </div>
          )}
          {totalWeight && (
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">{totalWeight}</div>
              <div className="text-sm text-gray-600">Total Bobot</div>
            </div>
          )}
          {finalGPA && (
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">{finalGPA}</div>
              <div className="text-sm text-gray-600">IPK</div>
            </div>
          )}
          {averageScore && (
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600">{averageScore}</div>
              <div className="text-sm text-gray-600">Rata-rata Skor</div>
            </div>
          )}
        </div>
        
        {additionalInfo.length > 0 && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Informasi Tambahan:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              {additionalInfo.map((info, index) => (
                <li key={index}>• {info}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Transcript Table */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Transkrip Nilai</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-200">
                {courses[0]?.no !== undefined && <th className="p-3 text-left font-semibold">NO</th>}
                <th className="p-3 text-left font-semibold">KODE</th>
                <th className="p-3 text-left font-semibold">MATA KULIAH/KURSUS</th>
                <th className="p-3 text-center font-semibold">NILAI</th>
                {courses[0]?.gpa !== undefined && <th className="p-3 text-center font-semibold">AM</th>}
                <th className="p-3 text-center font-semibold">SKS</th>
                {courses[0]?.weight !== undefined && <th className="p-3 text-center font-semibold">BOBOT</th>}
                {courses[0]?.score !== undefined && <th className="p-3 text-center font-semibold">SKOR</th>}
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr 
                  key={index}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    course.grade === 'A' ? 'bg-green-50' : ''
                  }`}
                >
                  {course.no !== undefined && <td className="p-3">{course.no}</td>}
                  <td className="p-3 font-medium text-blue-600">{course.code}</td>
                  <td className="p-3">{course.name}</td>
                  <td className="p-3 text-center">
                    <span className={`px-2 py-1 rounded font-bold ${
                      course.grade === 'A' ? 'bg-green-100 text-green-800' :
                      course.grade === 'B' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {course.grade}
                    </span>
                  </td>
                  {course.gpa !== undefined && <td className="p-3 text-center">{course.gpa.toFixed(2)}</td>}
                  <td className="p-3 text-center font-medium">{course.credits}</td>
                  {course.weight !== undefined && <td className="p-3 text-center">{course.weight}</td>}
                  {course.score !== undefined && <td className="p-3 text-center font-medium">{course.score}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TranscriptSection;