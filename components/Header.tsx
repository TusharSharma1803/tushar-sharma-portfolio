'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleSmoothScroll } = useSmoothScroll();

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky-header">
      <nav className="mx-auto flex max-w-full items-center justify-between px-6 py-5 md:px-10">
        <Link href="#top" className="mono focus-ring text-sm font-medium tracking-tight text-[#64ffda]">
          TS.
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link mono focus-ring text-xs cursor-pointer"
              onClick={handleSmoothScroll}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          id="menu-button"
          className="menu-toggle focus-ring items-center justify-center text-[#64ffda]"
          type="button"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`mobile-menu flex-col gap-5 border-t border-[#253141] bg-[#101822] px-6 py-6 ${
          mobileMenuOpen ? 'is-open' : ''
        }`}
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link mono focus-ring text-sm cursor-pointer"
            onClick={(e) => {
              handleSmoothScroll(e);
              setMobileMenuOpen(false);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
