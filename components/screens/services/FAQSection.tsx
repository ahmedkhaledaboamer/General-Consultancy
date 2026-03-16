"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, MinusIcon } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

const faqs = [0, 1, 2, 3];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('services');
  return (
    <section id="faq" className="  bg-gray-50 overflow-hidden">
      <div className=" mx-auto p-[5%]">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Decorative Image Column */}
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
            className="w-full lg:w-5/12 relative hidden lg:block">
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px] md:h-[700px] lg:h-[800px] 2xl:h-[900px]">
              <Image
                src="/imgs/A project financing concept fe/image_2.webp"
                alt="Data Analytics and Consulting"
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/80 via-teal/30 to-transparent mix-blend-multiply" />

              {/* Overlay Badge */}
              <div className={`absolute top-8 ${isRTL ? 'right-8 mr-5' : 'left-8 ml-5'} bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl`}>
                <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-heading font-bold text-white mb-2">
                  {t('sections.faq.overlayTitle')}
                </h3>
                <p className="text-teal-100 font-body text-sm md:text-base xl:text-lg 2xl:text-xl">
                  {t('sections.faq.overlayDescription')}
                </p>
              </div>
            </div>

            {/* Decorative Blob */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 2xl:w-112 2xl:h-112 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 -z-10" />
          </motion.div>

          {/* FAQ Content Column */}
          <div className="w-full lg:w-7/12">
            <div className="mb-12">
              <motion.div
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
                className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}
                >
                
                <div className="inline-block px-4 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal mb-4 text-sm md:text-base xl:text-lg 2xl:text-xl">
                  <span className="font-body font-medium text-sm md:text-base xl:text-lg 2xl:text-xl">
                    {t('sections.faq.badge')}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-heading font-bold text-navy mb-4">
                  {t('sections.faq.titleMain')}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-emerald-500 text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
                    {t('sections.faq.titleHighlight')}
                  </span>
                </h2>
                <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 font-body">
                  {t('sections.faq.description')}
                </p>
              </motion.div>
            </div>

            <div className="space-y-4">
              {faqs.map((idx, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 10
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      delay: index * 0.1
                    }}
                    className={` bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm relative text-sm md:text-base xl:text-lg 2xl:text-xl ${isOpen ? 'border-teal/30 shadow-md' : 'border-gray-100 hover:border-gray-200'}`}>
                    
                    {/* Colored active border */}
                    {isOpen &&
                    <div className="absolute top-0 right-0 w-1.5 h-full md:w-2 lg:w-3 2xl:w-4 bg-gradient-to-b from-teal-400 to-emerald-500" />
                    }

                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="cursor-pointer w-full px-6 py-5 md:px-8 md:py-6 xl:px-10 xl:py-7 2xl:px-12 2xl:py-8 flex items-center justify-between text-right focus:outline-none">
                      
                      <span
                        className={`text-sm md:text-xl xl:text-2xl 2xl:text-3xl font-heading font-bold pr-4 transition-colors ${isOpen ? 'text-teal-700' : 'text-navy'}`}>
                        {t(`sections.faq.items.${idx}.question`)}
                      </span>
                      <div
                        className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gradient-to-br from-teal-400 to-emerald-500 text-white shadow-md transform rotate-180' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
                        
                        {isOpen ?
                        <MinusIcon className="w-5 h-5" /> :

                        <PlusIcon className="w-5 h-5" />
                        }
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen &&
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1
                        }}
                        exit={{
                          height: 0,
                          opacity: 0
                        }}
                        transition={{
                          duration: 0.3
                        }}>
                        
                          <div className="px-6 pb-6 pt-2 text-gray-600 font-body leading-relaxed border-t border-gray-50 mx-6">
                            {t(`sections.faq.items.${idx}.answer`)}
                          </div>
                        </motion.div>
                      }
                    </AnimatePresence>
                  </motion.div>);

              })}
            </div>
          </div>
        </div>
      </div>
    </section>);

}