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
  aspect?: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: '/menu_img/Brown_Rice_V2.jpg', alt: 'Cơm Tấm Gạo Lứt', category: 'dishes', aspect: 'aspect-[4/3]' },
  { id: 2, src: '/gallery_img/gallery_new_12.png', alt: 'Fresh Ingredients Flatlay', category: 'dishes', aspect: 'aspect-[16/9]' },
  { id: 3, src: '/menu_img/Whole_Wheat_Pork_Baguette.jpg', alt: 'Bánh Mì Nguyên Cám Thịt Nướng', category: 'dishes', aspect: 'aspect-[3/4]' },
  { id: 4, src: '/gallery_img/gallery_new_13.png', alt: 'Nutritious Table Spread', category: 'dishes', aspect: 'aspect-square' },
  { id: 5, src: '/menu_img/Whole_Wheat_Banh_Mi_Egg.jpg', alt: 'Bánh Mì Trứng', category: 'dishes', aspect: 'aspect-[4/5]' },
  { id: 6, src: '/gallery_img/gallery_new_14.png', alt: 'Meal Prep Plates', category: 'dishes', aspect: 'aspect-[16/10]' },
  { id: 7, src: '/menu_img/Grilled_Pork_Vermicelli.jpg', alt: 'Bún Nưa Thịt Nướng', category: 'dishes', aspect: 'aspect-[4/3]' },
  { id: 8, src: '/gallery_img/gallery_new_15.png', alt: 'Bento Meal Boxes', category: 'dishes', aspect: 'aspect-[3/4]' },
  { id: 9, src: '/gallery_img/gallery_new_16.png', alt: 'Healthy Ingredients Grid', category: 'dishes', aspect: 'aspect-square' },
  { id: 10, src: '/gallery_img/gallery_new_1.png', alt: 'Healthy Meal Prep Plate', category: 'dishes', aspect: 'aspect-[3/4]' },
  { id: 11, src: '/gallery_img/gallery_new_2.png', alt: 'Nutritious Salad Bowls', category: 'dishes', aspect: 'aspect-[16/9]' },
  { id: 12, src: '/gallery_img/gallery_new_3.png', alt: 'Clean Eating Combo Plates', category: 'dishes', aspect: 'aspect-square' },
  { id: 13, src: '/gallery_img/gallery_new_4.png', alt: 'Pan-seared Salmon & Avocado Plate', category: 'dishes', aspect: 'aspect-[4/5]' },
  { id: 14, src: '/gallery_img/gallery_new_5.png', alt: 'Steamed Chicken & Pumpkin Plate', category: 'dishes', aspect: 'aspect-[4/3]' },
  { id: 15, src: '/gallery_img/gallery_new_6.png', alt: 'Avocado & Egg Toast', category: 'dishes', aspect: 'aspect-[16/10]' },
  { id: 16, src: '/gallery_img/gallery_new_7.png', alt: 'Shrimp & Black Rice Healthy Bowl', category: 'dishes', aspect: 'aspect-[3/4]' },
  { id: 17, src: '/gallery_img/gallery_new_8.png', alt: 'Steamed Shrimp, Corn & Egg Plate', category: 'dishes', aspect: 'aspect-square' },
  { id: 18, src: '/gallery_img/gallery_new_9.png', alt: 'Grilled Chicken & Quinoa Salad Bowl', category: 'dishes', aspect: 'aspect-[4/3]' },
  { id: 19, src: '/gallery_img/gallery_new_10.png', alt: 'Red Rice & Chicken Breast Power Bowl', category: 'dishes', aspect: 'aspect-[3/4]' },
  { id: 20, src: '/gallery_img/gallery_new_11.png', alt: 'Fresh Berry Yogurt Granola Breakfast', category: 'dishes', aspect: 'aspect-[16/9]' },
];

export default function GalleryPage() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const categories: { key: GalleryCategory; label: string; emoji: string }[] = [
    { key: 'all', label: t.gallery.categories.all, emoji: '🖼️' },
    { key: 'dishes', label: t.gallery.categories.dishes, emoji: '🍽️' },
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

          {/* Staggered Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 max-w-7xl mx-auto"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="break-inside-avoid mb-4 group relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  onClick={() => setLightbox(item)}
                >
                  <div className={`relative w-full ${item.aspect || 'aspect-square'}`}>
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
