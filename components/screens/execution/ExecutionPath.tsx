import {
  SearchIcon,
  PenToolIcon,
  UsersIcon,
  PlayIcon,
  RefreshCwIcon,
  CheckCircleIcon } from
'lucide-react';
import Image from 'next/image';
export function ExecutionPath() {
  const steps = [
  {
    title: 'التحليل والتقييم',
    description: 'دراسة المشروع بدقة وفهم أهدافه.',
    icon: <SearchIcon className="w-6 h-6 text-white" />,
    color: 'from-blue-500 to-blue-600',
    shadowColor: 'shadow-blue-500/30'
  },
  {
    title: 'تصميم الخطة التنفيذية',
    description: 'تحديد المهام والموارد والجداول الزمنية.',
    icon: <PenToolIcon className="w-6 h-6 text-white" />,
    color: 'from-purple-500 to-purple-600',
    shadowColor: 'shadow-purple-500/30'
  },
  {
    title: 'توزيع المسؤوليات',
    description: 'لكل وحدة تنفيذية مهام واضحة وقياسات أداء محددة.',
    icon: <UsersIcon className="w-6 h-6 text-white" />,
    color: 'from-teal-500 to-teal-600',
    shadowColor: 'shadow-teal-500/30'
  },
  {
    title: 'تنفيذ العمليات',
    description: 'متابعة دقيقة لضمان الالتزام بالجودة والمعايير.',
    icon: <PlayIcon className="w-6 h-6 text-white" />,
    color: 'from-amber-500 to-amber-600',
    shadowColor: 'shadow-amber-500/30'
  },
  {
    title: 'المراجعة والتحسين المستمر',
    description: 'تقييم النتائج وتحسين العمليات لتحقيق أفضل النتائج.',
    icon: <RefreshCwIcon className="w-6 h-6 text-white" />,
    color: 'from-rose-500 to-rose-600',
    shadowColor: 'shadow-rose-500/30'
  },
  {
    title: 'التسليم النهائي للعميل',
    description: 'مع تقارير مفصلة وتحليل الأداء.',
    icon: <CheckCircleIcon className="w-6 h-6 text-white" />,
    color: 'from-emerald-500 to-emerald-600',
    shadowColor: 'shadow-emerald-500/30'
  }];

  return (
    <section
      id="execution-path"
      className=" bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src="/imgs/A conceptual financial strateg/image_6.webp"
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1920}
        />
        
      </div>

      <div className=" mx-auto p-[5%] relative z-10">
        {/* Section Header with Image */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="lg:w-1/2 text-center md:text-left lg:text-right xl:text-center 2xl:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-blue-100 text-blue-600 font-semibold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-4 shadow-sm">
              منهجيتنا
            </div>
            <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-6">
              المسار التنفيذي
            </h2>
            <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-5xl text-gray-600">
              تحويل الأفكار إلى واقع يتطلب خطة دقيقة وواضحة
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/imgs/A conceptual global economic s/image_1.webp"
                alt="المسار التنفيذي"
                className="w-full h-64 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover"
                width={800}
                height={800}
              />
              
            </div>
          </div>
        </div>

        <div className="relative mx-auto">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 right-1/2 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 md:space-y-0" dir="rtl">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center md:mb-16 group">
                  
                  {/* Timeline Node */}
                  <div
                    className={`absolute right-4 md:right-1/2 md:translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} border-4 border-white shadow-lg ${step.shadowColor} flex items-center justify-center z-20 transition-transform duration-300 group-hover:scale-110`}>
                    
                    {step.icon}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 pr-24 md:pr-0 ${isEven ? 'md:pl-16 md:text-left' : 'md:pr-16 md:text-right md:mr-auto'}`}>
                    
                    <div
                      className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-50 relative overflow-hidden group-hover:-translate-y-1 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      
                      <div
                        className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-2 h-full bg-gradient-to-b ${step.color}`}>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}