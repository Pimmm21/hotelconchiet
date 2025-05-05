import React from 'react';
import { MapPin, Car, Train, Plane } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

export const Location = () => {
  const transportOptions = [
    {
      id: 1,
      name: "Auto",
      description: "Navigeer naar 'Huize Conchiet', parkeergelegenheden beschikbaar",
      icon: <Car className="h-6 w-6" />
    },
    {
      id: 2,
      name: "Openbaar Vervoer",
      description: "10 minuten lopen vanaf het dichtstbijzijnde station. Shuttle service beschikbaar op aanvraag",
      icon: <Train className="h-6 w-6" />
    },
    {
      id: 3,
      name: "Vliegveld",
      description: "Stap vanuit het vliegveld op het OV, voor goede vrienden en familie is een Shuttle service beschikbaar.",
      icon: <Plane className="h-6 w-6" />
    }
  ];

  const attractions = [
    "Gezellige binnenstad (15 min)",
    "Honden wandelroutes (5 min)",
    "Stadium de Vliert (10 min)",
    "Sportcentrum 'Sportiom'(10 min)"
  ];

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Locatie" 
          subtitle="Waar je ons kunt vinden" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Hoe kom je er?</h3>
              <div className="space-y-6">
                {transportOptions.map(option => (
                  <div key={option.id} className="flex items-start">
                    <div className="p-2 bg-rose-100 text-rose-600 rounded-full mr-4">
                      {option.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{option.name}</h4>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">In de buurt</h3>
              <ul className="space-y-2">
                {attractions.map((attraction, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="h-2 w-2 bg-rose-500 rounded-full mr-3"></span>
                    {attraction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};