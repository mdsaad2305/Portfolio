import React from 'react';
import Fitness from '../img/fitness.JPG'
import Movie from '../img/movie-recommender.JPG';
import Tictactoe from '../img/tictactoe.JPG'
import liveLinks from './LiveLinks';

const projectsData = [
  {
    id: 1,
    name: 'Fitness-tracker',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'postgresql', 'Tailwind'],
    description: 'Exercise Tracker is a full-stack web application that allows users to log and manage their exercise routines. With an intuitive interface, users can keep a record of their workouts, monitor progress, and stay committed to their fitness goals',
    image: Fitness,
    liveLink: liveLinks[0],
    sourceCodeLink: 'https://github.com/mdsaad2305/Fitness-tracker',
  },
  {
    id: 2,
    name: 'Movie-recommender',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    description: 'Developed a movie recommender website by utilizing tmdb API',
    image: Movie,
    liveLink: liveLinks[1],
    sourceCodeLink: 'https://github.com/mdsaad2305/movie-recommender',
  },
  {
    id: 3,
    name: 'Tic-tac-toe',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description: 'Built a tic-tac-toe game from scratch',
    image: Tictactoe,
    liveLink: liveLinks[2],
    sourceCodeLink: 'https://github.com/mdsaad2305/Tic-tac-toe',
  },
];

const ProjectBox = ({ project }) => (
  <div className="relative p-4 cursor-pointer">
    <div
      className="w-full h-60 bg-cover bg-center rounded-lg transition-transform transform hover:scale-105"
      style={{ backgroundImage: `url(${project.image})` }}
    ></div>
    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-blue-200 rounded-lg">
      <h3 className="text-lg font-semibold">{project.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{project.skills.join(', ')}</p>
      <p className="text-sm">{project.description}</p>
      <div className="mt-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
        >
          Launch Project
        </a>
        <a
          href={project.sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Source Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section name="Projects">
      <div className="bg-gray-900 p-6 h-screen">
        <h2 className="text-4xl font-semibold font-serif text-center text-white mb-6">
        <span className="pb-1 border-b border-teal-500">Projects</span>
        </h2>
        <p className="text-lg text-center text-gray-400">
        Welcome to my Projects Gallery, feel free to explore
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto">
          {projectsData.map((project) => (
            <ProjectBox key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
