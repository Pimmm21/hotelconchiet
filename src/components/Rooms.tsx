import React from 'react';
import { Bed, Coffee, Wifi } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

export const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "De Ouderkamer Suite",
      description: "Onze meest luxe kamer met kingsize bed, eigen badkamer en panoramisch uitzicht over de tuin.",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      amenities: ["Kingsize bed", "Eigen badkamer", "Koffiezetapparaat", "Gratis WiFi"],
      price: "Liefde & respect"
    },
    {
      id: 2,
      name: "De Logeerkamer",
      description: "Comfortabele kamer met tweepersoonsbed, gedeelde badkamer en uitzicht op de straat.",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      amenities: ["Tweepersoonsbed", "Gedeelde badkamer", "Bureau", "Gratis WiFi"],
      price: "Een fles wijn"
    },
    {
      id: 3,
      name: "De Kinderkamer",
      description: "Nostalgische kamer met stapelbed, speelgoed en veel herinneringen.",
      image: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      amenities: ["Stapelbed", "Speelgoed", "Gedeelde badkamer", "Gratis WiFi"],
      price: "Een knuffel"
    }
  ];

  const amenityIcons = {
    "Kingsize bed": <Bed className="h-5 w-5" />,
    "Tweepersoonsbed": <Bed className="h-5 w-5" />,
    "Stapelbed": <Bed className="h-5 w-5" />,
    "Koffiezetapparaat": <Coffee className="h-5 w-5" />,
    "Gratis WiFi": <Wifi className="h-5 w-5" />,
  };

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Accommodaties" 
          subtitle="Kies de kamer die bij je past" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Voorzieningen:</h4>
                  <ul className="space-y-2">
                    {room.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="mr-2 text-rose-500">
                          {amenityIcons[amenity as keyof typeof amenityIcons] || "•"}
                        </span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-lg font-bold text-rose-600">{room.price}</span>
                  <button 
                    onClick={() => alert("Deze kamer is altijd beschikbaar voor jou!")}
                    className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition-colors"
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