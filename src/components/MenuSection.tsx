import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/restaurantData';
import { useCart } from '../context/CartContext';
import { Search, Plus, Check, ShoppingBag, X, Info } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { addToCart, updateQuantity, getItemQuantity, openCart, totalCount } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      // Dietary filter
      const matchesDiet =
        vegFilter === 'all' ||
        (vegFilter === 'veg' && item.isVeg) ||
        (vegFilter === 'non-veg' && !item.isVeg);

      // Search query filter
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [activeCategory, vegFilter, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-[#F8F7FF] border-t border-[#E4E0FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2">
            City Madina Hotel & Restaurant
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A4A] tracking-tight">
            Our Complete Menu
          </h2>
          <p className="text-[#2D2A4A]/70 text-sm sm:text-base mt-3 leading-relaxed">
            Freshly prepared daily with fragrant basmati, clay-oven tandoor rotis, slow-cooked Mughlai gravies, and fiery starters.
          </p>
        </div>

        {/* Search & Dietary Controls */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Field */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7C3AED]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g., Biryani, Grilled, Kabab, Naan)..."
              className="w-full bg-white border border-[#E4E0FA] rounded-lg pl-10 pr-10 py-2.5 text-sm text-[#2D2A4A] placeholder-[#2D2A4A]/40 focus:outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#A78BFA]/20 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2D2A4A]/50 hover:text-[#2D2A4A]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Veg / Non-Veg Toggle Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E4E0FA] rounded-lg shrink-0 shadow-xs">
            <button
              onClick={() => setVegFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                vegFilter === 'all'
                  ? 'bg-[#A78BFA] text-[#1E1B38] shadow-xs'
                  : 'text-[#2D2A4A]/70 hover:text-[#2D2A4A]'
              }`}
            >
              All Diets
            </button>
            <button
              onClick={() => setVegFilter('non-veg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                vegFilter === 'non-veg'
                  ? 'bg-red-100 border border-red-300 text-red-800 shadow-xs'
                  : 'text-[#2D2A4A]/70 hover:text-[#2D2A4A]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Non-Veg</span>
            </button>
            <button
              onClick={() => setVegFilter('veg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                vegFilter === 'veg'
                  ? 'bg-emerald-100 border border-emerald-300 text-emerald-800 shadow-xs'
                  : 'text-[#2D2A4A]/70 hover:text-[#2D2A4A]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Veg Only</span>
            </button>
          </div>
        </div>

        {/* Category Tabs (Interactive Segmented Filter Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#A78BFA] text-[#1E1B38] shadow-sm'
                  : 'bg-white text-[#2D2A4A]/80 hover:text-[#2D2A4A] hover:bg-[#F0EDFF] border border-[#E4E0FA]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center rounded-xl bg-white border border-[#E4E0FA] shadow-xs">
            <p className="text-[#2D2A4A]/70 text-base">No dishes found matching your current filter.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setVegFilter('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold text-[#7C3AED] hover:text-[#6D28D9] border border-[#A78BFA] rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => {
              const qty = getItemQuantity(item.id);

              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-between p-5 rounded-xl bg-white border border-[#E4E0FA] hover:border-[#A78BFA] transition-all duration-200 shadow-xs hover:shadow-md hover:shadow-[#A78BFA]/10"
                >
                  <div>
                    {/* Header: Title, Veg Dot, Description, and Optional Dish Photo */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-start gap-2 flex-1">
                        <span
                          className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${
                            item.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                          }`}
                          title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        />
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between gap-2">
                            <h3 className="font-semibold text-base text-[#2D2A4A] hover:text-[#7C3AED] transition-colors">
                              {item.name}
                            </h3>
                            <span className="text-base font-bold text-[#7C3AED] tabular-nums shrink-0">
                              ₹{item.price}
                            </span>
                          </div>
                          {/* Short Description */}
                          <p className="text-xs text-[#2D2A4A]/70 mt-1 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {item.image && (
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-lg overflow-hidden shrink-0 border border-[#E4E0FA] bg-[#F0EDFF] shadow-xs">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-4 pt-3 border-t border-[#F0EDFF] flex items-center justify-between">
                    <span className="text-[11px] text-[#2D2A4A]/60 font-medium">
                      {MENU_CATEGORIES.find((c) => c.id === item.category)?.label || item.category}
                    </span>

                    {qty === 0 ? (
                      <button
                        onClick={() => addToCart(item, 1)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1E1B38] bg-[#A78BFA] hover:bg-[#906FE8] active:bg-[#7C3AED] rounded-md transition-colors shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    ) : (
                      <div className="flex items-center bg-[#F8F7FF] rounded-md border border-[#A78BFA] p-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, qty - 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#2D2A4A] hover:bg-[#E4E0FA] rounded font-bold text-xs"
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-[#7C3AED] tabular-nums px-2.5">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, qty + 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#7C3AED] hover:bg-[#E4E0FA] rounded font-bold text-xs"
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pricing Transparency & Verification Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#F0EDFF] border border-[#DDD8FC] flex items-start gap-3 text-[#2D2A4A]/80 text-xs leading-relaxed max-w-4xl mx-auto shadow-xs">
          <Info className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#2D2A4A]">Official Restaurant Menu: </span>
            Every item, portion size, and price (₹) is directly matched to City Madina Restaurant’s official in-restaurant menu (Established 2016). All prices are in Indian Rupees (GST applicable as per counter bill). For instant home delivery confirmation, call +91 7204409745 or place your order request on WhatsApp.
          </div>
        </div>
      </div>
    </section>
  );
};
