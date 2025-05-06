import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Logo from '../assets/LogoWebsite.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'rooms', name: 'Accommodaties' },
    { id: 'events', name: 'Events' },
    { id: 'amenities', name: 'Faciliteiten' },
    { id: 'location', name: 'Locatie' },
    { id: 'packages', name: 'Aanbiedingen' },
    { id: 'reviews', name: 'Reviews' },
    { id: 'contact', name: 'Contact' },
    { id: 'about', name: 'Over Ons' },
    { id: 'faq', name: 'FAQ' },
    { id: 'menu', name: 'Menukaart' },
    { id: 'gallery', name: 'Gallerij' },
    { id: 'workshops', name: 'Workshops' },
    { id: 'letters', name: 'Lieve Woorden' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={Logo} 
            alt="Hotel Conchiet Logo" 
            className="h-16 w-auto mr-3"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-rose-600' : 'text-white'}`}>
            Hotel Conchiet
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {sections.slice(0, 6).map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`transition-colors hover:text-rose-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {section.name}
            </button>
          ))}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors hover:text-rose-500 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Meer
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left py-2 text-gray-800 hover:text-rose-500"
            >
              {section.name}
            </button>
          ))}
        </div>
      )}

      {/* Desktop Dropdown Menu */}
      {isMenuOpen && (
        <div className="hidden md:block absolute right-4 top-full bg-white shadow-lg rounded-lg p-4 mt-2">
          {sections.slice(6).map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left py-2 text-gray-800 hover:text-rose-500"
            >
              {section.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};