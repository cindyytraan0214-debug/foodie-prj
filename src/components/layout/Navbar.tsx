'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { count } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/menu', label: t.nav.menu },
    { href: '/order', label: t.nav.order },
    { href: '/reserve', label: t.nav.reserve },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/contact', label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-md group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
                <Image
                  src="/foodie_logo.jpg"
                  alt="The Foodies 10 Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className={`hidden sm:block transition-colors duration-300 ${scrolled ? 'text-[#7A0F16]' : 'text-white'}`}>
                <div className="font-serif font-bold text-lg leading-tight">The Foodies 10</div>
                <div className="text-xs text-[#D4AF37] font-medium tracking-wide">Feeding You Like Family</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md group ${
                    isActive(link.href)
                      ? scrolled ? 'text-[#7A0F16]' : 'text-[#D4AF37]'
                      : scrolled ? 'text-gray-700 hover:text-[#7A0F16]' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D4AF37] rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 py-1">
                <Globe size={14} className={scrolled ? 'text-[#7A0F16]' : 'text-white'} />
                <button
                  onClick={() => setLang('en')}
                  className={`text-xs font-bold px-1.5 py-0.5 rounded-full transition-all duration-200 ${
                    lang === 'en'
                      ? 'bg-[#D4AF37] text-white'
                      : scrolled ? 'text-gray-600 hover:text-[#7A0F16]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <span className={`text-xs ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>|</span>
                <button
                  onClick={() => setLang('vi')}
                  className={`text-xs font-bold px-1.5 py-0.5 rounded-full transition-all duration-200 ${
                    lang === 'vi'
                      ? 'bg-[#D4AF37] text-white'
                      : scrolled ? 'text-gray-600 hover:text-[#7A0F16]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  VI
                </button>
              </div>

              {/* Cart */}
              <Link
                href="/order"
                className={`relative p-2 rounded-full transition-all duration-200 ${
                  scrolled ? 'text-[#7A0F16] hover:bg-[#7A0F16]/10' : 'text-white hover:bg-white/10'
                }`}
              >
                <ShoppingCart size={20} />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4AF37] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Link>

              {/* Order Now CTA */}
              <Link
                href="/order"
                className="hidden md:inline-flex items-center gap-2 btn-primary text-sm py-2 px-4"
              >
                {t.nav.orderNow}
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-md transition-colors ${
                  scrolled ? 'text-[#7A0F16]' : 'text-white'
                }`}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/97 backdrop-blur-lg shadow-xl border-b border-[#D4AF37]/20 lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-[#7A0F16]/10 text-[#7A0F16] font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#7A0F16]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/order"
                onClick={() => setMobileOpen(false)}
                className="mt-2 btn-primary text-sm text-center"
              >
                {t.nav.orderNow}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
