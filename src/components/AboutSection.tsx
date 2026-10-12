import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Utensils, IndianRupee, Store } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F8F7FF] border-t border-[#E4E0FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story and Verified Facts */}
          <div className="lg:col-span-7">
            <div className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3">
              City Madina Hotel & Restaurant
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A4A] tracking-tight mb-6">
              A Local Favourite for Great Food
            </h2>

            <div className="space-y-4 text-[#2D2A4A]/80 text-base sm:text-lg leading-relaxed">
              <p>
                City Madina Restaurant, also known as City Madina Hotel, serves guests in Channapatna with a selection of biryani, grilled chicken, Mughlai gravies, Chinese dishes and vegetarian favourites. Whether you are stopping by for a satisfying meal, ordering takeaway, or arranging home delivery, we aim to make every visit convenient and enjoyable.
              </p>
            </div>

            {/* Verified Facts Matrix (Natural editorial cards) */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E4E0FA] flex items-start gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#F0EDFF] border border-[#DDD8FC] flex items-center justify-center text-[#7C3AED] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#2D2A4A]/60 block font-medium">Location</span>
                  <span className="text-sm font-bold text-[#2D2A4A]">Channapatna, Karnataka</span>
                  <span className="text-xs text-[#2D2A4A]/60 block mt-0.5">SH17, Kuvempu Nagar</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E4E0FA] flex items-start gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#F0EDFF] border border-[#DDD8FC] flex items-center justify-center text-[#7C3AED] shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#2D2A4A]/60 block font-medium">Cuisine Variety</span>
                  <span className="text-sm font-bold text-[#2D2A4A]">Indian, Mughlai, Chinese & Biryani</span>
                  <span className="text-xs text-[#2D2A4A]/60 block mt-0.5">Non-Veg & Vegetarian choices</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E4E0FA] flex items-start gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#F0EDFF] border border-[#DDD8FC] flex items-center justify-center text-[#7C3AED] shrink-0">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#2D2A4A]/60 block font-medium">Average Cost</span>
                  <span className="text-sm font-bold text-[#2D2A4A]">₹200–₹400 per person</span>
                  <span className="text-xs text-[#2D2A4A]/60 block mt-0.5">Approx ₹500 for two</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E4E0FA] flex items-start gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#F0EDFF] border border-[#DDD8FC] flex items-center justify-center text-[#7C3AED] shrink-0">
                  <Store className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#2D2A4A]/60 block font-medium">Dining Options</span>
                  <span className="text-sm font-bold text-[#2D2A4A]">Dine-in, Takeaway & Home Delivery</span>
                  <span className="text-xs text-[#2D2A4A]/60 block mt-0.5">Open 12:00 PM – 12:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#E4E0FA] shadow-xl">
              <img
                src="/src/assets/images/hero_biryani_grilled_chicken_1791811358093.jpg"
                alt="City Madina Restaurant Dining Experience"
                className="w-full h-[460px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A4A]/90 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#2D2A4A]/85 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#F8F7FF]">City Madina Hotel</h3>
                    <p className="text-xs text-[#F8F7FF]/80">Opposite Janata Saw Mill, SH17</p>
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phones.mainRaw}`}
                    className="px-3.5 py-1.5 text-xs font-bold text-[#1E1B38] bg-[#A78BFA] hover:bg-[#906FE8] rounded-md transition-colors shadow-xs"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
