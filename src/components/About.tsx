import React from 'react';
import { Award, Code, Globe2, Lightbulb } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function About() {
  const stats = [
    { icon: <Code className="w-6 h-6" />, value: '120+', label: 'Participants' },
    { icon: <Globe2 className="w-6 h-6" />, value: '10+', label: 'Colleges' },
    { icon: <Award className="w-6 h-6" />, value: '20K', label: 'in Prizes' },
    { icon: <Lightbulb className="w-6 h-6" />, value: '24', label: 'Hours' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-teal-700/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About CRYPTIC 3.0</h2>
            <div className="space-y-6 text-gray-300">
              <p>
              Welcome to Cryptic 3.0, the flagship hackathon hosted by the IEEE Atria Student Branch! This year’s hackathon is set to take place on November 29th and 30th, 2024 and will challenge innovators from diverse backgrounds to push the boundaries of Generative AI for social impact. Focused on addressing the United Nations’ Sustainable Development Goals (SDGs), Cryptic 3.0 provides a platform for participants to leverage cutting-edge AI solutions to tackle global challenges, from climate action to health and education.
              </p>
              <p>
              In partnership with forward-thinking organizations, Cryptic 3.0 is committed to fostering innovation, education, and skill development in AI. Participants can expect a dynamic, collaborative environment with access to resources, mentorship, and prizes that encourage creative problem-solving and real-world application of AI technologies.Join us for this exciting journey and contribute your ideas, talents, and creativity towards building a more sustainable and technologically advanced future.
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
            <div className="mt-8 bg-gradient-to-r from-teal-700/30 to-teal-400/30 rounded-2xl p-8">
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
                    <div className="w-2 h-2 bg-white rounded-full"></div>
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