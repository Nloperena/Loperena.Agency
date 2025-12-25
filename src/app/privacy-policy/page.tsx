"use client";

import React from "react";
import Header from "@/components/Header";
import { ShieldCheck, Lock, EyeOff, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-background text-foreground min-h-screen pb-40">
      <Header />
      <main className="pt-48 px-10 max-w-5xl mx-auto">
        <div className="mb-32">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-10">Privacy & Security</h2>
          <h1 className="text-hero-headline mb-10 leading-[0.9]">Your Home, <br /> Your Data.</h1>
          <p className="text-2xl text-foreground/40 font-bold leading-relaxed">
            Privacy isn't just a policy at Loperena Agency—it's a core design principle. We believe that technology should provide safety without sacrificing your dignity.
          </p>
        </div>

        <div className="space-y-16 mb-40">
          {[
            {
              title: "No Invasive Cameras",
              desc: "We prioritize privacy-first sensing technology, such as radar-based movement detection, over invasive video cameras in living areas. Your home remains a sanctuary.",
              icon: <EyeOff size={40} className="text-sage" />
            },
            {
              title: "Bank-Level Encryption",
              desc: "All communication between your devices and our stewardship team is protected by the same level of encryption used by financial institutions.",
              icon: <Lock size={40} className="text-sage" />
            },
            {
              title: "Strict Data Ownership",
              desc: "You own your data. We never sell, share, or misuse your personal information. Our only goal is to provide assurance and support.",
              icon: <ShieldCheck size={40} className="text-sage" />
            },
            {
              title: "Vetted Professionals",
              desc: "Every Loperena team member undergoes rigorous FDLE Level 2 background checks before ever entering a neighbor's home.",
              icon: <UserCheck size={40} className="text-sage" />
            }
          ].map((item, i) => (
            <div key={i} className="p-12 rounded-[60px] glass-aperture border border-white/5 flex flex-col md:flex-row gap-10">
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center border border-sage/20 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-3xl font-black mb-6">{item.title}</h3>
                <p className="text-xl text-foreground/50 font-bold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-sage/10 p-16 rounded-[60px] border border-sage/20 text-center">
          <h3 className="text-4xl font-black mb-8">Questions about Security?</h3>
          <p className="text-xl text-foreground/60 font-bold mb-10">
            We are happy to explain our encryption methods and privacy protocols in plain English.
          </p>
          <button className="h-20 px-12 rounded-3xl bg-sage text-obsidian font-black text-xl hover:scale-105 transition-all">Speak to our Security Lead</button>
        </div>
      </main>
    </div>
  );
}


