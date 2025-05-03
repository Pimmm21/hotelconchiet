import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Gift, Calendar, Star } from 'lucide-react';
import Carnavalpakket from '../assets/Carnavalspakket.jpg';
import Privatedining from '../assets/Privatedining.jpg';
import Maatadvies from '../assets/Maatadvies.jpg';

export const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Carnavalspakket",
      description: "Alles wat je nodig hebt voor een onvergetelijke carnaval, inclusief oeteldonksjaal, embleem en een stevige bodem voor het feesten.",
      image: Carnavalpakket,
      icon: <Calendar className="h-6 w-6" />,
      includes: [
        "Oeteldonk kleuren",
        "Professionele embleem naaien",
        "Stevig ontbijt",
        "Aspirinetjes voor de volgende dag"
      ],
      price: "Een biertje in de stad"
    },
    {
      id: 2,
      name: "Private dining",
      description: "Geniet van een volledig verzorgd diner, inclusief opmaak voor de gerechten, heerlijke wijnen en nooit met honger naar huis.",
      image: Privatedining,
      icon: <Gift className="h-6 w-6" />,
      includes: [
        "Professioneel opgemaakte gerechten",
        "Minimaal 12 gerechten op een avond",
        "Nooit met een leeg wijnglas",
        "Vervoer naar huis op eigen gelegenheid"
      ],
      price: "Een compliment"
    },
    {
      id: 3,
      name: "Advies op maat",
      description: "Je hoeft nooit meer onzeker door het leven te gaan met dit pakket, je krijgt altijd het beste advies specifiek voor jouw situatie",
      image: Maatadvies,
      icon: <Star className="h-6 w-6" />,
      includes: [
        "Advies onder genot van een drankje",
        "Elke uur van de dag beschikbaar",
        "Tranen zijn altijd toegestaan",
        "Er wordt nooit geoordeeld"
      ],
      price: "Een onvergetenlijke herinnering"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Aanbiedingen & Pakketten" 
          subtitle="Speciale arrangementen voor bijzondere momenten" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-rose-500 text-white p-2 rounded-full">
                  {pkg.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Inbegrepen:</h4>
                  <ul className="space-y-1">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="mr-2 text-rose-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-rose-600">{pkg.price}</span>
                  <button 
                    onClick={() => alert("Dit pakket is speciaal voor jou!")}
                    className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition-colors"
                  >
                    Boek Pakket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};