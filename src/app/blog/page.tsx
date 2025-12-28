"use client";

import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";

export default function Blog() {
  const featuredPost = {
    title: "Why Choose Fall Detection Without Cameras in Florida Homes",
    excerpt: "Discover the benefits of radar-based fall detection for seniors. Privacy-first technology that ensures safety without compromising dignity.",
    image: "https://agingtoday.com/wp-content/uploads/2023/10/Night-Light-Safety-for-Older-Adults.jpg",
    date: "January 15, 2025",
    category: "Senior Safety",
    slug: "fall-detection-without-cameras"
  };

  const posts = [
    {
      title: "Top 5 Aging in Place Technology Tampa Trends for 2026",
      excerpt: "Explore the latest trends in independent living technology for seniors in Central Florida.",
      image: "https://images.vivintcdn.com/global/vivint.com/resources/vivint-older-woman-smart-lock.jpg",
      date: "January 10, 2025",
      category: "Technology",
      slug: "aging-in-place-trends-2026"
    },
    {
      title: "How Radar Sensors Enhance Independent Living Tech for Seniors",
      excerpt: "Learn how radar-based monitoring provides peace of mind without invasive cameras.",
      image: "https://agingtoday.com/wp-content/uploads/2023/10/Night-Light-Safety-for-Older-Adults.jpg",
      date: "January 5, 2025",
      category: "Technology",
      slug: "radar-sensors-independent-living"
    },
    {
      title: "Privacy Concerns in Elderly Home Automation: Our Solutions",
      excerpt: "Understanding privacy in smart home technology and how we address concerns for seniors.",
      image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "December 28, 2024",
      category: "Privacy",
      slug: "privacy-elderly-home-automation"
    },
    {
      title: "Smart Home Safety Audit: What to Expect",
      excerpt: "A guide to our $99 safety audit process and how it helps identify risks in your home.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "December 20, 2024",
      category: "Safety",
      slug: "safety-audit-guide"
    },
    {
      title: "Voice Controls for Seniors: Making Technology Accessible",
      excerpt: "How Google Home voice commands make smart home technology easy for seniors.",
      image: "https://images.unsplash.com/photo-1545258132-a097da31af7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "December 15, 2024",
      category: "Technology",
      slug: "voice-controls-seniors"
    }
  ];

  const categories = ["Senior Safety", "Technology", "Privacy", "Safety", "All Posts"];

  return (
    <div className="bg-background text-foreground min-h-screen pb-40">
      <Header />
      <main className="pt-20 sm:pt-28 lg:pt-36 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-32 text-center">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">Expertise & Guides</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.9] tracking-tighter text-bone">
            Helpful Guides for <br className="hidden md:block" /> Aging in Place.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-bone/60 max-w-3xl mx-auto font-bold leading-relaxed">
            Resources to help you or your loved ones stay safe, connected, and in control—right here in Central Florida.
          </p>
        </section>

        {/* Featured Guide */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center p-12 rounded-[60px] glass-aperture border-2 border-sage/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-sage/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="aspect-video rounded-[40px] overflow-hidden border-2 border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Why Radar Sensors Are Better Than Cameras for Privacy" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-black uppercase tracking-widest text-sage bg-sage/10 px-4 py-2 rounded-full">Privacy First</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-bone">Why Radar Sensors Are Better Than Cameras for Privacy.</h2>
              <p className="text-xl text-foreground/60 font-bold mb-8 leading-relaxed">
                Discover how modern radar technology provides safety monitoring without the invasive 'big brother' feel of cameras in the home.
              </p>
              <Link href="/blog/why-radar-sensors-better-than-cameras">
                <button className="flex items-center gap-3 h-16 px-10 rounded-2xl bg-sage text-obsidian font-black text-lg hover:scale-105 transition-all uppercase tracking-tighter">
                  Read the Guide
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Post Grid */}
        <section className="mb-40">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className="group">
                <article className="p-8 rounded-[40px] glass-aperture border-2 border-white/5 hover:border-sage/40 transition-all flex flex-col h-full">
                  <div className="aspect-video rounded-[30px] overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-sage mb-4">{post.category}</span>
                  <h3 className="text-2xl md:text-3xl font-black mb-6 group-hover:text-sage transition-colors leading-tight">{post.title}</h3>
                  <p className="text-lg text-foreground/50 font-bold mb-8 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sage font-black uppercase text-sm tracking-widest">
                    Read More
                    <ArrowRight size={16} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Free Resource Section */}
        <section className="mb-40 py-24 px-10 rounded-[80px] bg-white/[0.02] border border-white/5 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sage to-transparent" />
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">Free Download</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 text-bone">The Home Safety <br className="hidden md:block" /> Checklist.</h3>
            <p className="text-xl text-foreground/60 font-bold mb-12 leading-relaxed">
              Identify the top 10 hazards in your home with our free, professional-grade checklist used by our audit team.
            </p>
            <div className="max-w-md mx-auto p-2 rounded-3xl bg-white/5 border border-white/10 flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent border-none outline-none px-6 text-bone font-bold"
              />
              <button className="h-14 px-8 rounded-2xl bg-sage text-obsidian font-black uppercase tracking-tighter hover:scale-105 transition-all">
                Download Now
              </button>
            </div>
          </div>
        </section>


        {/* Final CTA */}
        <section className="py-24 px-10 rounded-[80px] bg-sage text-obsidian text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9]">Ready to Thrive <br /> at Home?</h2>
          <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto opacity-80 leading-relaxed">
            Let's discuss how we can help your family thrive in the home you love.
          </p>
          <Link href="tel:+14077905891">
            <button className="h-20 px-16 rounded-3xl bg-obsidian text-bone font-black text-xl hover:scale-105 transition-all uppercase tracking-tighter">
              Secure Your Nest
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
