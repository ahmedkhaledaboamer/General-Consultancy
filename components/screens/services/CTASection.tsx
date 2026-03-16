"use client";
import { motion } from 'framer-motion';
import { PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
export function CTASection() {
  const locale = useLocale();
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/A professional financial consu/image_14.webp"
          alt="City Skyline"
          className="w-full h-full object-cover"
          width={1400}
          height={800}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-tealDark/90 mix-blend-multiply" />
      </div>

      {/* Colorful Glowing Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Decorative Dots Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 md:p-16 rounded-3xl shadow-2xl">
          
          <div className="w-24 h-24 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(201,168,76,0.5)]">
            <PhoneIcon className="w-10 h-10 text-navy" />
          </div>

          <h2 className="text-lg md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg">
            هل تبحث عن شريك استشاري يساعدك على تطوير أعمالك واستثماراتك؟
          </h2>

          <p className="text-lg md:text-2xl text-gray-200 font-body mb-12 leading-relaxed mx-auto drop-shadow-md">
            فريقنا مستعد لدراسة احتياجاتك وتقديم الحلول المناسبة لتحقيق أهدافك.
            دعنا نعمل معًا على بناء مشاريع ناجحة واستثمارات مستدامة.
          </p>

          <Link href={`/${locale}/execution`} className="bg-gradient-to-r from-gold to-yellow-500 hover:from-goldLight hover:to-gold text-navy font-bold text-lg md:text-xl py-5 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(201,168,76,0.6)] hover:shadow-[0_0_60px_rgba(201,168,76,0.8)]">
            تواصل معنا اليوم
          </Link>
        </motion.div>
      </div>
    </section>);

}