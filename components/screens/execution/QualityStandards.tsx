import React from 'react';
import {
  GlobeIcon,
  SearchIcon,
  TrendingUpIcon,
  BarChartIcon } from
'lucide-react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
export function QualityStandards() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const standards = [
  {
    title: 'المعايير الدولية',
    description: 'الالتزام بالمعايير الدولية في جميع مراحل المشروع.',
    icon: <GlobeIcon className="w-6 h-6 text-white" />,
    color: 'bg-blue-600'
  },
  {
    title: 'مراجعة دورية',
    description: 'مراجعة دورية لكل مرحلة لضمان الجودة والكفاءة.',
    icon: <SearchIcon className="w-6 h-6 text-white" />,
    color: 'bg-indigo-600'
  },
  {
    title: 'تحسين مستمر',
    description: 'تحسين مستمر للعمليات والإجراءات لضمان نتائج أفضل.',
    icon: <TrendingUpIcon className="w-6 h-6 text-white" />,
    color: 'bg-purple-600'
  },
  {
    title: 'قياس الأداء',
    description: 'اعتماد أساليب قياس الأداء الموضوعية والشفافة.',
    icon: <BarChartIcon className="w-6 h-6 text-white" />,
    color: 'bg-emerald-600'
  }];

  return (
    <section className="p-[5%] bg-white">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`w-full lg:w-1/2 text-center ${!isRTL ? 'md:text-left' : 'md:text-right'}`}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-6">
              معايير الجودة والتميز
            </h2>
            <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 mb-8 leading-relaxed">
              الجودة ليست مجرد هدف، بل هي الأساس الذي نبني عليه جميع عملياتنا.
              نحن نضمن تطبيق أعلى معايير الجودة في كل خطوة من خطوات التنفيذ.
            </p>

            <div className="space-y-6">
              {standards.map((standard, index) =>
              <div
                key={index}
                className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
                
                  <div
                  className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rounded-lg ${standard.color} flex items-center justify-center shadow-md ${isRTL ? 'ml-4' : 'mr-4'}`}>
                  
                    {standard.icon}
                  </div>
                  <div className={`${!isRTL ? 'text-left!' : 'text-right!'}`}>
                    <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-1">
                      {standard.title}
                    </h3>
                    <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600">{standard.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                alt="معايير الجودة"
                className="w-full h-[480px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] object-cover"
                width={800}
                height={800}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stat Badges */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-10">
              <div className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-blue-600">100%</div>
              <div className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium text-gray-500">
                التزام بالمعايير
              </div>
            </div>
            <div className="absolute top-1/3 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-10">
              <div className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-purple-600">24/7</div>
              <div className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium text-gray-500">
                مراقبة الجودة
              </div>
            </div>
            <div className="absolute -bottom-4 right-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-10">
              <div className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-emerald-600">ISO</div>
              <div className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium text-gray-500">
                معايير عالمية
              </div>
            </div>
            <div className="absolute bottom-1/4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-10">
              <div className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-amber-600">+50</div>
              <div className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium text-gray-500">مؤشر أداء</div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>);

}