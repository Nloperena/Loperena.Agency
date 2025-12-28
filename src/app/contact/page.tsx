"use client";

import React from "react";
import Header from "@/components/Header";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-background text-foreground min-h-screen pb-20">
      <Header />
      <main className="pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Connect With Us</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] tracking-tighter text-bone">
            Ready to Talk? <br className="hidden md:block" /> We're Your Local Neighbors.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-bone/60 max-w-2xl mx-auto font-bold leading-relaxed">
            Based in Lake Nona and serving all of Central Florida. We're here to make home safer and simpler.
          </p>
        </section>

        {/* Contact Options */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-8 rounded-[40px] glass-aperture border-2 border-sage/20 text-center">
                <Phone className="text-sage mb-4 mx-auto" size={40} />
                <h3 className="text-2xl font-black mb-3 text-bone">Call Us Directly</h3>
                <p className="text-base text-foreground/60 font-bold mb-6">
                  Speak with a local neighbor about your needs. Schedule your $99 Safety Audit over the phone.
                </p>
                <a href="tel:+14077905891" className="inline-block w-full">
                  <button className="w-full h-14 rounded-2xl bg-sage text-obsidian font-black text-lg hover:scale-105 transition-all">
                    Call (407) 790-5891
                  </button>
                </a>
              </div>
              <div className="p-8 rounded-[40px] glass-aperture border-2 border-sage/20 text-center">
                <Mail className="text-sage mb-4 mx-auto" size={40} />
                <h3 className="text-2xl font-black mb-3 text-bone">Email Us</h3>
                <p className="text-base text-foreground/60 font-bold mb-6">
                  Send us a message and we'll get back to you as soon as possible.
                </p>
                <a href="mailto:info@indepenest.com" className="inline-block w-full">
                  <button className="w-full h-14 rounded-2xl border-2 border-sage text-foreground font-black text-lg hover:bg-sage/10 transition-all">
                    info@indepenest.com
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24 py-16 px-8 rounded-[60px] bg-white/[0.02] border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Common Questions</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-6 text-bone">Quick Answers.</h3>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: "Is installation complicated?", a: "No, we handle everything from setup to training. Most installations take just a few hours." },
              { q: "What if I'm not tech-savvy?", a: "Our solutions are simple by design. We use voice commands and large buttons to make interaction intuitive." },
              { q: "Will this invade privacy?", a: "Absolutely not. We use radar-based sensors—never cameras—to ensure your dignity is respected." },
              { q: "What areas do you serve?", a: "We cover Lake Nona, The Villages, Windermere, Orlando, and surrounding Central Florida communities." },
              { q: "What if something breaks?", a: "We offer a 30-minute local response guarantee for our Stewardship members." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-[32px] glass-aperture border border-white/5">
                <h4 className="text-xl font-black mb-2 text-sage">{faq.q}</h4>
                <p className="text-lg text-foreground/50 font-bold leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-24 py-16 px-8 rounded-[60px] glass-aperture border border-white/5">
          <h3 className="text-3xl font-black mb-6 text-bone text-center">Our Service Map</h3>
          <div className="aspect-[21/9] rounded-[32px] overflow-hidden grayscale opacity-40 border border-white/10 mb-6 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448561.55000000005!2d-81.5!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8f844dbc3%3A0x29408642e1f81742!2sCentral%20Florida!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IndepeNEST Service Area"
            />
          </div>
          <p className="text-lg text-foreground/50 font-bold italic text-center">
            "Serving the 30-minute response zone across Central Florida."
          </p>
        </section>

        {/* Service Hours */}
        <section className="mb-24">
          <div className="p-8 rounded-[40px] glass-aperture border-2 border-sage/20 text-center">
            <h3 className="text-2xl font-black mb-4 text-bone">Service Hours</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div>
                <p className="text-lg font-black mb-1 text-bone">Monday - Friday</p>
                <p className="text-base text-foreground/60 font-bold">8:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="text-lg font-black mb-1 text-bone">Saturday</p>
                <p className="text-base text-foreground/60 font-bold">9:00 AM - 4:00 PM</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg font-black mb-1 text-bone">Emergency Support</p>
                <p className="text-base text-foreground/60 font-bold">24/7 for Complete Plan Members</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
