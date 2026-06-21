'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Navigation } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Phone, label: t.contact.phone, value: '0792 229 040', href: 'tel:0792229040' },
    { icon: Mail, label: t.contact.email, value: 'huflit.thefoodies10@gmail.com', href: 'mailto:huflit.thefoodies10@gmail.com' },
    {
      icon: MapPin, label: t.contact.address,
      value: '806 Lê Quang Đạo, QL22, Tân Xuân, Hóc Môn, TP. HCM',
      href: 'https://maps.google.com/?q=806+Le+Quang+Dao+Hoc+Mon+Ho+Chi+Minh',
    },
    { icon: Clock, label: t.contact.hours, value: `${t.contact.hoursVal} · ${t.contact.hoursDay}`, href: null },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#7A0F16] to-[#5a0a10] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">📞 {lang === 'vi' ? 'Liên Hệ' : 'Contact'}</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">{t.contact.title}</h1>
            <div className="divider-gold" />
            <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto">{t.contact.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F1E5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info + Map */}
            <AnimatedSection direction="left">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const Content = (
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 hover:shadow-md transition-all duration-300 h-full">
                      <div className="w-10 h-10 rounded-xl bg-[#7A0F16]/10 flex items-center justify-center mb-3">
                        <Icon size={18} className="text-[#7A0F16]" />
                      </div>
                      <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{info.value}</p>
                    </div>
                  );
                  return info.href ? (
                    <a key={info.label} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                      {Content}
                    </a>
                  ) : (
                    <div key={info.label}>{Content}</div>
                  );
                })}
              </div>

              {/* Google Map */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#D4AF37]/20">
                <iframe
                  title="The Foodies 10 Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.9278348305726!2d106.60236987480268!3d10.880041289272895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d4a6b3f7f3f3%3A0x0!2zMTA2wrAzNicxNy4xIkUgMTDCsDUyJzQ4LjIiTg!5e0!3m2!1sen!2svn!4v1720000000000!5m2!1sen!2svn"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="bg-white px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">The Foodies 10</p>
                    <p className="text-gray-500 text-xs">806 Lê Quang Đạo, Hóc Môn, TP. HCM</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=806+Le+Quang+Dao+Hoc+Mon+Ho+Chi+Minh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
                  >
                    <Navigation size={14} />
                    {t.contact.directions}
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Contact Form */}
            <AnimatedSection direction="right">
              <div className="bg-white rounded-3xl shadow-lg p-8 h-full">
                <h2 className="font-serif text-2xl font-bold text-[#7A0F16] mb-2">{t.contact.form.title}</h2>
                <div className="divider-gold !mx-0 mb-6" />

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6"
                  >
                    <CheckCircle size={18} className="flex-shrink-0" />
                    <p className="text-sm">{t.contact.form.success}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.contact.form.name} *</label>
                      <input
                        required className="form-input"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.contact.form.email} *</label>
                      <input
                        required type="email" className="form-input"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.contact.form.subject} *</label>
                    <input
                      required className="form-input"
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.contact.form.message} *</label>
                    <textarea
                      required rows={5} className="form-input resize-none"
                      placeholder={t.contact.form.messagePlaceholder}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-base">
                    <Send size={18} />
                    {t.contact.form.send}
                  </button>
                </form>

                {/* Direct contact note */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 text-center">
                    {lang === 'vi'
                      ? 'Hoặc liên hệ trực tiếp qua điện thoại: '
                      : 'Or reach us directly at: '}
                    <a href="tel:0792229040" className="text-[#7A0F16] font-semibold hover:underline">
                      0792 229 040
                    </a>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
