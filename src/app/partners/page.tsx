"use client";

import React from "react";
import Header from "@/components/Header";
import { Handshake, Users, TrendingUp, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";

export default function Partners() {
  const partnerTypes = [
    {
      title: "Installation Partners",
      description: "Join our network of trusted installers in Central Florida",
      benefits: [
        "Steady referral stream from Loperena",
        "White-label support and training",
        "Access to premium smart home products",
        "Marketing support and co-branding"
      ],
      cta: "Become an Installer"
    },
    {
      title: "Senior Living Operators",
      description: "Partner with us to enhance your community offerings",
      benefits: [
        "Bundled technology packages for residents",
        "Bulk pricing discounts",
        "Dedicated support team",
        "Co-marketing opportunities"
      ],
      cta: "Partner with Us"
    },
    {
      title: "Real Estate Agents",
      description: "Offer smart home tech as a selling point for senior-friendly homes",
      benefits: [
        "Referral commission program",
        "Home staging with tech demos",
        "Marketing materials and support",
        "Priority installation scheduling"
      ],
      cta: "Join Referral Program"
    },
    {
      title: "Insurance Partners",
      description: "Integrate our services with aging-in-place insurance programs",
      benefits: [
        "Risk reduction for policyholders",
        "Data sharing agreements",
        "Co-branded wellness reports",
        "Preferred provider status"
      ],
      cta: "Explore Partnership"
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pb-40">
      <Header />
      <main className="pt-48 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">Partners & Affiliates</h2>
          <h1 className="text-hero-headline mb-10 leading-[0.9]">Join Our Network <br /> and Grow Together.</h1>
          <p className="text-2xl text-foreground/40 max-w-3xl mx-auto font-bold leading-relaxed">
            Scale your business while helping seniors stay independent. We're building a network of trusted partners across Central Florida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {partnerTypes.map((partner, i) => (
            <div key={i} className="p-12 rounded-[60px] glass-aperture border-2 border-white/5 hover:border-sage/40 transition-all">
              <h3 className="text-3xl font-black mb-4">{partner.title}</h3>
              <p className="text-xl text-foreground/50 font-bold mb-8 leading-relaxed">{partner.description}</p>
              <ul className="space-y-4 mb-10">
                {partner.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-center gap-4 text-lg font-black">
                    <CheckCircle2 className="text-sage shrink-0" size={20} />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="w-full h-16 rounded-3xl bg-sage text-obsidian font-black text-xl hover:scale-105 transition-all">
                  {partner.cta}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Expansion Map */}
        <section className="py-20 px-10 rounded-[80px] glass-aperture border-2 border-sage/20">
          <div className="text-center mb-12">
            <MapPin className="text-sage mx-auto mb-6" size={48} />
            <h3 className="text-4xl font-black mb-4">Expansion Plans</h3>
            <p className="text-xl text-foreground/50 font-bold">We're expanding thoughtfully across Florida</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { area: "Central Florida", status: "Active", cities: "Lake Nona, The Villages, Windermere" },
              { area: "South Florida", status: "2025", cities: "Miami, Fort Lauderdale" },
              { area: "Tampa Bay", status: "2026", cities: "Tampa, St. Petersburg" }
            ].map((region, i) => (
              <div key={i} className="p-8 rounded-[40px] bg-white/5 border border-white/10 text-center">
                <p className="text-2xl font-black mb-2">{region.area}</p>
                <p className="text-sage font-black text-lg mb-4">{region.status}</p>
                <p className="text-foreground/50 font-bold text-sm">{region.cities}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Revenue Sharing Model */}
        <section className="mt-32 text-center">
          <h3 className="text-4xl font-black mb-12">Partnership Revenue Model</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Handshake className="text-sage" size={40} />, title: "20-30% Margin Boost", desc: "White-label services increase your margins" },
              { icon: <Users className="text-sage" size={40} />, title: "Recurring Referrals", desc: "Steady stream of qualified leads" },
              { icon: <TrendingUp className="text-sage" size={40} />, title: "Scalable Growth", desc: "Expand without proportional staff increases" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[40px] glass-aperture">
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                <p className="text-lg text-foreground/50 font-bold">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}


