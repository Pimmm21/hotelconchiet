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
        url: Kerst,
        caption: "Een van de vele kerstdiners gehost bij Hotel Conchiet"
      },
      {
        url: Spanje,
        caption: "Waar de gastvrijheid geboren is, in Spanje"
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
        url: "https://images.pexels.com/photos/4148842/pexels-photo-4148842.jpeg",
        caption: "Samen koken in mama's keuken"
      },
      {
        url: "https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg",
        caption: "Spelletjesavond bij Hotel Conchiet"
      },
      {
        url: "https://images.pexels.com/photos/5778899/pexels-photo-5778899.jpeg",
        caption: "Gezellig samen aan de koffie"
      }
    ],
    feesten: [
      {
        url: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg",
        caption: "Verjaardagsfeest van mama"
      },
      {
        url: "https://images.pexels.com/photos/7180795/pexels-photo-7180795.jpeg",
        caption: "Kerstviering met de hele familie"
      },
      {
        url: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
        caption: "Paasbrunch bij Hotel Conchiet"
      },
      {
        url: "https://images.pexels.com/photos/7180788/pexels-photo-7180788.jpeg",
        caption: "Nieuwjaarsborrel met oliebollen"
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
            <div className="inline-flex bg-gray-200 rounded-lg p-1">
              <button
                className={`px-6 py-2 rounded-lg flex items-center ${
                  activeTab === 'inzendingen' 
                    ? 'bg-rose-500 text-white' 
                    : 'text-gray-700 hover:text-rose-500'
                }`}
                onClick={() => setActiveTab('inzendingen')}
              >
                <Camera className="h-5 w-5 mr-2" />
                <span>Inzendingen</span>
              </button>
              <button
                className={`px-6 py-2 rounded-lg flex items-center ${
                  activeTab === 'gezelligheid' 
                    ? 'bg-rose-500 text-white' 
                    : 'text-gray-700 hover:text-rose-500'
                }`}
                onClick={() => setActiveTab('gezelligheid')}
              >
                <Heart className="h-5 w-5 mr-2" />
                <span>Gezelligheid</span>
              </button>
              <button
                className={`px-6 py-2 rounded-lg flex items-center ${
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