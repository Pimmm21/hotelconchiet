import React, { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Utensils, Wine, Coffee } from 'lucide-react';

export const Menu = () => {
  const [activeTab, setActiveTab] = useState('eten');

  const menuItems = {
    eten: [
      {
        name: "Mama's Beroemde Gehaktballen",
        description: "Sappige gehaktballen volgens geheim familierecept, geserveerd met jus en aardappelpuree.",
        price: "Een glimlach",
        special: true
      },
      {
        name: "Boerenkool met Worst",
        description: "Traditionele stamppot met rookworst zoals alleen mama die kan maken.",
        price: "Een knuffel",
        special: false
      },
      {
        name: "Appeltaart",
        description: "Huisgemaakte appeltaart met een vleugje kaneel en een krokante bodem.",
        price: "Een compliment",
        special: true
      },
      {
        name: "Pannenkoeken",
        description: "Luchtige pannenkoeken met stroop, poedersuiker of chocoladepasta.",
        price: "Een dankjewel",
        special: false
      },
      {
        name: "Zondagse Soep",
        description: "Verschillende soepen gemaakt van verse ingrediënten, ideaal voor een koude dag.",
        price: "Een verhaal",
        special: false
      }
    ],
    drinken: [
      {
        name: "Koffie",
        description: "Vers gezette koffie, altijd beschikbaar en perfect sterk.",
        price: "Een goed gesprek",
        special: true
      },
      {
        name: "Thee",
        description: "Diverse soorten thee, geserveerd in mooie kopjes met iets lekkers erbij.",
        price: "Tijd nemen",
        special: false
      },
      {
        name: "Wijn",
        description: "Rode of witte wijn, perfect voor bij het diner of gewoon omdat het kan.",
        price: "Een toast",
        special: false
      },
      {
        name: "Bier",
        description: "Koud pilsje of speciaalbier, altijd voorradig in de koelkast.",
        price: "Een bedankje",
        special: true
      },
      {
        name: "Slaapmutsje",
        description: "Een lekker sterke borrel voor het slapengaan, goed voor zoete dromen.",
        price: "Welterusten wensen",
        special: false
      }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Menukaart" 
          subtitle="Hotel Mama's beroemde gerechten" 
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                className={`px-6 py-2 rounded-lg ${
                  activeTab === 'eten' 
                    ? 'bg-rose-500 text-white' 
                    : 'text-gray-700 hover:text-rose-500'
                }`}
                onClick={() => setActiveTab('eten')}
              >
                <div className="flex items-center">
                  <Utensils className="h-5 w-5 mr-2" />
                  <span>Eten</span>
                </div>
              </button>
              <button
                className={`px-6 py-2 rounded-lg ${
                  activeTab === 'drinken' 
                    ? 'bg-rose-500 text-white' 
                    : 'text-gray-700 hover:text-rose-500'
                }`}
                onClick={() => setActiveTab('drinken')}
              >
                <div className="flex items-center">
                  {activeTab === 'drinken' ? (
                    <Wine className="h-5 w-5 mr-2 text-white" />
                  ) : (
                    <Wine className="h-5 w-5 mr-2" />
                  )}
                  <span>Drinken</span>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className={activeTab === 'eten' ? 'block' : 'hidden'}>
              <div className="grid gap-6">
                {menuItems.eten.map((item, index) => (
                  <div key={index} className={`p-4 rounded-lg ${item.special ? 'bg-rose-50' : ''}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {item.name}
                          {item.special && (
                            <span className="ml-2 text-sm bg-rose-500 text-white px-2 py-1 rounded-full">
                              Specialiteit
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                      <span className="text-rose-600 font-medium whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={activeTab === 'drinken' ? 'block' : 'hidden'}>
              <div className="grid gap-6">
                {menuItems.drinken.map((item, index) => (
                  <div key={index} className={`p-4 rounded-lg ${item.special ? 'bg-rose-50' : ''}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {item.name}
                          {item.special && (
                            <span className="ml-2 text-sm bg-rose-500 text-white px-2 py-1 rounded-full">
                              Favoriet
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                      <span className="text-rose-600 font-medium whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-600 italic">
            <p>Alle gerechten worden bereid met liefde en aandacht. Speciale dieetwensen? Laat het weten!</p>
          </div>
        </div>
      </div>
    </section>
  );
};