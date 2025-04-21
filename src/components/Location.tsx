import React from 'react';
import { MapPin, Car, Train, Plane } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

export const Location = () => {
  const transportOptions = [
    {
      id: 1,
      name: "Auto",
      description: "Ruime parkeergelegenheid beschikbaar. Navigeer naar 'Huize Conchiet'.",
      icon: <Car className="h-6 w-6" />
    },
    {
      id: 2,
      name: "Openbaar Vervoer",
      description: "10 minuten lopen vanaf het dichtstbijzijnde station.",
      icon: <Train className="h-6 w-6" />
    },
    {
      id: 3,
      name: "Vliegveld",
      description: "45 minuten rijden vanaf het vliegveld. Shuttle service beschikbaar op aanvraag.",
      icon: <Plane className="h-6 w-6" />
    }
  ];

  const attractions = [
    "Gezellige binnenstad (5 min)",
    "Lokale markt (10 min)",
    "Park en wandelroutes (15 min)",
    "Museum (20 min)",
    "Winkelcentrum (15 min)"
  ];

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Locatie" 
          subtitle="Waar je ons kunt vinden" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              {/* Map placeholder - would be replaced with actual Google Maps embed */}
              <div className="relative h-96 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-rose-500 mx-auto mb-3" />
                    <p className="text-gray-600 text-lg">Hotel Conchiet</p>
                    <p className="text-gray-500">Placeholder voor kaart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
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