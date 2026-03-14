"use client";
import { motion } from 'framer-motion';
import { UsersIcon, BuildingIcon, TrendingUpIcon } from 'lucide-react';
import Image from 'next/image';
const audiences = [
{
  title: 'الشركاء والعملاء',
  desc: 'الذين يبحثون عن شريك موثوق وفعال.',
  icon: UsersIcon,
  image:
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  gradient: 'from-brand-blue to-brand-teal',
  shadow: 'shadow-brand-blue/20'
},
{
  title: 'الفريق الداخلي',
  desc: 'الذي يحتاج إلى دليل واضح لتمثيل الشركة.',
  icon: BuildingIcon,
  image:
  'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80',
  gradient: 'from-brand-purple to-brand-pink',
  shadow: 'shadow-brand-purple/20'
},
{
  title: 'المستثمرون',
  desc: 'الراغبون في رؤية مصداقية واستقرار الشركة.',
  icon: TrendingUpIcon,
  image:
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  gradient: 'from-brand-orange to-brand-amber',
  shadow: 'shadow-brand-orange/20'
}];

export function TargetAudience() {
  return (
    <section className="  bg-mesh relative overflow-hidden">
      <div className="mx-auto p-[5%] relative z-10">
        <motion.div
          className="text-center mb-20 relative"
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
            duration: 0.7
          }}>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 bg-brand-yellow blur-3xl opacity-30 -z-10" />
          <h2 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-cairo font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">
              لمن نكتب
            </span>{' '}
            هذه الهوية؟
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {audiences.map((audience, index) =>
          <motion.div
            key={index}
            className={`bg-white rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] xl:rounded-[4rem] 2xl:rounded-[4.5rem] shadow-xl hover:shadow-2xl ${audience.shadow} overflow-hidden transition-all duration-300 group`}
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
              duration: 0.6,
              delay: index * 0.2
            }}>
            
              {/* Prominent Image at Top */}
              <div className="h-56 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] relative overflow-hidden">
                <Image
                src={audience.image}
                alt={audience.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                width={800}
                height={800}
              />
              
                <div
                className={`absolute inset-0 bg-gradient-to-t ${audience.gradient} opacity-40 mix-blend-multiply`} />
              
              </div>

              <div className="p-10 relative text-center">
                {/* Overlapping Icon Badge */}
                <div
                className={`absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br ${audience.gradient} text-white flex items-center justify-center shadow-xl border-4 border-white transform group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-300`}>
                
                  <audience.icon size={40} />
                </div>

                <h3 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-cairo font-bold text-gray-900 mb-4 mt-8">
                  {audience.title}
                </h3>
                <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 font-tajawal leading-relaxed">
                  {audience.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}