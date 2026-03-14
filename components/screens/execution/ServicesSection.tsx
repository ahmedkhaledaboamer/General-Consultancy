import React from 'react';
import {
  LayoutIcon,
  CogIcon,
  FolderKanbanIcon,
  GaugeIcon } from
'lucide-react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
export function ServicesSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const services = [
  {
    title: 'التخطيط الاستراتيجي',
    icon: <LayoutIcon className="w-10 h-10 text-blue-600" />,
    color: 'blue'
  },
  {
    title: 'تطوير العمليات والإجراءات',
    icon: <CogIcon className="w-10 h-10 text-purple-600" />,
    color: 'purple'
  },
  {
    title: 'إدارة المشاريع والمؤسسات',
    icon: <FolderKanbanIcon className="w-10 h-10 text-emerald-600" />,
    color: 'emerald'
  },
  {
    title: 'تحسين الأداء المؤسسي',
    icon: <GaugeIcon className="w-10 h-10 text-amber-600" />,
    color: 'amber'
  }];

  return (
    <section id="services" className="p-[5%] bg-white relative">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className={`w-full lg:w-1/3 text-center ${!isRTL ? 'md:text-left' : 'md:text-right'}`}>
            <h2 className={`text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-6 leading-tight `}>
              خدماتنا <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                الشاملة
              </span>
            </h2>
            <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 mb-8 leading-relaxed">
              نقدم جميع خدمات الشركة الاستشارية والتنفيذية ضمن إطار عملي واضح
              يضمن تحقيق أهدافك بأعلى معايير الجودة والكفاءة.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/imgs/A modern packaging facility wi/image_44.webp"
                alt="خدمات استشارية"
                className="w-full h-64 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover"
                width={800}
                height={800}
              />
              
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) =>
              <div
                key={index}
                className={`flex flex-col items-center justify-center md:items-start bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-${service.color}-300 transition-all duration-300 group`}>
                
                  <div
                  className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-xl bg-${service.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-${service.color}-100 transition-all duration-300`}>
                  
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}