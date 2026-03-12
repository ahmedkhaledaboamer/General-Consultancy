import { UsersIcon, BriefcaseIcon, AwardIcon } from 'lucide-react';
export function AboutSection() {
  const stats = [
  {
    icon: <BriefcaseIcon className="w-8 h-8 text-blue-600" />,
    value: '+15',
    label: 'سنوات من الخبرة'
  },
  {
    icon: <AwardIcon className="w-8 h-8 text-purple-600" />,
    value: '+200',
    label: 'مشروع ناجح'
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-emerald-600" />,
    value: '+150',
    label: 'عميل راضٍ'
  }];

  return (
    <section id="about" className="bg-white relative overflow-hidden px-[5%] py-[2%]">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm mb-2">
            من نحن
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            شريكك الموثوق لتحقيق{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              التميز والابتكار
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            نحن فريق استشاري وتنفيذي متخصص يجمع بين الخبرة العملية
            والاستراتيجية العميقة، قادر على إدارة المشاريع الكبيرة والمعقدة،
            وضمان تحويل الأفكار إلى خطوات تنفيذية واضحة. تجربتنا تشمل قطاعات
            متعددة، مما يجعلنا شريكًا موثوقًا لكل مؤسسة تسعى لتحقيق التميز
            والابتكار.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {stats.map((stat, index) =>
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              
                <div className="flex justify-center mb-4 bg-white w-16 h-16 mx-auto rounded-full items-center shadow-sm">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {stat.label}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10 mix-blend-overlay"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="فريق العمل"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            
          </div>
          {/* Decorative Background Elements */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-blue-600/20 rounded-3xl z-0"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>);

}