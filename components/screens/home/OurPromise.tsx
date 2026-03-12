"use client";
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
const promises = [
{
  text: 'اتخاذ قرارات استثمارية مدروسة',
  color: 'from-sky-400 to-blue-600'
},
{
  text: 'تطوير مشاريع ناجحة ومستدامة',
  color: 'from-emerald-400 to-teal-600'
},
{
  text: 'بناء هياكل تشغيلية قوية',
  color: 'from-violet-400 to-purple-600'
},
{
  text: 'اكتشاف الفرص الجديدة في الأسواق',
  color: 'from-magenta-400 to-pink-600'
},
{
  text: 'تحقيق النمو بثقة واستقرار',
  color: 'from-gold to-amber'
}];

export function OurPromise() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dramatic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464938050520-ef2571e0d6e0?w=1920&q=80"
          alt="Dramatic Architecture"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="relative">
            
            {/* Glass Card with Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold via-orange to-magenta rounded-[3rem] blur-2xl opacity-20"></div>

            <div className="glass-colored bg-navy/60 p-10 md:p-14 rounded-[3rem] border border-white/20 relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/30 to-transparent rounded-bl-full"></div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">
                وعدنا لك
              </h2>
              <p className="text-xl text-slate-200 mb-10 leading-relaxed font-light">
                نعد شركاءنا بتقديم خدمات استشارية واستثمارية تعتمد على الخبرة،
                والتحليل الدقيق، والرؤية الواضحة. نلتزم بأن نكون الشريك الذي
                يساعدك على:
              </p>

              <ul className="space-y-6 mb-12">
                {promises.map((promise, index) =>
                <motion.li
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.1
                  }}
                  className="flex items-center text-white group">
                  
                    <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${promise.color} flex items-center justify-center ml-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    
                      <CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl">{promise.text}</span>
                  </motion.li>
                )}
              </ul>

              <div className="pt-8 border-t border-white/20">
                <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber to-orange">
                  هدفنا أن نكون شريكًا يعتمد عليه في بناء المستقبل الاستثماري.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}