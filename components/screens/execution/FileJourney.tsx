import {
  InboxIcon,
  MapPinIcon,
  PlayCircleIcon,
  RefreshCcwIcon,
  FlagIcon } from
'lucide-react';
export function FileJourney() {
  const phases = [
  {
    title: 'مرحلة الاستلام',
    description: 'تسجيل الطلب وفهم احتياجات العميل بدقة.',
    icon: <InboxIcon className="w-6 h-6" />,
    color: 'bg-blue-500',
    image:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80'
  },
  {
    title: 'مرحلة التخطيط',
    description: 'وضع خطة تنفيذية واضحة مع تحديد الموارد والمهام.',
    icon: <MapPinIcon className="w-6 h-6" />,
    color: 'bg-indigo-500',
    image:
    'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&q=80'
  },
  {
    title: 'مرحلة التنفيذ',
    description: 'توزيع المهام ومتابعة الأداء بالوقت الفعلي.',
    icon: <PlayCircleIcon className="w-6 h-6" />,
    color: 'bg-purple-500',
    image:
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&q=80'
  },
  {
    title: 'مرحلة المراجعة والتحسين',
    description: 'تقييم الأداء وتحسين العمليات.',
    icon: <RefreshCcwIcon className="w-6 h-6" />,
    color: 'bg-pink-500',
    image:
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&q=80'
  },
  {
    title: 'مرحلة التسليم النهائي',
    description: 'تقديم النتائج مع تحليل كامل وموثق.',
    icon: <FlagIcon className="w-6 h-6" />,
    color: 'bg-emerald-500',
    image:
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&q=80'
  }];

  return (
    <section className="py-[2%] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&q=80"
          alt="مكتب حديث"
          className="w-full h-full object-cover opacity-5" />
        
      </div>

      <div className=" mx-auto px-[5%] relative z-10">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            كيف يتحرك الملف داخل المؤسسة؟
          </h2>
          <p className="text-lg text-gray-600">
            نضمن وضوح المسار لجميع الأطراف
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 right-0 left-0 h-1 bg-gradient-to-l from-blue-500 via-purple-500 to-emerald-500 rounded-full opacity-30"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {phases.map((phase, index) =>
            <div
              key={index}
              className="flex flex-col items-center text-center group">
              
                {/* Phase Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                  <img
                  src={phase.image}
                  alt={phase.title}
                  className="w-full h-full object-cover" />
                
                  <div
                  className={`absolute inset-0 ${phase.color} opacity-30`}>
                </div>
                </div>

                <div
                className={`w-12 h-12 rounded-xl ${phase.color} text-white flex items-center justify-center shadow-lg mb-4 transform transition-transform duration-300 group-hover:rotate-6 relative`}>
                
                  {phase.icon}
                  {/* Mobile connecting line */}
                  {index !== phases.length - 1 &&
                <div className="lg:hidden absolute top-full right-1/2 w-0.5 h-8 bg-gray-200 translate-x-1/2"></div>
                }
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}