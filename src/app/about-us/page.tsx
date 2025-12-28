"use client";

import React from "react";
import Header from "@/components/Header";
import { CheckCircle2, MapPin, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="bg-background text-foreground min-h-screen pb-20">
      <Header />
      <main className="pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20 relative text-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://westminstercommunitiesfl.org/westminster-baldwin-park/wp-content/uploads/sites/12/0747-scaled-e1761047026852.jpg" 
              alt="Seniors enjoying life in Baldwin Park, Orlando" 
              className="w-full h-[400px] object-cover opacity-10 rounded-[40px]"
            />
          </div>
          <div className="relative z-10 pt-24 pb-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
              We're Your Local Neighbors <br className="hidden md:block" /> Helping Families Thrive.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-bone/60 max-w-2xl mx-auto font-bold italic leading-relaxed">
              "We provide the human bridge between thoughtful technology and the seniors we love."
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs">Our Mission</h2>
              <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Competing with Anxiety, Not Big Tech.</h3>
              <p className="text-lg text-foreground/60 font-bold leading-relaxed">
                At IndepeNEST, we aren't competing with big tech stores—we're competing with anxiety. We provide the human bridge between thoughtful technology and the seniors we love.
              </p>
              <p className="text-lg text-foreground/60 font-bold leading-relaxed">
                    Founded on the belief that independence is the greatest luxury, we specialize in discreet, camera-free smart home solutions tailored for aging in place. Our local team lives and works right here in Central Florida, delivering personal service with a 30-minute response guarantee.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="tel:+14077905891">
                  <button className="h-14 px-8 rounded-xl bg-sage text-obsidian font-black text-base hover:scale-105 transition-all">
                    Talk to a Local Neighbor
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-sage/10 blur-3xl rounded-full" />
              <img 
                src="https://www.floridaelder.com/wp-content/uploads/2023/07/19665-Happy-senior-couple-dancing-together-at-home-shutterstock_1961736304.jpg" 
                alt="Happy senior couple dancing in their Florida home" 
                className="relative z-10 rounded-[40px] border-2 border-white/5 shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-24 py-16 px-8 rounded-[40px] bg-white/[0.02] border border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Differentiators</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-6">Why Neighbors Choose Us</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Local Expertise",
                desc: "Serving retirement communities in Lake Nona, The Villages, Windermere, and Orlando."
              },
              {
                title: "Privacy-First",
                desc: "Radar sensors only. No video monitoring or invasive cameras in your private spaces."
              },
              {
                title: "Senior-Friendly",
                desc: "Simple, easy-to-use tech with full white-glove setup and ongoing local support."
              },
              {
                title: "Real Peace of Mind",
                desc: "Our staff provides gentle reassurance for seniors and adult children."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-[32px] glass-aperture border border-white/5 flex flex-col items-center text-center h-full">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-sage" size={20} />
                </div>
                <h4 className="text-xl font-black mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/50 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Heritage Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQGkyoWF6XLw_Q/profile-displayphoto-crop_800_800/B4EZk5boiUIkAI-/0/1757605170745?e=1768435200&v=beta&t=BnyNmbNEm-LKdOiEFvbZVfZTM6IcYJqf7WLEtVAsa8Q" 
                alt="Nicholas, IndepeNEST Founder" 
                className="rounded-[40px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 p-6 rounded-[24px] bg-sage text-obsidian font-black shadow-2xl">
                <p className="text-xl mb-0.5">9th Gen</p>
                <p className="text-[10px] uppercase tracking-widest">Builder Legacy</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs">Founder Heritage</h2>
              <h3 className="text-3xl md:text-5xl font-black leading-tight">Nicholas.</h3>
              <p className="text-lg text-foreground/60 font-bold leading-relaxed">
                As a ninth-generation builder, Nicholas brings centuries of craftsmanship values to modern senior care technology.
              </p>
              <p className="text-lg text-foreground/60 font-bold leading-relaxed">
                Our building legacy spans generations, from Spain to Puerto Rico to Central Florida. This deep understanding of how homes are built allows us to integrate technology seamlessly and invisibly into your existing living space.
              </p>
              <div className="space-y-3 pt-4">
                {[
                      "Expert in Non-Invasive Sensor Tech",
                      "Certified Smart Home Integrator",
                      "Dedicated to Local Senior Independence"
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-base font-bold">
                    <ShieldCheck className="text-sage" size={20} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-8 rounded-[40px] bg-sage text-obsidian text-center">
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-[0.9]">Ready for Lasting <br /> Independence?</h2>
          <p className="text-lg md:text-xl font-bold mb-10 max-w-xl mx-auto opacity-80 leading-relaxed">
            Let's discuss how we can help your family thrive in the home you love.
          </p>
          <Link href="tel:+14077905891">
            <button className="h-16 px-12 rounded-2xl bg-obsidian text-bone font-black text-lg hover:scale-105 transition-all uppercase tracking-tighter">
              Secure Your Nest
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
