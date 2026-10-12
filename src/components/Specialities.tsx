import React from 'react';
import { SPECIALITIES } from '../data/restaurantData';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

export const Specialities: React.FC = () => {
  const { addToCart, openCart } = useCart();

  return (
    <section id="specialities" className="py-24 bg-[#F0EDFF] border-t border-[#E4E0FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2">
            Mastered Over the Coals & Dum Handis
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A4A] tracking-tight">
            Our Specialities
          </h2>
          <p className="text-[#2D2A4A]/70 text-sm sm:text-base mt-3 leading-relaxed">
            City Madina Restaurant takes pride in offering an authentic selection of non-vegetarian and vegetarian dishes prepared daily to delight every palate.
          </p>
        </div>

        {/* 4 Feature Items Grid (2x2 with generous whitespace and elegant borders) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SPECIALITIES.map((spec) => (
            <div
              key={spec.id}
              className="flex flex-col sm:flex-row bg-white rounded-2xl border border-[#E4E0FA] hover:border-[#A78BFA] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md hover:shadow-[#A78BFA]/10"
            >
              {/* Large Food Photography */}
              <div className="sm:w-5/12 relative aspect-[4/3] sm:aspect-auto sm:min-h-[260px] bg-[#F8F7FF] shrink-0 overflow-hidden">
                <img
                  src={spec.image}
                  alt={spec.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent to-white/40" />
              </div>

              {/* Description & Action */}
              <div className="sm:w-7/12 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider mb-1">
                    {spec.highlight}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2A4A] mb-2 leading-tight">
                    {spec.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D2A4A]/75 leading-relaxed mb-4">
                    {spec.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EDFF] flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-[#7C3AED] tabular-nums">
                    {spec.price}
                  </span>
                  <a
                    href="#menu"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1E1B38] bg-[#A78BFA] hover:bg-[#906FE8] rounded-lg transition-colors shadow-xs"
                  >
                    <span>View in Menu</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
