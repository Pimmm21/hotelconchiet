import React from 'react';
import { Mail, Phone, Home, ExternalLink } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact" 
          subtitle="Laat een bericht achter voor tijdens het feest" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contactgegevens</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-rose-100 text-rose-600 rounded-full mr-4">
                  <Home className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Adres</h4>
                  <p className="text-gray-600">Hotel Conchiet, Liefdestraat 60, Nederland</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-rose-100 text-rose-600 rounded-full mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Telefoon</h4>
                  <p className="text-gray-600">+31 (0)6 12345678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-rose-100 text-rose-600 rounded-full mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">mama@hotelconchiet.nl</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-2">Openingstijden</h4>
              <p className="text-gray-600 italic">24/7, 365 dagen per jaar. Mama's hotel is altijd open!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};