'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, Star, CheckCircle, CreditCard, Wallet, Banknote, Sunrise } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { menuItems, formatPrice } from '@/lib/menuData';
import AnimatedSection from '@/components/ui/AnimatedSection';

type PaymentMethod = 'cash' | 'bank' | 'momo' | 'vnpay';
type Step = 'browse' | 'timing' | 'checkout' | 'success';

export default function OrderPage() {
  const { t, lang } = useLanguage();
  const { items, addItem, removeItem, updateQty, clearCart, total, count } = useCart();
  const [step, setStep] = useState<Step>('browse');
  const [payment, setPayment] = useState<PaymentMethod>('cash');
  const [deliveryType, setDeliveryType] = useState<'now' | 'schedule'>('now');
  const [deliveryTime, setDeliveryTime] = useState<string>('06:00 AM');
  const [addedId, setAddedId] = useState<string | null>(null);

  const timeSlots = ['06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM'];
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', notes: '' });

  const handleAdd = (item: typeof menuItems[0]) => {
    addItem(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    clearCart();
  };

  const paymentOptions = [
    { key: 'cash' as PaymentMethod, label: t.order.payment.cash, icon: Banknote, img: null },
    { key: 'bank' as PaymentMethod, label: t.order.payment.bank, icon: null, img: '/payment/bank_transfer.jpg' },
    { key: 'momo' as PaymentMethod, label: t.order.payment.momo, icon: null, img: '/payment/momo.webp' },
    { key: 'vnpay' as PaymentMethod, label: t.order.payment.vnpay, icon: null, img: '/payment/vnpay.png' },
  ];

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-[#F7F1E5] flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle size={40} className="text-green-500" />
          </motion.div>
          <h2 className="font-serif text-3xl font-bold text-[#7A0F16] mb-3">{t.order.success.title}</h2>
          <p className="text-gray-600 mb-3">
            {deliveryType === 'schedule' 
              ? (t.order.success as any).scheduledDesc.replace('{time}', deliveryTime)
              : t.order.success.desc}
          </p>
          {deliveryType === 'now' && (
            <div className="bg-[#F7F1E5] rounded-xl px-5 py-3 mb-8">
              <p className="text-[#7A0F16] font-semibold text-sm">⏱️ {t.order.success.time}</p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/" className="btn-primary flex-1 py-3">
              {t.order.success.backHome}
            </Link>
            <button onClick={() => setStep('browse')} className="btn-gold flex-1 py-3">
              {t.order.success.newOrder}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#7A0F16] to-[#5a0a10] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">🛒 {lang === 'vi' ? 'Đặt Hàng' : 'Order'}</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">{t.order.title}</h1>
            <div className="divider-gold" />
            <p className="text-white/70 text-lg mt-4">{t.order.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F1E5]">
        <div className="max-w-7xl mx-auto">
          {step === 'browse' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Menu Items */}
              <div className="lg:col-span-2">
                <AnimatedSection className="mb-6">
                  <h2 className="font-serif text-2xl font-bold text-[#7A0F16]">
                    🍽️ {lang === 'vi' ? 'Chọn Món' : 'Choose Your Dishes'}
                  </h2>
                </AnimatedSection>
                <div className="grid sm:grid-cols-2 gap-4">
                  {menuItems.map((item, i) => (
                    <AnimatedSection key={item.id} delay={i * 0.04}>
                      <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex gap-4 p-3 hover:shadow-md transition-shadow">
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                          <Image src={item.image} alt={lang === 'vi' ? item.nameVi : item.nameEn} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <h3 className="font-semibold text-sm text-gray-900 leading-tight truncate">
                            {lang === 'vi' ? item.nameVi : item.nameEn}
                          </h3>
                          {item.popular && (
                            <span className="text-xs text-[#D4AF37] font-medium flex items-center gap-1 mt-0.5">
                              <Star size={10} fill="currentColor" /> {lang === 'vi' ? 'Nổi bật' : 'Popular'}
                            </span>
                          )}
                          <p className="text-[#7A0F16] font-bold text-sm mt-auto">{formatPrice(item.price)}</p>
                          <button
                            onClick={() => handleAdd(item)}
                            className={`mt-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 ${
                              addedId === item.id
                                ? 'bg-green-500 text-white'
                                : 'bg-[#7A0F16] text-white hover:bg-[#8B1E23]'
                            }`}
                          >
                            <ShoppingBag size={12} />
                            {addedId === item.id ? t.menu.added : t.menu.addToCart}
                          </button>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Cart Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <AnimatedSection direction="right">
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                      <div className="bg-gradient-to-r from-[#7A0F16] to-[#8B1E23] p-5">
                        <h2 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                          <ShoppingBag size={20} /> {t.order.cart}
                          {count > 0 && (
                            <span className="ml-auto bg-[#D4AF37] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                              {count}
                            </span>
                          )}
                        </h2>
                      </div>
                      <div className="p-5">
                        {items.length === 0 ? (
                          <div className="text-center py-10 text-gray-400">
                            <ShoppingBag size={40} className="mx-auto mb-3 opacity-30" />
                            <p className="text-sm">{t.order.cartEmpty}</p>
                          </div>
                        ) : (
                          <>
                            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                              <AnimatePresence>
                                {items.map((item) => (
                                  <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex items-center gap-3 p-3 bg-[#F7F1E5] rounded-xl"
                                  >
                                    <div className="flex-1 min-w-0">
                                      <p className="text-xs font-semibold text-gray-800 truncate">
                                        {lang === 'vi' ? item.nameVi : item.nameEn}
                                      </p>
                                      <p className="text-[#7A0F16] text-xs font-bold mt-0.5">
                                        {formatPrice(item.price * item.quantity)}
                                      </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <button onClick={() => updateQty(item.id, item.quantity - 1)} className="w-6 h-6 rounded-full bg-gray-200 hover:bg-[#7A0F16] hover:text-white flex items-center justify-center transition-colors">
                                        <Minus size={12} />
                                      </button>
                                      <span className="w-5 text-center text-xs font-bold">{item.quantity}</span>
                                      <button onClick={() => updateQty(item.id, item.quantity + 1)} className="w-6 h-6 rounded-full bg-gray-200 hover:bg-[#7A0F16] hover:text-white flex items-center justify-center transition-colors">
                                        <Plus size={12} />
                                      </button>
                                      <button onClick={() => removeItem(item.id)} className="w-6 h-6 rounded-full bg-red-100 hover:bg-red-500 hover:text-white text-red-400 flex items-center justify-center transition-colors ml-1">
                                        <Trash2 size={11} />
                                      </button>
                                    </div>
                                  </motion.div>
                                ))}
                              </AnimatePresence>
                            </div>

                            <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
                              <div className="flex justify-between text-sm text-gray-600">
                                <span>{t.order.subtotal}</span>
                                <span className="font-semibold">{formatPrice(total)}</span>
                              </div>
                              <div className="flex justify-between text-sm text-gray-600">
                                <span>{t.order.delivery}</span>
                                <span className="text-green-600 font-semibold">{t.order.free}</span>
                              </div>
                              <div className="flex justify-between text-base font-bold text-[#7A0F16] pt-2 border-t border-gray-100">
                                <span>{t.order.total}</span>
                                <span>{formatPrice(total)}</span>
                              </div>
                            </div>

                            <button
                              onClick={() => setStep('timing')}
                              className="mt-4 btn-primary w-full py-3.5 text-sm"
                            >
                              {t.order.checkout}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          )}

          {step === 'timing' && (
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <button onClick={() => setStep('browse')} className="text-[#7A0F16] text-sm font-medium mb-6 flex items-center gap-2 hover:gap-3 transition-all">
                  ← {lang === 'vi' ? 'Quay lại giỏ hàng' : 'Back to cart'}
                </button>
                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h2 className="font-serif text-2xl font-bold text-[#7A0F16] mb-2">{(t.order as any).timing.title}</h2>
                  <div className="divider-gold !mx-0 mb-6" />
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Order Now Option */}
                    <div 
                      onClick={() => setDeliveryType('now')}
                      className={`relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${deliveryType === 'now' ? 'border-[#7A0F16] bg-[#7A0F16]/5 shadow-md' : 'border-gray-200 hover:border-[#7A0F16]/40'}`}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${deliveryType === 'now' ? 'bg-[#7A0F16] text-white' : 'bg-gray-100 text-gray-400'}`}>
                          <ShoppingBag size={24} />
                        </div>
                        <h3 className={`font-serif text-xl font-bold ${deliveryType === 'now' ? 'text-[#7A0F16]' : 'text-gray-700'}`}>{(t.order as any).timing.now}</h3>
                      </div>
                      <p className="text-gray-600 text-sm pl-16">{(t.order as any).timing.nowDesc}</p>
                      
                      {deliveryType === 'now' && (
                        <div className="absolute top-6 right-6">
                          <CheckCircle className="text-[#7A0F16]" size={24} />
                        </div>
                      )}
                    </div>

                    {/* Schedule Option */}
                    <div 
                      onClick={() => setDeliveryType('schedule')}
                      className={`relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 overflow-hidden ${deliveryType === 'schedule' ? 'border-[#D4AF37] bg-[#D4AF37]/5 shadow-md' : 'border-gray-200 hover:border-[#D4AF37]/40'}`}
                    >
                      <div className="absolute top-0 right-0 bg-[#D4AF37] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 shadow-sm">
                        <Star size={10} fill="currentColor" /> {(t.order as any).timing.badge}
                      </div>

                      <div className="flex items-center gap-4 mb-3 mt-1">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${deliveryType === 'schedule' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-400'}`}>
                          <Sunrise size={24} />
                        </div>
                        <h3 className={`font-serif text-xl font-bold pr-12 ${deliveryType === 'schedule' ? 'text-[#D4AF37]' : 'text-gray-700'}`}>{(t.order as any).timing.schedule}</h3>
                      </div>
                      <p className="text-gray-600 text-sm pl-16 mb-4">{(t.order as any).timing.scheduleDesc}</p>
                      
                      {/* Time Selector */}
                      <AnimatePresence>
                        {deliveryType === 'schedule' && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-16 overflow-hidden"
                          >
                            <div className="pt-2 border-t border-[#D4AF37]/20">
                              <label className="block text-sm font-semibold text-gray-700 mb-2">{(t.order as any).timing.selectTime}</label>
                              <div className="flex flex-wrap gap-2">
                                {timeSlots.map(time => (
                                  <button
                                    key={time}
                                    onClick={(e) => { e.stopPropagation(); setDeliveryTime(time); }}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${deliveryTime === time ? 'bg-[#D4AF37] text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-600 hover:border-[#D4AF37]'}`}
                                  >
                                    {time}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {deliveryType === 'schedule' && (
                        <div className="absolute top-6 right-6">
                          <CheckCircle className="text-[#D4AF37]" size={24} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button onClick={() => setStep('checkout')} className="btn-primary py-3.5 px-8 text-base">
                      {(t.order as any).timing.continue} →
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          )}

          {step === 'checkout' && (
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <button
                  onClick={() => setStep('timing')}
                  className="text-[#7A0F16] text-sm font-medium mb-6 flex items-center gap-2 hover:gap-3 transition-all"
                >
                  ← {lang === 'vi' ? 'Quay lại chọn giờ' : 'Back to timing'}
                </button>
                
                <form onSubmit={handleOrder} className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* LEFT COLUMN: User Information */}
                  <div className="bg-white rounded-3xl shadow-lg p-8">
                    <h2 className="font-serif text-2xl font-bold text-[#7A0F16] mb-2">{t.order.info.title}</h2>
                    <div className="divider-gold !mx-0 mb-6" />

                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.order.info.name} *</label>
                          <input required className="form-input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.order.info.phone} *</label>
                          <input required type="tel" className="form-input" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.order.info.email}</label>
                        <input type="email" className="form-input" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.order.info.address} *</label>
                        <input required className="form-input" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.order.info.notes}</label>
                        <textarea rows={3} className="form-input resize-none" placeholder={t.order.info.notesPlaceholder} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Order Summary & Payment */}
                  <div className="bg-white rounded-3xl shadow-lg p-8">
                    {/* Order summary mini */}
                    <div className="bg-[#F7F1E5] rounded-2xl p-4 mb-8">
                      <p className="text-sm font-semibold text-gray-700 mb-3">{lang === 'vi' ? 'Đơn hàng của bạn:' : 'Your order:'}</p>
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm py-1">
                          <span className="text-gray-600">{lang === 'vi' ? item.nameVi : item.nameEn} × {item.quantity}</span>
                          <span className="font-semibold text-[#7A0F16]">{formatPrice(item.price * item.quantity)}</span>
                        </div>
                      ))}
                      <div className="flex justify-between font-bold text-[#7A0F16] pt-2 mt-2 border-t border-[#D4AF37]/20 text-base">
                        <span>{t.order.total}</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                    </div>

                    {/* Delivery Timing Info */}
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl p-4 mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        {deliveryType === 'now' ? <ShoppingBag size={18} className="text-[#7A0F16]" /> : <Sunrise size={18} className="text-[#D4AF37]" />}
                        <p className="text-sm font-semibold text-gray-800">
                          {(t.order as any).timing.deliveryType} <span className={deliveryType === 'now' ? 'text-[#7A0F16]' : 'text-[#D4AF37]'}>{deliveryType === 'now' ? (t.order as any).timing.now : (t.order as any).timing.schedule}</span>
                        </p>
                      </div>
                      {deliveryType === 'schedule' && (
                        <p className="text-sm text-gray-600 pl-7">
                          {(t.order as any).timing.scheduledFor} <span className="font-bold text-gray-900">{deliveryTime}</span>
                        </p>
                      )}
                    </div>

                    {/* Payment */}
                    <div>
                      <h2 className="font-serif text-xl font-bold text-[#7A0F16] mb-4">{t.order.payment.title}</h2>
                      <div className="grid grid-cols-2 gap-3">
                        {paymentOptions.map((opt) => {
                          const Icon = opt.icon;
                          return (
                            <button
                              key={opt.key}
                              type="button"
                              onClick={() => setPayment(opt.key)}
                              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 text-xs font-semibold transition-all duration-200 ${
                                payment === opt.key
                                  ? 'border-[#7A0F16] bg-[#7A0F16]/5 text-[#7A0F16]'
                                  : 'border-gray-200 text-gray-500 hover:border-[#7A0F16]/40'
                              }`}
                            >
                              {opt.img ? (
                                <div className="relative w-12 h-12 mb-1">
                                  <Image src={opt.img} alt={opt.label} fill className="object-contain" sizes="48px" />
                                </div>
                              ) : (
                                Icon && <Icon size={24} className={`mb-1 ${payment === opt.key ? 'text-[#7A0F16]' : 'text-gray-400'}`} />
                              )}
                              <span className="text-center">{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button type="submit" className="btn-primary w-full py-4 text-base mt-8">
                      <ShoppingBag size={18} />
                      {t.order.placeOrder} – {formatPrice(total)}
                    </button>
                  </div>
                </form>
              </AnimatedSection>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
