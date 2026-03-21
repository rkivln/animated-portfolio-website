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
            <h3 className="text-2xl font-semibold text-gray-900">Dedicated Full-Stack Developer & Aspiring UI/UX Designer</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm Gokulan, a full-stack developer currently pursuing a B.Tech in Computer Science and Business Systems.
              My focus is on building end-to-end web applications with the MERN stack while crafting brand identities
              that reflect values and drive results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Founder of <span className="font-semibold text-purple-600">Artisen Tech Crafts</span>, a startup delivering premium 3D-printed products,
              custom tech gadgets, and software solutions.
            </p>

            <div className="pt-6 space-y-4">
              <h4 className="text-xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">EDUCATION</h4>
              <div className="pl-5 border-l-2 border-gray-100 pb-1">
                <p className="font-semibold text-gray-900 text-lg">Bachelor of Technology</p>
                <p className="text-purple-600 font-medium">Computer Science Engineering & Business Systems</p>
                <p className="text-gray-500 font-medium">Sri Manakula Vinayagar Engineering College, Puducherry</p>
                <p className="text-gray-400 text-sm mt-1">2025 – 2029</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Startup Foundation</h4>
                <p className="text-gray-600">Volt media - Altus</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600">2024 - Present</p>
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