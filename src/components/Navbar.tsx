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
    { name: "Clinical Guide", href: "/guide" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm border-b border-outline-variant/10">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-gutter py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/images/logo.png"
            alt="heykudu"
            className="h-10 w-auto object-contain group-hover:scale-[1.01] transition-transform"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors font-label-md text-label-md py-1 ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://heykudu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold font-label-md text-label-md hover:bg-surface-container-low px-4 py-2 rounded-full transition-all"
          >
            Start
          </a>
          <Link
            href="/contact"
            className="bg-primary text-on-primary font-bold font-label-md text-label-md px-6 py-3 rounded-full hover:shadow-lg transition-transform scale-95 active:scale-90"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/contact"
            className="bg-primary-container/10 text-primary font-bold font-label-md text-[13px] px-4 py-2 rounded-full hover:shadow-sm"
          >
            Contact
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-on-surface hover:text-primary transition-colors focus:outline-none"
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
        <div className="md:hidden bg-surface border-b border-outline-variant/20 py-4 px-margin-mobile flex flex-col gap-4 animate-fade-in">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-semibold py-2 transition-colors ${
                  isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="h-[1px] bg-outline-variant/20 my-2"></div>
          <a
            href="https://heykudu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-3 font-bold text-primary border border-primary/25 rounded-full hover:bg-primary/5 transition-all"
          >
            Start
          </a>
        </div>
      )}
    </nav>
  );
}
