'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag, Calendar, Star, Truck, ChefHat, Leaf, DollarSign, Zap, Heart, Package } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { featuredDishes, formatPrice } from '@/lib/menuData';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function HomePage() {
  const { t, lang } = useLanguage();
  const { addItem } = useCart();

  const whyIcons = [Leaf, ChefHat, DollarSign, Zap, Heart, Truck];

  const deliveryPlatforms = [
    { name: 'GrabFood', color: '#00B14F', logo: '🟢', url: '#' },
    { name: 'ShopeeFood', color: '#EE4D2D', logo: '🟠', url: '#' },
    { name: 'BeFood', color: '#FFCC00', logo: '🟡', url: '#' },
    { name: 'Gojek', color: '#00AA5A', logo: '🟢', url: '#' },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/menu_img/bkgrd_v2.jpg"
            alt="Vietnamese food background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#7A0F16]/90 via-[#7A0F16]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/40 text-[#D4AF37] text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <Star size={14} fill="currentColor" />
              Authentic Vietnamese Restaurant – Hóc Môn, HCMC
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {t.hero.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/order" className="btn-gold text-base px-7 py-3.5 shadow-xl">
                <ShoppingBag size={18} />
                {t.hero.orderOnline}
              </Link>
              <Link href="/reserve" className="btn-outline text-base px-7 py-3.5">
                <Calendar size={18} />
                {t.hero.reserveTable}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/20"
            >
              {[
                { num: '500+', label: lang === 'vi' ? 'Khách hài lòng' : 'Happy Customers' },
                { num: '06:00', label: lang === 'vi' ? 'Mở cửa từ sáng sớm' : 'Open from 6AM' },
                { num: '4', label: lang === 'vi' ? 'Nền tảng giao hàng' : 'Delivery Platforms' },
              ].map((stat) => (
                <div key={stat.label} className="text-white">
                  <div className="font-serif text-2xl font-bold text-[#D4AF37]">{stat.num}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
        >
          <div className="w-px h-8 bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </section>

      {/* ─── FEATURED DISHES ─── */}
      <section className="section-padding bg-[#F7F1E5]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-2">⭐ {lang === 'vi' ? 'Đặc sản' : 'Specialties'}</p>
            <h2 className="section-title">{t.featured.title}</h2>
            <div className="divider-gold" />
            <p className="section-subtitle mt-4">{t.featured.subtitle}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, i) => (
              <AnimatedSection key={dish.id} delay={i * 0.1}>
                <div className="card group cursor-pointer h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={lang === 'vi' ? dish.nameVi : dish.nameEn}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="badge-popular">
                        <Star size={10} fill="white" />
                        {lang === 'vi' ? 'Nổi Bật' : 'Popular'}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 text-[#7A0F16] font-bold text-sm px-3 py-1.5 rounded-full shadow">
                      {formatPrice(dish.price)}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-serif font-bold text-xl text-gray-900 mb-1">
                      {lang === 'vi' ? dish.nameVi : dish.nameEn}
                    </h3>
                    {lang === 'en' && <p className="text-[#7A0F16]/70 text-xs mb-2 font-medium">{dish.nameVi}</p>}
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {lang === 'vi' ? dish.descVi : dish.descEn}
                    </p>
                    <button
                      onClick={() => addItem(dish)}
                      className="mt-4 btn-primary text-sm py-2.5"
                    >
                      <ShoppingBag size={15} />
                      {t.featured.orderNow}
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <Link href="/menu" className="btn-primary text-base px-8 py-3.5">
              {t.featured.viewMenu}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="section-padding bg-gradient-to-br from-[#7A0F16] to-[#5a0a10] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-14">
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-2">✨ {lang === 'vi' ? 'Cam kết' : 'Our Promise'}</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{t.why.title}</h2>
            <div className="divider-gold" />
            <p className="text-white/70 text-lg max-w-xl mx-auto mt-4">{t.why.subtitle}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.why.items.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all duration-300 group hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/30 transition-colors">
                      <Icon size={26} className="text-[#D4AF37]" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#7A0F16] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── DELIVERY PLATFORMS ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-2">🛵 {lang === 'vi' ? 'Giao hàng' : 'Delivery'}</p>
            <h2 className="section-title">{t.delivery.title}</h2>
            <div className="divider-gold" />
            <p className="section-subtitle mt-4">{t.delivery.subtitle}</p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-6">
            {deliveryPlatforms.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.1} direction="up">
                <a
                  href={p.url}
                  className="flex items-center gap-4 px-8 py-5 bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 group min-w-[200px]"
                >
                  <span className="text-3xl">{p.logo}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-base group-hover:text-[#7A0F16] transition-colors">{p.name}</p>
                    <p className="text-gray-400 text-xs">{lang === 'vi' ? 'Đặt ngay' : 'Order now'}</p>
                  </div>
                  <Package size={18} className="text-gray-300 group-hover:text-[#D4AF37] transition-colors ml-auto" />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-20 px-4 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555126634-323283e090fa?w=1800&q=80"
          alt="Vietnamese food"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#7A0F16]/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {lang === 'vi' ? 'Đặt bàn ngay hôm nay!' : 'Reserve Your Table Today!'}
            </h2>
            <p className="text-white/80 text-lg mb-8">
              {lang === 'vi'
                ? 'Trải nghiệm bữa ăn gia đình ấm cúng tại The Foodies 10'
                : 'Experience a warm family dining experience at The Foodies 10'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/reserve" className="btn-gold px-8 py-3.5 text-base">
                <Calendar size={18} />
                {t.hero.reserveTable}
              </Link>
              <Link href="/contact" className="btn-outline px-8 py-3.5 text-base">
                {lang === 'vi' ? 'Liên hệ chúng tôi' : 'Contact Us'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
