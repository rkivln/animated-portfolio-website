
import React from 'react';
import { LinkedInIcon, DribbbleIcon, GlobeIcon, HeartIcon } from './Icons';

const socialLinks = [
  { href: '#', icon: LinkedInIcon, label: 'LinkedIn', color: 'hover:text-blue-600' },
  { href: '#', icon: DribbbleIcon, label: 'Dribbble', color: 'hover:text-pink-600' },
  { href: '#', icon: GlobeIcon, label: 'Website', color: 'hover:text-green-600' },
  { href: '#', icon: HeartIcon, label: 'Support', color: 'hover:text-red-600' },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-lg font-semibold text-gray-900 mb-2">Connect With Me</h4>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.label}
          className={`text-gray-600 ${link.color} transition-all duration-300 transform hover:scale-110 flex items-center gap-3 group`}
        >
          <link.icon className="w-6 h-6" />
          <span className="font-medium">{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
