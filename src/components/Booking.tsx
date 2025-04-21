import React, { useState } from 'react';
import { Calendar, Clock, Users, X } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

export const Booking = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <section id="booking" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Boekingsfunctie" 
          subtitle="Plan je verblijf bij Hotel Conchiet" 
        />
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 mt-12">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Naam</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-gray-700 mb-2">Datum</label>
                <div className="relative">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    required
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                </div>
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-700 mb-2">Tijd</label>
                <div className="relative">
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    required
                  />
                  <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                </div>
              </div>
              <div>
                <label htmlFor="guests" className="block text-gray-700 mb-2">Aantal gasten</label>
                <div className="relative">
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 appearance-none"
                    required
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors"
              >
                Boek Nu
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Error Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center">
              <div className="mb-4 text-rose-500">
                <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Error 404 niet gevonden</h3>
              <p className="text-gray-600 mb-6">Reserveren niet nodig bij Hotel Conchiet! Je bent altijd welkom.</p>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors"
              >
                Begrepen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};