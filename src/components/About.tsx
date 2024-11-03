import React from 'react';
import { Award, Code, Globe2, Lightbulb } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function About() {
  const stats = [
    { icon: <Code className="w-6 h-6" />, value: '500+', label: 'Participants' },
    { icon: <Globe2 className="w-6 h-6" />, value: '20+', label: 'Countries' },
    { icon: <Award className="w-6 h-6" />, value: '$50K', label: 'in Prizes' },
    { icon: <Lightbulb className="w-6 h-6" />, value: '48', label: 'Hours' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About HackNova 2024</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                HackNova is more than just a hackathon—it's a celebration of innovation, 
                creativity, and technological advancement. Join us for 48 hours of coding, 
                collaboration, and breakthrough moments.
              </p>
              <p>
                Whether you're a seasoned developer or just starting your coding journey, 
                HackNova provides the perfect platform to transform your ideas into reality. 
                Work alongside like-minded individuals, receive mentorship from industry experts, 
                and compete for exciting prizes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-purple-400 flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:pl-12">
            <CountdownTimer />
            <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
              <ul className="space-y-4">
                {[
                  'Expert mentorship from industry leaders',
                  'Workshops and technical sessions',
                  'Networking opportunities',
                  'Amazing prizes and swag',
                  'Free food and refreshments',
                  'Fun activities and mini-events'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}