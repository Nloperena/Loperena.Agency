"use client";

import React from "react";
import Header from "@/components/Header";
import { Coffee, ClipboardCheck, LayoutGrid, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Friendly Visit",
      desc: "We meet at your kitchen table for a cup of tea. No technical talk—just a chat about your routine and how we can make things a little easier.",
      icon: <Coffee size={48} className="text-sage" />,
      alt: "Illustration of two coffee mugs on a table representing a friendly meeting"
    },
    {
      title: "The $99 Harmony Check",
      desc: "A professional audit of your home's safety, Wi-Fi, and lighting. We identify simple fixes that yield immediate results.",
      icon: <ClipboardCheck size={48} className="text-sage" />,
      alt: "A checklist with green checkmarks representing a thorough home audit"
    },
    {
      title: "Your Harmony Plan",
      desc: "A clear, printed roadmap for your home's future. If you choose an installation, we credit the $99 back to you.",
      icon: <LayoutGrid size={48} className="text-sage" />,
      alt: "A clean, visual layout of a home showing where safety technology will be placed"
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pb-40">
      <Header />
      <main className="pt-48 px-10 max-w-7xl mx-auto">
        <div className="mb-32 text-center">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-10">How It Works</h2>
          <h1 className="text-hero-headline mb-10 leading-[0.9]">The Human Bridge.</h1>
          <p className="text-2xl text-foreground/40 max-w-2xl mx-auto font-bold leading-relaxed">
            We handle the setup, the management, and the support. You focus on living your best life in the home you love.
          </p>
        </div>

        <div className="space-y-20 mb-40">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-16 p-12 rounded-[60px] glass-aperture border border-white/5">
              <div className="w-32 h-32 rounded-[40px] bg-white/5 flex items-center justify-center shrink-0 border border-sage/20 shadow-xl">
                {step.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-black mb-6 text-foreground leading-tight flex items-center gap-4">
                  <span className="text-sage font-black opacity-30 text-6xl italic">0{i + 1}</span>
                  {step.title}
                </h3>
                <p className="text-2xl text-foreground/40 leading-relaxed font-bold">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-20 rounded-[80px] glass-aperture text-center border-2 border-sage/20 relative overflow-hidden bg-background">
          <h3 className="text-5xl md:text-7xl font-black mb-12">Ready for a Walkthrough?</h3>
          <p className="text-2xl text-foreground/50 mb-16 font-bold leading-relaxed max-w-3xl mx-auto">
            Schedule your friendly $99 Harmony Check today. We're physically based right here in Central Florida—serving Lake Nona, The Villages, and Windermere.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <button className="h-24 px-16 rounded-3xl bg-sage text-obsidian font-black text-2xl hover:scale-105 transition-all">Book Your Visit</button>
            <button className="h-24 px-16 rounded-3xl border-2 border-sage text-foreground font-black text-2xl hover:bg-sage/10 transition-all">Schedule a Demo</button>
          </div>
        </div>
      </main>
    </div>
  );
}


