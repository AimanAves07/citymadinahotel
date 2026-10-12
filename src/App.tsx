import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedDishes } from './components/FeaturedDishes';
import { MenuSection } from './components/MenuSection';
import { Specialities } from './components/Specialities';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#F8F7FF] text-[#2D2A4A] flex flex-col font-sans selection:bg-[#A78BFA]/30 selection:text-[#2D2A4A]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* B. Hero Section */}
          <Hero />

          {/* C. Featured Dishes */}
          <FeaturedDishes />

          {/* D. Our Menu */}
          <MenuSection />

          {/* E. Specialities Section */}
          <Specialities />

          {/* F. About Us */}
          <AboutSection />

          {/* G. Food Gallery */}
          <GallerySection />

          {/* H. Why Choose Us? */}
          <WhyChooseUs />

          {/* I. Location and Contact */}
          <ContactLocation />
        </main>

        {/* J. Footer */}
        <Footer />

        {/* Global Cart Slide-Over Drawer */}
        <CartDrawer />

        {/* Floating Quick Action Controls */}
        <FloatingActions />
      </div>
    </CartProvider>
  );
}
