import React, { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Hoe laat is inchecken?",
      answer: "Altijd welkom! Bij Hotel Conchiet zijn er geen vaste inchecktijden. De deur staat altijd open en er is altijd een warm welkom, ongeacht het tijdstip."
    },
    {
      question: "Wat is het wifi-wachtwoord?",
      answer: "Mama123. Maar vergeet niet dat de beste verbinding nog steeds is wanneer je je telefoon weglegt en echt aanwezig bent!"
    },
    {
      question: "Moet ik reserveren?",
      answer: "Reserveren is niet nodig. Er is altijd plaats voor jou in Hotel Conchiet, ook als je onaangekondigd langskomt."
    },
    {
      question: "Zijn huisdieren toegestaan?",
      answer: "Natuurlijk! Huisdieren maken deel uit van de familie en zijn daarom meer dan welkom in Hotel Conchiet."
    },
    {
      question: "Is het ontbijt inbegrepen?",
      answer: "Jazeker, en niet zomaar een ontbijt. Verwacht een uitgebreid ontbijt met verse broodjes, eitjes en natuurlijk een goede kop koffie, geserveerd met liefde."
    },
    {
      question: "Wat is het annuleringsbeleid?",
      answer: "Annuleren? Bij Hotel Conchiet bestaat dat woord niet. Je kunt altijd komen, en als je plannen veranderen, is dat prima. We zien je wel weer een andere keer!"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="FAQ & Fun Facts" 
          subtitle="Alles wat je wilt weten over Hotel Conchiet" 
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left font-medium flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-gray-800">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-rose-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-rose-500" />
                  )}
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-rose-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Fun Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                <p className="text-gray-700">Hotel Conchiet heeft in haar 60-jarige bestaan meer dan 10.000 kopjes koffie geserveerd.</p>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                <p className="text-gray-700">De langste verblijfsduur van een gast was 9 maanden (toen hij/zij nog niet geboren was).</p>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                <p className="text-gray-700">Het recept voor Mama's beroemde appeltaart blijft een goed bewaard geheim.</p>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                <p className="text-gray-700">Hotel Conchiet's motto "Altijd open, altijd welkom" is al 60 jaar onveranderd.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};