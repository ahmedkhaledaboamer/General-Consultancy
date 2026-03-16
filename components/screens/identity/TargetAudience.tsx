"use client";
import { motion } from 'framer-motion';
import { UsersIcon, BuildingIcon, TrendingUpIcon } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const audiences = [
{
  title: 'audiences.0.title',
  desc: 'audiences.0.desc',
  icon: UsersIcon,
  image:
  '/imgs/A project operations managemen/image_18.webp',
  gradient: 'from-brand-blue to-brand-teal',
  shadow: 'shadow-brand-blue/20'
},
{
  title: 'audiences.1.title',
  desc: 'audiences.1.desc',
  icon: BuildingIcon,
  image:
  '/imgs/A quality management consultin/image_18.webp',
  gradient: 'from-brand-purple to-brand-pink',
  shadow: 'shadow-brand-purple/20'
},
{
  title: 'audiences.2.title',
  desc: 'audiences.2.desc',
  icon: TrendingUpIcon,
  image:
  '/imgs/A realtime execution monitorin/image_15.webp',
  gradient: 'from-brand-orange to-brand-amber',
  shadow: 'shadow-brand-orange/20'
}];

export function TargetAudience() {
  const t = useTranslations('identity.targetAudience');
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
          <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-cairo font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">
              {t('headingPart1')}
            </span>{' '}
            {t('headingPart2')}
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
                alt={t(audience.title)}
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

                <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-cairo font-bold text-gray-900 mb-4 mt-8">
                  {t(audience.title)}
                </h3>
                <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed">
                  {t(audience.desc)}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}