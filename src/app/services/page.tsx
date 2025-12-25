"use client";

import React from "react";
import Header from "@/components/Header";
import { Sun, ShieldCheck, Heart, UserCheck, PhoneCall, Zap, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({ title, description, icon, tech, caseStudy }: { title: string, description: string, icon: React.ReactNode, tech: string[], caseStudy?: { name: string, location: string, result: string } }) => (
  <div className="p-14 rounded-[60px] glass-aperture hover:border-sage/40 transition-all group border border-white/5">
    <div className="w-20 h-20 rounded-3xl bg-sage/10 flex items-center justify-center text-sage mb-10 text-4xl">
      {icon}
    </div>
    <h3 className="text-4xl font-black mb-6 text-foreground leading-tight">{title}</h3>
    <p className="text-xl text-foreground/40 leading-relaxed font-bold mb-10">{description}</p>
    <div className="space-y-4 mb-10">
      {tech.map((t, i) => (
        <div key={i} className="flex items-center gap-4 text-lg font-black text-foreground/60">
          <Zap size={16} className="text-sage" />
          {t}
        </div>
      ))}
    </div>
    {caseStudy && (
      <div className="p-6 rounded-[30px] bg-sage/5 border border-sage/20">
        <p className="text-sm font-black uppercase tracking-widest text-sage mb-2">Case Study</p>
        <p className="text-lg font-black mb-2">{caseStudy.name}, {caseStudy.location}</p>
        <p className="text-base text-foreground/60 font-bold">{caseStudy.result}</p>
      </div>
    )}
  </div>
);

export default function Services() {
  const caseStudies = [
    {
      title: "How We Helped a Windermere Resident Avoid Falls",
      location: "Windermere, FL",
      challenge: "78-year-old resident experiencing nighttime falls due to poor lighting",
      solution: "Installed motion-activated path lighting from bedroom to bathroom",
      result: "Zero falls in 6 months, increased confidence, family peace of mind",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Family Connection Across States",
      location: "The Villages, FL",
      challenge: "Adult children in New York worried about isolated parent",
      solution: "One-touch video calling system with family dashboard",
      result: "Daily video calls, 40% reduction in family anxiety, stronger relationships",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Emergency Response Success",
      location: "Lake Nona, FL",
      challenge: "Senior with mobility issues needed rapid response capability",
      solution: "Radar sensors + emergency coordination + 30-min response guarantee",
      result: "Two emergencies handled within 20 minutes, prevented hospitalizations",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pb-40">
      <Header />
      <main className="pt-48 px-10 max-w-7xl mx-auto">
        <div className="mb-32">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-10">Our Services</h2>
          <h1 className="text-hero-headline mb-10 leading-[0.9]">Support for <br /> Every Moment.</h1>
          <p className="text-2xl text-foreground/40 max-w-3xl font-bold leading-relaxed">
            We curate and manage the most reliable smart home technologies to create a seamless safety net for your daily life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-40">
          <ServiceCard 
            title="Safe Movement"
            description="Prevent falls with automated lighting that guides you silently through your home at night."
            icon={<Sun size={40} />}
            tech={["Path-to-Bathroom Lighting", "Entrance Illumination", "Stairwell Safety"]}
            caseStudy={{ name: "Margaret W.", location: "Windermere", result: "Zero falls in 6 months after installation" }}
          />
          <ServiceCard 
            title="Keyless Assurance"
            description="Smart locks and entry systems that ensure your home is secure without needing to fumble with keys."
            icon={<ShieldCheck size={40} />}
            tech={["Automatic Locking Doors", "Touch-to-Open Access", "Remote Family Alerts"]}
          />
          <ServiceCard 
            title="Connected Living"
            description="Simplified video and voice tools that keep you closer to the ones you love, effortlessly."
            icon={<Heart size={40} />}
            tech={["One-Touch Video Calls", "Voice-Controlled Music", "Family Photo Sharing"]}
            caseStudy={{ name: "Robert M.", location: "The Villages", result: "Daily video calls with grandkids, 40% less family worry" }}
          />
        </div>

        {/* Case Studies Section */}
        <section className="mb-40">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6 text-center">Real Results</h2>
          <h3 className="text-section-headline mb-16 text-center">How We've Helped <br /> Our Neighbors.</h3>
          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-12 items-center glass-aperture p-12 rounded-[60px] border border-white/5">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <MapPin className="text-sage" size={24} />
                    <span className="text-lg font-black uppercase tracking-widest text-sage">{study.location}</span>
                  </div>
                  <h4 className="text-3xl font-black mb-6">{study.title}</h4>
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-sm font-black uppercase tracking-widest text-foreground/40 mb-2">Challenge</p>
                      <p className="text-xl text-foreground/60 font-bold">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-widest text-foreground/40 mb-2">Solution</p>
                      <p className="text-xl text-foreground/60 font-bold">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-widest text-sage mb-2">Result</p>
                      <p className="text-xl font-black text-sage">{study.result}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[40px] overflow-hidden aspect-square">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover opacity-80" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="p-20 rounded-[80px] glass-aperture text-center border border-sage/20 bg-sage/5 relative overflow-hidden">
          <h3 className="text-5xl md:text-7xl font-black mb-12">The Loperena Stewardship.</h3>
          <p className="text-2xl text-foreground/50 mb-16 font-bold leading-relaxed max-w-3xl mx-auto">
            Our most popular bundle—The Independence Suite ($1,530 setup + $99/mo)—includes full system integration, wellness alerts, and priority support. For high-net-worth families, our Concierge Estate Package ($3,450+ setup + $199/mo) adds medical-grade vital monitoring and monthly in-person visits.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/pricing">
              <button className="h-24 px-16 rounded-3xl bg-sage text-obsidian font-black text-2xl hover:scale-105 transition-all">View All Bundles</button>
            </Link>
            <Link href="/contact">
              <button className="h-24 px-16 rounded-3xl border-2 border-sage text-foreground font-black text-2xl hover:bg-sage/10 transition-all">Schedule Consultation</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
