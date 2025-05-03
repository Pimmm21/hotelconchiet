import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import Overons from '../assets/Overons.jpg';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-rose-600 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Over Ons" 
          subtitle="Geopend sinds 1965, liefdevol gerund door Mama" 
          light={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <img 
              src={Overons} 
              alt="Warme familiemomenten" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-serif font-bold mb-6">Ons verhaal</h3>
            <div className="space-y-4 text-gray-100">
              <p>
                Hotel Conchiet werd opgericht in 1965, toen onze geliefde gastvrouw, Mama, werd geboren. Sinds die dag heeft ze haar deuren opengesteld voor familie, vrienden en iedereen die een warm thuis nodig heeft.
              </p>
              <p>
                Deze gastvrijheid is al generaties onderdeel van de familie. Hoewel Conchiet een unieke gastvrouw is, is ze niet de enige in haar familie die gastvrijheid belangrijk vindt en goed voor hun familie en vrienden zorgt.
              </p>
              <p>
                In de afgelopen 60 jaar is Hotel Conchiet uitgegroeid tot meer dan alleen een huis. Het is een toevluchtsoord geworden waar je altijd welkom bent, waar de koffie altijd klaarstaat en waar liefde en zorg de belangrijkste voorzieningen zijn.
              </p>
              <p>
                Of je nu komt voor een gezellig diner, een slaapplaats, of gewoon een goed gesprek - bij Hotel Conchiet word je altijd met open armen ontvangen. Het is niet voor niets dat onze gasten keer op keer terugkomen. 
              </p>
              <p className="font-serif text-xl italic">
                "Bij Hotel Conchiet ben je nooit een gast, maar altijd familie."
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <h4 className="text-xl font-bold mb-2">60</h4>
                <p className="text-sm">Jaren liefde</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <h4 className="text-xl font-bold mb-2">∞</h4>
                <p className="text-sm">Gelukkige gasten</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <h4 className="text-xl font-bold mb-2">1000+</h4>
                <p className="text-sm">Maaltijden geserveerd</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <h4 className="text-xl font-bold mb-2">24/7</h4>
                <p className="text-sm">Beschikbaarheid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};