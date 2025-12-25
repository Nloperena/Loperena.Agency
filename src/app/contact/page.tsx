"use client";

import React from "react";
import Header from "@/components/Header";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-background text-foreground min-h-screen pb-40">
      <Header />
      <main className="pt-48 px-10 max-w-7xl mx-auto">
        <div className="mb-32">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-10">Contact</h2>
          <h1 className="text-hero-headline mb-10 leading-[0.9]">Talk to a <br /> Local Neighbor.</h1>
          <p className="text-2xl text-foreground/40 max-w-3xl font-bold leading-relaxed">
            We are physically based in Central Florida. Whether you have a question or are ready for a walkthrough, we are just a phone call away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            {[
              { icon: <Phone className="text-sage" size={32} />, label: "Call Us Anytime", value: "(407) 555-0123" },
              { icon: <Mail className="text-sage" size={32} />, label: "Email Your Neighbor", value: "hello@loperena.agency" },
              { icon: <MapPin className="text-sage" size={32} />, label: "Our Local Base", value: "Lake Nona, Orlando, FL" },
              { icon: <Clock className="text-sage" size={32} />, label: "Response Guarantee", value: "30-Minute Support Zone" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-8 p-8 rounded-[40px] glass-aperture border border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-sage/10 shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-foreground/30 mb-1">{item.label}</p>
                  <p className="text-3xl font-black">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-aperture p-14 rounded-[60px] border border-sage/20 relative bg-sage/5">
            <h3 className="text-4xl font-black mb-8">Send a Message</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-black uppercase tracking-widest text-foreground/40 mb-4">Your Name</label>
                <input type="text" className="w-full bg-white/5 border-2 border-white/10 rounded-2xl p-6 text-2xl font-bold focus:border-sage outline-none transition-all" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-black uppercase tracking-widest text-foreground/40 mb-4">Phone Number</label>
                <input type="tel" className="w-full bg-white/5 border-2 border-white/10 rounded-2xl p-6 text-2xl font-bold focus:border-sage outline-none transition-all" placeholder="(000) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-black uppercase tracking-widest text-foreground/40 mb-4">How can we help?</label>
                <textarea rows={4} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl p-6 text-2xl font-bold focus:border-sage outline-none transition-all" placeholder="I'm interested in..." />
              </div>
              <button className="w-full h-24 bg-sage text-obsidian font-black text-2xl rounded-3xl hover:scale-105 transition-all">Request a Call Back</button>
            </form>
          </div>
        </div>

        <div className="mt-32 p-16 rounded-[60px] glass-aperture text-center">
          <p className="text-2xl font-bold italic text-foreground/60 leading-relaxed">
            "Your call will be answered by a real person right here in Central Florida. No robots, no long hold times. Just neighbors looking out for neighbors."
          </p>
        </div>
      </main>
    </div>
  );
}


