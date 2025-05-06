import React, { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Camera, Heart, PartyPopper, X, ArrowLeft, ArrowRight } from 'lucide-react';
import Verkade1 from '../assets/gallery/Verkade stuk.jpg';
import Verkade2 from '../assets/gallery/Stukje 2 - Verkade.jpg';
import Omebernard1 from '../assets/gallery/Ome Bernard 1.png';
import Omebernard2 from '../assets/gallery/Ome Bernard 2.png';
import Kerst from '../assets/gallery/kerstdiner.jpg';
import Spanje from '../assets/gallery/Familie Spanje.jpg';
import Monique from '../assets/gallery/Monique van Rooij.jpg';
import Verrassing from '../assets/gallery/Foto mama 60 diner.jpeg';
import Marika from '../assets/gallery/mama marika.jpg';
import Everdien1 from '../assets/gallery/Everdien - Conchita groep vrijgezellenfeest.jpg';
import Verkade3 from '../assets/gallery/verkade 3.jpg';
import Champagne1 from '../assets/gallery/Mama beste cheerleader.jpg';
import Dianne from '../assets/gallery/Foto Dianne, Ries, mama.jpeg';

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState('inzendingen');
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = {
    inzendingen: [
      {
        url: Verkade1,
        caption: "Inzending van de geliefde Verkade familie"
      },
      {
        url: Verkade2,
        caption: "Inzending van de geliefde Verkade familie"
      },
      {
        url: Omebernard1,
        caption: "Collage van de Ome Bernard groep"
      },
      {
        url: Omebernard2,
        caption: "Een leuke wordzoeker van de Ome Bernard groep"
      },
      {
        url: Monique,
        caption: "Collage ingezonden door Monique van Rooij"
      }
    ],
    gezelligheid: [
      {
        url: Verrassing,
        caption: "Verrassings diner voor de Gastvrouw Conchita georganiseerd door Richards"
      },
      {
        url: Kerst,
        caption: "Een van de vele kerstdiners gehost bij Hotel Conchiet"
      },
      {
        url: Spanje,
        caption: "Waar de gastvrijheid geboren is, in Spanje"
      },
      {
        url: Marika,
        caption: "Ons Conchiet samen met Marika"
      }
    ],
    feesten: [
      {
        url: Everdien1,
        caption: "Vrijgezellenfeest van ons Conchiet"
      },
      {
        url: Verkade3,
        caption: "Zondag traditie met de Verkade familie"
      },
      {
        url: Champagne1,
        caption: "Ons Conchiet is haar natural habitat"
      },
      {
        url: Dianne,
        caption: "Samen met Dianne en Richard"
      }
    ]
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  const nextImage = () => {
    const currentImages = images[activeTab as keyof typeof images];
    setCurrentImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    const currentImages = images[activeTab as keyof typeof images];
    setCurrentImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Fotogalerij" 
          subtitle="Herinneringen in beeld" 
        />
        
        <div className="max-w-6xl mx-auto mt-12">
          <div className="flex justify-center mb-8">
            <div className="flex flex-col sm:flex-row bg-gray-200 rounded-lg p-1 w-full sm:w-auto">
              <button
                className={`px-4 sm:px-6 py-2 rounded-lg flex items-center justify-center ${
                  activeTab === 'inzendingen' 
                    ? 'bg-rose-500 text-white' 
                    : 'text-gray-700 hover:text-rose-500'
                } ${activeTab !== 'inzendingen' ? 'mb-1 sm:mb-0 sm:mr-1' : ''}`}
                onClick={() => setActiveTab('inzendingen')}
              >
                <Camera className="h-5 w-5 mr-2" />
                <span>Inzendingen</span>
              </button>
              <button
                className={`px-4 sm:px-6 py-2 rounded-lg flex items-center justify-center ${
                  activeTab === 'gezelligheid' 
                    ? 'bg-rose-500 text-white' 
                    : 'text-gray-700 hover:text-rose-500'
                } ${activeTab !== 'gezelligheid' ? 'mb-1 sm:mb-0 sm:mr-1' : ''}`}
                onClick={() => setActiveTab('gezelligheid')}
              >
                <Heart className="h-5 w-5 mr-2" />
                <span>Gezelligheid</span>
              </button>
              <button
                className={`px-4 sm:px-6 py-2 rounded-lg flex items-center justify-center ${
                  activeTab === 'feesten' 
                    ? 'bg-rose-500 text-white' 
                    : 'text-gray-700 hover:text-rose-500'
                }`}
                onClick={() => setActiveTab('feesten')}
              >
                <PartyPopper className="h-5 w-5 mr-2" />
                <span>Feesten</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {images[activeTab as keyof typeof images].map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer overflow-hidden rounded-lg shadow-md transform transition-transform hover:scale-105"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-white">
                  <p className="text-sm text-gray-600">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            onClick={prevImage}
            className="absolute left-4 text-white p-2"
          >
            <ArrowLeft className="h-8 w-8" />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 text-white p-2"
          >
            <ArrowRight className="h-8 w-8" />
          </button>
          
          <div className="max-w-4xl max-h-90vh">
            <img 
              src={images[activeTab as keyof typeof images][currentImageIndex].url} 
              alt="Gallery" 
              className="max-h-[80vh] max-w-full"
            />
            <p className="text-white text-center mt-4">
              {images[activeTab as keyof typeof images][currentImageIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};