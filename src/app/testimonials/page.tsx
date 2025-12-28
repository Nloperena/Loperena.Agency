"use client";

import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { Quote, Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "IndepeNEST's fall detection without cameras gave us peace of mind. No invasive monitoring, just safety.",
      name: "Jane D.",
      location: "Tampa, FL",
      role: "Adult Child",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "Thanks to IndepeNEST's privacy smart home for elderly in Orlando, Mom lives independently without worry.",
      name: "Robert M.",
      location: "Orlando, FL",
      role: "Senior Resident",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "The radar-based home monitoring system is exactly what we needed. Discreet, effective, and respectful of privacy.",
      name: "Sarah T.",
      location: "Lake Nona, FL",
      role: "Adult Child",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "IndepeNEST's aging in place technology in Tampa helped my father stay independent. The voice controls are so easy.",
      name: "Michael R.",
      location: "The Villages, FL",
      role: "Caregiver",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "Discreet senior safety installations that respect privacy. Exactly what we needed for our family.",
      name: "Patricia W.",
      location: "Windermere, FL",
      role: "Adult Child",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "The non-invasive senior care tech gives us confidence that Dad is safe without feeling watched.",
      name: "David K.",
      location: "Kissimmee, FL",
      role: "Adult Child",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pb-20">
      <Header />
      <main className="pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Social Proof</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] tracking-tighter text-bone">
            Trusted by Neighbors <br className="hidden md:block" /> Across Central Florida.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-bone/60 max-w-2xl mx-auto font-bold leading-relaxed">
            Real stories from seniors and their families in Lake Nona, The Villages, Windermere, and beyond.
          </p>
        </section>

        {/* Testimonials Grid */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="p-10 rounded-[40px] glass-aperture border-2 border-white/5 hover:border-sage/40 transition-all flex flex-col h-full">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="text-sage fill-sage" size={16} />
                  ))}
                </div>
                <Quote className="text-sage/30 mb-6" size={40} />
                <p className="text-xl font-bold italic mb-10 leading-relaxed text-foreground/90 flex-1">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-14 h-14 rounded-full overflow-hidden grayscale">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-lg font-black">{testimonial.name}</p>
                    <div className="flex items-center gap-2 text-sm text-foreground/40 font-bold">
                      <MapPin size={12} className="text-sage" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mb-24 py-16 px-8 rounded-[40px] bg-white/[0.02] border border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Deep Dives</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-6">Case Studies</h3>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {
                title: "How We Helped Sarah's Mom in Lake Nona Stay Independent.",
                desc: "Challenge: Sarah's mother was experiencing mild mobility issues but didn't want cameras in her home. Solution: IndepeNEST installed a custom radar-based path lighting system and one-touch video connection. Outcome: Sarah's mother feels safer at night, and Sarah gains peace of mind knowing her mom is supported.",
                tags: ["Lake Nona", "Path Lighting", "Radar Sensors"]
              },
              {
                title: "Ensuring Safety in The Villages: Robert's Journey.",
                desc: "Challenge: Robert wanted to simplify his home and stay connected with his grandkids without learning complex apps. Solution: Voice-controlled assistance and a simple family connection hub. Outcome: Robert now controls his home with ease and enjoys weekly video calls with his family.",
                tags: ["The Villages", "Voice Assistance", "Family Hub"]
              }
            ].map((study, i) => (
              <div key={i} className="p-12 rounded-[60px] glass-aperture border border-white/5 hover:border-sage/20 transition-all">
                <div className="flex flex-wrap gap-3 mb-8">
                  {study.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-black uppercase tracking-widest bg-sage/10 text-sage px-4 py-2 rounded-full border border-sage/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl md:text-4xl font-black mb-6 leading-tight">{study.title}</h4>
                <p className="text-xl text-foreground/50 font-bold leading-relaxed">{study.desc}</p>
                <div className="mt-8">
                  <Link href="tel:+14077905891" className="text-sage font-black text-lg border-b-2 border-sage pb-1 hover:text-white hover:border-white transition-all">
                    Request a Plan Like This
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Watch</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-6">Video Testimonials</h3>
            <p className="text-xl text-foreground/50 font-bold max-w-2xl mx-auto italic">
              Hear directly from families who have experienced our privacy-first smart home solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="aspect-video rounded-[40px] overflow-hidden glass-aperture border-2 border-white/5 flex items-center justify-center">
              <p className="text-xl font-bold text-foreground/40 italic">Video Coming Soon</p>
            </div>
            <div className="aspect-video rounded-[40px] overflow-hidden glass-aperture border-2 border-white/5 flex items-center justify-center">
              <p className="text-xl font-bold text-foreground/40 italic">Video Coming Soon</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-8 rounded-[40px] bg-sage text-obsidian text-center">
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-[0.9]">Ready to Join Your Neighbors?</h2>
          <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto opacity-80 leading-relaxed">
            Discover the difference discreet, human-centered technology can make for your family.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="tel:+14077905891">
              <button className="h-20 px-16 rounded-3xl bg-obsidian text-bone font-black text-xl hover:scale-105 transition-all uppercase tracking-tighter">
                Secure Your Nest
              </button>
            </Link>
            <Link href="/services">
              <button className="h-20 px-16 rounded-3xl border-2 border-obsidian text-obsidian font-black text-xl hover:bg-obsidian hover:text-bone transition-all uppercase tracking-tighter">
                View Our Services
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
