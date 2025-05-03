import React from 'react';
import { Bed, Coffee, Wifi, Waves, Umbrella } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import Ouderkamer from '../assets/OuderKamer.jpg';
import Logeerkamer from '../assets/Kamer1.jpg';
import Logeerkamer2 from '../assets/Kamer2.jpg';
import Logeerkamer3 from '../assets/Kamer3.jpg';
import Chalet from '../assets/Chalet.jpg';

export const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "De Ouderkamer Suite",
      description: "Onze meest luxe kamer met kingsize bed, eigen badkamer en panoramisch uitzicht over de tuin.",
      image: Ouderkamer,
      amenities: ["Kingsize bed", "Eigen badkamer", "Balkon", "Gratis WiFi"],
      price: "Liefde & respect"
    },
    {
      id: 2,
      name: "De Logeerkamer",
      description: "Comfortabele kamer met tweepersoonsbed en uitzicht op de tuin. Eigenlijk altijd permanent gereserveerd door Chris & Pim",
      image: Logeerkamer,
      amenities: ["Tweepersoonsbed", "Eigen badkamer", "Airco", "Gratis WiFi"],
      price: "Een fles wijn"
    },
    {
      id: 3,
      name: "De Carnaval Logeerkamer",
      description: "Gezellig kamer met strijkplank en carnavalsjasjes, perfecte plek om te crashen na een dag carnaval.",
      image: Logeerkamer2,
      amenities: ["Tweepersoonsbed", "Carnavalsjasjes", "Airco", "Gratis WiFi"],
      price: "Een knuffel"
    },
    {
      id: 4,
      name: "De Kinderkamer",
      description: "Gezellig kamer met uitzicht op de straat, de badkamer en WC zitten om de hoek.",
      image: Logeerkamer3,
      amenities: ["Tweepersoonsbed", "Knuffel", "Gedeelde Badkamer & WC", "Gratis WiFi"],
      price: "Worstenbroodjes"
    },
    {
      id: 5,
      name: "Strandchalet",
      description: "Gezellig chalet direct aan het strand met eigen veranda (in de verbouwing) gelegen op een ongeëvenaard vakantie park.",
      image: Chalet,
      amenities: ["Strandbed", "Privé terras", "Slaapplekken tot wel 6 personen", "Gratis WiFi"],
      price: "Een zonnige glimlach"
    }
  ];

  const amenityIcons = {
    "Kingsize bed": <Bed className="h-5 w-5" />,
    "Tweepersoonsbed": <Bed className="h-5 w-5" />,
    "Stapelbed": <Bed className="h-5 w-5" />,
    "Strandbed": <Bed className="h-5 w-5" />,
    "Koffiezetapparaat": <Coffee className="h-5 w-5" />,
    "Gratis WiFi": <Wifi className="h-5 w-5" />,
    "Strandstoel & parasol": <Umbrella className="h-5 w-5" />,
    "Privé terras": <Waves className="h-5 w-5" />,
  };

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Accommodaties" 
          subtitle="Kies de kamer die bij je past" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-48 sm:h-56 md:h-40 lg:h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{room.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">Voorzieningen:</h4>
                  <ul className="space-y-2">
                    {room.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center text-gray-600 text-sm sm:text-base">
                        <span className="mr-2 text-rose-500">
                          {amenityIcons[amenity as keyof typeof amenityIcons] || "•"}
                        </span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-base sm:text-lg font-bold text-rose-600">{room.price}</span>
                  <button 
                    onClick={() => alert("Deze kamer is altijd beschikbaar voor jou!")}
                    className="px-3 sm:px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition-colors text-sm sm:text-base"
                  >
                    Reserveer
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