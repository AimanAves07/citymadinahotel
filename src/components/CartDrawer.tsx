import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Send,
  AlertCircle,
  Phone,
  ArrowRight,
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalCount,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');

  if (!isCartOpen) return null;

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    // Construct structured WhatsApp message
    let message = `*NEW ORDER REQUEST - City Madina Restaurant*\n`;
    message += `──────────────────────\n`;
    message += `📋 *ORDER TYPE:* ${orderType === 'delivery' ? 'Home Delivery' : 'Takeaway / Parcel'}\n\n`;

    message += `👤 *CUSTOMER DETAILS:*\n`;
    message += `• Name: ${customerName.trim() || 'Not provided'}\n`;
    message += `• Phone: ${customerPhone.trim() || 'Not provided'}\n`;
    if (orderType === 'delivery') {
      message += `• Delivery Address / Landmark: ${deliveryAddress.trim() || 'Channapatna'}\n`;
    }
    if (orderNotes.trim()) {
      message += `• Instructions / Notes: ${orderNotes.trim()}\n`;
    }
    message += `\n🍲 *ORDERED DISHES:*\n`;

    cart.forEach((ci, idx) => {
      const itemTotal = ci.item.price * ci.quantity;
      message += `${idx + 1}. ${ci.item.name} x ${ci.quantity} = ₹${itemTotal}\n`;
    });

    message += `\n──────────────────────\n`;
    message += `💰 *ESTIMATED SUBTOTAL:* ₹${subtotal}\n`;
    message += `──────────────────────\n`;
    message += `\n⚠️ *Note:* This is an order request. Please confirm item availability, preparation time, and delivery charges. Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.phones.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2D2A4A]/60 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#E4E0FA] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-[#E4E0FA] flex items-center justify-between bg-[#F8F7FF]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#F0EDFF] border border-[#DDD8FC] flex items-center justify-center text-[#7C3AED]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-[#2D2A4A]">Your Order</h2>
                <p className="text-xs text-[#2D2A4A]/60 font-medium">
                  {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 text-[#2D2A4A]/60 hover:text-[#2D2A4A] rounded-lg hover:bg-[#F0EDFF] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {cart.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F0EDFF] border border-[#DDD8FC] flex items-center justify-center text-[#A78BFA]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2D2A4A] mb-1">
                  Your cart is empty
                </h3>
                <p className="text-xs text-[#2D2A4A]/70 max-w-xs mx-auto mb-6">
                  Add some delicious Chicken Biryani, Smoky Grilled Chicken, or fresh Rotis to get started!
                </p>
                <button
                  onClick={closeCart}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1E1B38] bg-[#A78BFA] hover:bg-[#906FE8] rounded-lg transition-colors shadow-xs"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* Order Type Toggle */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#F0EDFF] rounded-lg border border-[#E4E0FA]">
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 text-xs font-bold rounded-md transition-colors ${
                      orderType === 'delivery'
                        ? 'bg-[#A78BFA] text-[#1E1B38] shadow-xs'
                        : 'text-[#2D2A4A]/70 hover:text-[#2D2A4A]'
                    }`}
                  >
                    Home Delivery
                  </button>
                  <button
                    onClick={() => setOrderType('takeaway')}
                    className={`py-2 text-xs font-bold rounded-md transition-colors ${
                      orderType === 'takeaway'
                        ? 'bg-[#A78BFA] text-[#1E1B38] shadow-xs'
                        : 'text-[#2D2A4A]/70 hover:text-[#2D2A4A]'
                    }`}
                  >
                    Takeaway / Parcel
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#2D2A4A]/60 font-semibold pb-1 border-b border-[#E4E0FA]">
                    <span>Selected Items</span>
                    <button
                      onClick={clearCart}
                      className="text-[#2D2A4A]/50 hover:text-red-500 transition-colors flex items-center gap-1 font-medium"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear all</span>
                    </button>
                  </div>

                  {cart.map((ci) => (
                    <div
                      key={ci.item.id}
                      className="p-3.5 rounded-xl bg-[#F8F7FF] border border-[#E4E0FA] flex items-center justify-between gap-3 shadow-2xs"
                    >
                      {ci.item.image && (
                        <img
                          src={ci.item.image}
                          alt={ci.item.name}
                          className="w-12 h-12 rounded-lg object-cover border border-[#E4E0FA] shrink-0"
                          loading="lazy"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span
                            className={`w-2 h-2 rounded-full shrink-0 ${
                              ci.item.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                            }`}
                          />
                          <h4 className="text-sm font-semibold text-[#2D2A4A] truncate">
                            {ci.item.name}
                          </h4>
                        </div>
                        <div className="text-xs text-[#7C3AED] font-bold tabular-nums">
                          ₹{ci.item.price} × {ci.quantity} = ₹{ci.item.price * ci.quantity}
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center bg-white border border-[#E4E0FA] rounded-lg p-0.5 shrink-0 shadow-2xs">
                        <button
                          onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#2D2A4A] hover:bg-[#F0EDFF] rounded font-bold text-xs"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#2D2A4A] tabular-nums">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#7C3AED] hover:bg-[#F0EDFF] rounded font-bold text-xs"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Information Form */}
                <div className="pt-2 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
                    Contact & Delivery Details
                  </h4>

                  <div className="space-y-2.5">
                    <div>
                      <label className="text-[11px] text-[#2D2A4A]/70 font-semibold block mb-1">
                        Your Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g., Mohammed / Rahul"
                        className="w-full bg-[#F8F7FF] border border-[#E4E0FA] rounded-lg px-3 py-2 text-xs text-[#2D2A4A] placeholder-[#2D2A4A]/40 focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-[#2D2A4A]/70 font-semibold block mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="e.g., 9876543210"
                        className="w-full bg-[#F8F7FF] border border-[#E4E0FA] rounded-lg px-3 py-2 text-xs text-[#2D2A4A] placeholder-[#2D2A4A]/40 focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]"
                      />
                    </div>

                    {orderType === 'delivery' && (
                      <div>
                        <label className="text-[11px] text-[#2D2A4A]/70 font-semibold block mb-1">
                          Delivery Address & Landmark (Channapatna)
                        </label>
                        <textarea
                          rows={2}
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                          placeholder="e.g., Sadat Ali Khan Colony, Near Old Bus Stand, Kuvempu Nagar"
                          className="w-full bg-[#F8F7FF] border border-[#E4E0FA] rounded-lg px-3 py-2 text-xs text-[#2D2A4A] placeholder-[#2D2A4A]/40 focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA] resize-none"
                        />
                      </div>
                    )}

                    <div>
                      <label className="text-[11px] text-[#2D2A4A]/70 font-semibold block mb-1">
                        Special Instructions
                      </label>
                      <input
                        type="text"
                        value={orderNotes}
                        onChange={(e) => setOrderNotes(e.target.value)}
                        placeholder="e.g., Medium spicy, extra onions, hot parcel"
                        className="w-full bg-[#F8F7FF] border border-[#E4E0FA] rounded-lg px-3 py-2 text-xs text-[#2D2A4A] placeholder-[#2D2A4A]/40 focus:outline-none focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]"
                      />
                    </div>
                  </div>
                </div>

                {/* Disclaimer box */}
                <div className="p-3.5 rounded-lg bg-[#F0EDFF] border border-[#DDD8FC] text-[11px] text-[#2D2A4A]/80 leading-relaxed flex items-start gap-2 shadow-2xs">
                  <AlertCircle className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2D2A4A]">Order Request Policy:</strong> Orders are sent via WhatsApp to City Madina Restaurant (+91 7204409745). The restaurant will confirm availability, delivery radius, and final charges.
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Footer with Subtotal & WhatsApp Button */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#E4E0FA] bg-[#F8F7FF] space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#2D2A4A]/70 font-semibold">Estimated Subtotal</span>
                <span className="font-serif text-xl font-bold text-[#7C3AED] tabular-nums">
                  ₹{subtotal}
                </span>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-[#0F766E] bg-[#5EEAD4] hover:bg-[#2DD4BF] active:bg-[#14B8A6] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#5EEAD4]/25"
              >
                <Send className="w-4 h-4" />
                <span>Place Order on WhatsApp</span>
              </button>

              <div className="text-center pt-1">
                <a
                  href={`tel:${RESTAURANT_INFO.phones.deliveryRaw}`}
                  className="text-xs text-[#2D2A4A]/70 hover:text-[#7C3AED] font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Or call delivery directly: {RESTAURANT_INFO.phones.delivery}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
