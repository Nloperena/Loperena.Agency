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
      {/* Cinematic, Grainy Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-obsidian/40 z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-20 pointer-events-none" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="video-bg w-full h-full object-cover grayscale opacity-60 brightness-90"
          aria-label="Slow-motion video of two people holding hands, representing care and support"
        >
          {/* A slow-motion shot of hands holding is specified in the prompt */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-holding-hands-of-an-elderly-person-4129-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-30 text-center max-w-7xl mx-auto flex flex-col items-center">
        <h1 
          ref={headlineRef}
          className="text-hero-headline text-bone mb-24"
        >
          Independence is <br /> the Greatest Luxury.
        </h1>

        <div ref={cardRef} className="glass-aperture rounded-[60px] p-12 md:p-20 max-w-3xl w-full">
          <h2 className="text-3xl font-bold text-bone/80 mb-12">How can we help your family thrive today?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <button className="touch-zone glow-sage">
              I want to stay in my own home.
            </button>
            <button className="touch-zone glow-sage">
              I want to ensure my parents are safe.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
