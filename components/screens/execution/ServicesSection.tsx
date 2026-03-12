import React from 'react';
import {
  LayoutIcon,
  CogIcon,
  FolderKanbanIcon,
  GaugeIcon,
  GraduationCapIcon } from
'lucide-react';
export function ServicesSection() {
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
  },
  {
    title: 'التدريب والدعم التنفيذي',
    icon: <GraduationCapIcon className="w-10 h-10 text-rose-600" />,
    color: 'rose'
  }];

  return (
    <section id="services" className="py-[2%] bg-white relative">
      <div className=" mx-auto px-[5%]">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              خدماتنا <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                الشاملة
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نقدم جميع خدمات الشركة الاستشارية والتنفيذية ضمن إطار عملي واضح
              يضمن تحقيق أهدافك بأعلى معايير الجودة والكفاءة.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="خدمات استشارية"
                className="w-full h-64 object-cover" />
              
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) =>
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-${service.color}-300 transition-all duration-300 group`}>
                
                  <div
                  className={`w-16 h-16 rounded-xl bg-${service.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-${service.color}-100 transition-all duration-300`}>
                  
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
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