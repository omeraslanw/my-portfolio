import React from "react";

const skills = [
  { name: "Java", level: 80 },
  { name: "C#", level: 70 },
  { name: "JavaScript", level: 60 },
  { name: "Python", level: 60 },
  { name: "C", level: 70 },
  { name: "Git", level: 75 },
  { name: "HTML", level: 60 },
  { name: "CSS", level: 50 },
  { name: "Spring Framework", level: 80 },
  { name: "Asp.Net Core", level: 60 },
  { name: "Flask", level: 50 },
  { name: "Asp.Net Mvc", level: 70 },
  { name: "Bootstrap", level: 60 },
  { name: "OOP", level: 75 },
  { name: "Katmanlı Mimari", level: 80 },
  { name: "React.js", level: 60 },
  { name: "Tailwind CSS", level: 50 },
  { name: "GitHub", level: 80 },
];

const barColors = {
  bg: "bg-gray-800",
  fill: "bg-teal-400",
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-700 text-white py-16 px-8 min-h-[40vh] flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Yeteneklerim</h2>
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-lg">{skill.name}</span>
              <span className="text-teal-300 font-medium">{skill.level}/100</span>
            </div>
            <div className={`w-full h-4 rounded-full ${barColors.bg} overflow-hidden`}>
              <div
                className={`${barColors.fill} h-full rounded-full transition-all duration-700`}
                style={{
                  width: `${skill.level}%`,
                  background: "linear-gradient(90deg, #38b2ac 0%, #81e6d9 100%)",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;