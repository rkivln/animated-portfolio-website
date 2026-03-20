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
      title: 'Altus — Campus Student Hub',
      description: 'Full-stack platform designed to streamline campus student life — aggregating schedules, resources, and collaboration tools into a single unified hub.',
      image: 'https://www.shutterstock.com/image-vector/college-application-vector-illustration-word-600nw-1899070219.jpg',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://altusmate.vercel.app/',
      githubUrl: '#'
    },
    {
      title: 'Attendifier — Smart Attendance System',
      description: 'A smart attendance app for college students that simplifies daily attendance tracking and reporting, improving administrative efficiency.',
      image: 'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/7ec2f6945564d7de9142e65626c91e0b171954ff/e15062303cc672070a1ce98387bfe54ca6fc0565',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'UI/UX'],
      liveUrl: 'https://attendifierconnect.vercel.app/',
      githubUrl: '#'
    },
    {
      title: 'PlateShare — Food Waste Marketplace',
      description: 'Hackathon project: a real-time leftover food marketplace connecting donors (restaurants, canteens, hostels) with NGOs and individuals to reduce food waste.',
      image: 'https://tse3.mm.bing.net/th/id/OIP.TeiXPYHnXCYrrV34r0vF_AHaDS?rs=1&pid=ImgDetMain&o=7&rm=3',
      technologies: ['React', 'Interactive Prototype', 'Mobile UI', 'Expo (Planned)'],
      liveUrl: 'https://plate-mocha.vercel.app/',
      githubUrl: '#'
    },
    {
      title: 'Volt Media — Digital Marketing & Strategy',
      description: 'A data-driven digital marketing agency site showcasing SEO, paid media, and marketing automation solutions with performance metrics.',
      image: '/volt_media.png',
      technologies: ['React.js', 'Tailwind CSS', 'Marketing Automation', 'Analytics'],
      liveUrl: 'https://voltmedia.vercel.app',
      githubUrl: '#'
    },
    {
      title: 'RKIVLN — Luxury Branding & Digital Agency',
      description: 'A premium agency portfolio site focusing on luxury brand strategy, experience design, and high-end visual content.',
      image: '/rkivln.png',
      technologies: ['React.js', 'Framer Motion', 'UX/UI', 'Brand Identity'],
      liveUrl: 'https://rkivln.vercel.app',
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
            href="https://altuscorp.vercel.app/"
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
