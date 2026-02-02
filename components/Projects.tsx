import React from 'react';
import { ExternalLinkIcon } from './Icons';

const ProjectCard: React.FC<{
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}> = ({ title, description, image, technologies, liveUrl, githubUrl }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
          >
            Live Demo
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-300"
          >
            Code
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'ALTUS',
      description: 'A full-stack STUDENTS APP with modern UI, secure payments, and admin dashboard.',
      image: 'https://res.cloudinary.com/avalon-admission/images/v1648731484/College-Application-graphic-scaled-1/College-Application-graphic-scaled-1.jpg?_i=AA',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://altusmate.vercel.app/',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts and interactive maps.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with smooth animations and dark mode.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with workout plans and progress monitoring.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating
            innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;