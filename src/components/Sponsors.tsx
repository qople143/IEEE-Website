import React from 'react';  
import {  Star } from 'lucide-react';  

export default function Sponsors() {  
  const images = [  
    {  
      url: "https://i.ibb.co/GQYyjrn/wie.jpg",  
    },
    {  
      url: "https://i.ibb.co/DpD43Hm/vrp.jpg",  
    },  
    {  
      url: "https://i.ibb.co/W6mG9L1/door.jpg",    
    },  
    {  
      url: "https://i.ibb.co/MDN3CJx/collab.jpg",  
    }  
  ];  

  return (  
<section className="py-24 bg-gradient-to-b from-teal-500/80 from-teal-700/80 to-black/40">  
  <div className="container mx-auto px-6">  
    <div className="flex items-center justify-center gap-3 mb-8">  
      <Star className="w-8 h-8 text-white-900" />  
      <h2 className="text-4xl font-bold text-center">SPONSORS</h2>  
    </div>  
    <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">  
      Meet our amazing sponsors for the Cryptic 3.O !!  
    </p>  

    <div className="grid grid-cols-2 gap-6">  
      {images.map((image, index) => (  
        <div   
          key={index}  
          className="flex justify-center"  // Centers the content horizontally  
        >  
          <div className="relative w-[300px]">    
            <div className="aspect-video rounded-xl overflow-hidden">  
              <img   
                src={image.url}  
                className="w-full h-full object-cover transition duration-500"  
              />  
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity">  
                <p className="absolute bottom-4 left-4 text-white font-medium">  
                  {/* {image.caption} */}  
                </p>  
              </div>  
            </div>  
          </div>  
        </div>  
      ))}  
    </div>  
  </div>  
</section> 
  );  
}