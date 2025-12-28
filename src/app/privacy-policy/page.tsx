"use client";

import React from "react";
import Header from "@/components/Header";
import { ShieldCheck, Lock, EyeOff, UserCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-background text-foreground min-h-screen pb-40">
      <Header />
      <main className="pt-20 sm:pt-28 lg:pt-36 px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="mb-32">
          <h2 className="text-sage font-black uppercase tracking-[0.4em] text-sm mb-6">Privacy Policy</h2>
          <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight">
            Your Privacy, Our Priority
          </h1>
          <p className="text-xl text-foreground/60 font-bold leading-relaxed">
            We prioritize elderly home automation privacy in all radar-based systems. No data shared without consent.
          </p>
          <p className="text-lg text-foreground/50 font-bold mt-6">
            Last Updated: January 2025
          </p>
        </section>

        {/* Privacy Principles */}
        <section className="mb-40">
          <div className="space-y-16">
            {[
              {
                title: "No Invasive Cameras",
                desc: "We prioritize privacy-first sensing technology, such as radar-based movement detection, over invasive video cameras in living areas. Your home remains a sanctuary. Our fall detection without cameras Florida approach ensures complete privacy while maintaining safety.",
                icon: <EyeOff size={40} className="text-sage" />
              },
              {
                title: "Bank-Level Encryption",
                desc: "All communication between your devices and our stewardship team is protected by the same level of encryption used by financial institutions. Your data is secure and private.",
                icon: <Lock size={40} className="text-sage" />
              },
              {
                title: "Strict Data Ownership",
                desc: "You own your data. We never sell, share, or misuse your personal information. Our only goal is to provide assurance and support. We prioritize elderly home automation privacy in every interaction.",
                icon: <ShieldCheck size={40} className="text-sage" />
              },
              {
                title: "Trusted Professionals",
                desc: "Every IndepeNEST team member undergoes rigorous vetting before ever entering a neighbor's home. Your privacy and security are our top concerns.",
                icon: <UserCheck size={40} className="text-sage" />
              }
            ].map((item, i) => (
              <div key={i} className="p-12 rounded-[60px] glass-aperture border-2 border-white/5 flex flex-col md:flex-row gap-10">
                <div className="w-20 h-20 rounded-3xl bg-sage/10 flex items-center justify-center border-2 border-sage/20 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-6">{item.title}</h3>
                  <p className="text-xl text-foreground/60 font-bold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Collection */}
        <section className="mb-40">
          <h2 className="text-4xl font-black mb-8">Data Collection and Use</h2>
          <div className="space-y-6 text-lg text-foreground/60 font-bold leading-relaxed">
            <p>
              We collect only the minimum data necessary to provide our radar-based home monitoring services. This includes:
            </p>
            <ul className="space-y-4 ml-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>Movement patterns detected by radar sensors (anonymized)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>Device status and connectivity information</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>Contact information you provide for service coordination</span>
              </li>
            </ul>
            <p>
              We do not collect video footage, audio recordings, or any personally identifiable information beyond what is necessary for service delivery. Our privacy smart home for elderly Orlando solutions are designed with dignity and privacy in mind.
            </p>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="mb-40">
          <h2 className="text-4xl font-black mb-8">Data Sharing and Disclosure</h2>
          <div className="space-y-6 text-lg text-foreground/60 font-bold leading-relaxed">
            <p>
              We do not sell, rent, or share your personal information with third parties except in the following circumstances:
            </p>
            <ul className="space-y-4 ml-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>With your explicit consent for family member access to wellness alerts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>As required by law or legal process</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>In emergency situations where immediate assistance is needed</span>
              </li>
            </ul>
            <p>
              Our non-invasive senior care tech ensures that all data sharing is transparent and consensual. You maintain control over who has access to your information.
            </p>
          </div>
        </section>

        {/* Security */}
        <section className="mb-40">
          <h2 className="text-4xl font-black mb-8">Security Measures</h2>
          <div className="space-y-6 text-lg text-foreground/60 font-bold leading-relaxed">
            <p>
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="space-y-4 ml-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>End-to-end encryption for all data transmissions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>Secure servers with regular security audits</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>Regular software updates and security patches</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>Access controls limiting data access to authorized personnel only</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-40">
          <h2 className="text-4xl font-black mb-8">Your Privacy Rights</h2>
          <div className="space-y-6 text-lg text-foreground/60 font-bold leading-relaxed">
            <p>
              You have the right to:
            </p>
            <ul className="space-y-4 ml-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>Access your personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>Request correction of inaccurate information</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>Request deletion of your data</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>Opt-out of data sharing with family members</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                <span>Discontinue service and data collection at any time</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-40">
          <h2 className="text-4xl font-black mb-8">Learn More About Radar Technology & Privacy</h2>
          <p className="text-xl text-foreground/60 font-bold mb-8 leading-relaxed">
            We use industry-leading radar technology that prioritizes privacy. Here are trusted resources that explain how radar sensors work and why they're superior to cameras for senior care:
          </p>
          <div className="space-y-4">
            {[
              {
                title: "NY Times Wirecutter: Smart Technology for Seniors",
                description: "Comprehensive review of privacy-focused smart home technology options for seniors.",
                url: "https://www.nytimes.com/wirecutter/reviews/smart-technology-for-seniors/"
              },
              {
                title: "NextPit: Radar Sensors & Privacy in Smart Homes",
                description: "Technical breakdown of how radar sensors protect privacy while ensuring safety.",
                url: "https://www.nextpit.com/radar-sensors-smart-home-privacy-seniors"
              },
              {
                title: "The Verge: Radar Technology Launch News",
                description: "Industry news about medical-grade radar devices for fall detection and privacy.",
                url: "https://www.theverge.com/2023/4/17/23686246/att-cherish-serenity-medical-radar-device-monitor-falls-privacy"
              }
            ].map((resource, i) => (
              <div key={i} className="p-8 rounded-[40px] glass-aperture border border-white/5 hover:border-sage/20 transition-all">
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-black mb-2 group-hover:text-sage transition-colors flex items-center gap-2">
                        {resource.title}
                        <ExternalLink size={18} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-lg text-foreground/50 font-bold">{resource.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-40">
          <h2 className="text-4xl font-black mb-8">Learn More About Radar Technology & Privacy</h2>
          <p className="text-xl text-foreground/60 font-bold mb-8 leading-relaxed">
            We use industry-leading radar technology that prioritizes privacy. Here are trusted resources that explain how radar sensors work and why they're superior to cameras for senior care:
          </p>
          <div className="space-y-4">
            {[
              {
                title: "NY Times Wirecutter: Smart Technology for Seniors",
                description: "Comprehensive review of privacy-focused smart home technology options for seniors.",
                url: "https://www.nytimes.com/wirecutter/reviews/smart-technology-for-seniors/"
              },
              {
                title: "NextPit: Radar Sensors & Privacy in Smart Homes",
                description: "Technical breakdown of how radar sensors protect privacy while ensuring safety.",
                url: "https://www.nextpit.com/radar-sensors-smart-home-privacy-seniors"
              },
              {
                title: "The Verge: Radar Technology Launch News",
                description: "Industry news about medical-grade radar devices for fall detection and privacy.",
                url: "https://www.theverge.com/2023/4/17/23686246/att-cherish-serenity-medical-radar-device-monitor-falls-privacy"
              }
            ].map((resource, i) => (
              <div key={i} className="p-8 rounded-[40px] glass-aperture border border-white/5 hover:border-sage/20 transition-all">
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-black mb-2 group-hover:text-sage transition-colors flex items-center gap-2">
                        {resource.title}
                        <ExternalLink size={18} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-lg text-foreground/50 font-bold">{resource.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-40">
          <div className="p-16 rounded-[60px] glass-aperture border-2 border-sage/20 text-center">
            <h3 className="text-4xl font-black mb-8">Questions About Privacy?</h3>
            <p className="text-xl text-foreground/60 font-bold mb-10 max-w-2xl mx-auto">
              We are happy to explain our privacy protocols and data handling practices in plain English. Your privacy is our commitment.
            </p>
            <Link href="tel:+14077905891">
              <button className="h-20 px-12 rounded-3xl bg-sage text-obsidian font-black text-xl hover:scale-105 transition-all">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
