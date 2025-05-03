import React from 'react';
import { Calendar, Users, Gift } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import verkadeImage from '../assets/verkade-3.jpg';
import Kerstdiner from '../assets/Kerstdiner.jpg';
import Diner21 from '../assets/21diner.jpg';

export const Events = () => {
  const events = [
    {
      id: 1,
      name: "21-Diners",
      description: "Vier je 21e verjaardag in stijl met een feestelijk diner en stralende mama als gastvrouw.",
      image: Diner21,
      icon: <Users className="h-8 w-8" />,
      details: "Met 16 extra slaapplekken"
    },
    {
      id: 2,
      name: "Kerst",
      description: "Geniet van een warme, familie kerstviering met heerlijk eten en gezelligheid.",
      image: Kerstdiner,
      icon: <Gift className="h-8 w-8" />,
      details: "Wijnflessen als microfoon"
    },
    {
      id: 3,
      name: "Carnaval",
      description: "Laat je gaan tijdens het vrolijkste feest van het jaar, met verkleedpartijen en gezelligheid.",
      image: verkadeImage,
      icon: <Calendar className="h-8 w-8" />,
      details: "Iedereen is welkom"
    },
    {
      id: 4,
      name: "Wijnproverij",
      description: "Laat je de hele avond verwennen met wijnen een speciaal wijnhuis met bijpassende gerechten",
      image: "https://images.pexels.com/photos/6177639/pexels-photo-6177639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: <Calendar className="h-8 w-8" />,
      details: "Geen wijn te kort"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Events" 
          subtitle="Speciale gelegenheden bij Hotel Conchiet" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {events.map((event) => (
            <div key={event.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={event.image} 
                alt={event.name} 
                className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-rose-500 rounded-full text-white">
                    {event.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{event.name}</h3>
                </div>
                <p className="text-white mb-3">{event.description}</p>
                <span className="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                  {event.details}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            className="px-8 py-3 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors"
            onClick={() => alert("Je hoeft niets te plannen, mama regelt het!")}
          >
            Plan een event
          </button>
        </div>
      </div>
    </section>
  );
};