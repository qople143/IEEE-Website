import React from 'react';
import { Code2, Calendar, MapPin, Users } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-teal-400/70"></div>
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logos Section */}
      <div className="absolute top-0 w-full py-2 flex justify-around items-center bg-black/10">
      <img src="https://i.ibb.co/fxT19RF/IEEE-white.png" alt="IEEE Logo" className="h-28" /> {/* New logo added */}
      <img src="https://i.ibb.co/xJHWC7h/IEEE-Bangalore-Section-white.png" alt="IEEE Bangalore Section Logo" className="h-28" />
      <img src="https://i.ibb.co/Ptdwwqz/Atria-logo.png" alt="ATRIA Logo" style={{ height: '50px', width: 'auto' }} />    
      <img src="https://i.ibb.co/RvkNhnY/STB-LOGO-white.png" alt="STB Logo" className="h-28" />
    <img src="https://i.ibb.co/fS9NbcS/25-Logo-White.png" alt="25 Logo White" className="h-20" /> {/* New logo added */}
</div>






<div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
    <Code2 className="w-16 h-16 mx-auto mb-8 text-teal-200" />
    <img 
        src="https://i.ibb.co/rvqMYJf/text-1730631790768.png" 
        alt="CRYPTIC 3.0 2024" 
        className="w-auto max-w-full h-auto mb-6"
    />
        <p className="text-xl mb-8 text-white">
          24 Hours. 120+ participants. Infinite Possibilities.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfunH1PmNyhcVgJrFZ0YUjTBKfa8_t3hPoieRyIYJ-gsgMNAw/viewform" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-black-400 to-blue-400 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">
              Register Now
            </button>
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-white">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>29-30 DEC 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>ATRIA INSTITUTE OF TECHNOLOGY</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>150+ Participants</span>
          </div>
        </div>
      </div>
    </header>
  );
}
