export interface SubService {
  id: string;
  nameKey: string;
  descriptionKey: string;
  icon: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  nameKey: string;
  icon: string;
  image: string;
  subServices: SubService[];
}

export const services: ServiceCategory[] = [
{
  id: 'investment',
  nameKey: 'categories.investment.title',
  icon: 'TrendingUp',
  image:
  '/imgs/A professional project deliver/image_9.webp',
  subServices: [
  {
    id: 'privateInvestment',
    nameKey: 'categories.investment.subservices.privateInvestment.name',
    descriptionKey: 'categories.investment.subservices.privateInvestment.description',
    icon: 'Briefcase',
    image:
    '/imgs/A professional information cen/image_18.webp'
  },
  {
    id: 'portfolioManagement',
    nameKey: 'categories.investment.subservices.portfolioManagement.name',
    descriptionKey: 'categories.investment.subservices.portfolioManagement.description',
    icon: 'PieChart',
    image:
    '/imgs/A professional consulting stud/image_5.webp'
  },
  {
    id: 'publicInvestments',
    nameKey: 'categories.investment.subservices.publicInvestments.name',
    descriptionKey: 'categories.investment.subservices.publicInvestments.description',
    icon: 'Landmark',
    image:
    '/imgs/A professional consulting fram/image_12.webp'
  },
  {
    id: 'industrialProjects',
    nameKey: 'categories.investment.subservices.industrialProjects.name',
    descriptionKey: 'categories.investment.subservices.industrialProjects.description',
    icon: 'Factory',
    image:
    '/imgs/A professional consulting envi/image_4.webp'
  },
  {
    id: 'agriculturalProjects',
    nameKey: 'categories.investment.subservices.agriculturalProjects.name',
    descriptionKey: 'categories.investment.subservices.agriculturalProjects.description',
    icon: 'Tractor',
    image:
    '/imgs/A professional consulting envi/image_1.webp'
  },
  {
    id: 'tourismProjects',
    nameKey: 'categories.investment.subservices.tourismProjects.name',
    descriptionKey: 'categories.investment.subservices.tourismProjects.description',
    icon: 'Palmtree',
    image:
    '/imgs/A policy and legislative resea/image_28.webp'
  },
  {
    id: 'energyProjects',
    nameKey: 'categories.investment.subservices.energyProjects.name',
    descriptionKey: 'categories.investment.subservices.energyProjects.description',
    icon: 'Zap',
    image:
    '/imgs/A modern project development e/image_16.webp'
  },
  {
    id: 'healthProjects',
    nameKey: 'categories.investment.subservices.healthProjects.name',
    descriptionKey: 'categories.investment.subservices.healthProjects.description',
    icon: 'HeartPulse',
    image:
    '/imgs/A modern professional environm/image_10.webp'
  },
  {
    id: 'educationProjects',
    nameKey: 'categories.investment.subservices.educationProjects.name',
    descriptionKey: 'categories.investment.subservices.educationProjects.description',
    icon: 'GraduationCap',
    image:
    '/imgs/A modern operational control c/image_8.webp'
  },
  {
    id: 'sportsProjects',
    nameKey: 'categories.investment.subservices.sportsProjects.name',
    descriptionKey: 'categories.investment.subservices.sportsProjects.description',
    icon: 'Trophy',
    image:
    '/imgs/A modern operational command c/image_4.webp'
  },
  {
    id: 'retailProjects',
    nameKey: 'categories.investment.subservices.retailProjects.name',
    descriptionKey: 'categories.investment.subservices.retailProjects.description',
    icon: 'ShoppingCart',
    image:
    '/imgs/A modern media and communicati/image_0.webp'
  },
  {
    id: 'technologyProjects',
    nameKey: 'categories.investment.subservices.technologyProjects.name',
    descriptionKey: 'categories.investment.subservices.technologyProjects.description',
    icon: 'Cpu',
    image:
    '/imgs/A modern intake process enviro/image_25.webp'
  }]

},
{
  id: 'financial',
  nameKey: 'categories.financial.title',
  icon: 'Landmark',
  image:
  '/imgs/A modern conceptual scene illu/image_11.webp',
  subServices: [
  {
    id: 'mortgageConsulting',
    nameKey: 'categories.financial.subservices.mortgageConsulting.name',
    descriptionKey: 'categories.financial.subservices.mortgageConsulting.description',
    icon: 'Home',
    image:
    '/imgs/A luminous conceptual workspac/image_13.webp'
  },
  {
    id: 'bankingConsulting',
    nameKey: 'categories.financial.subservices.bankingConsulting.name',
    descriptionKey: 'categories.financial.subservices.bankingConsulting.description',
    icon: 'Building',
    image:
    '/imgs/A luminous conceptual scene wi/image_23.webp'
  },
  {
    id: 'financeInvestmentConsulting',
    nameKey: 'categories.financial.subservices.financeInvestmentConsulting.name',
    descriptionKey: 'categories.financial.subservices.financeInvestmentConsulting.description',
    icon: 'LineChart',
    image:
    '/imgs/A goalsetting concept scene wi/image_23.webp'
  }]

},
{
  id: 'health',
  nameKey: 'categories.health.title',
  icon: 'Heart',
  image:
  '/imgs/A futuristic professional envi/image_21.webp',
  subServices: [
  {
    id: 'healthInstitutionsManagement',
    nameKey: 'categories.health.subservices.healthInstitutionsManagement.name',
    descriptionKey: 'categories.health.subservices.healthInstitutionsManagement.description',
    icon: 'Hospital',
    image:
    '/imgs/A diverse sector consulting sc/image_13.webp'
  },
  {
    id: 'healthPlanning',
    nameKey: 'categories.health.subservices.healthPlanning.name',
    descriptionKey: 'categories.health.subservices.healthPlanning.description',
    icon: 'Activity',
    image:
    '/imgs/A continuous improvement syste/image_27.webp'
  },
  {
    id: 'occupationalSafety',
    nameKey: 'categories.health.subservices.occupationalSafety.name',
    descriptionKey: 'categories.health.subservices.occupationalSafety.description',
    icon: 'ShieldAlert',
    image:
    '/imgs/A continuous improvement conce/image_21.webp'
  }]

},
{
  id: 'strategic',
  nameKey: 'categories.strategic.title',
  icon: 'Target',
  image:
  '/imgs/A consulting services overview/image_14.webp',
  subServices: [
  {
    id: 'strategicConsulting',
    nameKey: 'categories.strategic.subservices.strategicConsulting.name',
    descriptionKey: 'categories.strategic.subservices.strategicConsulting.description',
    icon: 'Compass',
    image:
    '/imgs/A consulting service tier visu/image_17.webp'
  },
  {
    id: 'managementConsulting',
    nameKey: 'categories.strategic.subservices.managementConsulting.name',
    descriptionKey: 'categories.strategic.subservices.managementConsulting.description',
    icon: 'Network',
    image:
    '/imgs/A conceptual transformation sc/image_6.webp'
  },
  {
    id: 'projectManagement',
    nameKey: 'categories.strategic.subservices.projectManagement.name',
    descriptionKey: 'categories.strategic.subservices.projectManagement.description',
    icon: 'KanbanSquare',
    image:
    '/imgs/A conceptual operational flow/image_32.webp'
  },
  {
    id: 'projectDevelopment',
    nameKey: 'categories.strategic.subservices.projectDevelopment.name',
    descriptionKey: 'categories.strategic.subservices.projectDevelopment.description',
    icon: 'Lightbulb',
    image:
    '/imgs/A comprehensive consulting ser/image_42.webp'
  },
  {
    id: 'incubators',
    nameKey: 'categories.strategic.subservices.incubators.name',
    descriptionKey: 'categories.strategic.subservices.incubators.description',
    icon: 'Rocket',
    image:
    '/imgs/A sports research consulting e/image_19.webp'
  },
  {
    id: 'feasibilityStudies',
    nameKey: 'categories.strategic.subservices.feasibilityStudies.name',
    descriptionKey: 'categories.strategic.subservices.feasibilityStudies.description',
    icon: 'FileText',
    image:
    '/imgs/A project evaluation environme/image_5.webp'
  }]

},
{
  id: 'logistics',
  nameKey: 'categories.logistics.title',
  icon: 'Truck',
  image:
  '/imgs/A professional standards visua/image_34.webp',
  subServices: [
  {
    id: 'logisticsConsulting',
    nameKey: 'categories.logistics.subservices.logisticsConsulting.name',
    descriptionKey: 'categories.logistics.subservices.logisticsConsulting.description',
    icon: 'Package',
    image:
    '/imgs/A professional excellence conc/image_10.webp'
  },
  {
    id: 'freightConsulting',
    nameKey: 'categories.logistics.subservices.freightConsulting.name',
    descriptionKey: 'categories.logistics.subservices.freightConsulting.description',
    icon: 'Ship',
    image:
    '/imgs/A performance evaluation envir/image_26.webp'
  },
  {
    id: 'customsConsulting',
    nameKey: 'categories.logistics.subservices.customsConsulting.name',
    descriptionKey: 'categories.logistics.subservices.customsConsulting.description',
    icon: 'ClipboardCheck',
    image:
    '/imgs/A global consulting standards/image_21.webp'
  },
  {
    id: 'equipmentConsulting',
    nameKey: 'categories.logistics.subservices.equipmentConsulting.name',
    descriptionKey: 'categories.logistics.subservices.equipmentConsulting.description',
    icon: 'Wrench',
    image:
    '/imgs/A modern agricultural investme/image_12.webp'
  },
  {
    id: 'technicalSetupConsulting',
    nameKey: 'categories.logistics.subservices.technicalSetupConsulting.name',
    descriptionKey: 'categories.logistics.subservices.technicalSetupConsulting.description',
    icon: 'Settings',
    image:
    '/imgs/An elite executive support env/image_36.webp'
  },
  {
    id: 'qualityConsulting',
    nameKey: 'categories.logistics.subservices.qualityConsulting.name',
    descriptionKey: 'categories.logistics.subservices.qualityConsulting.description',
    icon: 'Ruler',
    image:
    '/imgs/A conceptual evaluation and im/image_8.webp'
  }]

},
{
  id: 'tourism',
  nameKey: 'categories.tourism.title',
  icon: 'Plane',
  image:
  '/imgs/A transparency and integrity c/image_11.webp',
  subServices: [
  {
    id: 'hospitalityManagement',
    nameKey: 'categories.tourism.subservices.hospitalityManagement.name',
    descriptionKey: 'categories.tourism.subservices.hospitalityManagement.description',
    icon: 'Coffee',
    image:
    '/imgs/A symbolic institutional value/image_9.webp'
  },
  {
    id: 'hotelConsulting',
    nameKey: 'categories.tourism.subservices.hotelConsulting.name',
    descriptionKey: 'categories.tourism.subservices.hotelConsulting.description',
    icon: 'BedDouble',
    image:
    '/imgs/A service framework scene with/image_23.webp'
  },
  {
    id: 'tourismConsulting',
    nameKey: 'categories.tourism.subservices.tourismConsulting.name',
    descriptionKey: 'categories.tourism.subservices.tourismConsulting.description',
    icon: 'Map',
    image:
    '/imgs/A responsibilitydriven busines/image_13.webp'
  },
  {
    id: 'sportsStudies',
    nameKey: 'categories.tourism.subservices.sportsStudies.name',
    descriptionKey: 'categories.tourism.subservices.sportsStudies.description',
    icon: 'Dumbbell',
    image:
    '/imgs/A quality standards consulting/image_31.webp'
  },
  {
    id: 'sportsMarketing',
    nameKey: 'categories.tourism.subservices.sportsMarketing.name',
    descriptionKey: 'categories.tourism.subservices.sportsMarketing.description',
    icon: 'Ticket',
    image:
    '/imgs/A quality excellence concept w/image_39.webp'
  },
  {
    id: 'destinationDevelopment',
    nameKey: 'categories.tourism.subservices.destinationDevelopment.name',
    descriptionKey: 'categories.tourism.subservices.destinationDevelopment.description',
    icon: 'Compass',
    image:
    '/imgs/A quality assurance system sce/image_19.webp'
  }]

},
{
  id: 'cultural',
  nameKey: 'categories.cultural.title',
  icon: 'Palette',
  image:
  '/imgs/A project implementation monit/image_45.webp',
  subServices: [
  {
    id: 'culturalConsulting',
    nameKey: 'categories.cultural.subservices.culturalConsulting.name',
    descriptionKey: 'categories.cultural.subservices.culturalConsulting.description',
    icon: 'Library',
    image:
    '/imgs/A professional quality assuran/image_22.webp'
  },
  {
    id: 'fineArtsConsulting',
    nameKey: 'categories.cultural.subservices.fineArtsConsulting.name',
    descriptionKey: 'categories.cultural.subservices.fineArtsConsulting.description',
    icon: 'Image',
    image:
    '/imgs/A professional environment wit/image_1.webp'
  },
  {
    id: 'heritageConsulting',
    nameKey: 'categories.cultural.subservices.heritageConsulting.name',
    descriptionKey: 'categories.cultural.subservices.heritageConsulting.description',
    icon: 'Castle',
    image:
    '/imgs/A professional editorial works/image_6.webp'
  }]

},
{
  id: 'pr',
  nameKey: 'categories.pr.title',
  icon: 'Megaphone',
  image:
  '/imgs/A startup incubation ecosystem/image_27.webp',
  subServices: [
  {
    id: 'prServices',
    nameKey: 'categories.pr.subservices.prServices.name',
    descriptionKey: 'categories.pr.subservices.prServices.description',
    icon: 'Users',
    image:
    '/imgs/A professional editorial works/image_19.webp'
  },
  {
    id: 'prManagement',
    nameKey: 'categories.pr.subservices.prManagement.name',
    descriptionKey: 'categories.pr.subservices.prManagement.description',
    icon: 'MessageSquare',
    image:
    '/imgs/A modern monitoring and perfor/image_7.webp'
  },
  {
    id: 'prConsulting',
    nameKey: 'categories.pr.subservices.prConsulting.name',
    descriptionKey: 'categories.pr.subservices.prConsulting.description',
    icon: 'Handshake',
    image:
    '/imgs/A modern editorialstyle worksp/image_22.webp'
  },
  {
    id: 'advertisingServices',
    nameKey: 'categories.pr.subservices.advertisingServices.name',
    descriptionKey: 'categories.pr.subservices.advertisingServices.description',
    icon: 'MonitorPlay',
    image:
    '/imgs/A modern conceptual scene with/image_26.webp'
  },
  {
    id: 'brochures',
    nameKey: 'categories.pr.subservices.brochures.name',
    descriptionKey: 'categories.pr.subservices.brochures.description',
    icon: 'BookOpen',
    image:
    '/imgs/A luminous editorialstyle work/image_28.webp'
  },
  {
    id: 'directMarketing',
    nameKey: 'categories.pr.subservices.directMarketing.name',
    descriptionKey: 'categories.pr.subservices.directMarketing.description',
    icon: 'Mail',
    image:
    '/imgs/A live project monitoring envi/image_29.webp'
  },
  {
    id: 'salesPromotion',
    nameKey: 'categories.pr.subservices.salesPromotion.name',
    descriptionKey: 'categories.pr.subservices.salesPromotion.description',
    icon: 'Percent',
    image:
    '/imgs/A final delivery scene with or/image_38.webp'
  },
  {
    id: 'onlineAdvertising',
    nameKey: 'categories.pr.subservices.onlineAdvertising.name',
    descriptionKey: 'categories.pr.subservices.onlineAdvertising.description',
    icon: 'MousePointerClick',
    image:
    '/imgs/A corporate quality framework/image_2.webp'
  },
  {
    id: 'webAdvertising',
    nameKey: 'categories.pr.subservices.webAdvertising.name',
    descriptionKey: 'categories.pr.subservices.webAdvertising.description',
    icon: 'Globe',
    image:
    '/imgs/A continuous monitoring ecosys/image_40.webp'
  }]

},
{
  id: 'digital',
  nameKey: 'categories.digital.title',
  icon: 'Share2',
  image:
  '/imgs/A conceptual scene with abstra/image_25.webp',
  subServices: [
  {
    id: 'socialMedia',
    nameKey: 'categories.digital.subservices.socialMedia.name',
    descriptionKey: 'categories.digital.subservices.socialMedia.description',
    icon: 'Smartphone',
    image:
    '/imgs/An advanced operational manage/image_13.webp'
  },
  {
    id: 'digitalMediaManagement',
    nameKey: 'categories.digital.subservices.digitalMediaManagement.name',
    descriptionKey: 'categories.digital.subservices.digitalMediaManagement.description',
    icon: 'Laptop',
    image:
    '/imgs/A conceptual quality framework/image_16.webp'
  },
  {
    id: 'socialMediaConsulting',
    nameKey: 'categories.digital.subservices.socialMediaConsulting.name',
    descriptionKey: 'categories.digital.subservices.socialMediaConsulting.description',
    icon: 'ThumbsUp',
    image:
    '/imgs/A bright editorialstyle worksp/image_11.webp'
  },
  {
    id: 'mediaStudies',
    nameKey: 'categories.digital.subservices.mediaStudies.name',
    descriptionKey: 'categories.digital.subservices.mediaStudies.description',
    icon: 'BarChart2',
    image:
    '/imgs/A transparent project manageme/image_17.webp'
  },
  {
    id: 'advertisingStudies',
    nameKey: 'categories.digital.subservices.advertisingStudies.name',
    descriptionKey: 'categories.digital.subservices.advertisingStudies.description',
    icon: 'PenTool',
    image:
    '/imgs/A symbolic executive leadershi/image_14.webp'
  },
  {
    id: 'marketingOperations',
    nameKey: 'categories.digital.subservices.marketingOperations.name',
    descriptionKey: 'categories.digital.subservices.marketingOperations.description',
    icon: 'TrendingUp',
    image:
    '/imgs/A strategic management workspa/image_15.webp'
  }]

},
{
  id: 'talent',
  nameKey: 'categories.talent.title',
  icon: 'Star',
  image:
  '/imgs/A sophisticated executive work/image_2.webp',
  subServices: [
  {
    id: 'castingAgencies',
    nameKey: 'categories.talent.subservices.castingAgencies.name',
    descriptionKey: 'categories.talent.subservices.castingAgencies.description',
    icon: 'Film',
    image:
    '/imgs/A refined project execution sc/image_0.webp'
  },
  {
    id: 'talentManagement',
    nameKey: 'categories.talent.subservices.talentManagement.name',
    descriptionKey: 'categories.talent.subservices.talentManagement.description',
    icon: 'Sparkles',
    image:
    '/imgs/An economic research environme/image_40.webp'
  }]

}];