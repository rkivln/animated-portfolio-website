import React from 'react';
import SocialLinks from './SocialLinks';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Passionate Developer & Creative Designer</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm GOKULAN, a full-stack developer with a passion for creating beautiful, functional, and user-centered digital experiences.
              With expertise in modern web technologies, I bring ideas to life through clean code and innovative design solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a career dedicated to solving complex problems
              and creating meaningful connections between users and technology.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600">3+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Projects</h4>
                <p className="text-gray-600">50+ Completed</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                <p className="text-gray-600">15+ Languages</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Clients</h4>
                <p className="text-gray-600">25+ Happy</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;