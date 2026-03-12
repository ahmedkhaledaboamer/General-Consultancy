"use client";
import { motion } from 'framer-motion';
const images = [
{
  src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  span: 'md:col-span-2 md:row-span-2',
  color: 'from-sky-500/80 to-blue-600/80'
},
{
  src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80',
  span: 'md:col-span-1 md:row-span-1',
  color: 'from-magenta-500/80 to-pink-600/80'
},
{
  src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  span: 'md:col-span-1 md:row-span-1',
  color: 'from-emerald-500/80 to-teal-600/80'
},
{
  src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
  span: 'md:col-span-1 md:row-span-2',
  color: 'from-orange-500/80 to-red-600/80'
},
{
  src: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80',
  span: 'md:col-span-2 md:row-span-1',
  color: 'from-violet-500/80 to-purple-600/80'
},
{
  src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
  span: 'md:col-span-1 md:row-span-1',
  color: 'from-gold/80 to-amber/80'
}];

export function GallerySection() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-slate-100 to-white z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-sky/10 via-magenta/10 to-gold/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-4xl md:text-5xl font-black text-navy mb-4">
            
            معرض{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-orange">
              الأعمال
            </span>
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
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
            }}
            className="w-24 h-1.5 bg-gradient-to-r from-magenta to-orange mx-auto rounded-full">
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className={`relative rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 ${img.span}`}>
            
              <img
              src={img.src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            
              {/* Colorful Hover Overlay */}
              <div
              className={`absolute inset-0 bg-gradient-to-br ${img.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply`}>
            </div>

              {/* Center Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm">
                  <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  
                  </svg>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}