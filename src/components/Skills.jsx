import React from 'react';
import {
  DiReact,
  DiNodejsSmall,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiPostgresql,
  DiNodejs,
  DiPython,
  DiJava,
  DiGit,
  DiUbuntu,
} from 'react-icons/di';

import {
  SiTailwindcss
} from 'react-icons/si'

const skillsData = [
  { id: 1, logo: <DiReact size={80} color="#61DAFB" />, name: 'React.js', color: '#0D1117' },
  { id: 2, logo: <DiNodejsSmall size={80} color="#8CC84B" />, name: 'Node.js', color: '#0D1117' },
  { id: 3, logo: <DiJavascript1 size={80} color="#F0DB4F" />, name: 'JavaScript', color: '#0D1117' },
  { id: 4, logo: <SiTailwindcss size={80} color="10DCF8" />, name: 'TailwindCSS', color: '#0D1117' },
  { id: 5, logo: <DiHtml5 size={80} color="#E34F26" />, name: 'HTML', color: '#0D1117' },
  { id: 6, logo: <DiCss3 size={80} color="#1572B6" />, name: 'CSS', color: '#0D1117' },
  { id: 7, logo: <DiPostgresql size={80} color="#336791" />, name: 'PostgreSQL', color: '#0D1117' },
  { id: 8, logo: <DiNodejs size={80} color="#3C873A" />, name: 'Express.js', color: '#0D1117' },
  { id: 9, logo: <DiPython size={80} color="#3572A5" />, name: 'Python', color: '#0D1117' },
  { id: 10, logo: <DiJava size={80} color="#007396" />, name: 'Java', color: '#0D1117' },
  { id: 11, logo: <DiGit size={80} color="#F05032" />, name: 'Git', color: '#0D1117' },
  { id: 12, logo: <DiUbuntu size={80} color="#E95420" />, name: 'Ubuntu', color: '#0D1117' },
  
];

const Skills = () => {
  return (
    <section name="Skills">
      <div className="bg-gray-900 p-6 h-screen">
        <h2 className="text-4xl font-semibold font-serif text-center text-white mb-6">
          <span className="pb-1 border-b border-teal-500">Skills</span>
        </h2>
        <p className="text-lg text-center text-gray-400 mt-4">
        I am proficient in a wide range of tools and technologies, including but not limited to
        </p>
        <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className={`bg-gray-900 p-2 shadow-lg rounded-lg w-1/6 h-32 flex flex-col items-center justify-center transition-transform hover:scale-105`}
              style={{ backgroundColor: skill.color }}
            >
              {skill.logo}
              <p className="mt-2 text-white text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
