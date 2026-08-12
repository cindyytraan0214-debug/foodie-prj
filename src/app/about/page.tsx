'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutPage() {
  const { t, lang } = useLanguage();

  const coreValues = t.about.values.items;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#7A0F16] to-[#5a0a10]">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">🍜 {lang === 'vi' ? 'Câu Chuyện Của Chúng Tôi' : 'Our Story'}</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{t.about.title}</h1>
            <div className="divider-gold" />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-[#F7F1E5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                    alt="Restaurant interior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7A0F16]/30 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-[#D4AF37]/20">
                  <div className="text-center">
                    <div className="font-serif text-3xl font-bold text-[#7A0F16]">100%</div>
                    <div className="text-gray-500 text-xs mt-1">{lang === 'vi' ? 'Nguyên liệu tươi' : 'Fresh Ingredients'}</div>
                  </div>
                </div>
                {/* Floating badge 2 */}
                <div className="absolute -top-6 -left-6 bg-[#D4AF37] rounded-2xl p-4 shadow-xl">
                  <div className="text-center text-white">
                    <div className="font-serif text-2xl font-bold">2024</div>
                    <div className="text-white/80 text-xs">{lang === 'vi' ? 'Thành lập' : 'Founded'}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">{t.about.subtitle}</p>
              <h2 className="section-title mb-6">{lang === 'vi' ? 'Hương Vị Từ Trái Tim' : 'Flavors From the Heart'}</h2>
              <div className="divider-gold !mx-0 mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{t.about.story}</p>

              {/* Mission & Vision */}
              <div className="space-y-5">
                <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#7A0F16]/10 flex items-center justify-center flex-shrink-0">
                    <Target size={22} className="text-[#7A0F16]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-gray-900 mb-1">{t.about.mission.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{t.about.mission.desc}</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <Eye size={22} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-gray-900 mb-1">{t.about.vision.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{t.about.vision.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-2">
              <Award className="inline-block mr-2 mb-0.5" size={14} />
              {t.about.values.title}
            </p>
            <h2 className="section-title">{lang === 'vi' ? 'Những Gì Chúng Tôi Tin' : 'What We Stand For'}</h2>
            <div className="divider-gold" />
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-5">
            {coreValues.map((val, i) => (
              <AnimatedSection key={val} delay={i * 0.1}>
                <div className="flex items-center gap-3 bg-[#F7F1E5] border border-[#D4AF37]/20 rounded-2xl px-6 py-4 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 group">
                  <CheckCircle size={20} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  <span className="font-serif font-semibold text-lg text-[#7A0F16]">{val}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Food Image Strip */}
      <section className="py-16 bg-[#F7F1E5] overflow-hidden">
        <AnimatedSection className="text-center mb-10">
          <h2 className="section-title">{lang === 'vi' ? 'Không Gian Của Chúng Tôi' : 'Our Space'}</h2>
          <div className="divider-gold" />
        </AnimatedSection>
        <div className="flex gap-4 overflow-hidden">
          {[
            'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80',
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80',
            'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80',
          ].map((src, i) => (
            <motion.div
              key={i}
              className="relative flex-shrink-0 w-72 h-56 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
