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
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  subServices: [
  {
    name: 'أنشطة الاستثمار بالحساب الخاص',
    description:
    'تصميم وتنفيذ فرص استثمارية خاصة تناسب المستثمرين الفرديين والمؤسسات، مع تحقيق التوازن بين العائد والمخاطر.',
    icon: 'Briefcase',
    image:
    'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&q=80'
  },
  {
    name: 'إدارة الاستثمارات وتطوير المحافظ الاستثمارية',
    description:
    'تنظيم وتطوير المحافظ الاستثمارية لضمان تحقيق أهداف النمو المالي المستدام والتحكم بالمخاطر.',
    icon: 'PieChart',
    image:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80'
  },
  {
    name: 'إدارة وتشغيل الاستثمارات العامة',
    description:
    'تقديم خدمات تشغيلية واستراتيجية لإدارة الاستثمارات الحكومية والخاصة لتحقيق الاستفادة القصوى من الموارد.',
    icon: 'Landmark',
    image:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80'
  },
  {
    name: 'الاستثمار في المشاريع الصناعية وإدارتها',
    description:
    'تطوير وإدارة مشاريع صناعية بهدف تحسين الإنتاجية وتعظيم العوائد المالية للمستثمرين.',
    icon: 'Factory',
    image:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80'
  },
  {
    name: 'الاستثمار في المشاريع الزراعية وإدارتها',
    description:
    'تقديم حلول استثمارية متكاملة للمشاريع الزراعية، مع تحسين الإنتاجية والاستدامة البيئية.',
    icon: 'Tractor',
    image:
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80'
  },
  {
    name: 'الاستثمار في المشاريع السياحية وإدارتها',
    description:
    'تطوير وتشغيل المشاريع السياحية لتعزيز القطاع وجذب الاستثمارات المحلية والدولية.',
    icon: 'Palmtree',
    image:
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80'
  },
  {
    name: 'الاستثمار في مشاريع الطاقة وإدارتها',
    description:
    'تقديم حلول استثمارية متخصصة في الطاقة التقليدية والمتجددة لضمان كفاءة التشغيل والعائد المالي.',
    icon: 'Zap',
    image:
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80'
  },
  {
    name: 'الاستثمار في مشاريع الصحة والتنمية',
    description:
    'دعم الاستثمار في القطاع الصحي لتعزيز جودة الخدمات وتحقيق نمو اقتصادي مستدام.',
    icon: 'HeartPulse',
    image:
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=80'
  },
  {
    name: 'الاستثمار في المشاريع التعليمية وإدارتها',
    description:
    'تطوير مؤسسات تعليمية ومشاريع تدريبية مبتكرة تلبي احتياجات السوق ومتطلبات التنمية.',
    icon: 'GraduationCap',
    image:
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80'
  },
  {
    name: 'الاستثمار في المشاريع الرياضية وإدارتها',
    description:
    'تقديم استشارات استثمارية متخصصة لتعزيز القطاع الرياضي وإدارة الفعاليات والمرافق.',
    icon: 'Trophy',
    image:
    'https://images.unsplash.com/photo-1461896836934-bd45ba8a0bca?w=400&q=80'
  },
  {
    name: 'الاستثمار في مشاريع تجارة التجزئة وإدارتها',
    description:
    'دعم مشاريع البيع بالتجزئة عبر إدارة العمليات وتحسين الأداء التجاري وزيادة الربحية.',
    icon: 'ShoppingCart',
    image:
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80'
  },
  {
    name: 'الاستثمار في المشاريع التكنولوجية وإدارتها',
    description:
    'تطوير وإدارة مشاريع تقنية مبتكرة لتحقيق النمو التكنولوجي وتحسين الكفاءة التشغيلية.',
    icon: 'Cpu',
    image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80'
  }]

},
{
  id: 'financial',
  name: 'الاستشارات المالية والمصرفية',
  icon: 'Landmark',
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  subServices: [
  {
    name: 'استشارات الرهن العقاري',
    description:
    'تقديم المشورة المالية للمستثمرين والشركات للحصول على أفضل الحلول في الرهون العقارية وتمويل المشاريع.',
    icon: 'Home',
    image:
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80'
  },
  {
    name: 'الاستشارات المصرفية',
    description:
    'تقديم حلول متخصصة لإدارة العلاقات المصرفية والعمليات المالية بما يعزز الكفاءة التشغيلية.',
    icon: 'Building',
    image:
    'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=400&q=80'
  },
  {
    name: 'الاستشارات المتعلقة بالتمويل والاستثمار',
    description:
    'تحليل الخيارات التمويلية ووضع استراتيجيات استثمارية لتحقيق عوائد مالية مستقرة.',
    icon: 'LineChart',
    image:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80'
  }]

},
{
  id: 'health',
  name: 'الاستشارات الصحية وإدارة القطاع الصحي',
  icon: 'Heart',
  image:
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  subServices: [
  {
    name: 'خدمات استشارات إدارة المؤسسات الصحية',
    description:
    'تقديم استشارات لتحسين إدارة المستشفيات والمراكز الصحية وزيادة كفاءة العمليات.',
    icon: 'Hospital',
    image:
    'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&q=80'
  },
  {
    name: 'الاستشارات الصحية والتخطيط الصحي',
    description:
    'وضع استراتيجيات وخطط تشغيلية لتعزيز جودة الخدمات الصحية وتوسيع نطاق الوصول إليها.',
    icon: 'Activity',
    image:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80'
  },
  {
    name: 'استشارات السلامة والصحة المهنية',
    description:
    'تقديم حلول لضمان بيئة عمل آمنة وتقليل المخاطر الصحية للعاملين.',
    icon: 'ShieldAlert',
    image:
    'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=400&q=80'
  }]

},
{
  id: 'strategic',
  name: 'الاستشارات الاستراتيجية والإدارية',
  icon: 'Target',
  image:
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  subServices: [
  {
    name: 'الخدمات الاستشارية الاستراتيجية',
    description:
    'تصميم خطط استراتيجية تساعد المؤسسات على تحقيق أهدافها طويلة المدى وتحقيق ميزة تنافسية.',
    icon: 'Compass',
    image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80'
  },
  {
    name: 'الاستشارات الإدارية والدراسات التنظيمية',
    description:
    'تحليل الهياكل التنظيمية وتحسين العمليات الداخلية لزيادة كفاءة الأداء الإداري.',
    icon: 'Network',
    image:
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80'
  },
  {
    name: 'خدمات إدارة المشاريع',
    description:
    'إدارة وتنفيذ المشاريع بمهنية عالية لضمان تحقيق الأهداف ضمن الجدول الزمني والميزانية.',
    icon: 'KanbanSquare',
    image:
    'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&q=80'
  },
  {
    name: 'استشارات تطوير المشاريع',
    description:
    'تقديم المشورة لتطوير الأفكار والمبادرات إلى مشاريع قابلة للتنفيذ وناجحة.',
    icon: 'Lightbulb',
    image:
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80'
  },
  {
    name: 'خدمات حاضنات الأعمال ودعم المشاريع الناشئة',
    description:
    'دعم رواد الأعمال والمشاريع الناشئة عبر توفير التدريب والإرشاد والاستشارات العملية.',
    icon: 'Rocket',
    image:
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80'
  },
  {
    name: 'إعداد دراسات الجدوى الاقتصادية',
    description:
    'تحليل المشاريع لتقييم جدواها الاقتصادية وتحديد فرص النجاح والمخاطر.',
    icon: 'FileText',
    image:
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80'
  }]

},
{
  id: 'logistics',
  name: 'الاستشارات اللوجستية والتقنية',
  icon: 'Truck',
  image:
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  subServices: [
  {
    name: 'الاستشارات اللوجستية',
    description:
    'تحسين سلسلة الإمداد والتوزيع لضمان كفاءة العمليات وتقليل التكاليف.',
    icon: 'Package',
    image:
    'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80'
  },
  {
    name: 'استشارات شحن البضائع',
    description:
    'تقديم حلول متخصصة لنقل البضائع بأمان وفعالية داخل وخارج الأسواق المحلية والدولية.',
    icon: 'Ship',
    image:
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=400&q=80'
  },
  {
    name: 'استشارات الجمارك',
    description:
    'مساعدة الشركات على الامتثال للوائح الجمارك وتسهيل الإجراءات لتسريع حركة البضائع.',
    icon: 'ClipboardCheck',
    image:
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&q=80'
  },
  {
    name: 'استشارات المعدات الفنية والتقنية',
    description:
    'تقديم توصيات لاختيار المعدات المناسبة وتحسين كفاءتها التشغيلية.',
    icon: 'Wrench',
    image:
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80'
  },
  {
    name: 'استشارات التجهيزات الفنية والتقنية',
    description:
    'تصميم وتنفيذ الحلول التقنية والتجهيزات لتلبية احتياجات العمليات المؤسسية.',
    icon: 'Settings',
    image:
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80'
  },
  {
    name: 'استشارات الجودة وتوحيد المعايير والقياس',
    description:
    'وضع أنظمة لضمان الجودة وتوحيد المعايير وتحسين الأداء المؤسسي.',
    icon: 'Ruler',
    image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80'
  }]

},
{
  id: 'tourism',
  name: 'الاستشارات السياحية والضيافة والرياضة',
  icon: 'Plane',
  image:
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  subServices: [
  {
    name: 'استشارات إدارة الضيافة',
    description:
    'تقديم حلول لتحسين جودة الخدمات الفندقية والضيافة وزيادة رضا العملاء.',
    icon: 'Coffee',
    image:
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80'
  },
  {
    name: 'الاستشارات الفندقية',
    description:
    'تطوير استراتيجيات تشغيل الفنادق وتحسين الأداء المالي والتشغيلي.',
    icon: 'BedDouble',
    image:
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80'
  },
  {
    name: 'استشارات السياحة والترفيه',
    description:
    'تصميم برامج سياحية وترفيهية مبتكرة لجذب الزوار وزيادة العوائد.',
    icon: 'Map',
    image:
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80'
  },
  {
    name: 'الاستشارات والدراسات الرياضية',
    description:
    'تقديم التحليل والتخطيط لتعزيز الأداء الرياضي وتطوير البنية التحتية للرياضة.',
    icon: 'Dumbbell',
    image:
    'https://images.unsplash.com/photo-1461896836934-bd45ba8a0bca?w=400&q=80'
  },
  {
    name: 'تسويق الفعاليات الرياضية',
    description:
    'تطوير استراتيجيات تسويقية لجذب الجمهور والرعاة للفعاليات الرياضية.',
    icon: 'Ticket',
    image:
    'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&q=80'
  },
  {
    name: 'استشارات تطوير الوجهات السياحية',
    description:
    'تحليل وتطوير الوجهات السياحية من خلال وضع استراتيجيات متكاملة لزيادة الجاذبية السياحية وتحسين تجربة الزوار وتعظيم العائد الاقتصادي.',
    icon: 'Compass',
    image:
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80'
  }]

},
{
  id: 'cultural',
  name: 'الاستشارات الثقافية والفنية',
  icon: 'Palette',
  image:
  'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
  subServices: [
  {
    name: 'الاستشارات الثقافية',
    description:
    'دعم المؤسسات والمبادرات في التخطيط وتنفيذ المشاريع الثقافية بفعالية.',
    icon: 'Library',
    image:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
  },
  {
    name: 'استشارات الفنون الجميلة',
    description:
    'تقديم الخبرة الفنية لتطوير معارض ومشاريع فنية وتحسين تجربة الجمهور.',
    icon: 'Image',
    image:
    'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&q=80'
  },
  {
    name: 'الاستشارات التراثية',
    description:
    'حماية وتعزيز التراث الثقافي من خلال مشاريع صيانة وتطوير مستدامة.',
    icon: 'Castle',
    image:
    'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=400&q=80'
  }]

},
{
  id: 'pr',
  name: 'خدمات العلاقات العامة والإعلان',
  icon: 'Megaphone',
  image:
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
  subServices: [
  {
    name: 'خدمات العلاقات العامة',
    description:
    'بناء صورة إيجابية للمؤسسة وتعزيز التفاعل مع الجمهور والشركاء.',
    icon: 'Users',
    image:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80'
  },
  {
    name: 'إدارة العلاقات العامة',
    description: 'تنظيم الحملات والمبادرات لتعزيز حضور المؤسسة وسمعتها.',
    icon: 'MessageSquare',
    image:
    'https://images.unsplash.com/photo-1552581234-26160f608093?w=400&q=80'
  },
  {
    name: 'استشارات العلاقات العامة',
    description:
    'تقديم النصائح الاستراتيجية لتحسين التواصل المؤسسي وبناء الثقة.',
    icon: 'Handshake',
    image:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80'
  },
  {
    name: 'خدمات الإعلان',
    description:
    'تصميم وتنفيذ حملات إعلانية مبتكرة للوصول إلى الجمهور المستهدف.',
    icon: 'MonitorPlay',
    image:
    'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&q=80'
  },
  {
    name: 'إعداد ونشر الكتيبات والنشرات',
    description: 'إنشاء محتوى مطبوع ومرئي يعكس هوية المؤسسة ورسالتها.',
    icon: 'BookOpen',
    image:
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80'
  },
  {
    name: 'التسويق المباشر',
    description:
    'استراتيجيات للوصول المباشر للعملاء المحتملين وزيادة المبيعات.',
    icon: 'Mail',
    image:
    'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80'
  },
  {
    name: 'ترويج المبيعات',
    description: 'تصميم حملات لتشجيع المبيعات وزيادة حصة السوق.',
    icon: 'Percent',
    image:
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80'
  },
  {
    name: 'الإعلان عبر الإنترنت',
    description:
    'إدارة حملات رقمية عبر الشبكة للوصول إلى جمهور أوسع وتحقيق نتائج ملموسة.',
    icon: 'MousePointerClick',
    image:
    'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&q=80'
  },
  {
    name: 'الخدمات الإعلانية عبر المواقع الإلكترونية',
    description:
    'تحسين التواجد الرقمي للمؤسسة من خلال الإعلانات المستهدفة على المواقع الإلكترونية.',
    icon: 'Globe',
    image:
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80'
  }]

},
{
  id: 'digital',
  name: 'خدمات الإعلام الرقمي والتسويق',
  icon: 'Share2',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  subServices: [
  {
    name: 'خدمات الإعلام الاجتماعي',
    description:
    'إدارة حسابات وسائل التواصل الاجتماعي لبناء حضور رقمي مؤثر.',
    icon: 'Smartphone',
    image:
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80'
  },
  {
    name: 'إدارة الإعلام الرقمي',
    description:
    'تصميم استراتيجيات رقمية متكاملة لتعزيز الوعي بالعلامة التجارية وزيادة التفاعل.',
    icon: 'Laptop',
    image:
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80'
  },
  {
    name: 'استشارات وسائل التواصل الاجتماعي',
    description:
    'تقديم توصيات لتحسين الأداء الرقمي وزيادة تأثير المحتوى على الجمهور.',
    icon: 'ThumbsUp',
    image:
    'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&q=80'
  },
  {
    name: 'الاستشارات والدراسات الإعلامية',
    description:
    'تحليل البيئة الإعلامية وتقديم حلول لتعزيز الاستراتيجية الإعلامية للمؤسسة.',
    icon: 'BarChart2',
    image:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80'
  },
  {
    name: 'الاستشارات والدراسات الإعلانية',
    description:
    'تطوير خطط إعلانية مبتكرة تضمن وصول الرسائل التسويقية بفعالية.',
    icon: 'PenTool',
    image:
    'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&q=80'
  },
  {
    name: 'إدارة عمليات التسويق',
    description:
    'تنفيذ ومتابعة جميع العمليات التسويقية لتحقيق أهداف النمو والتوسع.',
    icon: 'TrendingUp',
    image:
    'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&q=80'
  }]

},
{
  id: 'talent',
  name: 'إدارة المواهب والوكالات الفنية',
  icon: 'Star',
  image:
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
  subServices: [
  {
    name: 'إدارة وتشغيل وكالات اختيار الممثلين',
    description:
    'تقديم خدمات إدارة واختيار المواهب التمثيلية للمشاريع الفنية والإنتاج الإعلامي.',
    icon: 'Film',
    image:
    'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80'
  },
  {
    name: 'إدارة المواهب',
    description:
    'تطوير ورعاية المواهب الفنية، بما يشمل التدريب، التوجيه، وإدارة العقود والفرص المهنية.',
    icon: 'Sparkles',
    image:
    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&q=80'
  }]

}];