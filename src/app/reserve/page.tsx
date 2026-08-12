'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ReservePage() {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', date: '', time: '', guests: '2', requests: '',
  });

  const timeSlots = [
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '20:30',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">📅 {lang === 'vi' ? 'Đặt Bàn' : 'Reserve'}</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">{t.reserve.title}</h1>
            <div className="divider-gold" />
            <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto">{t.reserve.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F1E5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info Panel */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="space-y-5">
                {/* Hours */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D4AF37]/15">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#7A0F16]/10 flex items-center justify-center">
                      <Clock size={18} className="text-[#7A0F16]" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-gray-900">{t.reserve.info.hours}</h3>
                  </div>
                  <p className="text-gray-700 font-semibold">{t.reserve.info.hoursVal}</p>
                </div>

                {/* Contact */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D4AF37]/15 space-y-4">
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">{lang === 'vi' ? 'Liên Hệ' : 'Contact'}</h3>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <a href="tel:0792229040" className="text-gray-600 hover:text-[#7A0F16] text-sm transition-colors">0792 229 040</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <a href="mailto:huflit.thefoodies10@gmail.com" className="text-gray-600 hover:text-[#7A0F16] text-sm transition-colors break-all">huflit.thefoodies10@gmail.com</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm leading-relaxed">
                      806 Lê Quang Đão, QL22,<br />
                      Tân Xuân, Hóc Môn,<br />
                      TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>

                {/* Note card */}
                <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-2xl p-6 border border-[#D4AF37]/30">
                  <p className="text-[#7A0F16] font-semibold text-sm mb-2">📌 {lang === 'vi' ? 'Lưu ý' : 'Note'}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {lang === 'vi'
                      ? 'Đặt bàn sẽ được xác nhận qua điện thoại hoặc email trong vòng 30 phút.'
                      : 'Reservations will be confirmed by phone or email within 30 minutes.'}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-lg p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle size={40} className="text-green-500" />
                  </motion.div>
                  <h2 className="font-serif text-2xl font-bold text-[#7A0F16] mb-3">
                    {lang === 'vi' ? 'Đặt bàn thành công!' : 'Reservation Submitted!'}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{t.reserve.success}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary px-8 py-3"
                  >
                    {lang === 'vi' ? 'Đặt bàn khác' : 'Make Another Reservation'}
                  </button>
                </motion.div>
              ) : (
                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h2 className="font-serif text-2xl font-bold text-[#7A0F16] mb-2">
                    {lang === 'vi' ? 'Thông Tin Đặt Bàn' : 'Reservation Details'}
                  </h2>
                  <div className="divider-gold !mx-0 mb-6" />

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          <span className="flex items-center gap-1.5"><Users size={14} /> {t.reserve.form.name} *</span>
                        </label>
                        <input required className="form-input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          <span className="flex items-center gap-1.5"><Phone size={14} /> {t.reserve.form.phone} *</span>
                        </label>
                        <input required type="tel" className="form-input" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        <span className="flex items-center gap-1.5"><Mail size={14} /> {t.reserve.form.email}</span>
                      </label>
                      <input type="email" className="form-input" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                    </div>

                    <div className="grid sm:grid-cols-3 gap-5">
                      <div className="sm:col-span-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          <span className="flex items-center gap-1.5"><Calendar size={14} /> {t.reserve.form.date} *</span>
                        </label>
                        <input
                          required type="date"
                          min={new Date().toISOString().split('T')[0]}
                          className="form-input"
                          value={form.date}
                          onChange={e => setForm({...form, date: e.target.value})}
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          <span className="flex items-center gap-1.5"><Clock size={14} /> {t.reserve.form.time} *</span>
                        </label>
                        <select required className="form-input" value={form.time} onChange={e => setForm({...form, time: e.target.value})}>
                          <option value="">--:--</option>
                          {timeSlots.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="sm:col-span-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          <span className="flex items-center gap-1.5"><Users size={14} /> {t.reserve.form.guests} *</span>
                        </label>
                        <select required className="form-input" value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}>
                          {[1,2,3,4,5,6,7,8,9,10].map(n => (
                            <option key={n} value={n}>{n} {lang === 'vi' ? 'khách' : 'guests'}</option>
                          ))}
                          <option value="10+">{lang === 'vi' ? '10+ khách' : '10+ guests'}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.reserve.form.requests}</label>
                      <textarea rows={3} className="form-input resize-none" placeholder={t.reserve.form.requestsPlaceholder} value={form.requests} onChange={e => setForm({...form, requests: e.target.value})} />
                    </div>

                    <button type="submit" className="btn-primary w-full py-4 text-base">
                      <Calendar size={18} />
                      {t.reserve.form.submit}
                    </button>
                  </form>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
