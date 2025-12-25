"use client";

import React from "react";
import { useUI } from "@/context/UIContext";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Sun, Moon, Type } from "lucide-react";

const Header = () => {
  const { 
    isSimpleMode, 
    setIsSimpleMode, 
    isLightMode, 
    setIsLightMode,
    fontSize,
    setFontSize 
  } = useUI();

  const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center pointer-events-none">
      <div className="flex items-center gap-12 pointer-events-auto">
        <Link href="/" className="text-3xl font-black tracking-tighter text-bone flex items-center">
          LOPERENA<span className="text-sage">.</span>
        </Link>
        
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-sage transition-colors font-extrabold text-bone/60"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4 pointer-events-auto">
        {/* Font Size Adjuster */}
        <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-1">
          <button 
            onClick={() => setFontSize(Math.max(18, fontSize - 2))}
            className="w-10 h-10 flex items-center justify-center text-bone/60 hover:text-bone"
            aria-label="Decrease font size"
          >
            <Type size={16} />
          </button>
          <span className="text-xs font-black text-bone/40 w-8 text-center">{fontSize}</span>
          <button 
            onClick={() => setFontSize(Math.min(32, fontSize + 2))}
            className="w-10 h-10 flex items-center justify-center text-bone/60 hover:text-bone"
            aria-label="Increase font size"
          >
            <Type size={24} />
          </button>
        </div>

        {/* Light/Dark Toggle - More Prominent */}
        <button 
          onClick={() => setIsLightMode(!isLightMode)}
          className="w-16 h-16 rounded-2xl bg-white/10 border-2 border-sage/30 flex items-center justify-center text-bone hover:border-sage hover:bg-white/15 transition-all shadow-lg shadow-sage/20"
          aria-label={isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
          title={isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
        >
          {isLightMode ? <Moon size={28} /> : <Sun size={28} />}
        </button>

        {/* Focus Mode Toggle */}
        <button 
          onClick={() => setIsSimpleMode(!isSimpleMode)}
          className={cn(
            "hidden md:flex items-center gap-3 px-6 h-14 rounded-2xl border transition-all font-black text-sm uppercase tracking-widest",
            isSimpleMode 
              ? "bg-yellow-400 border-yellow-400 text-black" 
              : "bg-white/5 border-white/10 text-bone/50 hover:border-white/30"
          )}
        >
          {isSimpleMode ? "Standard" : "Focus Mode"}
        </button>
        
        <Link href="tel:+14070000000">
          <button className="h-14 px-8 rounded-2xl bg-sage text-obsidian font-black hover:scale-105 transition-all uppercase tracking-tighter text-sm">
            Call a Neighbor
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
