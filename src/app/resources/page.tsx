"use client";

import React from "react";
import Header from "@/components/Header";
import { FileText, Download, BookOpen, Video, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Resources() {
  const resources = [
    {
      category: "Free Downloads",
      items: [
        {
          title: "Home Safety Audit Checklist",
          description: "A comprehensive PDF checklist to assess your home's safety and senior-friendliness",
          type: "PDF",
          icon: <FileText className="text-sage" size={32} />,
          cta: "Download PDF"
        },
        {
          title: "Smart Home Buyer's Guide for Seniors",
          description: "Everything you need to know about choosing the right technology for aging in place",
          type: "PDF",
          icon: <BookOpen className="text-sage" size={32} />,
          cta: "Download Guide"
        },
        {
          title: "Family Caregiver Resource Kit",
          description: "Tools and templates for adult children supporting aging parents",
          type: "PDF",
          icon: <Download className="text-sage" size={32} />,
          cta: "Get Resource Kit"
        }
      ]
    },
    {
      category: "Video Guides",
      items: [
        {
          title: "How Radar Sensors Work (No Cameras)",
          description: "See how our discreet technology monitors wellness without invading privacy",
          type: "Video",
          icon: <Video className="text-sage" size={32} />,
          cta: "Watch Video"
        },
        {
          title: "Setting Up One-Touch Video Calling",
          description: "Step-by-step guide to connecting with family effortlessly",
          type: "Video",
          icon: <Video className="text-sage" size={32} />,
          cta: "Watch Tutorial"
        }
      ]
    }
  ];

  const blogPosts = [
    {
      title: "Top 5 Tech Hacks for Aging in Place in Florida",
      excerpt: "Discover simple technology solutions that help seniors stay independent in Central Florida homes",
      date: "March 2025",
      readTime: "5 min read",
      cta: "Read Article"
    },
    {
      title: "How to Talk to Your Parents About Smart Home Technology",
      excerpt: "A guide for adult children on introducing technology to aging parents without overwhelming them",
      date: "February 2025",
      readTime: "7 min read",
      cta: "Read Article"
    },
    {
      title: "The Real Cost of Assisted Living vs. Aging in Place",
      excerpt: "Financial comparison showing how smart home technology saves thousands compared to facilities",
      date: "January 2025",
      readTime: "6 min read",
      cta: "Read Article"
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pb-40">
      <Header />
      <main className="pt-48 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">Resources</h2>
          <h1 className="text-hero-headline mb-10 leading-[0.9]">Free Resources <br /> to Help You Succeed.</h1>
          <p className="text-2xl text-foreground/40 max-w-3xl mx-auto font-bold leading-relaxed">
            Expert guides, checklists, and educational content to help you make informed decisions about aging in place.
          </p>
        </div>

        {/* Free Downloads */}
        {resources.map((section, i) => (
          <section key={i} className="mb-32">
            <h3 className="text-3xl font-black mb-12">{section.category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item, j) => (
                <div key={j} className="p-10 rounded-[60px] glass-aperture border-2 border-white/5 hover:border-sage/40 transition-all">
                  <div className="mb-6">{item.icon}</div>
                  <span className="text-sm font-black uppercase tracking-widest text-sage mb-4 block">{item.type}</span>
                  <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                  <p className="text-lg text-foreground/50 font-bold mb-8 leading-relaxed">{item.description}</p>
                  <Link href="/contact">
                    <button className="w-full h-14 rounded-2xl bg-sage text-obsidian font-black hover:scale-105 transition-all flex items-center justify-center gap-3">
                      {item.cta}
                      <ArrowRight size={20} />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Blog Posts */}
        <section className="mb-32">
          <h3 className="text-3xl font-black mb-12">Latest Articles</h3>
          <div className="space-y-8">
            {blogPosts.map((post, i) => (
              <div key={i} className="p-12 rounded-[60px] glass-aperture border-2 border-white/5 hover:border-sage/40 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-black uppercase tracking-widest text-foreground/40">{post.date}</span>
                  <span className="text-sm font-bold text-foreground/30">•</span>
                  <span className="text-sm font-bold text-foreground/40">{post.readTime}</span>
                </div>
                <h4 className="text-3xl font-black mb-4">{post.title}</h4>
                <p className="text-xl text-foreground/50 font-bold mb-8 leading-relaxed">{post.excerpt}</p>
                <Link href="/contact">
                  <button className="h-14 px-8 rounded-2xl border-2 border-sage text-foreground font-black hover:bg-sage/10 transition-all flex items-center gap-3">
                    {post.cta}
                    <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="p-20 rounded-[80px] glass-aperture text-center border-2 border-sage/20 bg-sage/5">
          <h3 className="text-4xl font-black mb-8">Ready to Get Started?</h3>
          <p className="text-2xl text-foreground/50 mb-12 font-bold max-w-2xl mx-auto">
            Schedule your $99 Harmony Check and see how we can help you stay independent at home.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/pricing">
              <button className="h-20 px-16 rounded-3xl bg-sage text-obsidian font-black text-xl hover:scale-105 transition-all">
                View Pricing Plans
              </button>
            </Link>
            <Link href="/contact">
              <button className="h-20 px-16 rounded-3xl border-2 border-sage text-foreground font-black text-xl hover:bg-sage/10 transition-all">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}


