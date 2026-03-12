import {
  CompassIcon,
  SettingsIcon,
  ShieldIcon,
  MessageSquareIcon,
  BarChart3Icon } from
'lucide-react';
export function ExecutionUnits() {
  const units = [
  {
    title: 'وحدة الاستراتيجية والتخطيط',
    description: 'تصميم الخطة بشكل متكامل وفق أهداف العميل.',
    icon: <CompassIcon className="w-6 h-6 text-white" />,
    gradient: 'from-blue-600 to-blue-400',
    image:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
  },
  {
    title: 'وحدة العمليات والإدارة',
    description: 'تطبيق الخطة ومراقبة سير التنفيذ.',
    icon: <SettingsIcon className="w-6 h-6 text-white" />,
    gradient: 'from-indigo-600 to-indigo-400',
    image:
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80'
  },
  {
    title: 'وحدة الجودة والتميز',
    description: 'ضمان الالتزام بالمعايير الدولية.',
    icon: <ShieldIcon className="w-6 h-6 text-white" />,
    gradient: 'from-emerald-600 to-emerald-400',
    image:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'
  },
  {
    title: 'وحدة التواصل والمتابعة',
    description: 'ربط العميل بالعملية التنفيذية لضمان الشفافية والمصداقية.',
    icon: <MessageSquareIcon className="w-6 h-6 text-white" />,
    gradient: 'from-amber-500 to-amber-400',
    image:
    'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=600&q=80'
  },
  {
    title: 'وحدة التحليل والتقارير',
    description: 'تقديم بيانات دقيقة وموثوقة لمتابعة الأداء واتخاذ القرارات.',
    icon: <BarChart3Icon className="w-6 h-6 text-white" />,
    gradient: 'from-purple-600 to-purple-400',
    image:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
  }];

  return (
    <section className=" bg-white px-[5%] py-[2%]">
      <div className=" mx-auto">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            وحدات التنفيذ
          </h2>
          <p className="text-lg text-gray-600">
            فريقنا متعدد الوحدات لضمان سير المشروع بكفاءة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {units.map((unit, index) =>
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group `}>
            
              {/* Image Header with Gradient Overlay */}
              <div className="h-48 relative overflow-hidden">
                <img
                src={unit.image}
                alt={unit.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
                <div
                className={`absolute inset-0 bg-gradient-to-t ${unit.gradient} opacity-60 mix-blend-multiply`}>
              </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Icon Badge */}
                <div
                className={`absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${unit.gradient} flex items-center justify-center shadow-lg border-2 border-white/30`}>
                
                  {unit.icon}
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {unit.title}
                </h3>
                <p className="text-gray-600">{unit.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}