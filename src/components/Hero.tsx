import React from 'react';
import { Code2, Calendar, MapPin, Users } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90"></div>
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <Code2 className="w-16 h-16 mx-auto mb-8 text-purple-400" />
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          HackNova 2024
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          48 Hours. 500 Hackers. Infinite Possibilities.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition">
            Register Now
          </button>
          <button className="border border-white/30 hover:border-white/60 px-8 py-3 rounded-full font-semibold transition">
            Learn More
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>March 15-17</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Tech Hub Center</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>500 Participants</span>
          </div>
        </div>
      </div>
    </header>
  );
}