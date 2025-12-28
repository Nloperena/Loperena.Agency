"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Shield, Lightbulb, Users, CheckCircle2, ChevronLeft, ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import { cn } from "@/utils/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray<HTMLElement>(".weighted-reveal");
      reveals.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      quote: "IndepeNEST gave me back my peace of mind. My mother stays in her home in The Villages, safe without feeling watched. The night lights are a godsend.",
      name: "Sarah T.",
      location: "The Villages, FL",
      role: "Adult Child"
    },
    {
      quote: "I was skeptical about smart tech until the IndepeNEST team explained it simply. Seeing my grandkids every Sunday is my highlight.",
      name: "Robert M.",
      location: "Windermere, FL",
      role: "Senior Resident"
    },
    {
      quote: "Perfect balance—Mom's independent, and I get alerts only when needed. Exactly what we wanted.",
      name: "Michael R.",
      location: "Lake Nona, FL",
      role: "Caregiver"
    },
    {
      quote: "The radar sensors are invisible. I don't feel like I'm being watched, but my kids know I'm okay. It's the perfect middle ground.",
      name: "Eleanor V.",
      location: "Orlando, FL",
      role: "Senior Resident"
    },
    {
      quote: "The path lighting saved me from a fall last week. It's so subtle but makes a huge difference at 3 AM.",
      name: "George B.",
      location: "Winter Park, FL",
      role: "Senior Resident"
    }
  ];

  return (
    <div ref={containerRef} className="bg-background text-foreground transition-colors duration-500">
      <Header />
      <main>
        {/* SEO-Optimized Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-16 sm:pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-obsidian/60 z-10" />
            <img 
              src="https://cdn.mos.cms.futurecdn.net/xRJbattSm2GKA62MPJZEn5.jpg" 
              alt="Beautiful Florida porch setting for independent senior living" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative z-30 text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-bone mb-4 sm:mb-6 leading-[0.9] tracking-tighter">
              Independence is the <br className="hidden md:block" /> Greatest Luxury.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-bone/90 font-bold mb-8 sm:mb-12 leading-tight max-w-3xl mx-auto px-4 italic">
              Discreet, senior-friendly technology that helps you or your loved ones stay safe, connected, and in control—at home in Central Florida.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
              <Link href="#for-seniors" className="group">
                <div className="p-6 rounded-[32px] bg-white/5 border-2 border-white/10 hover:border-sage transition-all backdrop-blur-md text-left h-full">
                  <h3 className="text-xl font-black text-bone mb-1 group-hover:text-sage">I want to stay in my own home</h3>
                  <p className="text-bone/60 font-bold text-sm">Focus on my independence</p>
                </div>
              </Link>
              <Link href="#for-children" className="group">
                <div className="p-6 rounded-[32px] bg-white/5 border-2 border-white/10 hover:border-sage transition-all backdrop-blur-md text-left h-full">
                  <h3 className="text-xl font-black text-bone mb-1 group-hover:text-sage">I want to ensure my parents are safe</h3>
                  <p className="text-bone/60 font-bold text-sm">Focus on peace of mind</p>
                </div>
              </Link>
            </div>

            <Link href="tel:+14077905891">
              <button className="h-14 sm:h-16 px-8 sm:px-10 lg:px-12 rounded-xl sm:rounded-2xl bg-sage text-obsidian font-black text-base sm:text-lg hover:scale-105 transition-all shadow-2xl uppercase tracking-tighter">
                Talk to a Local Neighbor
              </button>
            </Link>
          </div>
        </section>

        {/* Technology Features Grid */}
        <section id="features" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="mb-16 weighted-reveal opacity-0 translate-y-10 text-center">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Our Technology</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-6">Designed for Independence</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { 
                title: "Path Lighting", 
                desc: "Our sensors automatically light up paths at night with soft, gentle glows—preventing falls before your feet even touch the floor.",
                icon: <Lightbulb className="text-sage" size={28} />,
                image: "https://agingtoday.com/wp-content/uploads/2023/10/Night-Light-Safety-for-Older-Adults.jpg"
              },
              { 
                title: "Automatic Locks", 
                desc: "Smart locks that secure your door behind you and open with a simple touch or voice command—no keys to fumble.",
                icon: <Shield className="text-sage" size={28} />,
                image: "https://august.com/cdn/shop/files/Yale-Apporach-Keypad-Biometric-img-1_1600x.png?v=1715322796"
              },
              { 
                title: "Family Connection", 
                desc: "One-touch video calling to see your grandkids' smiles—no complicated apps or tablets required.",
                icon: <Users className="text-sage" size={28} />,
                image: "https://agespaceimages.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/09/24102503/Komp-Reviewed-by-Roey.png"
              },
              { 
                title: "Discreet Sensors", 
                desc: "Radar-based (not cameras) to gently monitor routines and alert family only if something changes.",
                icon: <Shield className="text-sage" size={28} />,
                image: "https://www.aqara.com/wp-content/uploads/2023/04/FP2-PR_1681974022535009097-1024x575.png"
              },
              { 
                title: "Voice Assistance", 
                desc: "Control lights, thermostat, or music with easy voice commands—no small buttons or screens.",
                icon: <Users className="text-sage" size={28} />,
                image: "https://ik.imagekit.io/zcfjs0rmjr/f/1018269/1600x1200/53ab093f22/cot-14830_blog-header-4x3.jpg"
              },
              { 
                title: "Stewardship Plan", 
                desc: "We handle setup, maintenance, and support—your local Central Florida team, always a call away.",
                icon: <CheckCircle2 className="text-sage" size={28} />,
                image: "https://www.safewise.com/app/uploads/2021/05/woman-connecting-smart-phone-to-thermostat.jpg"
              }
            ].map((item, i) => (
              <div key={i} className="weighted-reveal opacity-0 translate-y-10 rounded-[32px] glass-aperture border-2 border-white/5 hover:border-sage/40 transition-all flex flex-col h-full group overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-all" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-sage/90 backdrop-blur-md flex items-center justify-center text-obsidian">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-black mb-3">{item.title}</h4>
                  <p className="text-sm text-foreground/60 font-bold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy Section */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 bg-sage/5 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="weighted-reveal opacity-0 translate-y-10">
                <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">Privacy First</h2>
                <h3 className="text-4xl md:text-6xl font-black mb-10">We Prioritize Your Privacy – No Constant Monitoring, Just Discreet Support.</h3>
                <ul className="space-y-6">
                  {[
                    "No invasive cameras in private areas",
                    "Bank-level data encryption",
                    "Strict no-misuse policy",
                    "Expert staff",
                    "You control what family sees"
                  ].map((point, i) => (
                    <li key={i} className="flex items-center gap-4 text-xl font-bold">
                      <CheckCircle2 className="text-sage shrink-0" size={28} />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href="/privacy-policy" className="inline-block mt-12 text-sage font-black border-b-2 border-sage pb-1 hover:text-white hover:border-white transition-all">
                  Read Our Privacy Promise
                </Link>
              </div>
              <div className="relative weighted-reveal opacity-0 translate-y-10 lg:translate-y-0 lg:translate-x-10">
                <div className="absolute inset-0 bg-sage/20 blur-[100px] rounded-full" />
                <img 
                  src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Minimalist ceiling sensor representing privacy-first monitoring" 
                  className="relative z-10 rounded-[60px] border-2 border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Teaser */}
        <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 my-12 sm:my-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 weighted-reveal opacity-0 translate-y-10">
              <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">Our Process</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-8">Simple. Human. Local.</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { step: "1", title: "Friendly Visit", desc: "A simple chat at your table to understand your routine." },
                { step: "2", title: "$99 Safety Audit", desc: "A thorough walkthrough to identify gaps in safety and comfort." },
                { step: "3", title: "Harmony Plan", desc: "Your custom roadmap for a safer, more connected home." }
              ].map((item, i) => (
                <div key={i} className="weighted-reveal opacity-0 translate-y-10 text-center p-12 rounded-[60px] glass-aperture border-2 border-white/5 relative">
                  <div className="w-20 h-20 rounded-full bg-sage flex items-center justify-center text-obsidian font-black text-3xl mx-auto mb-8">
                    {item.step}
                  </div>
                  <h4 className="text-3xl font-black mb-6">{item.title}</h4>
                  <p className="text-xl text-foreground/60 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-20 weighted-reveal opacity-0 translate-y-10">
              <Link href="/services">
                <button className="h-16 px-12 rounded-2xl border-2 border-sage text-sage font-black text-xl hover:bg-sage hover:text-obsidian transition-all">
                  See the Full Process
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-6">What Central Florida Families Say</h3>
          </div>

          <div className="relative">
            <div className="p-8 rounded-[40px] glass-aperture border-2 border-sage/20 min-h-[250px] flex items-center">
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl font-bold italic mb-6 leading-relaxed text-foreground/90">
                  "{testimonials[testimonialIndex].quote}"
                </p>
                <div>
                  <p className="text-lg font-black">{testimonials[testimonialIndex].name}</p>
                  <p className="text-sage font-bold text-sm">{testimonials[testimonialIndex].location}</p>
                  <p className="text-[10px] text-foreground/40 mt-1 uppercase tracking-widest font-black">{testimonials[testimonialIndex].role}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="p-3 rounded-full bg-sage/10 hover:bg-sage/20 transition-all"
              >
                <ChevronLeft className="text-sage" size={20} />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      i === testimonialIndex ? "bg-sage w-6" : "bg-white/20"
                    )}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="p-3 rounded-full bg-sage/10 hover:bg-sage/20 transition-all"
              >
                <ChevronRight className="text-sage" size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Privacy Reassurance Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-8">Privacy Reassurance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "No Invasive Cameras", desc: "No invasive cameras in private areas. Discreet radar sensors (no video)." },
                { title: "Bank-Level Encryption", desc: "Bank-level data encryption. Strict no-misuse data policy." },
                  { title: "You Control Everything", desc: "Expert staff. You control what family sees." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-[32px] glass-aperture border-2 border-white/5">
                  <h4 className="text-lg font-black mb-3 text-bone">{item.title}</h4>
                  <p className="text-sm text-foreground/50 font-bold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-sage/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Enhance Senior Safety?</h2>
            <p className="text-lg text-foreground/60 font-bold mb-10">
              Get Started on Independent Living Tech for Seniors Today
            </p>
            <div className="max-w-sm mx-auto">
              <div className="p-8 rounded-[32px] glass-aperture border-2 border-sage/20">
                <h3 className="text-xl font-black mb-4">Call Us Directly</h3>
                <p className="text-sm text-foreground/60 font-bold mb-6">
                  Speak with a local neighbor about your needs. Schedule your $99 Safety Audit over the phone.
                </p>
                <Link href="tel:+14077905891">
                  <button className="w-full h-14 rounded-2xl bg-sage text-obsidian font-black text-lg hover:scale-105 transition-all flex items-center justify-center gap-3">
                    <Phone size={20} />
                    (407) 790-5891
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Google Maps and Trust Badges */}
      <footer className="pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10">
              <Shield className="text-sage" size={20} />
              <span className="font-black text-[10px] uppercase tracking-widest text-bone/60">Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10">
              <Users className="text-sage" size={20} />
              <span className="font-black text-[10px] uppercase tracking-widest text-bone/60">Local Support</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10">
              <MapPin className="text-sage" size={20} />
              <span className="font-black text-[10px] uppercase tracking-widest text-bone/60">30-Min Response Zone</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-black mb-1 leading-none text-bone">Indepe<span className="text-sage">NEST</span></h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sage/60 mb-4">Secure Smart Homes</p>
              <p className="text-sm text-foreground/60 font-bold mb-6 italic leading-relaxed">
                "Human bridge between technology and the seniors we love."
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="text-sage" size={16} />
                  <a href="tel:+14077905891" className="text-sm font-bold hover:text-sage">407-790-5891</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-sage" size={16} />
                  <a href="mailto:info@indepenest.com" className="text-sm font-bold hover:text-sage">info@indepenest.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-sage" size={16} />
                  <span className="text-sm font-bold">Lake Nona, FL</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black mb-6">Explore</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li><Link href="/about-us" className="text-xs font-bold hover:text-sage">About Us</Link></li>
                <li><Link href="/services" className="text-xs font-bold hover:text-sage">Services</Link></li>
                <li><Link href="/pricing" className="text-xs font-bold hover:text-sage">Pricing</Link></li>
                <li><Link href="/areas-we-serve" className="text-xs font-bold hover:text-sage">Areas</Link></li>
                <li><Link href="tel:+14077905891" className="text-xs font-bold hover:text-sage">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-black mb-6">30-Minute Support Zone</h3>
              <div className="aspect-video rounded-[16px] overflow-hidden mb-3 grayscale opacity-40 border border-white/10">
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
              <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest text-center">
                Orlando • The Villages • Windermere • Lake Nona • Winter Park
              </p>
            </div>
          </div>
          <div className="pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-foreground/40 font-bold mb-3">
              © {new Date().getFullYear()} IndepeNEST. All rights reserved.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/privacy-policy" className="text-[10px] font-black uppercase tracking-widest hover:text-sage">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Floating Button */}
      <div className="fixed bottom-4 right-4 md:bottom-12 md:right-8 z-[100]">
        <Link href="tel:+14077905891">
          <button className="h-14 md:h-16 px-5 md:px-8 rounded-2xl bg-sage text-obsidian font-black shadow-2xl shadow-sage/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 md:gap-4 text-base md:text-lg">
            <Phone size={18} className="md:w-5 md:h-5" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
