import React from 'react';
import {
  StarIcon,
  ZapIcon,
  CrownIcon,
  DiamondIcon,
  CheckIcon } from
'lucide-react';
export function ServiceLevels() {
  const levels = [
  {
    title: 'الأساسي',
    description: 'دعم محدود للعمليات مع متابعة دورية.',
    icon: <StarIcon className="w-8 h-8 text-orange-500" />,
    color: 'orange',
    popular: false,
    features: ['دعم محدود للعمليات', 'متابعة دورية', 'تقارير شهرية']
  },
  {
    title: 'المتقدم',
    description: 'إشراف مستمر وتخصيص الموارد لضمان الأداء الأمثل.',
    icon: <ZapIcon className="w-8 h-8 text-slate-500" />,
    color: 'slate',
    popular: false,
    features: [
    'إشراف مستمر',
    'تخصيص الموارد',
    'تقارير أسبوعية',
    'مدير حساب مخصص']

  },
  {
    title: 'المتكامل',
    description:
    'إدارة شاملة للمشروع، مع متابعة دقيقة لكل مرحلة، وتحليل النتائج بشكل دوري.',
    icon: <CrownIcon className="w-8 h-8 text-amber-500" />,
    color: 'amber',
    popular: true,
    features: [
    'إدارة شاملة للمشروع',
    'متابعة دقيقة لكل مرحلة',
    'تحليل النتائج دورياً',
    'فريق دعم متكامل',
    'استشارات استراتيجية']

  },
  {
    title: 'خدمة VIP',
    description:
    'دعم شخصي مباشر من فريق الإدارة العليا مع تقارير مخصصة وتحليل متقدم.',
    icon: <DiamondIcon className="w-8 h-8 text-purple-500" />,
    color: 'purple',
    popular: false,
    features: [
    'دعم شخصي مباشر',
    'تدخل الإدارة العليا',
    'تقارير مخصصة',
    'تحليل متقدم',
    'أولوية قصوى',
    'تغطية 24/7']

  }];

  const getColorClasses = (color: string, popular: boolean) => {
    const baseClasses =
    'bg-white border rounded-3xl p-8 transition-all duration-300 relative flex flex-col';
    if (popular) {
      return `${baseClasses} border-amber-400 shadow-2xl shadow-amber-500/20 scale-100 md:scale-105 z-10`;
    }
    return `${baseClasses} border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2`;
  };
  return (
    <section id="service-levels" className=" bg-gray-50 px-[5%] py-[2%]">
      <div className=" mx-auto">
        {/* Image Banner Header */}
        <div className="relative rounded-3xl overflow-hidden mb-16 h-56 md:h-72">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80"
            alt="مستويات الخدمة"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-purple-900/90"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              مستويات الخدمة
            </h2>
            <p className="text-xl text-blue-100">
              نقدم حلولًا مرنة وفق احتياجات كل عميل
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {levels.map((level, index) =>
          <div
            key={index}
            className={getColorClasses(level.color, level.popular)}>
            
              {level.popular &&
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                  الأكثر طلباً
                </div>
            }

              <div className="mb-6 flex justify-center">
                <div className={`p-4 rounded-2xl bg-${level.color}-50`}>
                  {level.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                {level.title}
              </h3>
              <p className="text-gray-600 text-center mb-8 min-h-[80px]">
                {level.description}
              </p>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {level.features.map((feature, fIndex) =>
                <li key={fIndex} className="flex items-start">
                      <CheckIcon
                    className={`w-5 h-5 ml-3 flex-shrink-0 text-${level.color}-500`} />
                  
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                )}
                </ul>
              </div>

              <button
              className={`mt-8 w-full py-3 rounded-xl font-bold transition-colors duration-300 ${level.popular ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/30' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
              
                اختيار الباقة
              </button>
            </div>
          )}
        </div>
      </div>
    </section>);

}