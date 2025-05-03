import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ChefHat, Calendar } from 'lucide-react';
import Kookworkshop from '../assets/Kookworkshop.jpg';
import Taartworkshop from '../assets/Taartworkshop.jpg';
import Feestworkshop from '../assets/Feestworkshop.jpg';

export const Workshops = () => {
  const workshops = [
    {
      id: 1,
      name: "Mama's Kookcursus",
      description: "Leer de geheimen van mama's beroemde keuken. Van paella tot beef tataki, alle klassiekers komen aan bod.",
      image: Kookworkshop,
      duration: "3 uur",
      participants: "Max. 6 personen",
      upcoming: "Speciale gelegenheden"
    },
    {
      id: 2,
      name: "Taart Workshops",
      description: "Kom gezellig bakken in de keuken van Hotel Conchiet met jaren lange ervaring bij de Taartwinkel is dit een gegarandeerd succes.",
      image: Taartworkshop,
      duration: "4 uur",
      participants: "Max. 4 personen",
      upcoming: "Op verzoek"
    },
    {
      id: 3,
      name: "Feesten organiseren",
      description: "Speciale workshop voor het geven van onvergetelijke feesten. Leer hoe de feestjes van ons Conchiet gepland worden",
      image: Feestworkshop,
      duration: "5 uur",
      participants: "Max. 8 personen",
      upcoming: "Heel lief vragen"
    }
  ];

  return (
    <section id="workshops" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Workshops" 
          subtitle="Leer van de beste" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={workshop.image} 
                alt={workshop.name} 
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{workshop.name}</h3>
                <p className="text-gray-600 mb-4">{workshop.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <ChefHat className="h-5 w-5 text-rose-500 mr-2" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-rose-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{workshop.participants}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 text-rose-500 mr-2" />
                    <span>{workshop.upcoming}</span>
                  </div>
                </div>
                
                <button 
                  className="w-full py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition-colors"
                  onClick={() => alert("Workshop geboekt! De echte lessen beginnen na de verjaardag.")}
                >
                  Reserveer Plaats
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Alle workshops worden gegeven door de gastvrouw zelf en zijn inclusief drankjes, ingrediënten en natuurlijk veel gezelligheid.
          </p>
        </div>
      </div>
    </section>
  );
};