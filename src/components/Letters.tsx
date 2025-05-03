import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

export const Letters = () => {
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);

  const letters = [
    {
      id: 1,
      sender: "Lieve Tante",
      preview: "Bedankt voor alle mooie momenten...",
      content: "Lieve mama van het hotel,\n\nAl jaren ben je er voor iedereen. Je deur staat altijd open, je hart nog wijder. De koffie is altijd vers, de koektrommel altijd gevuld, en je luisterend oor altijd beschikbaar.\n\nBedankt voor alle mooie momenten, de goede gesprekken, en natuurlijk je heerlijke gehaktballen!\n\nLiefs,\nJe favoriete nicht"
    },
    {
      id: 2,
      sender: "Je Oudste",
      preview: "Mama, wat ben je toch bijzonder...",
      content: "Lieve mama,\n\nWat ben je toch bijzonder. Al 60 jaar maak je van ons huis een thuis, niet alleen voor ons maar voor iedereen die langskomt. Je oneindige geduld, je warme glimlach, en natuurlijk je kookkunsten maken je tot de beste 'hotelmanager' die er is.\n\nDankjewel voor alles!\n\nLiefs, je oudste"
    },
    {
      id: 3,
      sender: "De Buren",
      preview: "De beste buurvrouw die we ons kunnen wensen...",
      content: "Lieve buurvrouw,\n\nAl jaren zijn we niet alleen buren, maar familie. Je bent de beste buurvrouw die we ons kunnen wensen. Altijd in voor een praatje, altijd bereid te helpen, en natuurlijk die heerlijke kopjes koffie met wat lekkers erbij.\n\nWe hopen dat je nog lang onze 'hotel manager' blijft!\n\nLieve groeten,\nDe buren"
    }
  ];

  return (
    <section id="letters" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Lieve Woorden" 
          subtitle="Brieven van onze gasten" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {letters.map((letter) => (
            <div 
              key={letter.id}
              onClick={() => setSelectedLetter(letter.id)}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-rose-100 text-rose-600 rounded-full mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{letter.sender}</h3>
              </div>
              <p className="text-gray-600 line-clamp-2">{letter.preview}</p>
              <p className="text-rose-500 mt-4 text-sm">Klik om te lezen →</p>
            </div>
          ))}
        </div>

        {/* Letter Modal */}
        {selectedLetter && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full p-8 relative">
              <button 
                onClick={() => setSelectedLetter(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Van: {letters.find(l => l.id === selectedLetter)?.sender}
                </h3>
                <div className="h-px bg-gray-200 w-full"></div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-600 whitespace-pre-line">
                  {letters.find(l => l.id === selectedLetter)?.content}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};