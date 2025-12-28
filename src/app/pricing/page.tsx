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
      icon: bundle.id === "essential-plan" ? <Shield className="text-sage" size={40} /> :
            bundle.id === "comfort-plan" ? <Home className="text-sage" size={40} /> :
            <Crown className="text-sage" size={40} />,
      target: bundle.id === "essential-plan" ? "Ideal for small homes with basic fall prevention and safety monitoring." :
              bundle.id === "comfort-plan" ? "Adds automatic locks, voice assistance, and family connection. Best for balanced safety and daily ease." :
              "Full features + premium support including monthly social visits. For maximum peace of mind and customization.",
      popular: bundle.id === "comfort-plan"
    };
  });

  return (
    <div className="bg-background text-foreground min-h-screen pb-20">
      <Header />
      <main className="pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs 2xl:text-sm mb-4 2xl:mb-6">Pricing</h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-6 2xl:mb-10 leading-tight text-bone">Transparent Pricing <br /> for Every Need.</h1>
          <p className="text-lg xl:text-xl 2xl:text-2xl text-foreground/50 max-w-2xl 2xl:max-w-4xl mx-auto font-bold leading-relaxed">
            Stay independent at home for a fraction of the cost of assisted living.
          </p>
          <div className="mt-10 p-6 rounded-[32px] glass-aperture border-2 border-sage/20 inline-block text-center">
            <p className="text-xl font-black mb-1 text-bone">vs. Average Assisted Living Cost in Central Florida</p>
            <p className="text-2xl font-black text-sage mb-3">~$4,500–$6,000/month</p>
            <p className="text-xl font-black">Our Complete Plan: <span className="text-sage">$199/month</span></p>
            <p className="text-sm text-foreground/50 font-bold mt-1 italic">Save thousands while staying in the home you love.</p>
          </div>
        </div>

        {/* Pricing Bundles */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {bundles.map((bundle) => {
            if (!bundle.pricing) return null;
            
            return (
              <div
                key={bundle.id}
                className={cn(
                  "p-8 rounded-[40px] glass-aperture border-2 transition-all relative flex flex-col",
                  bundle.popular ? "border-sage scale-105 shadow-2xl shadow-sage/20" : "border-white/5"
                )}
              >
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sage text-obsidian font-black rounded-full text-xs">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-4">{bundle.icon}</div>
                <h3 className="text-2xl font-black mb-3">{bundle.name}</h3>
                <p className="text-base text-foreground/50 font-bold mb-6 italic leading-relaxed">{bundle.target}</p>
                
                {/* Hardware */}
                <div className="mb-6 p-5 rounded-[24px] bg-white/5 border border-white/10 flex-1">
                  <p className="text-xs font-black uppercase tracking-widest text-sage mb-3">Hardware Included</p>
                  <ul className="space-y-1.5 mb-4">
                    {bundle.hardwareItems.map((item, j) => (
                      <li key={j} className="text-sm font-bold text-foreground/70 flex items-start gap-2">
                        <span className="text-sage">•</span>
                        <span>{item.quantity}x {item.productName}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Visuals for Hardware */}
                  <div className="flex gap-2 mb-4 overflow-hidden">
                    {bundle.id === "essential-plan" && (
                      <>
                        <img src="https://www.aqara.com/wp-content/uploads/2023/06/Presence-Sensor-FP2-built-in-light-sensor.png" alt="Aqara FP2" className="w-12 h-12 rounded-lg bg-white/5 object-cover" />
                        <img src="https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2021/11/806/g806GA01331-o_other3-1.jpg" alt="Nest Hub" className="w-12 h-12 rounded-lg bg-white/5 object-cover" />
                      </>
                    )}
                    {bundle.id === "comfort-plan" && (
                      <>
                        <img src="https://www.aqara.com/wp-content/uploads/2023/06/Presence-Sensor-FP2-built-in-light-sensor.png" alt="Aqara FP2" className="w-12 h-12 rounded-lg bg-white/5 object-cover" />
                        <img src="https://m.media-amazon.com/images/I/518YGQhtnHL._AC_UF894,1000_QL80_.jpg" alt="Yale Lock" className="w-12 h-12 rounded-lg bg-white/5 object-cover" />
                      </>
                    )}
                    {bundle.id === "complete-plan" && (
                      <>
                        <img src="https://store.mcci.com/cdn/shop/files/VS373.png?v=1737448056&width=1946" alt="Fall Radar" className="w-12 h-12 rounded-lg bg-white/5 object-cover" />
                        <img src="https://m.media-amazon.com/images/I/61etqxZHOoL._AC_UF894,1000_QL80_.jpg" alt="Nest Thermostat" className="w-12 h-12 rounded-lg bg-white/5 object-cover" />
                      </>
                    )}
                  </div>
                  <p className="text-xl font-black text-sage">${bundle.pricing.hardwareTotal.toLocaleString()}</p>
                  <p className="text-[10px] text-foreground/40 font-bold mt-1 italic">Procured, pre-tested & locally warranted</p>
                </div>

                {/* Labor */}
                <div className="mb-6 p-5 rounded-[24px] bg-white/5 border border-white/10">
                  <p className="text-xs font-black uppercase tracking-widest text-sage mb-2">Professional Labor</p>
                  <p className="text-xs text-foreground/60 font-bold mb-1">
                    {bundle.laborHours} hours @ ${bundle.laborRate}/hr
                  </p>
                  <p className="text-xl font-black text-sage">${bundle.pricing.laborTotal.toLocaleString()}</p>
                </div>

                {/* Total */}
                <div className="mb-6 p-5 rounded-[24px] bg-sage/10 border-2 border-sage/20">
                  <p className="text-xs font-black uppercase tracking-widest text-sage mb-1">Total Investment</p>
                  <p className="text-3xl font-black text-sage mb-1">
                    ${bundle.pricing.totalSetup.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-foreground/50 font-bold italic">Final quote after $99 Safety Audit</p>
                </div>

                {/* Stewardship */}
                <div className="mb-10 p-6 rounded-[24px] bg-white/5 border border-white/10">
                  <p className="text-xs font-black uppercase tracking-widest text-sage mb-2">Stewardship Plan</p>
                  <p className="text-2xl font-black text-sage mb-2">
                    ${bundle.pricing.stewardshipMonthly}/mo
                  </p>
                  <ul className="space-y-1 mb-3">
                    {bundle.id === "essential-plan" && (
                      <>
                        <li className="text-[10px] font-bold text-foreground/50 flex items-center gap-1"><CheckCircle2 size={10} className="text-sage" /> Remote tech health reports</li>
                        <li className="text-[10px] font-bold text-foreground/50 flex items-center gap-1"><CheckCircle2 size={10} className="text-sage" /> 30-min local response</li>
                      </>
                    )}
                    {bundle.id === "comfort-plan" && (
                      <>
                        <li className="text-[10px] font-bold text-foreground/50 flex items-center gap-1"><CheckCircle2 size={10} className="text-sage" /> Priority response</li>
                        <li className="text-[10px] font-bold text-foreground/50 flex items-center gap-1"><CheckCircle2 size={10} className="text-sage" /> Wellness check alerts</li>
                        <li className="text-[10px] font-bold text-foreground/50 flex items-center gap-1"><CheckCircle2 size={10} className="text-sage" /> 24/7 support</li>
                      </>
                    )}
                    {bundle.id === "complete-plan" && (
                      <>
                        <li className="text-[10px] font-bold text-foreground/50 flex items-center gap-1"><CheckCircle2 size={10} className="text-sage" /> Monthly social visits</li>
                        <li className="text-[10px] font-bold text-foreground/50 flex items-center gap-1"><CheckCircle2 size={10} className="text-sage" /> VIP coordination</li>
                        <li className="text-[10px] font-bold text-foreground/50 flex items-center gap-1"><CheckCircle2 size={10} className="text-sage" /> Concierge help</li>
                      </>
                    )}
                  </ul>
                </div>

                <Link href="tel:+14077905891">
                  <button className="w-full h-14 rounded-2xl bg-sage text-obsidian font-black text-lg hover:scale-105 transition-all">
                    Get Started
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bundle Comparison */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black mb-3">Plan Comparison</h3>
            <p className="text-lg text-foreground/50 font-bold italic">Detailed look at the value we provide.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full glass-aperture rounded-[32px] border border-white/5 overflow-hidden">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-6 text-left text-lg font-black">Component</th>
                  {bundles.map((bundle, i) => (
                    <th key={bundle.id} className={cn("p-6 text-center text-lg font-black", i === 1 && "bg-sage/10")}>
                      {bundle.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-sm font-bold">Hardware Investment</td>
                  {bundles.map((bundle, i) => (
                    <td key={bundle.id} className={cn("p-6 text-center text-foreground/60 text-sm font-bold", i === 1 && "bg-sage/5")}>
                      ${bundle.pricing?.hardwareTotal.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-sm font-bold">Professional Labor</td>
                  {bundles.map((bundle, i) => (
                    <td key={bundle.id} className={cn("p-6 text-center text-foreground/60 text-sm font-bold", i === 1 && "bg-sage/5")}>
                      ${bundle.pricing?.laborTotal.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-sm font-black">Total Setup Estimate</td>
                  {bundles.map((bundle, i) => (
                    <td key={bundle.id} className={cn("p-6 text-center font-black text-sage text-xl", i === 1 && "bg-sage/5")}>
                      ${bundle.pricing?.totalSetup.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-sm font-bold">Monthly Stewardship</td>
                  {bundles.map((bundle, i) => (
                    <td key={bundle.id} className={cn("p-6 text-center text-sage font-black text-lg", i === 1 && "bg-sage/5")}>
                      ${bundle.pricing?.stewardshipMonthly}/mo
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-sm font-bold">Best For</td>
                  <td className="p-6 text-center text-foreground/60 text-xs font-bold italic">Basic Safety</td>
                  <td className="p-6 text-center text-foreground/60 text-xs font-bold italic bg-sage/5">Daily Ease</td>
                  <td className="p-6 text-center text-foreground/60 text-xs font-bold italic">Full Peace of Mind</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-bold">Est. Annual Savings vs. Assisted Living</td>
                  {bundles.map((bundle, i) => (
                    <td key={bundle.id} className={cn("p-6 text-center text-bone font-black text-lg", i === 1 && "bg-sage/5")}>
                      ~$50,000+
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Our Hardware Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black mb-6 text-bone">Why Our Hardware?</h3>
            <p className="text-lg text-foreground/50 font-bold max-w-2xl mx-auto italic">
              We select authority-grade gear so you don't have to worry about compatibility or security.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { 
                icon: <Shield className="text-sage" size={32} />, 
                title: "Privacy-First Selection", 
                desc: "We prioritize radar-only sensors like Aqara FP2—no invasive cameras.",
                img: "https://www.aqara.com/wp-content/uploads/2023/06/Presence-Sensor-FP2-built-in-light-sensor.png"
              },
              { 
                icon: <Zap className="text-sage" size={32} />, 
                title: "Local 24-Hour Warranty", 
                desc: "All components backed by our local Central Florida team.",
                img: "https://www.safewise.com/app/uploads/2021/05/woman-connecting-smart-phone-to-thermostat.jpg"
              },
              { 
                icon: <CheckCircle2 className="text-sage" size={32} />, 
                title: "Professional Integration", 
                desc: "Seamless, secure setup with Google Nest for simple use.",
                img: "https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2021/11/806/g806GA01331-o_other3-1.jpg"
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[32px] glass-aperture border-2 border-white/5 hover:border-sage/40 transition-all text-center flex flex-col items-center">
                <div className="mb-4 relative w-20 h-20">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-2xl opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-xl font-black mb-2 text-bone">{item.title}</h4>
                <p className="text-sm text-foreground/50 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto p-8 rounded-[40px] bg-sage/10 border-2 border-sage/20 text-center">
            <p className="text-lg font-black mb-3 text-bone">Transparent Procurement</p>
            <p className="text-sm text-foreground/60 font-bold leading-relaxed">
              We charge a transparent markup for authority-selected gear. This covers professional procurement, firmware hardening, local 1-year replacement warranties, and white-glove delivery.
            </p>
          </div>
        </section>

        {/* Why Our Pricing is Fair */}
        <section className="mb-24 py-16 px-8 rounded-[40px] bg-white/[0.02] border border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-black mb-12 text-bone">Fair & Transparent.</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Save Thousands", 
                  desc: "Plans cost ~$200/mo vs. $4,500+ for assisted living."
                },
                { 
                  title: "Local Response", 
                  desc: "Real neighbors in Lake Nona ready to help."
                },
                { 
                  title: "Radar Only", 
                  desc: "Privacy-focused tech without invasive video."
                }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-xl font-black text-sage">{item.title}</h4>
                  <p className="text-sm text-foreground/50 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-Ons Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-sage font-black uppercase tracking-[0.4em] text-xs mb-4">Optional Add-Ons</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-6 text-bone">Enhance Your Plan</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {
                name: "Additional Radar Sensor",
                price: "$300–$400",
                desc: "Extra Aqara FP2 for larger rooms or additional coverage areas."
              },
              {
                name: "Advanced Smart Lock",
                price: "$400–$500",
                desc: "Upgrade to premium Yale models with biometric access."
              },
              {
                name: "Annual In-Person Check-Up",
                price: "$200",
                desc: "Proactive system review and optimization visit."
              },
              {
                name: "Voice Setup Expansion",
                price: "$300",
                desc: "Additional Nest Hubs for whole-home voice control."
              }
            ].map((addon, i) => (
              <div key={i} className="p-6 rounded-[32px] glass-aperture border-2 border-white/5 hover:border-sage/40 transition-all">
                <h4 className="text-lg font-black mb-2 text-bone">{addon.name}</h4>
                <p className="text-xl font-black text-sage mb-3">{addon.price}</p>
                <p className="text-sm text-foreground/50 font-bold leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-4">
             <Link href="tel:+14077905891">
               <button className="h-14 px-10 rounded-2xl bg-sage/10 border-2 border-sage/20 text-sage font-black text-lg hover:bg-sage hover:text-obsidian transition-all">
                 Request a Custom Quote
               </button>
             </Link>
             <Link href="tel:+14077905891">
               <button className="text-sage font-black text-sm border-b border-sage pb-0.5 hover:text-white hover:border-white transition-all">
                 Need something specific? Call your local neighbor.
               </button>
             </Link>
          </div>
        </section>

        {/* Payment Incentives */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 rounded-[32px] bg-sage/5 border-2 border-sage/10 text-center">
                <h4 className="text-xl font-black mb-3 text-bone">Pay Setup in Full</h4>
                <p className="text-2xl font-black text-sage mb-1">5–10% Off</p>
                <p className="text-sm text-foreground/50 font-bold">Save on total upfront payment.</p>
              </div>
              <div className="p-8 rounded-[32px] bg-sage/5 border-2 border-sage/10 text-center">
                <h4 className="text-xl font-black mb-3 text-bone">Annual Stewardship</h4>
                <p className="text-2xl font-black text-sage mb-1">10% Off</p>
                <p className="text-sm text-foreground/50 font-bold">Prepay for the year and lock in savings.</p>
              </div>
              <div className="p-8 rounded-[32px] bg-sage/5 border-2 border-sage/10 text-center">
                <h4 className="text-xl font-black mb-3 text-bone">$99 Safety Credit</h4>
                <p className="text-2xl font-black text-sage mb-1">Automatic</p>
                <p className="text-sm text-foreground/50 font-bold">Audit fee credited back upon signup.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stewardship Value */}
        <section className="mb-24 py-16 px-8 rounded-[40px] glass-aperture border-2 border-sage/20 text-center">
          <h3 className="text-3xl font-black mb-8">The Stewardship Commitment</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { title: "24/7 Remote Monitoring", desc: "We ensure your system is always online." },
              { title: "30-Min Local Response", desc: "On-site support when you need it most." },
              { title: "Wellness Tech Reports", desc: "Monthly insights for peace of mind." }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <h4 className="text-xl font-black text-sage">{item.title}</h4>
                <p className="text-sm text-foreground/50 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-foreground/60 font-bold max-w-2xl mx-auto leading-relaxed italic">
            "When you choose IndepeNEST, you're not just buying gadgets—you're securing a long-term partnership for your family's well-being."
          </p>
        </section>

        {/* Final CTA */}
        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-black mb-6 text-bone leading-tight">Ready for <br /> Independence?</h2>
          <p className="text-lg text-foreground/50 mb-10 font-bold max-w-xl mx-auto italic">
            Schedule your $99 Harmony Check and get 10% off your setup fee today.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="tel:+14077905891">
              <button className="h-16 px-12 rounded-2xl bg-sage text-obsidian font-black text-lg hover:scale-105 transition-all uppercase tracking-tighter shadow-xl shadow-sage/40">
                Schedule $99 Audit & Get 10% Off Setup
              </button>
            </Link>
            <Link href="/inventory">
              <button className="h-16 px-12 rounded-2xl border-2 border-sage text-sage font-black text-lg hover:bg-sage hover:text-obsidian transition-all uppercase tracking-tighter">
                View Inventory
              </button>
            </Link>
          </div>
          <p className="text-xs text-foreground/40 font-bold mt-12 max-w-2xl mx-auto">
            Disclaimer: Prices are estimates; final quote after $99 Safety Audit based on home size/needs. Setup discounts applied to upfront costs.
          </p>
        </section>
      </main>
    </div>
  );
}
