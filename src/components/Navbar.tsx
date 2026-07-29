"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "EPA & WBA Tracking", href: "/features/epa-tracking" },
    { name: "Geo-Fence Analytics", href: "/features/geo-fence" },
    { name: "NFC Attendance", href: "/features/nfc-attendance" },
    { name: "Doctor Experience", href: "/doctors" },
    { name: "Clinical Guide", href: "/guide" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#7D00FF] shadow-md border-b border-white/10">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-gutter py-3">
        
        {/* Left Side: Logo & Desktop Links Group */}
        <div className="flex items-center gap-8 lg:gap-10">
          {/* Logo matching platform heykudu.com header */}
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

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-semibold text-xs tracking-tight transition-all py-1.5 ${
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
        </div>

        {/* Right Side: Platform Actions matching screenshot */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a
            href="https://heykudu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/30 text-white font-extrabold text-xs hover:bg-white/15 transition-all shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[15px]">arrow_back</span>
            Back to App
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/30 text-white font-extrabold text-xs hover:bg-white/15 transition-all shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[15px]">person</span>
            Profile
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="xl:hidden flex items-center gap-2">
          <a
            href="https://heykudu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-white/30 text-white font-bold text-[11px]"
          >
            Back to App
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
        <div className="xl:hidden bg-[#6B00E6] border-b border-white/15 py-4 px-margin-mobile flex flex-col gap-3 animate-fade-in text-white">
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
          <div className="flex gap-2">
            <a
              href="https://heykudu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 text-xs font-bold text-white border border-white/30 rounded-xl hover:bg-white/10 flex items-center justify-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">arrow_back</span>
              Back to App
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 text-xs font-bold text-white border border-white/30 rounded-xl hover:bg-white/10 flex items-center justify-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">person</span>
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
