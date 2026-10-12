import React from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ShoppingBag, MessageSquare, Phone } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const { totalCount, subtotal, openCart } = useCart();

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-5 right-5 z-30 flex items-center gap-2.5">
      {/* Floating Cart Button (shows count and subtotal if items exist) */}
      {totalCount > 0 && (
        <button
          onClick={openCart}
          className="flex items-center gap-2.5 py-3 px-4 rounded-full bg-[#A78BFA] hover:bg-[#906FE8] text-[#1E1B38] font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#A78BFA]/30 transition-all transform hover:scale-105 active:scale-95"
          aria-label="View Cart"
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1.5 -right-2 bg-[#2D2A4A] text-[#5EEAD4] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalCount}
            </span>
          </div>
          <span>View Cart · ₹{subtotal}</span>
        </button>
      )}

      {/* Floating WhatsApp Quick Order Button */}
      <a
        href={`https://wa.me/${RESTAURANT_INFO.phones.whatsappNumber}?text=${encodeURIComponent(
          'Hello City Madina Restaurant, I would like to inquire about today’s menu and place an order.'
        )}`}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-[#5EEAD4] hover:bg-[#2DD4BF] text-[#0F766E] flex items-center justify-center shadow-xl shadow-[#5EEAD4]/30 transition-transform hover:scale-105 active:scale-95"
        title="WhatsApp City Madina Restaurant"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
      </a>
    </aside>
  );
};
