import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Gift, Calendar, Star } from 'lucide-react';

export const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Carnavalspakket",
      description: "Alles wat je nodig hebt voor een onvergetelijke carnaval, inclusief verkleedkleren, schmink en een stevige bodem voor het feesten.",
      image: "https://images.pexels.com/photos/3045825/pexels-photo-3045825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: <Calendar className="h-6 w-6" />,
      includes: [
        "Verkleedkleren",
        "Professionele schmink",
        "Stevig ontbijt",
        "Aspirinetjes voor de volgende dag"
      ],
      price: "Een dansje"
    },
    {
      id: 2,
      name: "Kerstpakket",
      description: "Geniet van een magische kerst met alles voor een feestelijke tijd, inclusief decoraties, hapjes en warme chocolademelk.",
      image: "https://images.pexels.com/photos/1702116/pexels-photo-1702116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: <Gift className="h-6 w-6" />,
      includes: [
        "Traditioneel kerstdiner",
        "Kerstcadeaus onder de boom",
        "Warme chocolademelk met slagroom",
        "Kerstmuziek en gezelligheid"
      ],
      price: "Een kerstliedje"
    },
    {
      id: 3,
      name: "Verjaardagspakket",
      description: "Vier je speciale dag met een persoonlijk verjaardagsfeest, taart en cadeaus op maat gemaakt.",
      image: "https://images.pexels.com/photos/2072181/pexels-photo-2072181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: <Star className="h-6 w-6" />,
      includes: [
        "Verjaardagstaart naar keuze",
        "Persoonlijke cadeaus",
        "Familiefeest",
        "Fotoshoot voor herinneringen"
      ],
      price: "Een glimlach"
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