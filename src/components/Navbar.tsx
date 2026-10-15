import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Shop', href: '#/shop', activeKey: '/shop' },
    { label: 'Scent Quiz', href: '#/quiz', activeKey: '/quiz' },
    { label: 'Our Story', href: '#/about', activeKey: '/about' },
    { label: 'Saptanga', href: '#/saptanga', activeKey: '/saptanga' },
    { label: 'Business Model', href: '#/business-model', activeKey: '/business-model' },
    { label: 'Gifting', href: '#/gifting', activeKey: '/gifting' }
  ];

  const isActive = (path: string) => {
    if (path === '/shop' && currentPath.startsWith('/product/')) return true;
    return currentPath === path || (path === '/' && (currentPath === '' || currentPath === '/'));
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F1E6CC] border-b border-[#B8902B]/40 shadow-xs backdrop-blur-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
          {/* Left: Brand Logo */}
          <a
            href="#/"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8902B] rounded-[2px]"
            aria-label="GandhaNiti Home"
          >
            <Logo variant="horizontal" size="md" />
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.activeKey);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap ${
                    active
                      ? 'text-[#2E1B0F] font-semibold'
                      : 'text-[#5A3A22] hover:text-[#2E1B0F]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8902B]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Contact & Live Cart Button */}
          <div className="flex items-center gap-4">
            <a
              href="#/contact"
              className={`hidden md:inline-block text-xs font-semibold uppercase tracking-wider py-1.5 px-3 border border-[#5A3A22]/40 hover:border-[#B8902B] rounded-[2px] transition-colors whitespace-nowrap ${
                currentPath === '/contact' ? 'bg-[#E4D2A8] text-[#2E1B0F]' : 'text-[#5A3A22]'
              }`}
            >
              Contact
            </a>

            {/* Cart Button with Live Maroon Count Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#2E1B0F] hover:text-[#B8902B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8902B] rounded-[2px] flex items-center gap-1.5"
              aria-label={`View Cart with ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-semibold">Flacons</span>
              {itemCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#6B1E1E] text-[#F1E6CC] text-[11px] font-bold flex items-center justify-center font-mono tabular-nums leading-none">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#2E1B0F] hover:text-[#B8902B] transition-colors"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer: Full-screen ink-brown with parchment text */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#2E1B0F] text-[#F1E6CC] flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-[#B8902B]/30 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-[#F1E6CC]">GandhaNiti</span>
              <span className="font-devanagari text-xs text-[#D9B44A]">गन्धनीति</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#E4D2A8] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8902B]"
              aria-label="Close navigation menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Nav Items: Large tap targets */}
          <nav className="flex flex-col gap-2 my-auto py-6">
            <a
              href="#/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 text-xl font-serif text-[#F1E6CC] hover:text-[#D9B44A] border-b border-[#5A3A22]/30 flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-[#B8902B]" />
            </a>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-2 text-xl font-serif text-[#F1E6CC] hover:text-[#D9B44A] border-b border-[#5A3A22]/30 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#B8902B]" />
              </a>
            ))}
            <a
              href="#/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 text-xl font-serif text-[#F1E6CC] hover:text-[#D9B44A] border-b border-[#5A3A22]/30 flex items-center justify-between"
            >
              <span>Contact Guild</span>
              <ArrowRight className="w-4 h-4 text-[#B8902B]" />
            </a>
            <a
              href="#/batch-passport"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 text-base font-serif text-[#D9B44A] hover:text-white flex items-center justify-between"
            >
              <span>Verify Batch Passport (Sample)</span>
              <span className="text-xs font-mono text-[#E4D2A8]">QR Code</span>
            </a>
          </nav>

          {/* Drawer Footer */}
          <div className="pt-4 border-t border-[#B8902B]/30 text-xs text-[#E4D2A8]/80 flex flex-col gap-1">
            <p className="font-serif italic text-sm text-[#D9B44A]">
              Where the empire's fragrance finds its trust.
            </p>
            <p className="font-mono text-[11px] mt-1">Tel: +91 92667 46123</p>
            <p className="font-mono text-[11px]">customersupport.gandhiniti@gmail.com</p>
          </div>
        </div>
      )}
    </>
  );
};
