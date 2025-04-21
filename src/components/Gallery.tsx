import React, { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ThumbsUp, ThumbsDown, X, ArrowLeft, ArrowRight } from 'lucide-react';

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState('fame');
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Placeholder images - these would be replaced with actual family photos
  const images = {
    fame: [
      {
        url: "https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Gezellige familiebijeenkomst tijdens Kerst"
      },
      {
        url: "https://images.pexels.com/photos/8355343/pexels-photo-8355343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Verjaardagsfeest met trotse mama"
      },
      {
        url: "https://images.pexels.com/photos/3893658/pexels-photo-3893658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Moederdag viering"
      },
      {
        url: "https://images.pexels.com/photos/7318014/pexels-photo-7318014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Familiewandeling in het park"
      },
      {
        url: "https://images.pexels.com/photos/3811021/pexels-photo-3811021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Vakantieherinneringen"
      },
      {
        url: "https://images.pexels.com/photos/4148842/pexels-photo-4148842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Lekker samen koken in de keuken"
      }
    ],
    shame: [
      {
        url: "https://images.pexels.com/photos/6877479/pexels-photo-6877479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Die keer dat we allemaal in het zwembad vielen"
      },
      {
        url: "https://images.pexels.com/photos/8728348/pexels-photo-8728348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Mislukte taart experiment"
      },
      {
        url: "https://images.pexels.com/photos/6890399/pexels-photo-6890399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Carnavalsoutfit 2019"
      },
      {
        url: "https://images.pexels.com/photos/8828202/pexels-photo-8828202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Kerst 2015 - de brandende kalkoen"
      },
      {
        url: "https://images.pexels.com/photos/7202810/pexels-photo-7202810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Die keer dat we allemaal in slaap vielen op de bank"
      },
      {
        url: "https://images.pexels.com/photos/6147029/pexels-photo-6147029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption: "Typische maandagochtend chaos"
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
    const currentImages = activeTab === 'fame' ? images.fame : images.shame;
    setCurrentImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    const currentImages = activeTab === 'fame' ? images.fame : images.shame;
    setCurrentImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Hall of Fame/Shame" 
          subtitle="Herinneringen om te koesteren (of liever te vergeten)" 
        />
        
        <div className="max-w-6xl mx-auto mt-12">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-200 rounded-lg p-1">
              <button
                className={`px-6 py-2 rounded-lg flex items-center ${
                  activeTab === 'fame' 
                    ? 'bg-rose-500 text-white' 
                    : 'text-gray-700 hover:text-rose-500'
                }`}
                onClick={() => setActiveTab('fame')}
              >
                <ThumbsUp className="h-5 w-5 mr-2" />
                <span>Hall of Fame</span>
              </button>
              <button
                className={`px-6 py-2 rounded-lg flex items-center ${
                  activeTab === 'shame' 
                    ? 'bg-rose-500 text-white' 
                    : 'text-gray-700 hover:text-rose-500'
                }`}
                onClick={() => setActiveTab('shame')}
              >
                <ThumbsDown className="h-5 w-5 mr-2" />
                <span>Hall of Shame</span>
              </button>
            </div>
          </div>
          
          <div>
            <div className={activeTab === 'fame' ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.fame.map((image, index) => (
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
            
            <div className={activeTab === 'shame' ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.shame.map((image, index) => (
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
              src={activeTab === 'fame' ? images.fame[currentImageIndex].url : images.shame[currentImageIndex].url} 
              alt="Gallery" 
              className="max-h-[80vh] max-w-full"
            />
            <p className="text-white text-center mt-4">
              {activeTab === 'fame' ? images.fame[currentImageIndex].caption : images.shame[currentImageIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};