"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { CheckCircle2, Shield, Home, Crown, Radio, Mic, Bell, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"radar" | "voice" | "alerts">("radar");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const techTabs = {
    radar: {
      icon: <Radio className="text-sage" size={40} />,
      title: "Radar Sensors",
      content: "Anonymous detection of falls/activity. Our radar-based home monitoring uses advanced sensors that detect movement and falls without cameras. Privacy-first technology that respects dignity while ensuring safety.",
      image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24590625/Cherish_Serenity_2.jpg",
      resources: [
        { name: "NY Times Wirecutter: Smart Tech for Seniors", url: "https://www.nytimes.com/wirecutter/reviews/smart-technology-for-seniors/" },
        { name: "NextPit: Radar Sensors & Privacy", url: "https://www.nextpit.com/radar-sensors-smart-home-privacy-seniors" },
        { name: "The Verge: Radar Launch News", url: "https://www.theverge.com/2023/4/17/23686246/att-cherish-serenity-medical-radar-device-monitor-falls-privacy" }
      ]
    },
    voice: {
      icon: <Mic className="text-sage" size={40} />,
      title: "Google Home Voice",
      content: "Voice commands with Gemini AI for reminders. Control your smart home with simple voice commands. Set medication reminders, control lighting, and access information hands-free. Perfect for independent living tech for seniors."
    },
    alerts: {
      icon: <Bell className="text-sage" size={40} />,
      title: "Family Alerts",
      content: "Shared family access without compromising privacy. Get real-time notifications when routine changes or assistance is needed. Family members can check in through secure apps without invasive monitoring."
    }
  };

  const faqs = [
    {
      q: "What is radar-based home monitoring?",
      a: "A privacy-focused alternative to cameras for senior smart home Central Florida. Radar sensors detect movement and falls without recording video, ensuring complete privacy while maintaining safety."
    },
    {
      q: "How does fall detection without cameras work?",
      a: "Our radar sensors detect sudden changes in movement patterns that indicate a fall. The system sends alerts to family members and our response team without any video recording or invasion of privacy."
    },
    {
      q: "Is the installation complicated?",
      a: "Not at all. Our professional team handles everything. Most installations take just a few hours, and we stay until you're comfortable using the system. We provide training for you and your family."
    },
    {
      q: "What areas do you serve?",
      a: "We serve Central Florida including Orlando, Tampa, The Villages, Lake Nona, Windermere, and surrounding areas. Our 30-minute response zone ensures quick support when needed."
    },
    {
      q: "How much does it cost?",
      a: "We start with a $99 safety audit that's credited back if you proceed with installation. Packages range from $500-$2,000+ for installation, with monthly stewardship plans from $49-$99."
    },
    {
      q: "Will this invade my privacy?",
      a: "Absolutely not. We use discreet radar sensors—not cameras—and you control what information is shared with family. Your privacy is our highest priority. No video recording, no invasive monitoring."
    },
    {
      q: "What if something breaks?",
      a: "We're your local neighbors. Call us directly, and we'll be there within 30 minutes. No automated phone trees, no waiting—just real people who care. All installations include warranty and ongoing support."
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pb-20">
      <Header />
      <main className="pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Our Services</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] tracking-tighter text-bone">
            Discreet Technology <br className="hidden md:block" /> Designed for Real Life.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-bone/60 max-w-2xl mx-auto font-bold leading-relaxed">
            We install and maintain senior-friendly smart features that work quietly in the background—enhancing safety and connection without complexity.
          </p>
        </section>

        {/* Detailed Features Grid */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Our Technology</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-6 text-bone">Designed for Independence</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Path Lighting", 
                desc: "Our sensors automatically light up paths at night with soft, gentle glows—preventing falls before your feet even touch the floor.",
                image: "https://agingtoday.com/wp-content/uploads/2023/10/Night-Light-Safety-for-Older-Adults.jpg"
              },
              { 
                title: "Automatic Locks", 
                desc: "Smart locks that secure your door behind you and open with a simple touch or voice command—no keys to fumble.",
                image: "https://august.com/cdn/shop/files/Yale-Apporach-Keypad-Biometric-img-1_1600x.png?v=1715322796"
              },
              { 
                title: "Family Connection", 
                desc: "One-touch video calling to see your grandkids' smiles—no complicated apps or tablets required.",
                image: "https://agespaceimages.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/09/24102503/Komp-Reviewed-by-Roey.png"
              },
              { 
                title: "Discreet Sensors", 
                desc: "Radar-based (not cameras) to gently monitor routines and alert family only if something changes.",
                image: "https://www.aqara.com/wp-content/uploads/2023/04/FP2-PR_1681974022535009097-1024x575.png"
              },
              { 
                title: "Voice Assistance", 
                desc: "Control lights, thermostat, or music with easy voice commands—no small buttons or screens.",
                image: "https://ik.imagekit.io/zcfjs0rmjr/f/1018269/1600x1200/53ab093f22/cot-14830_blog-header-4x3.jpg"
              },
              { 
                title: "Stewardship Plan", 
                desc: "We handle setup, maintenance, and support—your local Central Florida team, always a call away.",
                image: "https://www.safewise.com/app/uploads/2021/05/woman-connecting-smart-phone-to-thermostat.jpg"
              }
            ].map((item, i) => (
              <div key={i} className="rounded-[32px] overflow-hidden glass-aperture border-2 border-white/5 hover:border-sage/40 transition-all flex flex-col group">
                <div className="aspect-video relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-all" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-black mb-3">{item.title}</h4>
                  <p className="text-sm text-foreground/50 font-bold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dual Paths Section */}
        <section className="mb-24 py-16 px-8 rounded-[40px] bg-white/[0.02] border border-white/5">
          <div className="grid lg:grid-cols-2 gap-12">
            <div id="for-seniors" className="space-y-6">
              <h3 className="text-3xl font-black text-sage">For Seniors</h3>
              <p className="text-xl font-black leading-tight text-bone">Stay independent with tools that adapt to your routine.</p>
              <ul className="space-y-3">
                {[
                  "No more fumbling with keys or tiny buttons",
                  "Automated safety that looks out for you",
                  "Video calls as easy as flipping a switch",
                  "A home that responds to your voice"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-base font-bold">
                    <CheckCircle2 className="text-sage" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div id="for-children" className="space-y-6">
              <h3 className="text-3xl font-black text-sage">For Adult Children</h3>
              <p className="text-xl font-black leading-tight text-bone">Gain gentle reassurance without invading privacy.</p>
              <ul className="space-y-3">
                {[
                  "Peace of mind without intrusive cameras",
                  "Remote alerts if routines change significantly",
                  "Professional local setup and ongoing help",
                  "Simple family dashboard to stay connected"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-base font-bold">
                    <CheckCircle2 className="text-sage" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Our Process</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-6 text-bone">Simple. Human. Local.</h3>
            <p className="text-lg text-foreground/60 font-bold max-w-2xl mx-auto leading-relaxed">
              We've refined a three-step process to move you from worry to confidence without the stress of "learning new tech."
            </p>
          </div>
          <div className="space-y-24">
            {[
              {
                step: "1",
                title: "Friendly Visit",
                desc: "We meet at your table (no pressure) to discuss your routine, goals, and concerns—just like chatting with a neighbor.",
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              },
              {
                step: "2",
                title: "Safety Audit ($99)",
                desc: "A thorough home walkthrough to identify simple fixes for safety and comfort. We look at lighting, locks, and connection gaps.",
                image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              },
              {
                step: "3",
                title: "Harmony Plan",
                desc: "A custom roadmap with full setup of chosen features and ongoing local support. We handle every wire and every update.",
                image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              }
            ].map((step, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={cn("order-2", i % 2 === 1 && "lg:order-1")}>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-sage flex items-center justify-center text-obsidian font-black text-2xl shadow-xl shadow-sage/40">
                      {step.step}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-bone">{step.title}</h3>
                  </div>
                  <p className="text-xl text-foreground/50 font-bold leading-relaxed">{step.desc}</p>
                  <div className="mt-8">
                    <Link href="tel:+14077905891">
                      <button className="text-sage font-black text-lg border-b-2 border-sage pb-1 hover:text-white hover:border-white transition-all">
                        Ask about Step {step.step}
                      </button>
                    </Link>
                  </div>
                </div>
                <div className={cn("order-1", i % 2 === 1 && "lg:order-2")}>
                  <div className="aspect-video rounded-[40px] overflow-hidden border-2 border-white/5 shadow-2xl">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Breakdown */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-bone">Technology Breakdown</h2>
            <p className="text-lg text-foreground/60 font-bold max-w-2xl mx-auto">
              Understanding the components of our privacy-first smart home solutions
            </p>
          </div>
          
          <div className="mb-8 flex justify-center gap-2 border-b border-white/10">
            {Object.entries(techTabs).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as "radar" | "voice" | "alerts")}
                className={cn(
                  "px-6 py-3 rounded-t-xl font-black text-base transition-all flex items-center gap-2",
                  activeTab === key
                    ? "bg-sage text-obsidian"
                    : "bg-white/5 text-foreground/60 hover:bg-white/10"
                )}
              >
                {/* Adjusting icon size for tab */}
                {React.cloneElement(tab.icon as React.ReactElement, { size: 20 })}
                {tab.title}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-[32px] glass-aperture border-2 border-sage/20 min-h-[250px]">
            <div className="flex items-center gap-4 mb-6">
              {techTabs[activeTab].icon}
              <h3 className="text-2xl font-black text-bone">{techTabs[activeTab].title}</h3>
            </div>
            {activeTab === "radar" && techTabs.radar.image && (
              <div className="mb-6 rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src={techTabs.radar.image} 
                  alt="Cherish Serenity Radar Technology" 
                  className="w-full h-48 object-cover"
                />
              </div>
            )}
            <p className="text-lg text-foreground/60 font-bold leading-relaxed mb-6">
              {techTabs[activeTab].content}
            </p>
            {activeTab === "radar" && techTabs.radar.resources && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-base font-black text-bone mb-3">Learn More About Radar Technology:</h4>
                <ul className="space-y-2">
                  {techTabs.radar.resources.map((resource, i) => (
                    <li key={i}>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sage font-bold hover:text-white transition-colors flex items-center gap-2 group text-sm"
                      >
                        <span>{resource.name}</span>
                        <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Privacy Promise Section */}
        <section className="mb-24 py-16 px-8 rounded-[40px] glass-aperture border-2 border-sage/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Our Commitment</h2>
              <h3 className="text-3xl md:text-5xl font-black mb-6 text-bone">Privacy Promise</h3>
              <p className="text-lg text-foreground/60 font-bold max-w-2xl mx-auto leading-relaxed">
                Your privacy is not negotiable. We use technology that respects your dignity and independence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "No Cameras",
                  desc: "Zero video monitoring in private spaces. We use radar sensors that detect movement patterns, not images."
                },
                {
                  title: "Radar-Only Sensors",
                  desc: "Advanced radar technology detects falls and activity without recording or storing any visual data."
                },
                {
                  title: "Voice Controls Stay Local",
                  desc: "Google Nest devices process voice commands locally when possible, reducing cloud dependency."
                },
                {
                  title: "Bank-Level Encryption",
                  desc: "All data transmitted between devices and family apps uses military-grade encryption protocols."
                },
                {
                  title: "Local Processing First",
                  desc: "Sensors process data on-device before sending minimal alerts—no constant cloud streaming."
                },
                {
                  title: "You Control Everything",
                  desc: "You decide what information is shared with family members. Full transparency and control."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-[32px] bg-white/5 border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center shrink-0">
                    <Shield className="text-sage" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-1 text-bone">{item.title}</h4>
                    <p className="text-sm text-foreground/50 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-8 rounded-[32px] bg-sage/10 border-2 border-sage/20 text-center">
              <p className="text-lg font-black text-bone mb-3">Your Privacy is Our Foundation</p>
              <p className="text-sm text-foreground/60 font-bold leading-relaxed max-w-2xl mx-auto">
                We believe technology should enhance independence, not compromise it. Every device we install is chosen for its privacy-first design, and we're transparent about how your data is used—or not used.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Transparent Pricing</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-6 text-bone">Clear Plans for Lasting Independence.</h3>
            <p className="text-lg text-foreground/50 font-bold max-w-2xl mx-auto italic">
              Our pricing includes professional installation, hardware, and ongoing stewardship.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Essential Plan",
                setup: "$1,700–$2,400",
                monthly: "$99",
                desc: "Ideal for small homes with basic fall prevention and safety monitoring."
              },
              {
                name: "Comfort Plan",
                setup: "$3,300–$4,300",
                monthly: "$149",
                popular: true,
                desc: "Most common choice – adds automatic locks, voice assistance, and family connection."
              },
              {
                name: "Complete Plan",
                setup: "$5,000–$6,500",
                monthly: "$199",
                desc: "Families wanting maximum peace of mind + regular visits. Full features + premium support."
              }
            ].map((plan, i) => (
              <div key={i} className={cn(
                "p-8 rounded-[40px] glass-aperture border-2 transition-all relative",
                plan.popular ? "border-sage scale-105 shadow-2xl shadow-sage/20" : "border-white/5"
              )}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sage text-obsidian font-black rounded-full text-xs">
                    MOST POPULAR
                  </div>
                )}
                <h4 className="text-2xl font-black mb-3 text-bone">{plan.name}</h4>
                <p className="text-base text-foreground/50 font-bold mb-6 italic leading-snug">{plan.desc}</p>
                <div className="space-y-1 mb-8">
                  <p className="text-3xl font-black text-sage">Setup: {plan.setup}</p>
                  <p className="text-lg font-bold text-foreground/40">Monthly Stewardship: {plan.monthly}/mo</p>
                </div>
                <Link href="/pricing" className="block w-full">
                  <button className="w-full h-14 rounded-xl border-2 border-sage text-sage font-black hover:bg-sage hover:text-obsidian transition-all text-base">
                    View Full Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Stewardship Details */}
        <section className="mb-24 py-16 px-8 rounded-[40px] glass-aperture border border-white/5 text-center">
          <h3 className="text-3xl font-black mb-6 text-sage">The Stewardship Commitment</h3>
          <p className="text-lg text-foreground/60 font-bold max-w-2xl mx-auto leading-relaxed mb-10">
            We don't just 'install and leave.' Our stewardship plans cover hardware, local 24-hour warranty, monthly wellness reports, emergency coordination, and in-person support.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Monthly Health Checks", desc: "Remote monitoring of system vitals." },
              { title: "Priority On-Site Response", desc: "We're there within 30 minutes if needed." },
              { title: "Social-Tech Visits", desc: "Quarterly in-person visits for training." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-[32px] bg-white/5 border border-white/10">
                <h4 className="text-xl font-black mb-2 text-bone">{item.title}</h4>
                <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-bone">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground/60 font-bold max-w-2xl mx-auto">
              Common questions about our radar-based home monitoring and privacy-first solutions
            </p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-aperture rounded-[32px] border border-white/5 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-xl font-black pr-6 text-bone">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="text-sage shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-sage shrink-0" size={24} />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-lg text-foreground/60 font-bold leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-8 rounded-[40px] bg-sage text-obsidian text-center">
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-[0.9]">Ready to See it <br /> in Action?</h2>
          <p className="text-lg md:text-xl font-bold mb-10 max-w-xl mx-auto opacity-80 leading-relaxed">
            Schedule a free consultation to see how our discreet senior safety installations can work for you.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="tel:+14077905891">
              <button className="h-16 px-12 rounded-2xl bg-obsidian text-bone font-black text-lg hover:scale-105 transition-all uppercase tracking-tighter">
                Talk to a Neighbor
              </button>
            </Link>
            <Link href="/pricing">
              <button className="h-16 px-12 rounded-2xl border-2 border-obsidian text-obsidian font-black text-lg hover:bg-obsidian hover:text-bone transition-all uppercase tracking-tighter">
                View Pricing
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
