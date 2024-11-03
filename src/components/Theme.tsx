import React from 'react';
import { Lightbulb, Brain, Cpu, Leaf } from 'lucide-react';

export default function Theme() {
  const themes = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Gen AI & Machine Learning",
      description: "Harness the power of artificial intelligence to solve real-world problems"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Sustainability | SDG's",
      description: "Create solutions from the 17 SDGs of UN for a sustainable future"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Innovation",
      description: "Revolutionize healthcare with cutting-edge technology"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black/50 to-teal-900/40">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Lightbulb className="w-8 h-8 text-yellow-400" />
          <h2 className="text-4xl font-bold text-center">2024 Hackathon Themes</h2>
        </div>
        <p className="text-2xl text-yellow-300 text-center max-w-3xl mx-auto mb-16">
          THEME : Using Generative AI for to Solve for United Nations’s Sustainable Development Goals (SDGs)
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <div 
              key={index}
              className="relative group bg-gradient-to-b from-gray-800/50 to-teal-900/50 p-8 rounded-xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-300/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-teal-300 mb-6">{theme.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{theme.title}</h3>
                <p className="text-gray-400">{theme.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}