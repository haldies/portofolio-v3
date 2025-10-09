import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsAssessment = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "Code",
      skills: [
        { name: "Python", level: 95, experience: "2+ years" },
        { name: "SQL", level: 80, experience: "2+ years" },
        { name: "JavaScript", level: 90, experience: "3+ years" },
      ]
    },
    {
      category: "AI/ML Frameworks",
      icon: "Brain",
      skills: [
        { name: "TensorFlow", level: 90, experience: "2+ years" },
        { name: "PyTorch", level: 85, experience: "2+ years" },
        { name: "Scikit-learn", level: 95, experience: "3+ years" },
        { name: "Keras", level: 88, experience: "2+ years" },
        { name: "Hugging Face", level: 82, experience: "1+ years" }
      ]
    },
    {
      category: "Data & Analytics",
      icon: "BarChart3",
      skills: [
        { name: "Pandas", level: 92, experience: "3+ years" },
        { name: "NumPy", level: 90, experience: "3+ years" },
        { name: "Matplotlib", level: 85, experience: "2+ years" },
        { name: "Seaborn", level: 88, experience: "2+ years" },
        { name: "Plotly", level: 80, experience: "1+ years" }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "Settings",
      skills: [
        { name: "Jupyter", level: 95, experience: "3+ years" },
        { name: "Git", level: 88, experience: "2+ years" },
        { name: "Docker", level: 75, experience: "1+ years" },
        { name: "AWS", level: 70, experience: "1+ years" },
        { name: "Google Cloud", level: 78, experience: "1+ years" }
      ]
    }
  ];

  const getLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  const getLevelBadgeStyles = (level) => {
    if (level >= 90) return "bg-success/10 text-success border-success/20";
    if (level >= 80) return "bg-accent/10 text-accent border-accent/20";
    if (level >= 70) return "bg-warning/10 text-warning border-warning/20";
    return "bg-muted text-muted-foreground border-transparent";
  };

  return (
    <div className="bg-card rounded-brand-lg p-6 shadow-brand-subtle border border-border">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-brand flex items-center justify-center mr-3">
          <Icon name="TrendingUp" size={20} className="text-accent" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Skills Assessment</h2>
          <p className="text-sm text-text-secondary">Technical proficiency across key domains</p>
        </div>
      </div>
      <div className="space-y-8">
        {skillCategories?.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <div className="flex items-center mb-4">
              <Icon name={category?.icon} size={18} className="text-accent mr-2" />
              <h3 className="text-lg font-medium text-foreground">{category?.category}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
              {category?.skills?.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group relative overflow-hidden rounded-brand-lg border border-border bg-muted/40 px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium uppercase tracking-wide text-text-secondary/80">
                      {getLevelText(skill?.level)}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors duration-300 ${getLevelBadgeStyles(
                        skill?.level
                      )}`}
                    >
                      {skill?.experience}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-foreground">{skill?.name}</h4>
                    <p className="mt-1 text-xs text-text-secondary">
                      {category?.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-brand-lg border border-border bg-muted/30 p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="rounded-brand-lg border border-success/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-2xl font-semibold text-success">15+</div>
            <div className="text-sm text-text-secondary">Expert Skills</div>
          </div>
          <div className="rounded-brand-lg border border-accent/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-2xl font-semibold text-accent">8+</div>
            <div className="text-sm text-text-secondary">Advanced Skills</div>
          </div>
          <div className="rounded-brand-lg border border-warning/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-2xl font-semibold text-warning">5+</div>
            <div className="text-sm text-text-secondary">Learning Skills</div>
          </div>
          <div className="rounded-brand-lg border border-primary/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-2xl font-semibold text-primary">3+</div>
            <div className="text-sm text-text-secondary">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAssessment;
