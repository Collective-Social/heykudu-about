"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "EPA & WBA", href: "/features/epa-tracking" },
    { name: "Education", href: "/education" },
    { name: "Doctors", href: "/doctors" },
    { name: "Dietetics", href: "/dietetics" },
    { name: "Clinical Guide", href: "/guide" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#7D00FF] shadow-md border-b border-white/10">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-gutter py-3 gap-4">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
            <img
              src="/images/logo-white.png"
              alt="heykudu"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-extrabold text-white text-lg tracking-tight font-sans">
            heykudu
          </span>
        </Link>

        {/* Center: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4.5 mx-auto">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold text-xs tracking-tight transition-all py-1.5 whitespace-nowrap ${
                  isActive
                    ? "text-white border-b-2 border-white font-extrabold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right: Single "Go to App" Action Button */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="https://heykudu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 bg-white/10 text-white font-extrabold text-xs hover:bg-white/20 transition-all shadow-sm active:scale-95 whitespace-nowrap"
          >
            Go to App
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </a>
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="md:hidden flex items-center gap-2 shrink-0">
          <a
            href="https://heykudu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-full border border-white/40 bg-white/10 text-white font-bold text-[11px]"
          >
            Go to App
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white hover:text-white/80 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Links Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#6B00E6] border-b border-white/15 py-4 px-margin-mobile flex flex-col gap-3 animate-fade-in text-white">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-semibold py-1.5 text-sm transition-colors ${
                  isActive ? "text-white font-black underline underline-offset-4" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="h-[1px] bg-white/15 my-1"></div>
          <a
            href="https://heykudu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2.5 text-xs font-extrabold text-white border border-white/40 bg-white/10 rounded-full hover:bg-white/20 flex items-center justify-center gap-1.5"
          >
            Go to App
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </a>
        </div>
      )}
    </nav>
  );
}
