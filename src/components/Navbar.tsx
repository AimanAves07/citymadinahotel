import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { totalCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#F8F7FF]/95 backdrop-blur-md border-b border-[#E4E0FA] shadow-md shadow-[#2D2A4A]/5'
            : 'bg-[#F8F7FF]/85 backdrop-blur-sm border-b border-[#E4E0FA]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Zone 1: Unique Brand Emblem & Wordmark */}
            <a
              href="#home"
              className="flex items-center shrink-0"
              aria-label="City Madina Restaurant Home"
            >
              <Logo variant="navbar" />
            </a>

            {/* Zone 2: 4-5 Navigation Links (Clean single line typography) */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#2D2A4A]/80">
              <a
                href="#home"
                className="hover:text-[#7C3AED] transition-colors whitespace-nowrap shrink-0"
              >
                Home
              </a>
              <a
                href="#menu"
                className="hover:text-[#7C3AED] transition-colors whitespace-nowrap shrink-0"
              >
                Our Menu
              </a>
              <a
                href="#specialities"
                className="hover:text-[#7C3AED] transition-colors whitespace-nowrap shrink-0"
              >
                Specialities
              </a>
              <a
                href="#about"
                className="hover:text-[#7C3AED] transition-colors whitespace-nowrap shrink-0"
              >
                About Us
              </a>
              <a
                href="#gallery"
                className="hover:text-[#7C3AED] transition-colors whitespace-nowrap shrink-0"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="hover:text-[#7C3AED] transition-colors whitespace-nowrap shrink-0"
              >
                Contact
              </a>
            </nav>

            {/* Zone 3: 1 Primary Action + Cart trigger */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Call shortcut desktop */}
              <a
                href={`tel:${RESTAURANT_INFO.phones.deliveryRaw}`}
                className="hidden md:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#2D2A4A] hover:text-[#7C3AED] border border-[#E4E0FA] bg-white rounded-lg hover:border-[#A78BFA] transition-colors"
                title="Call for Home Delivery"
              >
                <Phone className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>+91 7204409745</span>
              </a>

              {/* Shopping Bag Button */}
              <button
                onClick={openCart}
                className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-[#E4E0FA] hover:border-[#A78BFA] text-[#2D2A4A] hover:text-[#7C3AED] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
                aria-label={`View Cart with ${totalCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#A78BFA] text-[#1E1B38] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-in fade-in zoom-in-75">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Primary Action Button */}
              <button
                onClick={openCart}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1E1B38] bg-[#A78BFA] hover:bg-[#906FE8] active:bg-[#7C3AED] rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
              >
                Order for Delivery
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#2D2A4A]/80 hover:text-[#2D2A4A] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#2D2A4A]/60 backdrop-blur-xs transition-opacity"
            onClick={closeMenu}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#F8F7FF] border-l border-[#E4E0FA] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E4E0FA]">
                <Logo variant="navbar" />
                <button
                  onClick={closeMenu}
                  className="p-2 text-[#2D2A4A]/70 hover:text-[#2D2A4A] rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 py-6">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="text-base font-semibold text-[#2D2A4A] hover:text-[#7C3AED] py-1 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#menu"
                  onClick={closeMenu}
                  className="text-base font-semibold text-[#2D2A4A] hover:text-[#7C3AED] py-1 transition-colors"
                >
                  Our Menu
                </a>
                <a
                  href="#specialities"
                  onClick={closeMenu}
                  className="text-base font-semibold text-[#2D2A4A] hover:text-[#7C3AED] py-1 transition-colors"
                >
                  Our Specialities
                </a>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="text-base font-semibold text-[#2D2A4A] hover:text-[#7C3AED] py-1 transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#gallery"
                  onClick={closeMenu}
                  className="text-base font-semibold text-[#2D2A4A] hover:text-[#7C3AED] py-1 transition-colors"
                >
                  Food Gallery
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="text-base font-semibold text-[#2D2A4A] hover:text-[#7C3AED] py-1 transition-colors"
                >
                  Location & Contact
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E4E0FA] space-y-3">
              <button
                onClick={() => {
                  closeMenu();
                  openCart();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-[#1E1B38] bg-[#A78BFA] hover:bg-[#906FE8] rounded-lg shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Order / Cart ({totalCount})</span>
              </button>

              <div className="grid grid-cols-1 gap-2 pt-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phones.mainRaw}`}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-[#2D2A4A] bg-white border border-[#E4E0FA] rounded-lg hover:border-[#A78BFA]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Call: {RESTAURANT_INFO.phones.main}</span>
                </a>
                <a
                  href={`tel:${RESTAURANT_INFO.phones.deliveryRaw}`}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold text-[#0F766E] bg-[#5EEAD4]/30 border border-[#5EEAD4] rounded-lg hover:bg-[#5EEAD4]/50"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>Delivery: {RESTAURANT_INFO.phones.delivery}</span>
                </a>
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 text-xs text-[#2D2A4A]/70 hover:text-[#2D2A4A]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>SH17, Kuvempu Nagar, Channapatna</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
