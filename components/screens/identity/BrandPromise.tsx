"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
export function BrandPromise() {
  const locale = useLocale();
  const t = useTranslations('identity.brandPromise');
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Full Background Image with Multi-color Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/A conceptual investment manage/image_15.webp"
          alt="Abstract Colorful"
          className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/95 via-brand-rose/85 to-brand-orange/90" />
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_2px,transparent_2px)] [background-size:30px_30px]" />
      </div>

      {/* Large Rotating Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-white/10 rounded-full animate-spin-slow z-0 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border-[2px] border-white/5 rounded-full animate-spin-slow animation-delay-3000 z-0 pointer-events-none"
        style={{
          animationDirection: 'reverse'
        }} />
      

      {/* Floating Image Thumbnails */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-2xl animate-float hidden lg:block z-10"
        initial={{
          opacity: 0,
          scale: 0
        }}
        whileInView={{
          opacity: 1,
          scale: 1
        }}
        viewport={{
          once: true
        }}>
        
        <Image
          src="/imgs/A confident investment future/image_37.webp"
          alt="Handshake"
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
        
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl animate-float-reverse hidden lg:block z-10"
        initial={{
          opacity: 0,
          scale: 0
        }}
        whileInView={{
          opacity: 1,
          scale: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          delay: 0.2
        }}>
        
        <Image
          src="/imgs/A diverse investor ecosystem s/image_49.webp"
          alt="Trust"
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
        
      </motion.div>

      <motion.div
        className="absolute top-40 left-1/4 w-24 h-24 rounded-xl overflow-hidden border-2 border-white/50 shadow-xl animate-float hidden md:block z-10"
        initial={{
          opacity: 0,
          scale: 0
        }}
        whileInView={{
          opacity: 1,
          scale: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          delay: 0.4
        }}>
        
        <Image
          src="/imgs/A financial consulting environ/image_27.webp"
          alt="Leadership"
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
        
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}>

          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md text-white rounded-full font-bold mb-8 border border-white/20 shadow-lg">
            {t('badge')}
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-8xl font-cairo font-bold text-white mb-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]">
            {t('title')}
          </h2>

          <p className="text-2xl md:text-4xl text-white/95 leading-relaxed mb-16 drop-shadow-md max-w-4xl mx-auto font-medium">
            {t('body')}
          </p>

          <Link href={`/${locale}/execution`} className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold transition-all duration-300 bg-white text-brand-purple font-cairo rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] focus:outline-none overflow-hidden">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-rose">
              {t('ctaLabel')}
            </span>
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </Link>
        </motion.div>
      </div>
    </section>);

}