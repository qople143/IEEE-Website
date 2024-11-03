import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-29T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-700/30 to-teal-400/30 rounded-2xl p-8">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Clock className="w-6 h-6 text-white-900" />
        <h3 className="text-2xl font-bold">Hackathon Countdown</h3>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-black/50 rounded-lg p-4">
              <span className="text-3xl font-bold text-teal-300">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}