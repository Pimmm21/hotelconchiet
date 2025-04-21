import React from 'react';
import { Coffee, Wine, Beer, Moon, Heart, MessageCircle } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

export const Amenities = () => {
  const amenities = [
    {
      id: 1,
      name: "Uitgebreid ontbijt",
      description: "Start je dag met een heerlijk, huisgemaakt ontbijt met verse ingrediënten.",
      icon: <Coffee className="h-10 w-10" />
    },
    {
      id: 2,
      name: "Goed gesprek",
      description: "Geniet van hartverwarmende gesprekken met je gastvrouw of andere gasten.",
      icon: <MessageCircle className="h-10 w-10" />
    },
    {
      id: 3,
      name: "Koud bier (to-go)",
      description: "Altijd een verfrissend biertje beschikbaar, ook om mee te nemen.",
      icon: <Beer className="h-10 w-10" />
    },
    {
      id: 4,
      name: "Wijn",
      description: "Een uitstekende selectie wijnen voor bij het diner of om de dag mee af te sluiten.",
      icon: <Wine className="h-10 w-10" />
    },
    {
      id: 5,
      name: "Slaapmutsje",
      description: "Een perfecte afsluiter van de avond voordat je naar bed gaat.",
      icon: <Moon className="h-10 w-10" />
    },
    {
      id: 6,
      name: "Onbeperkte liefde",
      description: "De belangrijkste voorziening: onvoorwaardelijke liefde en zorg.",
      icon: <Heart className="h-10 w-10" />
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-rose-600 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Faciliteiten" 
          subtitle="Wat maakt Hotel Conchiet zo bijzonder" 
          light={true}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm transform transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-white text-rose-600 rounded-full mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{amenity.name}</h3>
                <p className="text-gray-100">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};