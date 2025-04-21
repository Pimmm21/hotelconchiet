import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

export const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Jan",
      relation: "Zoon",
      comment: "Al 30 jaar lang thuiskomen bij de beste gastvrouw die je je kunt wensen. Liefdevol, attent en altijd een koelkast vol lekkers!",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Maria",
      relation: "Dochter",
      comment: "Hotel Conchiet is meer dan een thuis, het is een plek waar je altijd jezelf kunt zijn. Mama's kookkunsten zijn ongeëvenaard!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "Peter",
      relation: "Schoonzoon",
      comment: "Sinds ik deel van de familie ben geworden, heeft 'Mama' me altijd laten voelen alsof ik er helemaal bij hoor. Warme gastvrijheid zoals nergens anders!",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      name: "Anneke",
      relation: "Vriendin",
      comment: "Al 40 jaar komen we bij elkaar over de vloer. De koffie staat altijd klaar en er is altijd tijd voor een goed gesprek. Wat een bijzondere vriendin!",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Wat onze gasten zeggen" 
          subtitle="Ervaringen van Hotel Conchiet bezoekers" 
        />
        
        <div className="max-w-4xl mx-auto mt-12 relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 p-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-rose-200">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{review.comment}"</p>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <p className="text-rose-500">{review.relation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white p-2 rounded-full shadow-lg text-rose-500 hover:text-rose-600 focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white p-2 rounded-full shadow-lg text-rose-500 hover:text-rose-600 focus:outline-none"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-rose-500' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};