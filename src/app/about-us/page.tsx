"use client";

import React from "react";
import Header from "@/components/Header";
import { CheckCircle2, UserCheck, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-background text-foreground min-h-screen pb-40">
      <Header />
      <main className="pt-48 px-10 max-w-7xl mx-auto">
        <div className="mb-32">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-10">About Us</h2>
          <h1 className="text-hero-headline mb-10 leading-[0.9]">Local Neighbors, <br /> Global Standards.</h1>
          <p className="text-2xl text-foreground/40 max-w-3xl font-bold leading-relaxed">
            Loperena Agency was founded on a simple belief: every senior deserves to stay in the home they love with total dignity and independence. We are your local Central Florida partners in making that a reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-40">
          <div className="p-14 rounded-[60px] glass-aperture border border-white/5">
            <h3 className="text-4xl font-black mb-8 text-sage">Our Mission</h3>
            <p className="text-xl text-foreground/60 leading-relaxed font-bold">
              To provide the human bridge between complex technology and graceful aging. We simplify, manage, and monitor your home's support systems so you can focus on living.
            </p>
          </div>
          <div className="p-14 rounded-[60px] glass-aperture border border-white/5">
            <h3 className="text-4xl font-black mb-8 text-sage">Our Promise</h3>
            <p className="text-xl text-foreground/60 leading-relaxed font-bold">
              We will never use invasive cameras, we will never sell your data, and we will always treat your home with the same respect we give our own parents.
            </p>
          </div>
        </div>

        <div className="rounded-[80px] glass-aperture p-20 flex flex-col lg:flex-row items-center gap-24 relative overflow-hidden border border-sage/10">
          <div className="flex-1 z-10">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-10">Our Credentials</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-10 leading-tight">Vetted & Trusted.</h3>
            <ul className="space-y-8 mb-16">
              {[
                { label: "FDLE Level 2 Background Checked", icon: <UserCheck className="text-sage" /> },
                { label: "Licensed & Fully Insured in Florida", icon: <ShieldCheck className="text-sage" /> },
                { label: "30-Minute Emergency Response Zone", icon: <CheckCircle2 className="text-sage" /> }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-6 text-2xl font-black">
                  {item.icon}
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full aspect-square rounded-[60px] overflow-hidden grayscale contrast-125 opacity-20">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Loperena team professional looking confident and caring" className="w-full h-full object-cover" />
          </div>
        </div>
      </main>
    </div>
  );
}


