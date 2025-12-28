"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { MASTER_HARDWARE_TABLE, BUNDLE_CONFIGS, type HardwareItem } from "@/data/hardware";
import { calculateBundlePricing, getAllCategories } from "@/utils/pricing";
import { Package, DollarSign, Wrench, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export default function Inventory() {
  const [selectedBundle, setSelectedBundle] = useState<string | null>(null);
  const categories = getAllCategories();

  const pricing = selectedBundle ? calculateBundlePricing(selectedBundle) : null;
  const selectedBundleConfig = selectedBundle 
    ? BUNDLE_CONFIGS.find(b => b.id === selectedBundle)
    : null;

  return (
    <div className="bg-background text-foreground min-h-screen pb-20">
      <Header />
      <main className="pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Inventory & Quotes</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] tracking-tighter text-bone">Master Hardware Catalog <br className="hidden md:block" /> & Quote Generator.</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-bone/60 max-w-2xl mx-auto font-bold leading-relaxed">
            Browse our complete product catalog and generate instant quotes for any bundle configuration.
          </p>
        </div>

        {/* Bundle Selector */}
        <section className="mb-24">
          <h3 className="text-3xl font-black mb-8">Select a Bundle to Generate Quote</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {BUNDLE_CONFIGS.map((bundle) => (
              <button
                key={bundle.id}
                onClick={() => setSelectedBundle(bundle.id)}
                className={cn(
                  "p-8 rounded-[40px] glass-aperture border-2 text-left transition-all",
                  selectedBundle === bundle.id
                    ? "border-sage bg-sage/10"
                    : "border-white/5 hover:border-sage/40"
                )}
              >
                <h4 className="text-2xl font-black mb-4">{bundle.name}</h4>
                <p className="text-lg text-foreground/50 font-bold">
                  {bundle.hardwareItems.length} hardware items • {bundle.laborHours} hours labor
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Quote Breakdown */}
        {pricing && selectedBundleConfig && (
          <section className="mb-24 p-12 rounded-[60px] glass-aperture border-2 border-sage/20">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-4xl font-black mb-2">{selectedBundleConfig.name}</h3>
                <p className="text-xl text-foreground/50 font-bold">Complete Pricing Breakdown</p>
              </div>
              <Package className="text-sage" size={48} />
            </div>

            {/* Hardware Items */}
            <div className="mb-12">
              <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Package className="text-sage" size={28} />
                Hardware Components
              </h4>
              <div className="space-y-4">
                {pricing.hardwareItems.map(({ item, quantity, msrpPrice, vettedPrice, totalPrice }, i) => {
                  const hasLoyaltyCredit = pricing.loyaltyCredit > 0;
                  const displayPrice = hasLoyaltyCredit ? msrpPrice : vettedPrice;
                  return (
                    <div key={i} className="p-6 rounded-[30px] bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h5 className="text-xl font-black">{item.productName}</h5>
                          <span className="text-sm font-black uppercase tracking-widest text-sage bg-sage/10 px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-base text-foreground/50 font-bold mb-3">{item.primaryRole}</p>
                        <div className="flex items-center gap-6 text-sm mb-2">
                          <div>
                            <span className="text-foreground/40 font-bold">MSRP:</span>
                            <span className="ml-2 text-foreground/60">${msrpPrice.toFixed(2)}</span>
                          </div>
                          {!hasLoyaltyCredit && (
                            <>
                              <span className="text-foreground/20">→</span>
                              <div>
                                <span className="text-sage font-black">IndepeNEST Bundle:</span>
                                <span className="ml-2 font-black text-sage">${vettedPrice.toFixed(2)}</span>
                              </div>
                            </>
                          )}
                          {hasLoyaltyCredit && (
                            <span className="text-green-400 font-black text-xs bg-green-400/10 px-2 py-1 rounded-full">
                              ✓ Loyalty Price
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-foreground/40">Qty: {quantity}</span>
                          <span className="text-foreground/40">×</span>
                          <span className="font-black text-sage">${displayPrice.toFixed(2)}</span>
                          <span className="text-foreground/40">=</span>
                          <span className="font-black text-sage text-lg">${totalPrice.toFixed(2)}</span>
                        </div>
                      </div>
                      <Link 
                        href={item.officialProductPage} 
                        target="_blank"
                        className="ml-6 p-3 rounded-2xl bg-sage/10 hover:bg-sage/20 transition-all"
                        title="View Product Page"
                      >
                        <ExternalLink className="text-sage" size={20} />
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 p-6 rounded-[30px] bg-sage/10 border border-sage/20">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-sage mb-1">Hardware Subtotal</p>
                    <p className="text-sm text-foreground/50 font-bold">MSRP: ${pricing.hardwareSubtotalMSRP.toFixed(2)}</p>
                  </div>
                  <p className="text-3xl font-black text-sage">${pricing.hardwareTotal.toFixed(2)}</p>
                </div>
                {pricing.stewardshipBundleFee > 0 && (
                  <div className="pt-4 border-t border-sage/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-black text-foreground/60">Procurement & Quality Assurance</span>
                      <span className="text-lg font-black text-sage">${pricing.stewardshipBundleFee.toFixed(2)}</span>
                    </div>
                    {pricing.loyaltyCredit > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-black text-green-400">Loyalty Credit (Complete Plan)</span>
                        <span className="text-lg font-black text-green-400">-${pricing.loyaltyCredit.toFixed(2)}</span>
                      </div>
                    )}
                    <p className="text-xs text-foreground/40 font-bold mt-3 italic">
                      Includes device pre-testing, security updates, white-glove delivery, and IndepeNEST-backed 1-year replacement warranty
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Labor */}
            <div className="mb-12">
              <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Wrench className="text-sage" size={28} />
                Labor & Installation
              </h4>
              <div className="p-6 rounded-[30px] bg-white/5 border border-white/10">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-lg font-black mb-1">{pricing.laborHours} hours @ ${pricing.laborRate}/hr</p>
                    <p className="text-sm text-foreground/50 font-bold">
                      {selectedBundleConfig.id === "essential-plan" && "White-glove setup, Wi-Fi optimization, 1-hour training"}
                      {selectedBundleConfig.id === "comfort-plan" && "Full system integration, caregiver access, 2-hour Family Portal training"}
                      {selectedBundleConfig.id === "complete-plan" && "Advanced Gemini AI programming, vital-sign calibration, quarterly optimization"}
                    </p>
                  </div>
                  <p className="text-3xl font-black text-sage">${pricing.laborTotal.toFixed(2)}</p>
                </div>
              </div>
            </div>

            {/* Totals */}
            <div className="p-10 rounded-[40px] bg-sage/10 border-2 border-sage/20">
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-black">Hardware Total</span>
                  <span className="text-2xl font-black">${pricing.hardwareTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-black">Labor Total</span>
                  <span className="text-2xl font-black">${pricing.laborTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center border-t border-sage/20 pt-6">
                  <div>
                    <span className="text-xl font-black">$99 Harmony Check</span>
                    <p className="text-sm text-foreground/50 font-bold">Credited back on installation</p>
                  </div>
                  <span className="text-xl font-black text-foreground/40">+$99 - $99</span>
                </div>
              </div>
              <div className="pt-8 border-t-2 border-sage/30">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-black">Total Setup Investment</span>
                  <span className="text-5xl font-black text-sage">${pricing.totalSetup.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-sage/20">
                  <div>
                    <span className="text-2xl font-black">Monthly Stewardship</span>
                    <p className="text-sm text-foreground/50 font-bold mt-1">
                      {pricing.stewardshipMonthly === 99 && "Essential: Monthly tech health reports + 30-min local response"}
                      {pricing.stewardshipMonthly === 149 && "Comfort: Priority response + wellness check alerts + local support"}
                      {pricing.stewardshipMonthly === 199 && "Complete: Monthly social-tech visits + 24/7 VIP + priority on-site"}
                    </p>
                  </div>
                  <span className="text-4xl font-black text-sage">${pricing.stewardshipMonthly}/mo</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
              <Link href="tel:+14077905891">
                <button className="h-16 px-12 rounded-3xl bg-sage text-obsidian font-black text-xl hover:scale-105 transition-all">
                  Request This Quote
                </button>
              </Link>
              <Link href="/pricing">
                <button className="h-16 px-12 rounded-3xl border-2 border-sage text-foreground font-black text-xl hover:bg-sage/10 transition-all">
                  View All Bundles
                </button>
              </Link>
            </div>
          </section>
        )}

        {/* Why Our Hardware Section */}
        <section className="mb-32 p-12 rounded-[60px] glass-aperture border-2 border-sage/20">
          <h3 className="text-3xl font-black mb-8 text-center">Why Our Hardware?</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="p-8 rounded-[40px] bg-white/5">
              <h4 className="text-xl font-black mb-4 text-sage">Privacy-First Selection</h4>
              <p className="text-base text-foreground/60 font-bold">
                We only recommend devices that respect your privacy. No invasive cameras, no data harvesting—just discreet support.
              </p>
            </div>
            <div className="p-8 rounded-[40px] bg-white/5">
              <h4 className="text-xl font-black mb-4 text-sage">Local 24-Hour Warranty</h4>
              <p className="text-base text-foreground/60 font-bold">
                If it breaks, a neighbor (us) comes to fix it—no mailing things back to Google. We're here, physically, in Central Florida.
              </p>
            </div>
            <div className="p-8 rounded-[40px] bg-white/5">
              <h4 className="text-xl font-black mb-4 text-sage">Professional-Grade Integration</h4>
              <p className="text-base text-foreground/60 font-bold">
                Every device is unboxed, tested, updated to secure firmware, and pre-configured before it reaches your home.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-[40px] bg-sage/10 border border-sage/20">
            <p className="text-lg font-black mb-4">Transparency is Our Authority</p>
            <p className="text-base text-foreground/60 font-bold leading-relaxed">
              We charge a 20% procurement fee because we don't just 'drop ship' gear to you. We physically inspect, update, and warrant every device locally so you never have to deal with a tech support line. Our hardware pricing includes local procurement, device pre-testing, white-glove delivery, and an IndepeNEST-backed 1-year replacement warranty.
            </p>
          </div>
        </section>

        {/* Master Hardware Catalog */}
        <section>
          <h3 className="text-3xl font-black mb-12">Complete Hardware Catalog</h3>
          <div className="space-y-12">
            {categories.map((category) => {
              const items = MASTER_HARDWARE_TABLE.filter(item => item.category === category);
              return (
                <div key={category} className="glass-aperture p-10 rounded-[60px] border border-white/5">
                  <h4 className="text-2xl font-black mb-8 text-sage uppercase tracking-widest">{category}</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {items.map((item, i) => {
                      const vettedPrice = item.estPrice * (1 + 0.20);
                      return (
                        <div key={i} className="p-6 rounded-[30px] bg-white/5 border border-white/10">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h5 className="text-xl font-black mb-2">{item.productName}</h5>
                              <p className="text-base text-foreground/50 font-bold mb-4">{item.primaryRole}</p>
                              <div className="flex items-center gap-4">
                                <div>
                                  <p className="text-sm text-foreground/40 font-bold">MSRP</p>
                                  <p className="text-lg font-black">${item.estPrice}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-sage font-black">IndepeNEST Bundle</p>
                                  <p className="text-lg font-black text-sage">${vettedPrice.toFixed(2)}</p>
                                </div>
                              </div>
                              <p className="text-xs text-foreground/40 font-bold mt-2 italic">
                                Includes testing, security updates & local warranty
                              </p>
                            </div>
                            <Link 
                              href={item.officialProductPage}
                              target="_blank"
                              className="ml-4 p-3 rounded-2xl bg-sage/10 hover:bg-sage/20 transition-all"
                              title="View Product Page"
                            >
                              <ExternalLink className="text-sage" size={20} />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

