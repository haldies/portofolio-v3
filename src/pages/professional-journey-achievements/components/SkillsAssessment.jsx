import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsAssessment = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "Code",
      skills: [
        { name: "Python" },
        { name: "SQL" },
        { name: "JavaScript" },
      ]
    },
    {
      category: "AI/ML Frameworks",
      icon: "Brain",
      skills: [
        { name: "TensorFlow" },
        { name: "PyTorch" },
        { name: "Scikit-learn" },
        { name: "Keras" },
        { name: "Hugging Face" }
      ]
    },
    {
      category: "Data & Analytics",
      icon: "BarChart3",
      skills: [
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Matplotlib" },
        { name: "Seaborn" },
        { name: "Plotly" }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "Settings",
      skills: [
        { name: "Jupyter" },
        { name: "Git" },
        { name: "Docker" },
        { name: "AWS" },
        { name: "Google Cloud" }
      ]
    }
  ];

  return (
    <div className="bg-card rounded-brand-lg p-6 shadow-brand-subtle border border-border">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-brand flex items-center justify-center mr-3">
          <Icon name="TrendingUp" size={20} className="text-accent" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-primary">Skills Assessment</h2>
          <p className="text-sm text-text-secondary">Technical proficiency across key domains</p>
        </div>
      </div>
      <div className="space-y-8">
        {skillCategories?.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <div className="flex items-center mb-4">
              <Icon name={category?.icon} size={18} className="text-accent mr-2" />
              <h3 className="text-lg font-medium text-primary">{category?.category}</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
              {category?.skills?.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group relative overflow-hidden rounded-brand-lg border border-border bg-muted/40 px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-primary">{skill?.name}</h4>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-brand-lg border border-accent/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-2xl font-semibold text-accent">4</div>
            <div className="text-sm text-text-secondary">Skill Categories</div>
          </div>
          <div className="rounded-brand-lg border border-primary/20 bg-card/70 p-4 text-center shadow-sm">
            <div className="text-2xl font-semibold text-primary">23</div>
            <div className="text-sm text-text-secondary">Total Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAssessment;
