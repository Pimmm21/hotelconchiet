import React, { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Utensils, Wine, Coffee } from 'lucide-react';

export const Menu = () => {
  const [activeTab, setActiveTab] = useState('eten');

  const menuItems = {
    eten: [
      {
        name: "Oma’s spaghetti",
        description: "Overheerlijke bolognese saus volgens geheim familierecept. Één ding kunnen we al wel verklappen; het is zeker niet mager en waag het is om een ander merk kruiden te kopen 😉.",
        price: "Gratis",
        special: true
      },
      {
        name: "Borrelplank 'om mee te starten'",
        description: "Heerlijke borrelplank, zoals genoemd 'om mee te starten'. Wat de meeste echter niet weten is dat het zo'n volle en lekkere borrelplank is, dat je eigenlijk niet meer hoeft te eten",
        price: "Volle maag",
        special: false
      },
      {
        name: "Vrijdag film avond diner",
        description: "Een combinatie van Spaanse lekkerheden; inktvis in rode saus, tortilla en nog veel meer! Filmpje uitkiezen en de avond is compleet.",
        price: "Een film kiezen",
        special: true
      },
      {
        name: "Pasta arrabbiata",
        description: "Heerlijke spaghetti in een licht pittige zelfgemaakte tomatensaus van roma tomaatjes en chili, lekker met Parmezaanse kaas. Vraag haar naar de geheime arrabbiata kruiden, waarschijnlijk krijg je deze er zo bij.",
        price: "Een dankjewel",
        special: false
      },
      {
        name: "Koolhydraat arme opties",
        description: "Bij Hotel Conchiet is niks te veel, behalve te veel koolhydraten. Er zijn overal koolhydraat arme opties voor te verzinnen, vraag vooral naar de mogelijkheden.",
        price: "Compliment",
        special: true
      }
    ],
    drinken: [
      {
        name: "Licor 43",
        description: "Veelzijdig drankje dat bij iedereen het Spaanse temperament los maakt",
        price: "Nooit te vroeg",
        special: true
      },
      {
        name: "Wijn",
        description: "Rode of witte wijn, perfect voor bij het diner of gewoon omdat het kan. Altijd in koolydraad arme variant te krijgen",
        price: "Een toast",
        special: true
      },
      {
        name: "Bier",
        description: "Koud pilsje of speciaalbier, altijd voorradig in de koelkast.",
        price: "To-go mogelijk",
        special: false
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