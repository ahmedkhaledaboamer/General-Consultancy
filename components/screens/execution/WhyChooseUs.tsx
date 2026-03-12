import React from 'react';
import {
  TrendingUpIcon,
  AwardIcon,
  ClipboardCheckIcon,
  PuzzleIcon,
  EyeIcon } from
'lucide-react';
export function WhyChooseUs() {
  const reasons = [
  {
    title: 'خبرة طويلة ومتنوعة',
    description: 'في الاستشارات والتنفيذ المؤسسي.',
    icon: <AwardIcon className="w-8 h-8 text-blue-600" />,
    bgColor: 'bg-blue-100'
  },
  {
    title: 'التزام كامل بالجودة',
    description: 'والمعايير الدولية في كافة العمليات.',
    icon: <ClipboardCheckIcon className="w-8 h-8 text-emerald-600" />,
    bgColor: 'bg-emerald-100'
  },
  {
    title: 'إدارة دقيقة للمشاريع',
    description: 'تضمن تحقيق النتائج بكفاءة وشفافية.',
    icon: <TrendingUpIcon className="w-8 h-8 text-purple-600" />,
    bgColor: 'bg-purple-100'
  },
  {
    title: 'حلول مخصصة',
    description: 'تتماشى مع طبيعة كل مؤسسة وأهدافها.',
    icon: <PuzzleIcon className="w-8 h-8 text-amber-600" />,
    bgColor: 'bg-amber-100'
  },
  {
    title: 'متابعة مستمرة',
    description: 'لكل مرحلة من مراحل التنفيذ لضمان نجاح المشروع.',
    icon: <EyeIcon className="w-8 h-8 text-rose-600" />,
    bgColor: 'bg-rose-100'
  }];

  return (
    <section className="py-[2%] bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="فريق العمل"
          className="w-full h-full object-cover opacity-15" />
        
      </div>
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage:
          'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className=" mx-auto px-[5%] relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Side */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="فريق العمل المحترف"
                className="w-full h-[500px] object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              <div className="absolute bottom-6 right-6 left-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center flex-1">
                    <div className="text-3xl font-bold">+15</div>
                    <div className="text-sm opacity-80">سنة خبرة</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center flex-1">
                    <div className="text-3xl font-bold">+200</div>
                    <div className="text-sm opacity-80">مشروع</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-3/5">
            <div className="text-right mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                لماذا تختارنا؟
              </h2>
              <p className="text-xl text-blue-200">
                نحن نقدم قيمة حقيقية ونتائج ملموسة لمؤسستك
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, index) =>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300 group flex items-center gap-5">
                
                  <div
                  className={`${reason.bgColor} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-white">
                      {reason.title}
                    </h3>
                    <p className="text-blue-100">{reason.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}