import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';
import { Utensils, Bike, Flame, ArrowRight, PhoneCall } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const { openCart } = useCart();

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Vignette Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_biryani_grilled_chicken_1791811358093.jpg"
          alt="Aromatic Biryani and Grilled Chicken at City Madina Restaurant"
          className="w-full h-full object-cover object-center filter brightness-90"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered deep indigo scrim and smooth transition to #F8F7FF */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A4A] via-[#2D2A4A]/85 to-[#2D2A4A]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2A4A]/90 via-transparent to-[#2D2A4A]/75" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Royal Brand Emblem Crest */}
        <div className="flex justify-center mb-5">
          <div className="p-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl inline-flex items-center justify-center group hover:scale-105 transition-transform duration-300">
            <Logo variant="icon-only" />
          </div>
        </div>

        {/* Location & Brand Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5EEAD4] mb-6">
          <span>Bengaluru–Mysore Highway (SH17)</span>
          <span aria-hidden="true">·</span>
          <span>Channapatna</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8F7FF] tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto text-balance">
          Authentic Flavours.{' '}
          <span className="italic font-normal text-[#A78BFA]">Unforgettable</span> Moments.
        </h1>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-[#F8F7FF]/90 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          {RESTAURANT_INFO.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide text-[#1E1B38] bg-[#A78BFA] hover:bg-[#906FE8] active:bg-[#7C3AED] rounded-lg shadow-lg shadow-[#A78BFA]/25 transition-all duration-200"
          >
            <Utensils className="w-4 h-4 text-[#1E1B38]" />
            <span>Explore Our Menu</span>
          </a>

          <button
            onClick={openCart}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide text-[#0F766E] bg-[#5EEAD4] hover:bg-[#2DD4BF] rounded-lg shadow-lg shadow-[#5EEAD4]/20 transition-all duration-200"
          >
            <Bike className="w-4 h-4" />
            <span>Order Home Delivery</span>
            <ArrowRight className="w-4 h-4 ml-1 opacity-80" />
          </button>
        </div>

        {/* 3 Core Highlights (Clean unboxed layout without pill badges) */}
        <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
            <div className="w-10 h-10 rounded-lg bg-[#A78BFA]/20 border border-[#A78BFA]/40 flex items-center justify-center text-[#A78BFA] shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Authentic Indian Flavours</h3>
              <p className="text-xs text-[#F8F7FF]/80">Dum biryani & rich gravies</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
            <div className="w-10 h-10 rounded-lg bg-[#5EEAD4]/20 border border-[#5EEAD4]/40 flex items-center justify-center text-[#5EEAD4] shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Dine-In & Takeaway</h3>
              <p className="text-xs text-[#F8F7FF]/80">Quick service on highway</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
            <div className="w-10 h-10 rounded-lg bg-[#A78BFA]/20 border border-[#A78BFA]/40 flex items-center justify-center text-[#A78BFA] shrink-0">
              <Bike className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Home Delivery Available</h3>
              <p className="text-xs text-[#F8F7FF]/80">Every day 12 PM – 12 AM</p>
            </div>
          </div>
        </div>

        {/* Quick Highway Assistance Bar */}
        <div className="mt-8 text-xs text-[#F8F7FF]/80 flex flex-wrap items-center justify-center gap-3">
          <span>Order hotline:</span>
          <a
            href={`tel:${RESTAURANT_INFO.phones.deliveryRaw}`}
            className="text-[#5EEAD4] hover:underline font-bold inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{RESTAURANT_INFO.phones.delivery}</span>
          </a>
          <span aria-hidden="true" className="text-white/40">·</span>
          <span>Approx ₹500 for two</span>
          <span aria-hidden="true" className="text-white/40">·</span>
          <span>Rating ~4.1/5</span>
        </div>
      </div>
    </section>
  );
};
