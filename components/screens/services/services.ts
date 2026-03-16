export interface SubService {
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  image: string;
  subServices: SubService[];
}

export const services: ServiceCategory[] = [
{
  id: 'investment',
  name: 'خدمات الاستثمار وإدارة الاستثمارات',
  icon: 'TrendingUp',
  image:
  '/imgs/A professional project deliver/image_9.webp',
  subServices: [
  {
    name: 'أنشطة الاستثمار بالحساب الخاص',
    description:
    'تصميم وتنفيذ فرص استثمارية خاصة تناسب المستثمرين الفرديين والمؤسسات، مع تحقيق التوازن بين العائد والمخاطر.',
    icon: 'Briefcase',
    image:
    '/imgs/A professional information cen/image_18.webp'
  },
  {
    name: 'إدارة الاستثمارات وتطوير المحافظ الاستثمارية',
    description:
    'تنظيم وتطوير المحافظ الاستثمارية لضمان تحقيق أهداف النمو المالي المستدام والتحكم بالمخاطر.',
    icon: 'PieChart',
    image:
    '/imgs/A professional consulting stud/image_5.webp'
  },
  {
    name: 'إدارة وتشغيل الاستثمارات العامة',
    description:
    'تقديم خدمات تشغيلية واستراتيجية لإدارة الاستثمارات الحكومية والخاصة لتحقيق الاستفادة القصوى من الموارد.',
    icon: 'Landmark',
    image:
    '/imgs/A professional consulting fram/image_12.webp'
  },
  {
    name: 'الاستثمار في المشاريع الصناعية وإدارتها',
    description:
    'تطوير وإدارة مشاريع صناعية بهدف تحسين الإنتاجية وتعظيم العوائد المالية للمستثمرين.',
    icon: 'Factory',
    image:
    '/imgs/A professional consulting envi/image_4.webp'
  },
  {
    name: 'الاستثمار في المشاريع الزراعية وإدارتها',
    description:
    'تقديم حلول استثمارية متكاملة للمشاريع الزراعية، مع تحسين الإنتاجية والاستدامة البيئية.',
    icon: 'Tractor',
    image:
    '/imgs/A professional consulting envi/image_1.webp'
  },
  {
    name: 'الاستثمار في المشاريع السياحية وإدارتها',
    description:
    'تطوير وتشغيل المشاريع السياحية لتعزيز القطاع وجذب الاستثمارات المحلية والدولية.',
    icon: 'Palmtree',
    image:
    '/imgs/A policy and legislative resea/image_28.webp'
  },
  {
    name: 'الاستثمار في مشاريع الطاقة وإدارتها',
    description:
    'تقديم حلول استثمارية متخصصة في الطاقة التقليدية والمتجددة لضمان كفاءة التشغيل والعائد المالي.',
    icon: 'Zap',
    image:
    '/imgs/A modern project development e/image_16.webp'
  },
  {
    name: 'الاستثمار في مشاريع الصحة والتنمية',
    description:
    'دعم الاستثمار في القطاع الصحي لتعزيز جودة الخدمات وتحقيق نمو اقتصادي مستدام.',
    icon: 'HeartPulse',
    image:
    '/imgs/A modern professional environm/image_10.webp'
  },
  {
    name: 'الاستثمار في المشاريع التعليمية وإدارتها',
    description:
    'تطوير مؤسسات تعليمية ومشاريع تدريبية مبتكرة تلبي احتياجات السوق ومتطلبات التنمية.',
    icon: 'GraduationCap',
    image:
    '/imgs/A modern operational control c/image_8.webp'
  },
  {
    name: 'الاستثمار في المشاريع الرياضية وإدارتها',
    description:
    'تقديم استشارات استثمارية متخصصة لتعزيز القطاع الرياضي وإدارة الفعاليات والمرافق.',
    icon: 'Trophy',
    image:
    '/imgs/A modern operational command c/image_4.webp'
  },
  {
    name: 'الاستثمار في مشاريع تجارة التجزئة وإدارتها',
    description:
    'دعم مشاريع البيع بالتجزئة عبر إدارة العمليات وتحسين الأداء التجاري وزيادة الربحية.',
    icon: 'ShoppingCart',
    image:
    '/imgs/A modern media and communicati/image_0.webp'
  },
  {
    name: 'الاستثمار في المشاريع التكنولوجية وإدارتها',
    description:
    'تطوير وإدارة مشاريع تقنية مبتكرة لتحقيق النمو التكنولوجي وتحسين الكفاءة التشغيلية.',
    icon: 'Cpu',
    image:
    '/imgs/A modern intake process enviro/image_25.webp'
  }]

},
{
  id: 'financial',
  name: 'الاستشارات المالية والمصرفية',
  icon: 'Landmark',
  image:
  '/imgs/A modern conceptual scene illu/image_11.webp',
  subServices: [
  {
    name: 'استشارات الرهن العقاري',
    description:
    'تقديم المشورة المالية للمستثمرين والشركات للحصول على أفضل الحلول في الرهون العقارية وتمويل المشاريع.',
    icon: 'Home',
    image:
    '/imgs/A luminous conceptual workspac/image_13.webp'
  },
  {
    name: 'الاستشارات المصرفية',
    description:
    'تقديم حلول متخصصة لإدارة العلاقات المصرفية والعمليات المالية بما يعزز الكفاءة التشغيلية.',
    icon: 'Building',
    image:
    '/imgs/A luminous conceptual scene wi/image_23.webp'
  },
  {
    name: 'الاستشارات المتعلقة بالتمويل والاستثمار',
    description:
    'تحليل الخيارات التمويلية ووضع استراتيجيات استثمارية لتحقيق عوائد مالية مستقرة.',
    icon: 'LineChart',
    image:
    '/imgs/A goalsetting concept scene wi/image_23.webp'
  }]

},
{
  id: 'health',
  name: 'الاستشارات الصحية وإدارة القطاع الصحي',
  icon: 'Heart',
  image:
  '/imgs/A futuristic professional envi/image_21.webp',
  subServices: [
  {
    name: 'خدمات استشارات إدارة المؤسسات الصحية',
    description:
    'تقديم استشارات لتحسين إدارة المستشفيات والمراكز الصحية وزيادة كفاءة العمليات.',
    icon: 'Hospital',
    image:
    '/imgs/A diverse sector consulting sc/image_13.webp'
  },
  {
    name: 'الاستشارات الصحية والتخطيط الصحي',
    description:
    'وضع استراتيجيات وخطط تشغيلية لتعزيز جودة الخدمات الصحية وتوسيع نطاق الوصول إليها.',
    icon: 'Activity',
    image:
    '/imgs/A continuous improvement syste/image_27.webp'
  },
  {
    name: 'استشارات السلامة والصحة المهنية',
    description:
    'تقديم حلول لضمان بيئة عمل آمنة وتقليل المخاطر الصحية للعاملين.',
    icon: 'ShieldAlert',
    image:
    '/imgs/A continuous improvement conce/image_21.webp'
  }]

},
{
  id: 'strategic',
  name: 'الاستشارات الاستراتيجية والإدارية',
  icon: 'Target',
  image:
  '/imgs/A consulting services overview/image_14.webp',
  subServices: [
  {
    name: 'الخدمات الاستشارية الاستراتيجية',
    description:
    'تصميم خطط استراتيجية تساعد المؤسسات على تحقيق أهدافها طويلة المدى وتحقيق ميزة تنافسية.',
    icon: 'Compass',
    image:
    '/imgs/A consulting service tier visu/image_17.webp'
  },
  {
    name: 'الاستشارات الإدارية والدراسات التنظيمية',
    description:
    'تحليل الهياكل التنظيمية وتحسين العمليات الداخلية لزيادة كفاءة الأداء الإداري.',
    icon: 'Network',
    image:
    '/imgs/A conceptual transformation sc/image_6.webp'
  },
  {
    name: 'خدمات إدارة المشاريع',
    description:
    'إدارة وتنفيذ المشاريع بمهنية عالية لضمان تحقيق الأهداف ضمن الجدول الزمني والميزانية.',
    icon: 'KanbanSquare',
    image:
    '/imgs/A conceptual operational flow/image_32.webp'
  },
  {
    name: 'استشارات تطوير المشاريع',
    description:
    'تقديم المشورة لتطوير الأفكار والمبادرات إلى مشاريع قابلة للتنفيذ وناجحة.',
    icon: 'Lightbulb',
    image:
    '/imgs/A comprehensive consulting ser/image_42.webp'
  },
  {
    name: 'خدمات حاضنات الأعمال ودعم المشاريع الناشئة',
    description:
    'دعم رواد الأعمال والمشاريع الناشئة عبر توفير التدريب والإرشاد والاستشارات العملية.',
    icon: 'Rocket',
    image:
    '/imgs/A sports research consulting e/image_19.webp'
  },
  {
    name: 'إعداد دراسات الجدوى الاقتصادية',
    description:
    'تحليل المشاريع لتقييم جدواها الاقتصادية وتحديد فرص النجاح والمخاطر.',
    icon: 'FileText',
    image:
    '/imgs/A project evaluation environme/image_5.webp'
  }]

},
{
  id: 'logistics',
  name: 'الاستشارات اللوجستية والتقنية',
  icon: 'Truck',
  image:
  '/imgs/A professional standards visua/image_34.webp',
  subServices: [
  {
    name: 'الاستشارات اللوجستية',
    description:
    'تحسين سلسلة الإمداد والتوزيع لضمان كفاءة العمليات وتقليل التكاليف.',
    icon: 'Package',
    image:
    '/imgs/A professional excellence conc/image_10.webp'
  },
  {
    name: 'استشارات شحن البضائع',
    description:
    'تقديم حلول متخصصة لنقل البضائع بأمان وفعالية داخل وخارج الأسواق المحلية والدولية.',
    icon: 'Ship',
    image:
    '/imgs/A performance evaluation envir/image_26.webp'
  },
  {
    name: 'استشارات الجمارك',
    description:
    'مساعدة الشركات على الامتثال للوائح الجمارك وتسهيل الإجراءات لتسريع حركة البضائع.',
    icon: 'ClipboardCheck',
    image:
    '/imgs/A global consulting standards/image_21.webp'
  },
  {
    name: 'استشارات المعدات الفنية والتقنية',
    description:
    'تقديم توصيات لاختيار المعدات المناسبة وتحسين كفاءتها التشغيلية.',
    icon: 'Wrench',
    image:
    '/imgs/A modern agricultural investme/image_12.webp'
  },
  {
    name: 'استشارات التجهيزات الفنية والتقنية',
    description:
    'تصميم وتنفيذ الحلول التقنية والتجهيزات لتلبية احتياجات العمليات المؤسسية.',
    icon: 'Settings',
    image:
    '/imgs/An elite executive support env/image_36.webp'
  },
  {
    name: 'استشارات الجودة وتوحيد المعايير والقياس',
    description:
    'وضع أنظمة لضمان الجودة وتوحيد المعايير وتحسين الأداء المؤسسي.',
    icon: 'Ruler',
    image:
    '/imgs/A conceptual evaluation and im/image_8.webp'
  }]

},
{
  id: 'tourism',
  name: 'الاستشارات السياحية والضيافة والرياضة',
  icon: 'Plane',
  image:
  '/imgs/A transparency and integrity c/image_11.webp',
  subServices: [
  {
    name: 'استشارات إدارة الضيافة',
    description:
    'تقديم حلول لتحسين جودة الخدمات الفندقية والضيافة وزيادة رضا العملاء.',
    icon: 'Coffee',
    image:
    '/imgs/A symbolic institutional value/image_9.webp'
  },
  {
    name: 'الاستشارات الفندقية',
    description:
    'تطوير استراتيجيات تشغيل الفنادق وتحسين الأداء المالي والتشغيلي.',
    icon: 'BedDouble',
    image:
    '/imgs/A service framework scene with/image_23.webp'
  },
  {
    name: 'استشارات السياحة والترفيه',
    description:
    'تصميم برامج سياحية وترفيهية مبتكرة لجذب الزوار وزيادة العوائد.',
    icon: 'Map',
    image:
    '/imgs/A responsibilitydriven busines/image_13.webp'
  },
  {
    name: 'الاستشارات والدراسات الرياضية',
    description:
    'تقديم التحليل والتخطيط لتعزيز الأداء الرياضي وتطوير البنية التحتية للرياضة.',
    icon: 'Dumbbell',
    image:
    '/imgs/A quality standards consulting/image_31.webp'
  },
  {
    name: 'تسويق الفعاليات الرياضية',
    description:
    'تطوير استراتيجيات تسويقية لجذب الجمهور والرعاة للفعاليات الرياضية.',
    icon: 'Ticket',
    image:
    '/imgs/A quality excellence concept w/image_39.webp'
  },
  {
    name: 'استشارات تطوير الوجهات السياحية',
    description:
    'تحليل وتطوير الوجهات السياحية من خلال وضع استراتيجيات متكاملة لزيادة الجاذبية السياحية وتحسين تجربة الزوار وتعظيم العائد الاقتصادي.',
    icon: 'Compass',
    image:
    '/imgs/A quality assurance system sce/image_19.webp'
  }]

},
{
  id: 'cultural',
  name: 'الاستشارات الثقافية والفنية',
  icon: 'Palette',
  image:
  '/imgs/A project implementation monit/image_45.webp',
  subServices: [
  {
    name: 'الاستشارات الثقافية',
    description:
    'دعم المؤسسات والمبادرات في التخطيط وتنفيذ المشاريع الثقافية بفعالية.',
    icon: 'Library',
    image:
    '/imgs/A professional quality assuran/image_22.webp'
  },
  {
    name: 'استشارات الفنون الجميلة',
    description:
    'تقديم الخبرة الفنية لتطوير معارض ومشاريع فنية وتحسين تجربة الجمهور.',
    icon: 'Image',
    image:
    '/imgs/A professional environment wit/image_1.webp'
  },
  {
    name: 'الاستشارات التراثية',
    description:
    'حماية وتعزيز التراث الثقافي من خلال مشاريع صيانة وتطوير مستدامة.',
    icon: 'Castle',
    image:
    '/imgs/A professional editorial works/image_6.webp'
  }]

},
{
  id: 'pr',
  name: 'خدمات العلاقات العامة والإعلان',
  icon: 'Megaphone',
  image:
  '/imgs/A startup incubation ecosystem/image_27.webp',
  subServices: [
  {
    name: 'خدمات العلاقات العامة',
    description:
    'بناء صورة إيجابية للمؤسسة وتعزيز التفاعل مع الجمهور والشركاء.',
    icon: 'Users',
    image:
    '/imgs/A professional editorial works/image_19.webp'
  },
  {
    name: 'إدارة العلاقات العامة',
    description: 'تنظيم الحملات والمبادرات لتعزيز حضور المؤسسة وسمعتها.',
    icon: 'MessageSquare',
    image:
    '/imgs/A modern monitoring and perfor/image_7.webp'
  },
  {
    name: 'استشارات العلاقات العامة',
    description:
    'تقديم النصائح الاستراتيجية لتحسين التواصل المؤسسي وبناء الثقة.',
    icon: 'Handshake',
    image:
    '/imgs/A modern editorialstyle worksp/image_22.webp'
  },
  {
    name: 'خدمات الإعلان',
    description:
    'تصميم وتنفيذ حملات إعلانية مبتكرة للوصول إلى الجمهور المستهدف.',
    icon: 'MonitorPlay',
    image:
    '/imgs/A modern conceptual scene with/image_26.webp'
  },
  {
    name: 'إعداد ونشر الكتيبات والنشرات',
    description: 'إنشاء محتوى مطبوع ومرئي يعكس هوية المؤسسة ورسالتها.',
    icon: 'BookOpen',
    image:
    '/imgs/A luminous editorialstyle work/image_28.webp'
  },
  {
    name: 'التسويق المباشر',
    description:
    'استراتيجيات للوصول المباشر للعملاء المحتملين وزيادة المبيعات.',
    icon: 'Mail',
    image:
    '/imgs/A live project monitoring envi/image_29.webp'
  },
  {
    name: 'ترويج المبيعات',
    description: 'تصميم حملات لتشجيع المبيعات وزيادة حصة السوق.',
    icon: 'Percent',
    image:
    '/imgs/A final delivery scene with or/image_38.webp'
  },
  {
    name: 'الإعلان عبر الإنترنت',
    description:
    'إدارة حملات رقمية عبر الشبكة للوصول إلى جمهور أوسع وتحقيق نتائج ملموسة.',
    icon: 'MousePointerClick',
    image:
    '/imgs/A corporate quality framework/image_2.webp'
  },
  {
    name: 'الخدمات الإعلانية عبر المواقع الإلكترونية',
    description:
    'تحسين التواجد الرقمي للمؤسسة من خلال الإعلانات المستهدفة على المواقع الإلكترونية.',
    icon: 'Globe',
    image:
    '/imgs/A continuous monitoring ecosys/image_40.webp'
  }]

},
{
  id: 'digital',
  name: 'خدمات الإعلام الرقمي والتسويق',
  icon: 'Share2',
  image:
  '/imgs/A conceptual scene with abstra/image_25.webp',
  subServices: [
  {
    name: 'خدمات الإعلام الاجتماعي',
    description:
    'إدارة حسابات وسائل التواصل الاجتماعي لبناء حضور رقمي مؤثر.',
    icon: 'Smartphone',
    image:
    '/imgs/An advanced operational manage/image_13.webp'
  },
  {
    name: 'إدارة الإعلام الرقمي',
    description:
    'تصميم استراتيجيات رقمية متكاملة لتعزيز الوعي بالعلامة التجارية وزيادة التفاعل.',
    icon: 'Laptop',
    image:
    '/imgs/A conceptual quality framework/image_16.webp'
  },
  {
    name: 'استشارات وسائل التواصل الاجتماعي',
    description:
    'تقديم توصيات لتحسين الأداء الرقمي وزيادة تأثير المحتوى على الجمهور.',
    icon: 'ThumbsUp',
    image:
    '/imgs/A bright editorialstyle worksp/image_11.webp'
  },
  {
    name: 'الاستشارات والدراسات الإعلامية',
    description:
    'تحليل البيئة الإعلامية وتقديم حلول لتعزيز الاستراتيجية الإعلامية للمؤسسة.',
    icon: 'BarChart2',
    image:
    '/imgs/A transparent project manageme/image_17.webp'
  },
  {
    name: 'الاستشارات والدراسات الإعلانية',
    description:
    'تطوير خطط إعلانية مبتكرة تضمن وصول الرسائل التسويقية بفعالية.',
    icon: 'PenTool',
    image:
    '/imgs/A symbolic executive leadershi/image_14.webp'
  },
  {
    name: 'إدارة عمليات التسويق',
    description:
    'تنفيذ ومتابعة جميع العمليات التسويقية لتحقيق أهداف النمو والتوسع.',
    icon: 'TrendingUp',
    image:
    '/imgs/A strategic management workspa/image_15.webp'
  }]

},
{
  id: 'talent',
  name: 'إدارة المواهب والوكالات الفنية',
  icon: 'Star',
  image:
  '/imgs/A sophisticated executive work/image_2.webp',
  subServices: [
  {
    name: 'إدارة وتشغيل وكالات اختيار الممثلين',
    description:
    'تقديم خدمات إدارة واختيار المواهب التمثيلية للمشاريع الفنية والإنتاج الإعلامي.',
    icon: 'Film',
    image:
    '/imgs/A refined project execution sc/image_0.webp'
  },
  {
    name: 'إدارة المواهب',
    description:
    'تطوير ورعاية المواهب الفنية، بما يشمل التدريب، التوجيه، وإدارة العقود والفرص المهنية.',
    icon: 'Sparkles',
    image:
    '/imgs/An economic research environme/image_40.webp'
  }]

}];