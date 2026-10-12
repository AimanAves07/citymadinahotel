import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Clock, Navigation, Bike, ExternalLink } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#F8F7FF] border-t border-[#E4E0FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2">
            Visit or Order
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A4A] tracking-tight">
            Location & Contact
          </h2>
          <p className="text-[#2D2A4A]/70 text-sm sm:text-base mt-3 leading-relaxed">
            Located right on the main Bengaluru–Mysore highway road in Channapatna. Reach out for dine-in tables, counter takeaway, or home delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-white border border-[#E4E0FA] shadow-sm space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F0EDFF] border border-[#DDD8FC] flex items-center justify-center text-[#7C3AED] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider mb-1">
                    Address
                  </h3>
                  <p className="text-sm text-[#2D2A4A] leading-relaxed font-normal">
                    {RESTAURANT_INFO.address.full}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#F0EDFF]">
                <div className="w-10 h-10 rounded-lg bg-[#F0EDFF] border border-[#DDD8FC] flex items-center justify-center text-[#7C3AED] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-sm text-[#2D2A4A] font-semibold">
                    Monday – Sunday: 12:00 PM – 12:00 AM
                  </p>
                  <p className="text-xs text-[#2D2A4A]/60 mt-0.5">
                    Open all 7 days for lunch, dinner & late evening meals
                  </p>
                </div>
              </div>

              {/* Phone Numbers with click-to-call buttons */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#F0EDFF]">
                <div className="w-10 h-10 rounded-lg bg-[#F0EDFF] border border-[#DDD8FC] flex items-center justify-center text-[#7C3AED] shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider mb-2">
                    Phone Numbers
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs text-[#2D2A4A]/60 block">Main Restaurant Line:</span>
                      <a
                        href={`tel:${RESTAURANT_INFO.phones.mainRaw}`}
                        className="text-base font-bold text-[#7C3AED] hover:text-[#6D28D9] tabular-nums transition-colors"
                      >
                        {RESTAURANT_INFO.phones.main}
                      </a>
                    </div>
                    <div>
                      <span className="text-xs text-[#2D2A4A]/60 block">Home Delivery Order Hotline:</span>
                      <a
                        href={`tel:${RESTAURANT_INFO.phones.deliveryRaw}`}
                        className="text-base font-bold text-[#0F766E] hover:text-[#115E59] tabular-nums transition-colors"
                      >
                        {RESTAURANT_INFO.phones.delivery}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#F0EDFF] flex flex-col gap-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phones.mainRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#2D2A4A] bg-[#F8F7FF] hover:bg-[#F0EDFF] border border-[#E4E0FA] hover:border-[#A78BFA] rounded-lg transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#7C3AED]" />
                  <span>Call Restaurant ({RESTAURANT_INFO.phones.main})</span>
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phones.deliveryRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#0F766E] bg-[#5EEAD4] hover:bg-[#2DD4BF] rounded-lg transition-colors shadow-sm"
                >
                  <Bike className="w-4 h-4" />
                  <span>Call for Home Delivery ({RESTAURANT_INFO.phones.delivery})</span>
                </a>

                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#2D2A4A] hover:text-[#7C3AED] bg-white border border-[#E4E0FA] hover:border-[#A78BFA] rounded-lg transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#7C3AED]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed & Landmark Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl overflow-hidden bg-white border border-[#E4E0FA] shadow-sm">
              <div className="p-4 bg-[#F0EDFF] border-b border-[#E4E0FA] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-xs font-semibold text-[#2D2A4A]">
                    Opposite Janata Saw Mill, SH17, Channapatna
                  </span>
                </div>
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#7C3AED] hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative aspect-[16/10] w-full bg-[#F8F7FF]">
                <iframe
                  title="City Madina Restaurant Location Map"
                  src={RESTAURANT_INFO.mapsEmbedSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="p-4 bg-white text-xs text-[#2D2A4A]/80 border-t border-[#E4E0FA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span>Landmark: Opposite Janata Saw Mill on Bengaluru–Mysore Highway</span>
                <span className="text-[#7C3AED] font-bold">Pin: 562160, Karnataka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
