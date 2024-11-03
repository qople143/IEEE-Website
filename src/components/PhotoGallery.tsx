import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function PhotoGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      url: "https://i.ibb.co/GWGh2SZ/IMG-2798.png",
    },
    {
      url: "https://i.ibb.co/q93z4SM/Screenshot-2024-11-01-180443.png",    
    },
    {
      url: "https://i.ibb.co/Rj9jV3N/IMG-2801.png",
    },
    {
      url: "https://i.ibb.co/7bnDXVT/IMG-2802.png",
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-teal-500/80 from-teal-700/80 to-black/40">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Camera className="w-8 h-8 text-white-900" />
          <h2 className="text-4xl font-bold text-center">CRYPTIC 1.0 AND CRYPTIC 2.0</h2>
        </div>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Relive the excitement and energy from our previous events
        </p>
        
        <div className="relative group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full 
                     text-white/50 hover:text-white hover:bg-black/80 transition opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className="flex-none w-[400px] group/item"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={image.url}
                    // alt={image.caption}
                    className="w-full h-full object-cover transform group-hover/item:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <p className="absolute bottom-4 left-4 text-white font-medium">
                      {/* {image.caption} */}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full 
                     text-white/50 hover:text-white hover:bg-black/80 transition opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}