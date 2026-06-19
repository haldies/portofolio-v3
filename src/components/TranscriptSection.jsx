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
    <div className="bg-card rounded-xl shadow-brand-large border border-border overflow-hidden mb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-primary-foreground">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-background/20 rounded-lg">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-primary-foreground/80">{institution}</p>
          </div>
          {onDownloadPDF && (
            <button
              onClick={onDownloadPDF}
              className="ml-auto bg-background/20 hover:bg-background/30 text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          )}
        </div>
        
        {/* Achievements Banner */}
        {achievements.length > 0 && (
          <div className="bg-background/10 rounded-lg p-4 mt-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">Key Achievements</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {achievements.map((achievement, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Statistics */}
      <div className="p-6 bg-muted border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {totalCredits && (
            <div className="text-center p-4 bg-card rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary">{totalCredits}</div>
              <div className="text-sm text-text-secondary">Total SKS</div>
            </div>
          )}
          {totalWeight && (
            <div className="text-center p-4 bg-card rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-secondary">{totalWeight}</div>
              <div className="text-sm text-text-secondary">Total Bobot</div>
            </div>
          )}
          {finalGPA && (
            <div className="text-center p-4 bg-card rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-trust-purple">{finalGPA}</div>
              <div className="text-sm text-text-secondary">IPK</div>
            </div>
          )}
          {averageScore && (
            <div className="text-center p-4 bg-card rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-conversion-amber">{averageScore}</div>
              <div className="text-sm text-text-secondary">Rata-rata Skor</div>
            </div>
          )}
        </div>
        
        {additionalInfo.length > 0 && (
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Informasi Tambahan:</h4>
            <ul className="text-sm text-primary/80 space-y-1">
              {additionalInfo.map((info, index) => (
                <li key={index}>• {info}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Transcript Table */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-primary">Transkrip Nilai</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted border-b-2 border-border">
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
                  className={`border-b border-border hover:bg-muted/50 transition-colors ${
                    course.grade === 'A' ? 'bg-accent/10' : ''
                  }`}
                >
                  {course.no !== undefined && <td className="p-3">{course.no}</td>}
                  <td className="p-3 font-medium text-primary">{course.code}</td>
                  <td className="p-3">{course.name}</td>
                  <td className="p-3 text-center">
                    <span className={`px-2 py-1 rounded font-bold ${
                      course.grade === 'A' ? 'bg-accent/20 text-accent' :
                      course.grade === 'B' ? 'bg-muted/20' :
                      'bg-muted text-muted-foreground'
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