import {
  CompassIcon,
  SettingsIcon,
  ShieldIcon,
  MessageSquareIcon,
  BarChart3Icon,
  LightbulbIcon } from
'lucide-react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
export function ExecutionUnits() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const units = [
  {
    title: 'وحدة الاستراتيجية والتخطيط',
    description: 'تصميم الخطة بشكل متكامل وفق أهداف العميل.',
    icon: <CompassIcon className="w-6 h-6 text-white" />,
    gradient: 'from-blue-600 to-blue-400',
    image:
    '/imgs/A dynamic logistics environmen/image_2.webp'
  },
  {
    title: 'وحدة العمليات والإدارة',
    description: 'تطبيق الخطة ومراقبة سير التنفيذ.',
    icon: <SettingsIcon className="w-6 h-6 text-white" />,
    gradient: 'from-indigo-600 to-indigo-400',
    image:
    '/imgs/A dynamic logistics investment/image_9.webp'
  },
  {
    title: 'وحدة الجودة والتميز',
    description: 'ضمان الالتزام بالمعايير الدولية.',
    icon: <ShieldIcon className="w-6 h-6 text-white" />,
    gradient: 'from-emerald-600 to-emerald-400',
    image:
    '/imgs/A dynamic logistics project ma/image_47.webp'
  },
  {
    title: 'وحدة التواصل والمتابعة',
    description: 'ربط العميل بالعملية التنفيذية لضمان الشفافية والمصداقية.',
    icon: <MessageSquareIcon className="w-6 h-6 text-white" />,
    gradient: 'from-amber-500 to-amber-400',
    image:
    '/imgs/A dynamic logistics services e/image_26.webp'
  },
  {
    title: 'وحدة التحليل والتقارير',
    description: 'تقديم بيانات دقيقة وموثوقة لمتابعة الأداء واتخاذ القرارات.',
    icon: <BarChart3Icon className="w-6 h-6 text-white" />,
    gradient: 'from-purple-600 to-purple-400',
    image:
    '/imgs/A dynamic real estate project/image_24.webp'
  },
  {
    title: 'وحدة الابتكار والتطوير',
    description: 'تطوير حلول جديدة وتحسين المنهجيات باستخدام أحدث التقنيات وأفضل الممارسات.',
    icon: <LightbulbIcon className="w-6 h-6 text-white" />,
    gradient: 'from-rose-600 to-rose-400',
    image:
    '/imgs/A dynamic sports project manag/image_3.webp'
  }];

  return (
    <section className=" bg-white p-[5%]">
      <div className=" mx-auto">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4">
            وحدات التنفيذ
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600">
            فريقنا متعدد الوحدات لضمان سير المشروع بكفاءة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {units.map((unit, index) =>
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group `}>
            
              {/* Image Header with Gradient Overlay */}
              <div className="h-48 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] relative overflow-hidden">
                <Image
                src={unit.image}
                alt={unit.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                width={600}
                height={600}
              />
              
                <div
                className={`absolute inset-0 bg-gradient-to-t ${unit.gradient} opacity-60 mix-blend-multiply`}>
              </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Icon Badge */}
                <div
                className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rounded-xl bg-gradient-to-br ${unit.gradient} flex items-center justify-center shadow-lg border-2 border-white/30`}>
                
                  {unit.icon}
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-3">
                  {unit.title}
                </h3>
                <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600">{unit.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}