'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Inline SVG social icons (lucide-react doesn't ship Facebook/Instagram/TikTok)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.27 8.27 0 004.84 1.55V6.77a4.85 4.85 0 01-1.07-.08z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/menu', label: t.nav.menu },
    { href: '/order', label: t.nav.order },
    { href: '/reserve', label: t.nav.reserve },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/contact', label: t.nav.contact },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: <FacebookIcon />, label: 'Facebook' },
    { href: 'https://instagram.com', icon: <InstagramIcon />, label: 'Instagram' },
    { href: 'https://tiktok.com', icon: <TikTokIcon />, label: 'TikTok' },
  ];

  return (
    <footer className="bg-[#1a0508] text-white">
      {/* Top CTA Bar */}
      <div className="bg-gradient-to-r from-[#7A0F16] to-[#8B1E23] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-serif text-xl font-semibold text-white text-center sm:text-left">
            🍽️ Ready to taste Vietnam? Order now!
          </p>
          <div className="flex gap-3">
            <Link href="/order" className="btn-gold text-sm py-2 px-5">
              {t.nav.orderNow}
            </Link>
            <Link href="/reserve" className="btn-outline text-sm py-2 px-5">
              {t.reserve.form.submit}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]">
                <Image src="/foodie_logo.jpg" alt="The Foodies 10" fill className="object-cover" />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white">The Foodies 10</div>
                <div className="text-[#D4AF37] text-xs font-medium">{t.footer.tagline}</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Serving authentic Vietnamese cuisine crafted with love, fresh ingredients, and traditional recipes that bring families together.
            </p>
            {/* Social */}
            <div>
              <p className="text-gray-300 text-sm font-semibold mb-3">{t.footer.followUs}</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-[#D4AF37] font-semibold text-lg mb-5">{t.footer.quickLinks}</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-[#D4AF37] font-semibold text-lg mb-5">{t.footer.hours}</h3>
            <div className="flex items-start gap-3 mb-4">
              <Clock size={18} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold">{t.footer.hoursVal}</p>
                <p className="text-gray-400 text-sm">{t.footer.hoursDay}</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-[#D4AF37]/20">
              <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-1">Delivery</p>
              <p className="text-gray-300 text-sm">GrabFood · ShopeeFood</p>
              <p className="text-gray-300 text-sm">BeFood · Gojek</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-[#D4AF37] font-semibold text-lg mb-5">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <a href="tel:0792229040" className="text-gray-300 hover:text-white text-sm transition-colors">
                  0792 229 040
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <a href="mailto:huflit.thefoodies10@gmail.com" className="text-gray-300 hover:text-white text-sm transition-colors break-all">
                  huflit.thefoodies10@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  806 Lê Quang Đão, QL22,<br />
                  Tân Xuân, Hóc Môn,<br />
                  TP. Hồ Chí Minh
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>{t.footer.copyright}</p>
          <p>Made with ❤️ for Vietnamese food lovers</p>
        </div>
      </div>
    </footer>
  );
}
