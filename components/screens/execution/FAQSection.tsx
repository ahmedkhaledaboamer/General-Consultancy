"use client";
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import Image from 'next/image';
export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const faqs = [
  {
    question: 'كيف يتم تحديد مستوى الخدمة المناسب لمؤسستي؟',
    answer:
    'نقوم بعقد جلسة استشارية أولية لفهم احتياجات مؤسستك، حجم العمليات، والأهداف المرجوة. بناءً على هذا التحليل، نقترح مستوى الخدمة الذي يضمن لك أفضل عائد على الاستثمار ويحقق أهدافك بكفاءة.'
  },
  {
    question: 'ما هي آليات متابعة المشروع بشكل مباشر؟',
    answer:
    'نوفر لوحة تحكم رقمية مخصصة للعملاء تتيح متابعة تقدم المشروع في الوقت الفعلي، بالإضافة إلى تقارير دورية واجتماعات مجدولة مع مدير المشروع المخصص لضمان الشفافية التامة.'
  },
  {
    question: 'هل يمكن تعديل خطة التنفيذ أثناء العمل؟',
    answer:
    'نعم، نعتمد منهجية مرنة تسمح بتعديل الخطط التنفيذية بناءً على المتغيرات والمستجدات، مع ضمان عدم التأثير السلبي على الجودة أو الأهداف الرئيسية للمشروع.'
  },
  {
    question: 'ما هي معايير ضمان الجودة والتقارير الدورية؟',
    answer:
    'نطبق معايير الجودة العالمية (ISO) في جميع عملياتنا، ونقدم تقارير دورية مفصلة تتضمن مؤشرات الأداء الرئيسية (KPIs)، تحليل المخاطر، ونسب الإنجاز مقارنة بالخطة الزمنية.'
  },
  {
    question: 'ما الدعم المتاح بعد انتهاء المشروع؟',
    answer:
    'نقدم فترة دعم ما بعد التسليم لضمان استقرار العمليات، بالإضافة إلى خيارات صيانة وتحديث مستمرة حسب مستوى الخدمة المختار لضمان استدامة النتائج.'
  }];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section id="faq" className="py-[2%] bg-gray-50 px-[5%]">
      <div className=" mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600">
            إجابات وافية لأهم استفساراتكم حول خدماتنا
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mx-auto">
          {/* Side Image */}
          <div className="w-full lg:w-2/5 relative">
            <div className="sticky top-28">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/imgs/A dynamic tourism project deve/image_67.webp"
                  alt="خدمة العملاء"
                  className="w-full h-[400px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] object-cover"
                  width={800}
                  height={800}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 right-6 left-6 text-white">
                  <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-2">هل لديك سؤال؟</h3>
                  <p className="text-blue-100 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    فريقنا جاهز للإجابة على جميع استفساراتكم على مدار الساعة
                  </p>
                </div>
              </div>
              
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="w-full lg:w-3/5 space-y-4">
            {faqs.map((faq, index) =>
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === index ? 'border-blue-500 shadow-md' : 'border-gray-200 hover:border-blue-300'}`}>
                
                <button
                className="cursor-pointer w-full px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-7 xl:px-12 xl:py-8 2xl:px-14 2xl:py-9 flex items-center justify-between text-right focus:outline-none"
                onClick={() => toggleAccordion(index)}>
                
                  <span
                  className={`text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold ${activeIndex === index ? 'text-blue-600' : 'text-gray-900'}`}>
                  
                    {faq.question}
                  </span>
                  <span
                  className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                  
                    {activeIndex === index ?
                  <ChevronUpIcon className="w-5 h-5" /> :

                  <ChevronDownIcon className="w-5 h-5" />
                  }
                  </span>
                </button>

                <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                
                  <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}