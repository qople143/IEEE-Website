import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Theme from './components/Theme';
// import PreviousEvents from './components/PreviousEvents';
import PhotoGallery from './components/PhotoGallery';
import { Trophy, Users, Rocket, ChevronRight, Clock, CalendarCheck, PinIcon, MailCheck, PhoneCallIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Hero />
      <About />
      <Theme />
      <PhotoGallery />

      {/* About Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Participate?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-8 h-8 text-yellow-400" />,
                title: "20k in Prizes",
                description: "Compete for amazing prizes and opportunities"
              },
              {
                icon: <Users className="w-8 h-8 text-blue-400" />,
                title: "Network & Collaborate",
                description: "Meet fellow developers and industry experts"
              },
              {
                icon: <Rocket className="w-8 h-8 text-purple-400" />,
                title: "Learn & Grow",
                description: "Access workshops and mentorship opportunities"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-xl hover:transform hover:-translate-y-1 transition">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <PreviousEvents /> */}

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16"> Date | Venue | Fees </h2>
          <div className="space-y-8">
            {[
              { time: "DATE", event: "NOV 29-30" },
              { time: "VENUE", event: "ATRIA INSTITUTE OF TECHNOLOGY" },
              {
                time: "Registration Fees (Early Bird Offers):",
                event: (
                  <>
                    Rs. 555 for IEEE Members per team<br />
                    Rs. 666 for Non-IEEE Members per team
                  </>
                )
              }
              // { time: "Day 1 - 12:00 PM", event: "Hacking Begins" },
              // { time: "Day 2 - 12:00 PM", event: "Mid-way Presentations" },
              // { time: "Day 3 - 12:00 PM", event: "Hacking Ends" },
              // { time: "Day 3 - 3:00 PM", event: "Final Presentations" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6 bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition">
                <CalendarCheck className="w-6 h-6 text-teal-200 flex-shrink-0" />
                <div>
                  <p className="text-teal-200 font-semibold">{item.time}</p>
                  <p className="text-lg">{item.event}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500 ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900/50 to-blue-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of developers, designers, and innovators for 24 hours of creation, innovation, and fun.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfunH1PmNyhcVgJrFZ0YUjTBKfa8_t3hPoieRyIYJ-gsgMNAw/viewform" target="_blank" rel="noopener noreferrer">
            <button className="bg-teal-700 hover:bg-blue-300 text-white px-12 py-4 rounded-full font-semibold text-lg transition">
               Register for Cryptic 3.0 2024
            </button>
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 IEEE AIT Cryptic 3.0 All rights reserved.</p>
        </div>
        <div className="container mx-auto px-6 text-center text-gray-400">
    <div className="flex items-center justify-center">
        <MailCheck className="w-6 h-6 text-teal-200 flex-shrink-0 mr-2" />
        <p>cryptic.ait.2024@gmail.com</p>
    </div>
</div>

      </footer>
    </div>
  );
}

export default App;