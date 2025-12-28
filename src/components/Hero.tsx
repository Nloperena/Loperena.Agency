"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.fromTo(headlineRef.current, 
        { y: 80, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 2, delay: 0.5 }
      )
      .fromTo(cardRef.current, 
        { y: 60, opacity: 0, scale: 0.98 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1.5 }, "-=1.2"
      );

      // Subtle video grain/drift
      gsap.to(".video-bg", {
        scale: 1.05,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-obsidian">
      {/* Human Hero Background - Active Senior in Bright Living Room */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-obsidian/50 z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-20 pointer-events-none" />
        <img 
          src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Active senior in bright, clean living room representing independence and comfort" 
          className="video-bg w-full h-full object-cover grayscale opacity-50 brightness-75"
        />
      </div>

      <div className="relative z-30 text-center max-w-7xl mx-auto flex flex-col items-center">
        <h1 
          ref={headlineRef}
          className="text-hero-headline text-bone mb-12"
        >
          Independence is <br /> the Greatest Luxury.
        </h1>

        <p className="text-2xl md:text-3xl text-bone/80 font-bold mb-16 max-w-4xl leading-relaxed">
          Simple technology that looks out for you, so your family doesn't have to worry. We're your local neighbors in Central Florida, making 'staying at home' safer and simpler.
        </p>

        <div ref={cardRef} className="glass-aperture rounded-[60px] p-12 md:p-20 max-w-3xl w-full">
          <div className="grid md:grid-cols-2 gap-6">
            <button 
              className="touch-zone glow-sage"
              onClick={() => {
                const element = document.getElementById('senior-path');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              I want to stay independent
            </button>
            <button 
              className="touch-zone glow-sage"
              onClick={() => {
                const element = document.getElementById('family-path');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              I'm looking after a parent
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
