"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Areas We Serve", href: "/areas-we-serve" },
    { name: "Contact", href: "tel:+14077905891" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex justify-between items-center">
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 min-w-0">
          <Link href="/" className="group flex flex-col shrink-0">
            <span className="text-lg sm:text-xl lg:text-2xl font-black tracking-tighter text-bone flex items-center leading-none">
              Indepe<span className="text-sage">NEST</span>
            </span>
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-sage/60 group-hover:text-sage transition-colors leading-none mt-0.5">
              Secure Smart Homes
            </span>
          </Link>
          
          <nav className="hidden xl:flex gap-3 xl:gap-5 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-sage transition-colors font-extrabold text-bone/60 text-[10px] lg:text-xs whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 lg:gap-6 shrink-0">
          <Link href="tel:+14077905891" className="hidden sm:block text-bone/60 font-black text-xs hover:text-sage transition-colors">
            407-790-5891
          </Link>
          <Link href="tel:+14077905891">
            <button className="h-10 px-5 rounded-lg bg-sage text-obsidian font-black hover:scale-105 transition-all uppercase tracking-tighter text-[10px] sm:text-xs shrink-0">
              Secure Your Nest
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 flex items-center justify-center text-bone hover:text-sage transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-white/10 bg-background/95 backdrop-blur-md">
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 hover:text-sage transition-colors font-extrabold text-bone/60 text-lg"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
