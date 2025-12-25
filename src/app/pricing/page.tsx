"use client";

import React from "react";
import Header from "@/components/Header";
import { Shield, Home, Crown, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { BUNDLE_CONFIGS } from "@/data/hardware";
import { calculateBundlePricing } from "@/utils/pricing";

export default function Pricing() {
  const bundles = BUNDLE_CONFIGS.map(bundle => {
    const pricing = calculateBundlePricing(bundle.id);
    return {
      ...bundle,
      pricing,
      icon: bundle.id === "safety-net" ? <Shield className="text-sage" size={40} /> :
            bundle.id === "independence-suite" ? <Home className="text-sage" size={40} /> :
            <Crown className="text-sage" size={40} />,
      target: bundle.id === "safety-net" ? "Families in Lake Nona or The Villages looking for foundational peace of mind" :
              bundle.id === "independence-suite" ? "Seniors living alone who want to remain in their homes indefinitely" :
              "High-net-worth families in Windermere requiring medical-grade vital monitoring",
      popular: bundle.id === "independence-suite"
    };
  });

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
          {bundles.map((bundle) => {
            if (!bundle.pricing) return null;
            
            return (
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
                    {bundle.hardwareItems.map((item, j) => (
                      <li key={j} className="text-base font-bold text-foreground/70 flex items-start gap-2">
                        <span className="text-sage">•</span>
                        <span>{item.quantity}x {item.productName}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-2xl font-black text-sage">${bundle.pricing.hardwareTotal.toFixed(2)}</p>
                  <p className="text-xs text-foreground/40 font-bold mt-2">Includes 20% markup</p>
                </div>

                {/* Labor */}
                <div className="mb-8 p-6 rounded-[30px] bg-white/5 border border-white/10">
                  <p className="text-sm font-black uppercase tracking-widest text-sage mb-2">Labor</p>
                  <p className="text-sm text-foreground/60 font-bold mb-2">
                    {bundle.laborHours} hours @ ${bundle.laborRate}/hr
                  </p>
                  <p className="text-2xl font-black text-sage">${bundle.pricing.laborTotal.toFixed(2)}</p>
                </div>

                {/* Total */}
                <div className="mb-8 p-6 rounded-[30px] bg-sage/10 border-2 border-sage/20">
                  <p className="text-sm font-black uppercase tracking-widest text-sage mb-2">Total Investment</p>
                  <p className="text-4xl font-black text-sage mb-2">${bundle.pricing.totalSetup.toFixed(2)}</p>
                  <p className="text-sm text-foreground/50 font-bold">Includes $99 Audit credit</p>
                </div>

                {/* Stewardship */}
                <div className="mb-10 p-6 rounded-[30px] bg-white/5 border border-white/10">
                  <p className="text-sm font-black uppercase tracking-widest text-sage mb-2">Stewardship</p>
                  <p className="text-3xl font-black text-sage mb-2">${bundle.pricing.stewardshipMonthly}/mo</p>
                  <p className="text-sm text-foreground/50 font-bold">
                    {bundle.pricing.stewardshipMonthly === 49 && "Basic: Google Home Premium coverage"}
                    {bundle.pricing.stewardshipMonthly === 99 && "Pro: Alerts & priority on-site response"}
                    {bundle.pricing.stewardshipMonthly === 199 && "Concierge: Monthly social-tech visits + 24/7 VIP"}
                  </p>
                </div>

                <Link href="/contact">
                  <button className="w-full h-16 rounded-3xl bg-sage text-obsidian font-black text-xl hover:scale-105 transition-all">
                    Get Started
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bundle Comparison */}
        <section className="mb-32">
          <h3 className="text-4xl font-black mb-12 text-center">Compare Bundles</h3>
          <div className="overflow-x-auto">
            <table className="w-full glass-aperture rounded-[40px] border border-white/5 overflow-hidden">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-6 text-left text-xl font-black">Component</th>
                  {bundles.map((bundle, i) => bundle.pricing && (
                    <th key={bundle.id} className={cn("p-6 text-center text-xl font-black", i === 1 && "bg-sage/10")}>
                      {bundle.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold">Hardware Cost</td>
                  {bundles.map((bundle, i) => bundle.pricing && (
                    <td key={bundle.id} className={cn("p-6 text-center", i === 1 && "bg-sage/5")}>
                      ${bundle.pricing.hardwareTotal.toFixed(2)}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold">Labor Cost</td>
                  {bundles.map((bundle, i) => bundle.pricing && (
                    <td key={bundle.id} className={cn("p-6 text-center", i === 1 && "bg-sage/5")}>
                      ${bundle.pricing.laborTotal.toFixed(2)}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-black">Total Setup</td>
                  {bundles.map((bundle, i) => bundle.pricing && (
                    <td key={bundle.id} className={cn("p-6 text-center font-black text-sage", i === 1 && "bg-sage/5")}>
                      ${bundle.pricing.totalSetup.toFixed(2)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-6 font-bold">Monthly Stewardship</td>
                  {bundles.map((bundle, i) => bundle.pricing && (
                    <td key={bundle.id} className={cn("p-6 text-center", i === 1 && "bg-sage/5")}>
                      ${bundle.pricing.stewardshipMonthly}/mo
                    </td>
                  ))}
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
              { icon: <Zap className="text-sage" size={40} />, title: "3-5x Lifetime Value", desc: "Long-term relationships, not one-time sales" },
              { icon: <CheckCircle2 className="text-sage" size={40} />, title: "Priority Support", desc: "Faster response times for subscribers" }
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
            <Link href="/inventory">
              <button className="h-20 px-16 rounded-3xl border-2 border-sage text-foreground font-black text-xl hover:bg-sage/10 transition-all">
                View Inventory & Generate Quote
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
