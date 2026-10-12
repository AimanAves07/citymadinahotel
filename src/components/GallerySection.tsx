import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#F8F7FF] border-t border-[#E4E0FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2">
            Visual Experience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A4A] tracking-tight">
            Food Gallery
          </h2>
          <p className="text-[#2D2A4A]/70 text-sm sm:text-base mt-3 leading-relaxed">
            A glimpse of our biryanis, open-fire grilled chicken, fragrant curries, and culinary presentation. Click any image to view in high resolution.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F0EDFF] border border-[#E4E0FA] hover:border-[#A78BFA] cursor-pointer transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-[#A78BFA]/15"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A4A]/90 via-[#2D2A4A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[11px] font-bold text-[#5EEAD4] uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-serif font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#F8F7FF]/90 line-clamp-1">
                  {item.description}
                </p>
              </div>

              {/* Top-right zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#2D2A4A]/70 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white/90 group-hover:text-[#5EEAD4] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D2A4A]/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image and Caption Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[selectedImageIndex].image}
              alt={GALLERY_ITEMS[selectedImageIndex].title}
              className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-bold text-[#5EEAD4] uppercase tracking-widest block mb-1">
                {GALLERY_ITEMS[selectedImageIndex].category} ({selectedImageIndex + 1} / {GALLERY_ITEMS.length})
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-1">
                {GALLERY_ITEMS[selectedImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#F8F7FF]/90">
                {GALLERY_ITEMS[selectedImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
