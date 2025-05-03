import React from 'react';
import { Home } from 'lucide-react';
import HuisVoorkant from '../assets/Huis-voorkant.jpg';

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${HuisVoorkant})` 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative text-center text-white px-4 max-w-4xl">
        <div className="flex items-center justify-center mb-4">
          <Home className="h-12 w-12 text-white mr-3" />
          <h1 className="font-serif text-6xl font-bold">Hotel Conchiet</h1>
        </div>
        <h2 className="text-2xl italic mb-8">Altijd open, altijd welkom</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Welkom bij het meest hartelijke hotel van Nederland. Al sinds 1965 openen wij onze deuren voor familie en vrienden.
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors duration-300"
          >
            Boek Nu
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-rose-600 transition-colors duration-300"
          >
            Over Ons
          </button>
        </div>
      </div>
    </section>
  );
};