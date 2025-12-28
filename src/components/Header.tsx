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
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-0">
          <Link href="/" className="group flex flex-col shrink-0">
            <span className="text-base sm:text-lg lg:text-xl font-black tracking-tighter text-bone flex items-center leading-none">
              Indepe<span className="text-sage">NEST</span>
            </span>
            <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.2em] text-sage/60 group-hover:text-sage transition-colors leading-none mt-0.5">
              Secure Smart Homes
            </span>
          </Link>
          
          <nav className="hidden xl:flex gap-2 xl:gap-3 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-sage transition-colors font-extrabold text-bone/60 text-[9px] lg:text-[10px] whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 lg:gap-4 shrink-0">
          <Link href="tel:+14077905891" className="hidden sm:block text-bone/60 font-black text-[10px] hover:text-sage transition-colors">
            407-790-5891
          </Link>
          <Link href="tel:+14077905891">
            <button className="h-8 px-3 sm:px-4 rounded-md bg-sage text-obsidian font-black hover:scale-105 transition-all uppercase tracking-tighter text-[9px] sm:text-[10px] shrink-0">
              Secure Your Nest
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-8 h-8 flex items-center justify-center text-bone hover:text-sage transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-white/10 bg-background/95 backdrop-blur-md">
          <nav className="px-3 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-sage transition-colors font-extrabold text-bone/60 text-base"
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
