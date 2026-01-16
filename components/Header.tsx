
import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

const NavLink: React.FC<{ href: string; children: React.ReactNode; delay?: string; onClick?: () => void }> = ({ href, children, delay, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium relative group"
    style={delay ? { animationDelay: delay } : undefined}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold tracking-wider bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            Gokulan
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <NavLink key={link.text} href={link.href} delay={`${(i * 0.1) + 0.2}s`}>
                {link.text}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-purple-100 transition-colors duration-300"
            >
              {isMenuOpen ? <CloseIcon className="w-6 h-6 text-gray-700" /> : <MenuIcon className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t">
          <nav className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.text}
                href={link.href}
                onClick={handleNavClick}
                delay={`${i * 0.1}s`}
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
