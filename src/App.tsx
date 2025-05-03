import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Rooms } from './components/Rooms';
import { Events } from './components/Events';
import { Booking } from './components/Booking';
import { Amenities } from './components/Amenities';
import { Location } from './components/Location';
import { Packages } from './components/Packages';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Faq } from './components/Faq';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Workshops } from './components/Workshops';
import { Letters } from './components/Letters';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Events />
        <Booking />
        <Amenities />
        <Location />
        <Packages />
        <Reviews />
        <Contact />
        <About />
        <Faq />
        <Menu />
        <Gallery />
        <Workshops />
        <Letters />
      </main>
      <Footer />
    </div>
  );
}

export default App;