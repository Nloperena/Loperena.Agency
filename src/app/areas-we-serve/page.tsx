"use client";

import React from "react";
import Header from "@/components/Header";
import { MapPin, Clock, ShieldCheck, Phone } from "lucide-react";
import Link from "next/link";

export default function AreasWeServe() {
  const regions = [
    {
      name: "Orlando",
      desc: "Modernizing historic and contemporary homes with non-invasive technology for aging in place.",
      highlights: ["Retrofit Experts", "Invisible Tech", "Local Support"]
    },
    {
      name: "The Villages",
      desc: "Providing the gold standard in senior independence for America's premier retirement community.",
      highlights: ["Fall Prevention", "Path Lighting", "Voice Assistance"]
    },
    {
      name: "Windermere",
      desc: "Concierge-level smart home integration for high-end residential estates requiring ultimate privacy.",
      highlights: ["VIP Support", "Custom Integration", "Privacy First"]
    },
    {
      name: "Lake Nona",
      desc: "Smart home solutions for Orlando's medical city, focusing on discreet vitals monitoring and safety.",
      highlights: ["Vitals Radar", "Smart Entry", "Family Alerts"]
    },
    {
      name: "Winter Park",
      desc: "Elegant senior living solutions blending historic charm with modern smart home technology.",
      highlights: ["Historic Homes", "Discreet Integration", "30-Min Response"]
    }
  ];

  const localTestimonials = [
    {
      quote: "The 30-minute response guarantee in The Villages is exactly what we needed. When we had a question about the lighting, IndepeNEST was here before we finished our coffee.",
      author: "Michael R.",
      location: "The Villages"
    },
    {
      quote: "Finally a local team in Lake Nona that understands senior tech without trying to sell us a generic security system. Highly recommended.",
      author: "Jane D.",
      location: "Lake Nona"
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pb-20">
      <Header />
      <main className="pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Our Service Area</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] tracking-tighter text-bone">
            Proudly Serving the <br className="hidden md:block" /> 30-Minute Zone.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-bone/60 max-w-2xl mx-auto font-bold leading-relaxed">
            We're your local neighbors based in Central Florida, committed to being there when you need us most.
          </p>
        </section>

        {/* Map Section */}
        <section className="mb-24">
          <div className="aspect-[21/9] rounded-[40px] overflow-hidden border-2 border-white/5 shadow-2xl grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-1000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448561.55000000005!2d-81.5!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8f844dbc3%3A0x29408642e1f81742!2sCentral%20Florida!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IndepeNEST Service Area"
            />
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              { icon: <MapPin className="text-sage mx-auto mb-2" size={20} />, label: "Orlando" },
              { icon: <MapPin className="text-sage mx-auto mb-2" size={20} />, label: "The Villages" },
              { icon: <MapPin className="text-sage mx-auto mb-2" size={20} />, label: "Windermere" },
              { icon: <MapPin className="text-sage mx-auto mb-2" size={20} />, label: "Lake Nona" },
              { icon: <MapPin className="text-sage mx-auto mb-2" size={20} />, label: "Winter Park" }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-[20px] bg-white/5 border border-white/10">
                {item.icon}
                <p className="font-black text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Region Grid */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            {regions.map((region, i) => (
              <div key={i} className="p-8 rounded-[40px] glass-aperture border-2 border-white/5 hover:border-sage/40 transition-all">
                <h3 className="text-2xl font-black mb-3">{region.name}</h3>
                <p className="text-sm text-foreground/60 font-bold mb-6 leading-relaxed">{region.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {region.highlights.map((h, j) => (
                    <span key={j} className="text-[10px] font-black uppercase tracking-widest bg-sage/10 text-sage px-3 py-1 rounded-full border border-sage/20">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Response Guarantee Section */}
        <section className="mb-24 py-16 px-8 rounded-[40px] bg-white/[0.02] border border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="text-sage mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">The 30-Minute Guarantee.</h2>
            <p className="text-lg text-foreground/50 font-bold leading-relaxed mb-10 italic">
              "We aren't a remote tech giant. We're your neighbors. If something goes wrong, we're at your door in 30 minutes—guaranteed."
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex items-center gap-4">
                    <ShieldCheck className="text-sage" size={32} />
                    <div className="text-left">
                      <p className="font-black text-lg mb-0.5 text-bone">Local Team</p>
                      <p className="text-xs text-foreground/40 font-bold">Local professionals you can trust.</p>
                    </div>
                  </div>
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex items-center gap-4">
                <Phone className="text-sage" size={32} />
                <div className="text-left">
                  <p className="font-black text-lg mb-0.5 text-bone">Local Direct Line</p>
                  <p className="text-xs text-foreground/40 font-bold">No robots. No call centers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Testimonials */}
        <section className="mb-24 py-16 px-8 rounded-[40px] bg-white/[0.02] border border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Neighbors We Support</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {localTestimonials.map((t, i) => (
              <div key={i} className="space-y-4">
                <p className="text-lg font-bold italic leading-relaxed text-foreground/80">"{t.quote}"</p>
                <div>
                  <p className="text-base font-black">{t.author}</p>
                  <p className="text-sage text-sm font-bold">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-8 rounded-[40px] bg-sage text-obsidian text-center">
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-[0.9]">Ready to Secure <br /> Your Nest?</h2>
          <p className="text-lg md:text-xl font-bold mb-10 max-w-xl mx-auto opacity-80 leading-relaxed">
            Let's discuss the tailored solutions available in your Central Florida community.
          </p>
          <Link href="tel:+14077905891">
            <button className="h-16 px-12 rounded-2xl bg-obsidian text-bone font-black text-lg hover:scale-105 transition-all uppercase tracking-tighter">
              Talk to a Neighbor
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}

