import React from 'react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { useCart } from '../context/CartContext';
import { Plus, Check, ShoppingBag } from 'lucide-react';

export const FeaturedDishes: React.FC = () => {
  const { addToCart, updateQuantity, getItemQuantity, openCart } = useCart();

  // Specifically select the 8 requested featured dishes matching official menu
  const featuredIds = [
    'rice_chicken_biryani',
    'rice_mutton_biryani',
    'starter_chicken_grilled_full',
    'starter_chicken_grilled_half',
    'starter_chicken_kabab_half',
    'starter_chicken_lollipop_half',
    'pg_paneer_butter_masala',
    'mg_mutton_masala',
  ];
  const featuredDishes = featuredIds
    .map((id) => MENU_ITEMS.find((item) => item.id === id))
    .filter((item): item is MenuItem => item !== undefined);

  return (
    <section className="py-24 bg-[#F8F7FF] border-t border-[#E4E0FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2">
              Signature Delights
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A4A] tracking-tight">
              Featured Dishes
            </h2>
            <p className="text-[#2D2A4A]/70 text-sm sm:text-base mt-2 max-w-xl">
              Handpicked customer favourites crafted with signature spice blends, slow dum preparation, and open-fire grilling.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#menu"
              className="text-xs uppercase tracking-wider font-bold text-[#7C3AED] hover:text-[#6D28D9] transition-colors inline-flex items-center gap-1.5"
            >
              <span>View Full Menu ({MENU_ITEMS.length} items)</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* 8 Featured Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish) => {
            const quantity = getItemQuantity(dish.id);
            const imageSrc = dish.image || '/src/assets/images/hero_biryani_grilled_chicken_1791811358093.jpg';

            return (
              <div
                key={dish.id}
                className="group flex flex-col bg-white rounded-xl border border-[#E4E0FA] hover:border-[#A78BFA] transition-all duration-200 overflow-hidden shadow-sm hover:shadow-md hover:shadow-[#A78BFA]/10"
              >
                {/* Image container */}
                <div className="relative aspect-[4/3] w-full bg-[#F0EDFF] overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-80" />

                  {/* Veg / Non-Veg Indicator */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs p-1.5 rounded-md border border-[#E4E0FA] shadow-xs">
                    <span
                      className={`inline-block w-2.5 h-2.5 rounded-full ${
                        dish.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                      }`}
                      title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg font-bold text-[#2D2A4A] group-hover:text-[#7C3AED] transition-colors leading-snug">
                        {dish.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="text-base font-bold text-[#7C3AED] tabular-nums">
                          ₹{dish.price}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#2D2A4A]/70 line-clamp-2 leading-relaxed mb-4">
                      {dish.description}
                    </p>
                  </div>

                  {/* Order / Add to cart action */}
                  <div className="pt-3 border-t border-[#F0EDFF] flex items-center justify-between gap-2">
                    {quantity === 0 ? (
                      <button
                        onClick={() => addToCart(dish, 1)}
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold uppercase tracking-wider text-[#1E1B38] bg-[#A78BFA] hover:bg-[#906FE8] active:bg-[#7C3AED] rounded-lg transition-colors shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Order Now</span>
                      </button>
                    ) : (
                      <div className="w-full flex items-center justify-between bg-[#F8F7FF] rounded-lg border border-[#A78BFA] p-1">
                        <button
                          onClick={() => updateQuantity(dish.id, quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#2D2A4A] hover:text-black hover:bg-[#E4E0FA] rounded font-bold text-sm"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-[#7C3AED] tabular-nums px-2">
                          {quantity} in cart
                        </span>
                        <button
                          onClick={() => updateQuantity(dish.id, quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#7C3AED] hover:bg-[#E4E0FA] rounded font-bold text-sm"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
