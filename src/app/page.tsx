"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Sun, ShieldCheck, Heart, UserCheck, PhoneCall, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/utils/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={containerRef} className="bg-background text-foreground transition-colors duration-500">
      <Header />
      <main>
        <Hero />
        
        {/* Value Proposition: Clear & Actionable */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-24 weighted-reveal opacity-0 translate-y-10">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">Our Technology</h2>
            <h3 className="text-section-headline mb-8">Independence is the <br /> Greatest Luxury.</h3>
            <p className="text-2xl text-foreground/60 max-w-3xl font-bold leading-relaxed">
              We use discreet, senior-friendly technology to ensure you remain safe, connected, and in control of your home. No cameras, no complex menus—just support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Path Lighting",
                desc: "Our sensors light up paths at night to prevent falls. Soft light appears automatically before your feet touch the floor.",
                icon: <Sun className="text-sage" size={40} />,
                alt: "Night time bedroom with soft lighting along the floor path"
              },
              {
                title: "Automatic Locks",
                desc: "Smart locks ensure your home is secure. The door locks itself behind you and can be opened with a simple touch or voice command.",
                icon: <ShieldCheck className="text-sage" size={40} />,
                alt: "Modern door handle with a smart lock showing a green secure indicator"
              },
              {
                title: "Family Connection",
                desc: "Simple video calling that works with a single touch. See your grandkids' smiles without the complexity of a tablet.",
                icon: <Heart className="text-sage" size={40} />,
                alt: "A large, easy-to-use button on a screen showing a happy video call with family"
              },
              {
                title: "Discreet Sensors",
                desc: "We use radar-based sensors—not invasive cameras—to monitor your wellness and alert family if your routine changes.",
                icon: <UserCheck className="text-sage" size={40} />,
                alt: "A small, white radar sensor mounted high on a wall, nearly invisible"
              },
              {
                title: "Voice Assistance",
                desc: "Control your lights, thermostat, and music with simple voice commands. No need to fiddle with small dials or switches.",
                icon: <PhoneCall className="text-sage" size={40} />,
                alt: "A senior woman smiling while talking to a small, stylish smart speaker in her living room"
              },
              {
                title: "Stewardship Plan",
                desc: "We handle all the setup and maintenance. We are your local Central Florida tech partner, always just a call away.",
                icon: <CheckCircle2 className="text-sage" size={40} />,
                alt: "A local Loperena team member waving and smiling in front of a service vehicle"
              }
            ].map((tech, i) => (
              <div key={i} className="group p-10 rounded-[40px] glass-aperture border-white/5 hover:border-sage/40 transition-all">
                <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5" aria-hidden="true">{tech.icon}</div>
                <h4 className="text-3xl font-black mb-4 leading-tight">{tech.title}</h4>
                <p className="text-xl text-foreground/50 font-bold leading-relaxed">{tech.desc}</p>
                <div className="mt-6 aspect-video rounded-[20px] overflow-hidden opacity-40 group-hover:opacity-60 transition-opacity">
                  <img 
                    src={i === 0 ? "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" : i === 1 ? "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" : i === 2 ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" : i === 3 ? "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" : i === 4 ? "https://images.unsplash.com/photo-1545258132-a097da31af7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" : "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                    alt={tech.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy & Simplicity Assurance */}
        <section className="py-32 px-6 bg-white/[0.02] rounded-[100px] my-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 weighted-reveal opacity-0 translate-y-10">
              <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">Privacy & Simplicity</h2>
              <h3 className="text-section-headline mb-8">We Prioritize Your Privacy—<br />No Constant Monitoring, Just Discreet Support.</h3>
              <p className="text-2xl text-foreground/50 max-w-3xl mx-auto font-bold leading-relaxed">
                Our technology works quietly in the background. We're not watching you—we're looking out for you, only alerting family when something needs attention.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="weighted-reveal opacity-0 translate-y-10">
                <ul className="space-y-6 mb-12">
                  {[
                    "No Invasive Cameras in Private Areas",
                    "Bank-Level Data Encryption",
                    "Strict No-Misuse Data Policy",
                    "FDLE Level 2 Vetted Staff",
                    "Discreet Radar Sensors (No Video)",
                    "You Control What Family Sees"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-xl font-black">
                      <CheckCircle2 className="text-sage" size={24} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/privacy-policy" variant="outline">Read Our Privacy Promise</Button>
              </div>
              <div className="relative glass-aperture rounded-[60px] overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="A secure, modern home interior showing a sense of peace and privacy with smart home devices visible but unobtrusive" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials: Real Stories - Expanded */}
        <section className="py-32 px-6 container-premium text-center">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">Testimonials</h2>
          <h3 className="text-section-headline mb-8">Trusted by Neighbors <br /> across Central Florida.</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            <div className="p-12 rounded-[60px] glass-aperture text-left border-2 border-sage/10 relative">
              <p className="text-2xl font-bold italic mb-10 leading-relaxed text-foreground/80">
                "Loperena Agency gave me back my peace of mind. My mother can stay in her home in The Villages, and I know she's safe without feeling monitored. The lights that turn on at night are a godsend."
              </p>
              <div>
                <p className="text-xl font-black">Sarah T.</p>
                <p className="text-sage font-bold">Lake Nona, FL</p>
                <p className="text-sm text-foreground/40 mt-2">Adult Child</p>
              </div>
            </div>
            <div className="p-12 rounded-[60px] glass-aperture text-left border-2 border-sage/10">
              <p className="text-2xl font-bold italic mb-10 leading-relaxed text-foreground/80">
                "I was skeptical about 'smart tech' until I met the Loperena team. They explained everything in plain English and made it all so simple. Seeing my grandkids on the screen every Sunday is the highlight of my week."
              </p>
              <div>
                <p className="text-xl font-black">Robert M.</p>
                <p className="text-sage font-bold">Windermere, FL</p>
                <p className="text-sm text-foreground/40 mt-2">Senior Resident</p>
              </div>
            </div>
            <div className="p-12 rounded-[60px] glass-aperture text-left border-2 border-sage/10">
              <p className="text-2xl font-bold italic mb-10 leading-relaxed text-foreground/80">
                "Give your parents independence while gaining peace of mind. The remote alerts let me know Mom's routine is normal without invading her privacy. It's exactly what we needed."
              </p>
              <div>
                <p className="text-xl font-black">Michael R.</p>
                <p className="text-sage font-bold">The Villages, FL</p>
                <p className="text-sm text-foreground/40 mt-2">Caregiver</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works: Simplified & Actionable */}
        <section className="py-32 px-6 bg-white/[0.01] rounded-[100px] my-20">
          <div className="max-w-7xl mx-auto text-center mb-24">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">How It Works</h2>
            <h3 className="text-section-headline mb-8">The Human Bridge to <br /> Effortless Living.</h3>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-sage/10 -translate-y-1/2 hidden md:block" />
            {[
              { 
                step: "1. Friendly Visit", 
                desc: "We meet at your table to chat about your routine and goals. No pressure, just neighbors." 
              },
              { 
                step: "2. Safety Audit", 
                desc: "A thorough $99 walkthrough to identify simple fixes for safety and comfort." 
              },
              { 
                step: "3. Harmony Plan", 
                desc: "A personalized, clear roadmap. We handle all setup and ongoing support." 
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 glass-aperture p-10 rounded-[40px] border-2 border-sage/20 bg-background/50">
                <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-obsidian font-black text-2xl mx-auto mb-8 shadow-lg shadow-sage/20">
                  {i + 1}
                </div>
                <h5 className="text-2xl font-black mb-4">{item.step}</h5>
                <p className="text-lg text-foreground/50 font-bold">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col md:flex-row justify-center gap-6">
            <Button href="/pricing" size="lg" className="bg-sage text-obsidian px-12">View Pricing Bundles</Button>
            <Button href="tel:+14070000000" size="lg" className="bg-sage text-obsidian px-12">Talk to a Local Neighbor</Button>
            <Button href="/how-it-works" variant="outline" size="lg">Schedule Your $99 Audit</Button>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Caregiver Focus Section */}
        <section className="py-32 px-6 bg-white/[0.01] rounded-[100px] my-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 weighted-reveal opacity-0 translate-y-10">
              <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">For Adult Children</h2>
              <h3 className="text-section-headline mb-8">Give Your Parents Independence <br /> While Gaining Peace of Mind.</h3>
              <p className="text-2xl text-foreground/50 max-w-3xl mx-auto font-bold leading-relaxed">
                You want your parents to stay in their home, but you worry about the 'what ifs.' We provide the human bridge between technology and your peace of mind.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-12 rounded-[60px] glass-aperture border-2 border-sage/20">
                <h4 className="text-3xl font-black mb-6 text-sage">Remote Assurance</h4>
                <p className="text-xl text-foreground/60 font-bold leading-relaxed mb-6">
                  Receive gentle alerts if your parent's routine changes, without invading their privacy. Know they're safe without being intrusive.
                </p>
                <ul className="space-y-4">
                  {["Wellness Reports Sent Monthly", "Routine Change Alerts", "Emergency Response Coordination", "Family Dashboard Access"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-black">
                      <CheckCircle2 className="text-sage" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-12 rounded-[60px] glass-aperture border-2 border-sand/20">
                <h4 className="text-3xl font-black mb-6 text-sand">Local Support</h4>
                <p className="text-xl text-foreground/60 font-bold leading-relaxed mb-6">
                  We're physically based in Central Florida. When your parent needs help, we're there in 30 minutes—not a call center across the country.
                </p>
                <ul className="space-y-4">
                  {["30-Minute Response Guarantee", "FDLE Vetted Team Members", "In-Person Monthly Visits", "Direct Phone Line to Your Neighbor"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-black">
                      <CheckCircle2 className="text-sand" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Trust Bar Footer */}
      <footer className="pt-40 pb-52 px-10 border-t border-white/5 text-center">
        <p className="text-5xl md:text-8xl font-black tracking-tighter text-foreground/10 mb-16 uppercase">Loperena Agency</p>
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-foreground/40 font-bold mb-6 italic">
            "We aren't competing with technology stores; we are competing with anxiety. We provide the human bridge between technology and the seniors we love."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/about-us" className="text-sm font-black uppercase tracking-widest text-foreground/30 hover:text-sage">About Us</Link>
            <Link href="/services" className="text-sm font-black uppercase tracking-widest text-foreground/30 hover:text-sage">Services</Link>
            <Link href="/pricing" className="text-sm font-black uppercase tracking-widest text-foreground/30 hover:text-sage">Pricing</Link>
            <Link href="/resources" className="text-sm font-black uppercase tracking-widest text-foreground/30 hover:text-sage">Resources</Link>
            <Link href="/partners" className="text-sm font-black uppercase tracking-widest text-foreground/30 hover:text-sage">Partners</Link>
            <Link href="/privacy-policy" className="text-sm font-black uppercase tracking-widest text-foreground/30 hover:text-sage">Privacy Policy</Link>
            <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-foreground/30 hover:text-sage">Contact</Link>
          </div>
        </div>
      </footer>

      {/* Persistent Floating Button */}
      <div className="fixed bottom-32 right-12 z-[100]">
        <Link href="tel:+14070000000">
          <button className="h-20 px-10 rounded-3xl bg-sage text-obsidian font-black shadow-2xl shadow-sage/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-4 text-xl">
            <PhoneCall size={24} />
            Talk to a Local Neighbor
          </button>
        </Link>
      </div>

      {/* Anchored Trust Bar */}
      <div className="fixed bottom-0 left-0 w-full z-[90] h-20 trust-bar flex items-center justify-center px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-20 text-xs md:text-sm font-black uppercase tracking-[0.3em] text-foreground/40">
          <span className="flex items-center gap-3"><CheckCircle2 size={16} className="text-sage" /> Licensed & Insured</span>
          <span className="flex items-center gap-3"><CheckCircle2 size={16} className="text-sage" /> FDLE Level 2 Checked</span>
          <span className="flex items-center gap-3"><CheckCircle2 size={16} className="text-sage" /> 30-Min Response Zone</span>
        </div>
      </div>
    </div>
  );
}

// FAQ Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is installation complicated?",
      a: "Not at all. We handle everything—from setup to teaching you how to use it. Most installations take just a few hours, and we stay until you're comfortable."
    },
    {
      q: "What if I'm not tech-savvy?",
      a: "That's exactly why we exist. We explain everything in plain English, provide large-button remotes, and offer ongoing support. You don't need to be tech-savvy—we are."
    },
    {
      q: "How much does it cost?",
      a: "We start with a $99 Harmony Check that's credited back if you proceed. Our stewardship plans range from $49-$199/month, depending on the level of support you need."
    },
    {
      q: "Will this invade my privacy?",
      a: "Absolutely not. We use discreet radar sensors—not cameras—and you control what information is shared with family. Your privacy is our highest priority."
    },
    {
      q: "What areas do you serve?",
      a: "We're based in Central Florida and serve Lake Nona, The Villages, Windermere, Kissimmee, and surrounding areas within our 30-minute response zone."
    },
    {
      q: "What happens if something breaks?",
      a: "We're your local neighbors. Call us directly, and we'll be there within 30 minutes. No automated phone trees, no waiting—just real people who care."
    }
  ];

  return (
    <section className="py-32 px-6 container-premium">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6 text-center">Frequently Asked Questions</h2>
        <h3 className="text-section-headline mb-16 text-center">Common Questions <br /> from Our Neighbors.</h3>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-aperture rounded-[40px] border border-white/5 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-all"
                aria-expanded={openIndex === i}
              >
                <span className="text-2xl font-black pr-8">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="text-sage shrink-0" size={28} />
                ) : (
                  <ChevronDown className="text-sage shrink-0" size={28} />
                )}
              </button>
              {openIndex === i && (
                <div className="px-8 pb-8">
                  <p className="text-xl text-foreground/60 font-bold leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple internal Button component for brevity
const Button = ({ children, href, variant = "primary", size = "md", className }: any) => {
  const base = "touch-zone inline-flex items-center justify-center transition-all font-black uppercase tracking-tighter";
  const variants: any = {
    primary: "bg-sage text-obsidian hover:scale-105",
    outline: "border-2 border-sage/20 text-foreground hover:border-sage",
  };
  const sizes: any = {
    md: "h-14 px-8 text-sm",
    lg: "h-20 px-12 text-lg",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
};
