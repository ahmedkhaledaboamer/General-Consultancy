"use client";
import { motion } from 'framer-motion';
import {
  UsersIcon,
  BuildingIcon,
  RocketIcon,
  GlobeIcon,
  BriefcaseIcon,
  LandmarkIcon,
  MapIcon } from
'lucide-react';
const clients = [
{
  text: 'رجال الأعمال والمستثمرين',
  icon: UsersIcon,
  color: 'from-sky-400 to-blue-600'
},
{
  text: 'الشركات العائلية',
  icon: BuildingIcon,
  color: 'from-emerald-400 to-teal-600'
},
{
  text: 'الشركات الناشئة',
  icon: RocketIcon,
  color: 'from-violet-400 to-purple-600'
},
{
  text: 'الشركات المحلية والدولية',
  icon: GlobeIcon,
  color: 'from-magenta-400 to-pink-600'
},
{
  text: 'المستثمرين الأجانب',
  icon: BriefcaseIcon,
  color: 'from-orange-400 to-red-500'
},
{
  text: 'المؤسسات الحكومية وشبه الحكومية',
  icon: LandmarkIcon,
  color: 'from-cyan-400 to-blue-500'
},
{
  text: 'الجهات التي تسعى لتطوير مشاريع جديدة أو توسيع استثماراتها',
  icon: MapIcon,
  color: 'from-gold to-amber'
}];

export function WhoWeServe() {
  return (
    <section className="py-0 bg-white relative overflow-hidden flex flex-col lg:flex-row">
      {/* Left Side - Image (Full height on desktop) */}
      <div className="w-full lg:w-5/12 h-[400px] lg:h-auto relative">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
          alt="Professionals"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent lg:hidden"></div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-7/12 py-24 px-4 sm:px-6 lg:px-16 relative z-10 bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlMmU4ZjAiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9zdmc+')] opacity-50 z-0"></div>

        <div className="relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="mb-12">
            
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">
              من نخدم؟
            </h2>
            <p className="text-xl text-slate-600 mb-8 font-light leading-relaxed">
              نقدم خدماتنا لشريحة واسعة من المستثمرين والمؤسسات التي تسعى إلى
              تحقيق النمو والتوسع.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-sky via-magenta to-gold rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clients.map((client, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.05
              }}
              className={`flex items-center p-5 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group ${index === clients.length - 1 ? 'sm:col-span-2' : ''}`}>
              
                <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center ml-4 flex-shrink-0 shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                
                  <client.icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-navy text-lg">
                  {client.text}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}