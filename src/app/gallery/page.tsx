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
  { id: 1, src: '/gallery_img/gallery_1.jpg', alt: 'Gallery Image 1', category: 'dishes', span: 'both' },
  { id: 2, src: '/gallery_img/gallery_2.jpg', alt: 'Gallery Image 2', category: 'interior' },
  { id: 3, src: '/gallery_img/gallery_3.jpg', alt: 'Gallery Image 3', category: 'customers' },
  { id: 4, src: '/gallery_img/gallery_4.jpg', alt: 'Gallery Image 4', category: 'dishes', span: 'col' },
  { id: 5, src: '/gallery_img/gallery_5.jpg', alt: 'Gallery Image 5', category: 'events' },
  { id: 6, src: '/gallery_img/gallery_6.jpg', alt: 'Gallery Image 6', category: 'dishes' },
  { id: 7, src: '/gallery_img/gallery_7.jpg', alt: 'Gallery Image 7', category: 'interior' },
  { id: 8, src: '/gallery_img/gallery_8.jpg', alt: 'Gallery Image 8', category: 'customers', span: 'col' },
  { id: 9, src: '/gallery_img/gallery_9.jpg', alt: 'Gallery Image 9', category: 'dishes' },
  { id: 10, src: '/gallery_img/gallery_10.jpg', alt: 'Gallery Image 10', category: 'events' },
  { id: 11, src: '/gallery_img/gallery_11.jpg', alt: 'Gallery Image 11', category: 'dishes' },
  { id: 12, src: '/gallery_img/gallery_12.jpg', alt: 'Gallery Image 12', category: 'interior' },
  { id: 13, src: '/gallery_img/gallery_13.jpg', alt: 'Gallery Image 13', category: 'customers' },
  { id: 14, src: '/gallery_img/gallery_14.jpg', alt: 'Gallery Image 14', category: 'dishes' },
  { id: 15, src: '/gallery_img/gallery_15.jpg', alt: 'Gallery Image 15', category: 'events' },
  { id: 16, src: '/gallery_img/gallery_16.jpg', alt: 'Gallery Image 16', category: 'dishes', span: 'col' },
  { id: 17, src: '/gallery_img/gallery_17.webp', alt: 'Gallery Image 17', category: 'interior' },
  { id: 18, src: '/gallery_img/gallery_18.jpg', alt: 'Gallery Image 18', category: 'customers' },
  { id: 19, src: '/gallery_img/gallery_19.jpg', alt: 'Gallery Image 19', category: 'dishes' },
  { id: 20, src: '/gallery_img/gallery_20.jpg', alt: 'Gallery Image 20', category: 'events' },
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
