import React from 'react';
import { Hotel, Instagram, Facebook, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <Hotel className="h-8 w-8 text-rose-400 mr-2" />
              <span className="font-serif text-2xl font-bold">Hotel Conchiet</span>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              Altijd open, altijd welkom. <br />
              Een thuis ver van huis sinds 1965.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">Hotel Conchiet</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">Over Ons</a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-400 hover:text-white transition-colors">Accommodaties</a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-400 hover:text-white transition-colors">Faciliteiten</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">Services</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#packages" className="text-gray-400 hover:text-white transition-colors">Pakketten</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white transition-colors">Menukaart</a>
              </li>
              <li>
                <a href="#workshops" className="text-gray-400 hover:text-white transition-colors">Workshops</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">Openingstijden</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li className="text-gray-400">Maandag - Zondag</li>
              <li className="text-white">24 uur per dag</li>
              <li className="text-gray-400 mt-4">Vakantie & Feestdagen</li>
              <li className="text-white">24 uur per dag</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
            &copy; 2025 Hotel Conchiet. Alle rechten voorbehouden.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center text-rose-400 hover:text-rose-300 transition-colors"
          >
            Terug naar boven
            <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 flex items-center justify-center">
            Gemaakt met <Heart className="h-4 w-4 text-rose-500 mx-1" /> voor Mama's 60e verjaardag
          </p>
        </div>
      </div>
    </footer>
  );
};