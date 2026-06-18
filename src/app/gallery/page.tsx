'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';

type GalleryCategory = 'all' | 'dishes' | 'interior' | 'customers' | 'events';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'all'>;
  span?: 'col' | 'row' | 'both';
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', alt: 'Broken Rice', category: 'dishes', span: 'both' },
  { id: 2, src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', alt: 'Combo Plate', category: 'dishes' },
  { id: 3, src: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80', alt: 'Vermicelli', category: 'dishes' },
  { id: 4, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Restaurant', category: 'interior', span: 'col' },
  { id: 5, src: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80', alt: 'Banh Mi', category: 'dishes' },
  { id: 6, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Food spread', category: 'dishes' },
  { id: 7, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', alt: 'Interior dining', category: 'interior' },
  { id: 8, src: 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?w=600&q=80', alt: 'Happy customers', category: 'customers', span: 'col' },
  { id: 9, src: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80', alt: 'Spring rolls', category: 'dishes' },
  { id: 10, src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', alt: 'Grilled pork', category: 'dishes' },
  { id: 11, src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80', alt: 'Meatloaf', category: 'dishes' },
  { id: 12, src: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&q=80', alt: 'Eggs', category: 'dishes' },
  { id: 13, src: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80', alt: 'Soup', category: 'dishes' },
  { id: 14, src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80', alt: 'Drinks', category: 'drinks' as unknown as Exclude<GalleryCategory, 'all'> },
  { id: 15, src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80', alt: 'Pork dish', category: 'dishes' },
  { id: 16, src: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80', alt: 'Event', category: 'events', span: 'col' },
];

export default function GalleryPage() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const categories: { key: GalleryCategory; label: string; emoji: string }[] = [
    { key: 'all', label: t.gallery.categories.all, emoji: '🖼️' },
    { key: 'dishes', label: t.gallery.categories.dishes, emoji: '🍽️' },
    { key: 'interior', label: t.gallery.categories.interior, emoji: '🏠' },
    { key: 'customers', label: t.gallery.categories.customers, emoji: '😊' },
    { key: 'events', label: t.gallery.categories.events, emoji: '🎉' },
  ];

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#7A0F16] to-[#5a0a10] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">📸 {lang === 'vi' ? 'Thư Viện' : 'Gallery'}</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">{t.gallery.title}</h1>
            <div className="divider-gold" />
            <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto">{t.gallery.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F1E5]">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-[#7A0F16] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-[#7A0F16]/10 hover:text-[#7A0F16] border border-gray-200'
                }`}
              >
                <span>{cat.emoji}</span> {cat.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="break-inside-avoid mb-4 group relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => setLightbox(item)}
                >
                  <div className={`relative w-full ${item.span === 'both' ? 'aspect-square' : item.span === 'col' ? 'aspect-[3/4]' : 'aspect-video'}`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#7A0F16]/0 group-hover:bg-[#7A0F16]/40 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[75vh]">
                <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" />
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
