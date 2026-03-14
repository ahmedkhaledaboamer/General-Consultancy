import { ClockIcon, ActivityIcon, WrenchIcon, FileTextIcon } from 'lucide-react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
export function CommitmentsSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const commitments = [
  {
    title: 'استجابة سريعة',
    description: 'الرد على جميع استفسارات العملاء خلال 24 ساعة.',
    icon: <ClockIcon className="w-8 h-8 text-blue-500" />,
    image:
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80'
  },
  {
    title: 'متابعة مستمرة',
    description: 'متابعة دقيقة ومستمرة لجميع المشاريع.',
    icon: <ActivityIcon className="w-8 h-8 text-purple-500" />,
    image:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80'
  },
  {
    title: 'حلول فورية',
    description: 'تقديم حلول فورية لأي تحديات أو عراقيل في التنفيذ.',
    icon: <WrenchIcon className="w-8 h-8 text-emerald-500" />,
    image:
    'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&q=80'
  },
  {
    title: 'شفافية ومصداقية',
    description: 'تقارير دورية لضمان الشفافية والمصداقية.',
    icon: <FileTextIcon className="w-8 h-8 text-amber-500" />,
    image:
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80'
  }];

  return (
    <section className="p-[5%] bg-gray-50">
      <div className=" mx-auto">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            التزاماتنا بالاستجابة
          </h2>
          <p className="text-lg text-gray-600">
            نحن نلتزم بتقديم أفضل تجربة لعملائنا من خلال تواصل فعال ومستمر
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, index) =>
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group overflow-hidden">
            
              {/* Card Image */}
              <div className="h-40 overflow-hidden relative">
                <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={400}
                height={400}
              />
              
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md`}>
                  {item.icon}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}