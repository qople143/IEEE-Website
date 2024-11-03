import React from 'react';
import { Trophy, Users, Sparkles } from 'lucide-react';

export default function PreviousEvents() {
  const events = [
    {
      year: "2023",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80",
      title: "Sustainable Tech Solutions",
      participants: 450,
      winners: "EcoTrack - Smart Waste Management",
      impact: "Implemented in 3 cities"
    },
    {
      year: "2022",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
      title: "Future of Education",
      participants: 400,
      winners: "LearnSync - AI Tutor Platform",
      impact: "20,000+ students benefited"
    }
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="w-8 h-8 text-yellow-400" />
          <h2 className="text-4xl font-bold text-center">Previous Editions</h2>
        </div>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Take a look at our previous hackathons and the amazing projects that emerged from them.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-b from-gray-800/30 to-gray-900/30 rounded-2xl overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={event.image}
                  alt={`HackNova ${event.year}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-purple-400">HackNova {event.year}</h3>
                  <span className="text-gray-400">{event.title}</span>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">{event.participants} Participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">12 Projects</span>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-6">
                  <h4 className="font-semibold mb-2">Winning Project</h4>
                  <p className="text-purple-400 mb-2">{event.winners}</p>
                  <p className="text-sm text-gray-400">{event.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}