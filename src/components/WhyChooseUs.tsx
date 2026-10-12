import React from 'react';
import { WHY_CHOOSE_US } from '../data/restaurantData';
import { UtensilsCrossed, Flame, ShoppingBag, PhoneCall } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <UtensilsCrossed className="w-6 h-6 text-[#7C3AED]" key="1" />,
    <Flame className="w-6 h-6 text-[#7C3AED]" key="2" />,
    <ShoppingBag className="w-6 h-6 text-[#7C3AED]" key="3" />,
    <PhoneCall className="w-6 h-6 text-[#7C3AED]" key="4" />,
  ];

  return (
    <section className="py-24 bg-[#F0EDFF] border-t border-[#E4E0FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2">
            Our Commitment to Guests
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A4A] tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-[#2D2A4A]/70 text-sm sm:text-base mt-3 leading-relaxed">
            Conveniently situated on the Bengaluru–Mysore Road in Channapatna, providing dependable hospitality and satisfying meals.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-white border border-[#E4E0FA] hover:border-[#A78BFA] transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md hover:shadow-[#A78BFA]/10"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F0EDFF] border border-[#DDD8FC] flex items-center justify-center mb-5">
                  {icons[index]}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2D2A4A] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2D2A4A]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EDFF]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C3AED]">
                  Feature 0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
