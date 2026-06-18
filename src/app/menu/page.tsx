'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { menuItems, formatPrice } from '@/lib/menuData';
import AnimatedSection from '@/components/ui/AnimatedSection';

type Category = 'all' | 'main' | 'drinks' | 'combo' | 'toppings';

export default function MenuPage() {
  const { t, lang } = useLanguage();
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories: { key: Category; label: string; emoji: string }[] = [
    { key: 'all', label: t.menu.categories.all, emoji: '🍽️' },
    { key: 'main', label: t.menu.categories.main, emoji: '🍚' },
    { key: 'drinks', label: t.menu.categories.drinks, emoji: '🧋' },
    { key: 'combo', label: t.menu.categories.combo, emoji: '🎁' },
    { key: 'toppings', label: t.menu.categories.toppings, emoji: '➕' },
  ];

  const filtered = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const handleAdd = (item: typeof menuItems[0]) => {
    addItem(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#7A0F16] to-[#5a0a10] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">🍜 {lang === 'vi' ? 'Thực Đơn' : 'Menu'}</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{t.menu.title}</h1>
            <div className="divider-gold" />
            <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto">{t.menu.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding bg-[#F7F1E5]">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-gray-500 mr-2">
              <Filter size={16} />
              <span className="text-sm font-medium">{lang === 'vi' ? 'Lọc:' : 'Filter:'}</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-[#7A0F16] text-white shadow-lg shadow-[#7A0F16]/30'
                    : 'bg-white text-gray-600 hover:bg-[#7A0F16]/10 hover:text-[#7A0F16] border border-gray-200'
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="card flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={lang === 'vi' ? item.nameVi : item.nameEn}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {item.popular && (
                      <div className="absolute top-3 left-3">
                        <span className="badge-popular"><Star size={9} fill="white" /> {lang === 'vi' ? 'Nổi bật' : 'Popular'}</span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-white/95 text-[#7A0F16] font-bold text-xs px-2.5 py-1 rounded-full shadow">
                      {formatPrice(item.price)}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-serif font-bold text-base text-gray-900 leading-tight">
                      {lang === 'vi' ? item.nameVi : item.nameEn}
                    </h3>
                    {lang === 'en' && (
                      <p className="text-[#7A0F16]/60 text-xs mt-0.5 mb-2">{item.nameVi}</p>
                    )}
                    <p className="text-gray-500 text-xs leading-relaxed flex-1 mt-1">
                      {lang === 'vi' ? item.descVi : item.descEn}
                    </p>
                    <button
                      onClick={() => handleAdd(item)}
                      className={`mt-3 w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                        addedId === item.id
                          ? 'bg-green-500 text-white'
                          : 'btn-primary'
                      }`}
                    >
                      <ShoppingBag size={14} />
                      {addedId === item.id ? t.menu.added : t.menu.addToCart}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-3">🍽️</p>
              <p className="text-lg">{lang === 'vi' ? 'Không có món nào trong danh mục này.' : 'No items in this category.'}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
