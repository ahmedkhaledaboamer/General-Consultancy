import {
  BookOpenIcon,
  MapIcon,
  ShieldCheckIcon,
  LayersIcon } from
'lucide-react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
export function EntityDictionary() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const dictionaryItems = [
  {
    title: 'الوحدة التنفيذية',
    description: 'الفريق المسؤول عن التطبيق الفعلي للاستراتيجية.',
    icon: <LayersIcon className="w-8 h-8 text-blue-500" />,
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-50',
    image:
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80'
  },
  {
    title: 'المسار التنفيذي',
    description: 'الخطوات العملية التي يتم اتباعها لتحويل الأفكار إلى نتائج.',
    icon: <MapIcon className="w-8 h-8 text-purple-500" />,
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-50',
    image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80'
  },
  {
    title: 'معايير الجودة',
    description: 'القواعد والإجراءات التي تضمن دقة وكفاءة التنفيذ.',
    icon: <ShieldCheckIcon className="w-8 h-8 text-emerald-500" />,
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-50',
    image:
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80'
  },
  {
    title: 'مستويات الخدمة',
    description: 'التصنيف الذي يحدد حجم الموارد والدعم المقدم لكل مشروع.',
    icon: <BookOpenIcon className="w-8 h-8 text-amber-500" />,
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-50',
    image:
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80'
  }];

  return (
    <section className=" bg-gradient-to-b from-gray-50 to-white px-[5%] py-[2%]">
      <div className=" mx-auto">
        <div className="flex flex-col items-center justify-center relative rounded-3xl overflow-hidden mb-16 h-64 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&q=80"
            alt="قاموس الكيان"
            className="w-full h-full object-cover"
            width={1200}
            height={1200}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
          <div className="absolute text-center p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              قاموس الكيان
            </h2>
            <p className="text-lg text-gray-200">
              لتسهيل التواصل وضمان فهم موحد لكل عناصر العمل
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dictionaryItems.map((item, index) =>
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${item.borderColor} relative overflow-hidden group`}>
            
              <div className="h-40 overflow-hidden relative">
                <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={400}
                height={400}
              />
              
                <div
                className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent`}>
              </div>
                <div
                className={`absolute top-4 ${!isRTL ? 'left-4' : 'right-4'} w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center shadow-md backdrop-blur-sm`}>
                
                  {item.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}