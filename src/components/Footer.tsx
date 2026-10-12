import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, MapPin, Clock, ArrowUp, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D2A4A] border-t border-[#3E3A63] text-[#F8F7FF]/70 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Summary */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="footer" />

            <p className="text-xs text-[#F8F7FF]/80 leading-relaxed max-w-sm">
              Also known as {RESTAURANT_INFO.altName}. Serving Channapatna with authentic dum biryani, signature smoky grilled chicken, Mughlai gravies, and delicious Indian & Chinese cuisine.
            </p>

            <div className="pt-2 text-xs text-[#F8F7FF]/60">
              <span>Approximate cost: {RESTAURANT_INFO.averageCost}</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span>Services: Dine-in, Takeaway, Delivery</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#5EEAD4] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#5EEAD4] transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#specialities" className="hover:text-[#5EEAD4] transition-colors">
                  Our Specialities
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#5EEAD4] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#5EEAD4] transition-colors">
                  Food Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#5EEAD4] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
              Contact & Orders
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[#F8F7FF]/50 block">Main Phone:</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phones.mainRaw}`}
                  className="text-[#F8F7FF] hover:text-[#5EEAD4] font-medium"
                >
                  {RESTAURANT_INFO.phones.main}
                </a>
              </div>

              <div>
                <span className="text-[#F8F7FF]/50 block">Home Delivery Hotline:</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phones.deliveryRaw}`}
                  className="text-[#5EEAD4] hover:underline font-bold"
                >
                  {RESTAURANT_INFO.phones.delivery}
                </a>
              </div>

              <div>
                <span className="text-[#F8F7FF]/50 block">Opening Hours:</span>
                <span className="text-[#F8F7FF]">{RESTAURANT_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Location & Map shortcut */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
              Restaurant Address
            </h4>
            <p className="text-xs text-[#F8F7FF]/80 leading-relaxed">
              {RESTAURANT_INFO.address.full}
            </p>
            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#5EEAD4] hover:underline font-bold"
              >
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#3E3A63] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F7FF]/60">
          <div>
            &copy; {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Channapatna, Karnataka 562160</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#F8F7FF]/80 hover:text-[#5EEAD4] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
