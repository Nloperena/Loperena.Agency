"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { CheckCircle2, Calculator, DollarSign, Shield, Heart, Zap, Package, Home, Crown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export default function Pricing() {
  const [selectedBundle, setSelectedBundle] = useState<string | null>(null);

  const bundles = [
    {
      id: "safety-net",
      name: "Safety Net Entry Bundle",
      target: "Families in Lake Nona or The Villages looking for foundational peace of mind",
      icon: <Shield className="text-sage" size={40} />,
      hardware: {
        items: [
          "1x Nest Hub (2nd Gen)",
          "2x Nest Mini",
          "1x Aqara FP2",
          "1x Nest Doorbell"
        ],
        cost: 410
      },
      labor: {
        description: "White-glove setup, Wi-Fi optimization, and 1-hour senior training",
        cost: 350
      },
      total: 760,
      stewardship: {
        monthly: 49,
        description: "Monthly Maintenance: Remote monitoring and a monthly tech health report"
      },
      popular: false,
      color: "sage"
    },
    {
      id: "independence-suite",
      name: "Independence Suite",
      target: "Seniors living alone who want to remain in their homes indefinitely",
      icon: <Home className="text-sage" size={40} />,
      hardware: {
        items: [
          "Starter Bundle + Nest Hub Max",
          "Nest x Yale Lock",
          "Nest Protect",
          "2nd Aqara FP2"
        ],
        cost: 930
      },
      labor: {
        description: "Full system integration, caregiver access setup, and 2-hour 'Family Portal' training",
        cost: 600
      },
      total: 1530,
      stewardship: {
        monthly: 99,
        description: "Monthly Maintenance: 'Wellness Check' alerts and priority on-site repair response"
      },
      popular: true,
      color: "sage"
    },
    {
      id: "concierge-estate",
      name: "Concierge Estate Package",
      target: "High-net-worth families in Windermere requiring medical-grade vital monitoring",
      icon: <Crown className="text-sage" size={40} />,
      hardware: {
        items: [
          "Independence Suite + Xandar Kardian Vitals Radar",
          "2x Nest Audio",
          "2x Nest Cam (Wired)"
        ],
        cost: 2250
      },
      labor: {
        description: "Advanced Gemini AI programming, vital-sign calibration, and quarterly tech optimization",
        cost: 1200
      },
      total: 3450,
      stewardship: {
        monthly: 199,
        description: "Monthly Maintenance: Monthly in-person 'social tech' visits and 24/7 VIP concierge support"
      },
      popular: false,
      color: "sage"
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pb-40">
      <Header />
      <main className="pt-48 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">Pricing</h2>
          <h1 className="text-hero-headline mb-8">Transparent Pricing <br /> for Every Need.</h1>
          <p className="text-2xl text-foreground/50 max-w-3xl mx-auto font-bold leading-relaxed">
            Save thousands compared to assisted living. Our technology keeps you independent at home for a fraction of the cost.
          </p>
          <div className="mt-12 p-8 rounded-[40px] glass-aperture border-2 border-sage/20 inline-block">
            <p className="text-3xl font-black text-sage mb-2">$10,600/month</p>
            <p className="text-xl text-foreground/60 font-bold">Average Assisted Living Cost (2044)</p>
            <p className="text-2xl font-black mt-4">vs. Our Premium Plan: <span className="text-sage">$99/month</span></p>
          </div>
        </div>

        {/* Pricing Bundles */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {bundles.map((bundle, i) => (
            <div
              key={bundle.id}
              className={cn(
                "p-10 rounded-[60px] glass-aperture border-2 transition-all relative",
                bundle.popular ? "border-sage scale-105 shadow-2xl shadow-sage/20" : "border-white/5"
              )}
            >
              {bundle.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-sage text-obsidian font-black rounded-full text-sm">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">{bundle.icon}</div>
              <h3 className="text-3xl font-black mb-4">{bundle.name}</h3>
              <p className="text-lg text-foreground/50 font-bold mb-8 italic">{bundle.target}</p>
              
              {/* Hardware */}
              <div className="mb-8 p-6 rounded-[30px] bg-white/5 border border-white/10">
                <p className="text-sm font-black uppercase tracking-widest text-sage mb-4">Hardware</p>
                <ul className="space-y-2 mb-4">
                  {bundle.hardware.items.map((item, j) => (
                    <li key={j} className="text-base font-bold text-foreground/70 flex items-start gap-2">
                      <span className="text-sage">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-black text-sage">${bundle.hardware.cost.toLocaleString()}</p>
              </div>

              {/* Labor */}
              <div className="mb-8 p-6 rounded-[30px] bg-white/5 border border-white/10">
                <p className="text-sm font-black uppercase tracking-widest text-sage mb-2">Labor</p>
                <p className="text-sm text-foreground/60 font-bold mb-4">{bundle.labor.description}</p>
                <p className="text-2xl font-black text-sage">${bundle.labor.cost.toLocaleString()}</p>
              </div>

              {/* Total */}
              <div className="mb-8 p-6 rounded-[30px] bg-sage/10 border-2 border-sage/20">
                <p className="text-sm font-black uppercase tracking-widest text-sage mb-2">Total Investment</p>
                <p className="text-4xl font-black text-sage mb-2">${bundle.total.toLocaleString()}</p>
                <p className="text-sm text-foreground/50 font-bold">Includes $99 Audit credit</p>
              </div>

              {/* Stewardship */}
              <div className="mb-10 p-6 rounded-[30px] bg-white/5 border border-white/10">
                <p className="text-sm font-black uppercase tracking-widest text-sage mb-2">Stewardship</p>
                <p className="text-3xl font-black text-sage mb-2">${bundle.stewardship.monthly}/mo</p>
                <p className="text-sm text-foreground/50 font-bold">{bundle.stewardship.description}</p>
              </div>

              <Link href="/contact">
                <button className="w-full h-16 rounded-3xl bg-sage text-obsidian font-black text-xl hover:scale-105 transition-all">
                  Get Started
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bundle Comparison */}
        <section className="mb-32">
          <h3 className="text-4xl font-black mb-12 text-center">Compare Bundles</h3>
          <div className="overflow-x-auto">
            <table className="w-full glass-aperture rounded-[40px] border border-white/5 overflow-hidden">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-6 text-left text-xl font-black">Component</th>
                  <th className="p-6 text-center text-xl font-black">Safety Net</th>
                  <th className="p-6 text-center text-xl font-black bg-sage/10">Independence Suite</th>
                  <th className="p-6 text-center text-xl font-black">Concierge Estate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold">Hardware Cost</td>
                  <td className="p-6 text-center">$410</td>
                  <td className="p-6 text-center bg-sage/5">$930</td>
                  <td className="p-6 text-center">$2,250+</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold">Labor Cost</td>
                  <td className="p-6 text-center">$350</td>
                  <td className="p-6 text-center bg-sage/5">$600</td>
                  <td className="p-6 text-center">$1,200</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold">Total Setup</td>
                  <td className="p-6 text-center font-black text-sage">$760</td>
                  <td className="p-6 text-center font-black text-sage bg-sage/5">$1,530</td>
                  <td className="p-6 text-center font-black text-sage">$3,450+</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold">Monthly Stewardship</td>
                  <td className="p-6 text-center">$49/mo</td>
                  <td className="p-6 text-center bg-sage/5">$99/mo</td>
                  <td className="p-6 text-center">$199/mo</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold">Best For</td>
                  <td className="p-6 text-center text-sm">Foundational peace of mind</td>
                  <td className="p-6 text-center text-sm bg-sage/5">Long-term independence</td>
                  <td className="p-6 text-center text-sm">Medical-grade monitoring</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="text-center py-20 px-10 rounded-[80px] glass-aperture border-2 border-sage/20">
          <h3 className="text-4xl font-black mb-8">Why Choose Recurring Stewardship?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Shield className="text-sage" size={40} />, title: "60-70% Revenue from RMR", desc: "Sustainable, predictable income model" },
              { icon: <Heart className="text-sage" size={40} />, title: "3-5x Lifetime Value", desc: "Long-term relationships, not one-time sales" },
              { icon: <Zap className="text-sage" size={40} />, title: "Priority Support", desc: "Faster response times for subscribers" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[40px] bg-white/5">
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                <p className="text-lg text-foreground/50 font-bold">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 text-center">
          <h3 className="text-4xl font-black mb-8">Ready to Get Started?</h3>
          <p className="text-2xl text-foreground/50 mb-12 font-bold max-w-2xl mx-auto">
            Schedule your $99 Harmony Check. The audit fee is credited back when you choose a bundle.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact">
              <button className="h-20 px-16 rounded-3xl bg-sage text-obsidian font-black text-xl hover:scale-105 transition-all">
                Schedule Your Audit
              </button>
            </Link>
            <Link href="tel:+14070000000">
              <button className="h-20 px-16 rounded-3xl border-2 border-sage text-foreground font-black text-xl hover:bg-sage/10 transition-all">
                Call a Local Neighbor
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
