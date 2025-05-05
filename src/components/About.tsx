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
              Conchita Velloso - voor ons gewoon mama - werd geboren op 28 april 1965 en groeide op in een warm en liefdevol gezin met haar Spaanse vader Candido, haar moeder Jessy en haar zusje Marisol. Thuis draaide veel om één ding: eten. Want ja, met een Spaanse familie én een moeder die kon koken als de beste, is het geen verrassing dat de keukengeheimen al vroeg werden doorgegeven.
              </p>
              <p>
              De liefde voor koken kreeg Conchita dus met de paplepel ingegoten - en daar heeft ze in de loop der jaren haar eigen heerlijke 'sausje' aan toegevoegd. Niet alleen qua recepten, maar vooral qua sfeer. Want als je Conchiet een beetje kent, weet je dat het nooit alleen om het eten gaat. Het gaat om gezelligheid, warmte, samen lachen, goede gesprekken, en soms ook gewoon lekker niets hoeven behalve genieten.
              </p>
              <p>
              Met haar energieke, liefdevolle en open karakter wist ze van elk moment iets bijzonders te maken. Of je nou alleen even kwam aanwaaien, per ongeluk bleef hangen tot diep in de nacht, of met tassen vol logeerspullen voor de deur stond - je was altijd welkom.
              </p>
              <p>
              En zo ontstond het idee van Hotel Conchiet. Niet omdat er een balie of kamersleutels zijn (al zou ze daar ook nog iets leuks van maken), maar omdat het bij haar gewoon altijd voelt alsof je incheckt op een plek waar alles klopt: goed eten, een fijn bed, een lekker glas wijn (of twee), en vooral: liefde. Deze website is ons eerbetoon aan die bijzondere sfeer, aan mama, en aan alles wat zij voor ons - en voor zovelen om haar heen - betekent.
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