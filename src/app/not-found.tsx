'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F1E5] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-serif text-[120px] font-bold text-[#7A0F16]/10 leading-none select-none">
            404
          </div>
          <div className="-mt-8 mb-6">
            <h1 className="font-serif text-3xl font-bold text-[#7A0F16] mb-3">
              Oops! Page Not Found
            </h1>
            <p className="text-gray-500 text-base leading-relaxed">
              The page you are looking for does not exist or has been moved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary px-6 py-3">
              <Home size={18} /> Back to Home
            </Link>
            <button onClick={() => window.history.back()} className="btn-gold px-6 py-3">
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
