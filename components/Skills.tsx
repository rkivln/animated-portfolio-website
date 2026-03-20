import React from 'react';

const SkillBar: React.FC<{ skill: string; level: number }> = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-700 font-medium">{skill}</span>
      <span className="text-gray-500 text-sm">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-purple-600 to-violet-600 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'React.js / Next.js 14', level: 95 },
    { name: 'Node.js / Express.js', level: 90 },
    { name: 'MongoDB / REST APIs', level: 88 },
    { name: 'JavaScript / Python / C', level: 85 },
    { name: 'Tailwind CSS / Framer Motion', level: 92 },
    { name: 'UI/UX Design / Brand Identity', level: 85 },
  ];

  const tools = [
    'Figma', 'Git', 'Vercel', 'Cursor AI', 'Postman', 'Power BI',
    'Tableau', 'Amazon Q', 'VS Code', 'Docker', 'Firebase', 'AWS'
  ];

  const certifications = [
    'Data Analytics — Power BI & Tableau (HCL | GUVI)',
    'Claude 101 — Anthropic Education',
    'The Cybersecurity Threat Landscape — LinkedIn',
    'Cybersecurity Awareness — LinkedIn',
    'Cyber Job Simulation — Deloitte Australia',
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Tools & AI</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center border border-gray-100"
                >
                  <span className="text-gray-700 font-medium">{tool}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg border border-purple-100">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;