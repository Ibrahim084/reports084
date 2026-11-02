import { SectionId, SectionTheme } from '../types';

export const SECTIONS: Record<SectionId, SectionTheme> = {
  'professional-development': {
    id: 'professional-development',
    title: 'التطوير المهني',
    shortDescription:
      'توثيق برامج الإنماء المهني، ورش العمل، مجتمعات التعلم المهنية، وتبادل الزيارات الصفية.',
    detailedDescription:
      'مساحة مخصصة لتنظيم وتوثيق خطط التدريب المدرسي، اللقاءات التربوية، وبرامج رفع الكفاءة المهنية في المدرسة.',
    futureFormsMessage:
      'النماذج المعتمدة لقسم التطوير المهني ستضاف في المرحلة القادمة بإذن الله، وسترتبط تلقائياً ببيانات المدرسة والصفة الوظيفية المحددة لهذا القسم في الإعدادات المركزية.',
    roleKey: 'professionalDevelopment',
    colorName: 'عنابي',
    primaryHex: '#7C1D34',
    badgeTextClass: 'text-[#7C1D34]',
    accentBgClass: 'bg-[#7C1D34]',
    accentSoftBgClass: 'bg-[#FAF1F3]',
    accentBorderClass: 'border-[#E6C7CF]',
    accentHoverBorderClass: 'hover:border-[#7C1D34]',
    accentTextClass: 'text-[#7C1D34]',
    buttonBgClass: 'bg-[#7C1D34] hover:bg-[#631629] text-white',
    iconBgClass: 'bg-[#7C1D34] text-white',
  },
  gifted: {
    id: 'gifted',
    title: 'الموهوبون',
    shortDescription:
      'متابعة برامج رعاية الموهوبين، خطط الإثراء المدرسي، وتوثيق المبادرات والمسابقات العلمية.',
    detailedDescription:
      'مساحة مخصصة لإدارة وتوثيق برامج الكشف والرعاية، الأنشطة الإثرائية، ومتابعة المنجزات الإبداعية داخل المدرسة.',
    futureFormsMessage:
      'النماذج المعتمدة لقسم الموهوبين ستضاف في المرحلة القادمة بإذن الله، وسترتبط تلقائياً ببيانات المدرسة والصفة الوظيفية المحددة لهذا القسم في الإعدادات المركزية.',
    roleKey: 'gifted',
    colorName: 'أخضر',
    primaryHex: '#156B46',
    badgeTextClass: 'text-[#156B46]',
    accentBgClass: 'bg-[#156B46]',
    accentSoftBgClass: 'bg-[#EFF8F3]',
    accentBorderClass: 'border-[#C2E2D2]',
    accentHoverBorderClass: 'hover:border-[#156B46]',
    accentTextClass: 'text-[#156B46]',
    buttonBgClass: 'bg-[#156B46] hover:bg-[#105336] text-white',
    iconBgClass: 'bg-[#156B46] text-white',
  },
  teacher: {
    id: 'teacher',
    title: 'المعلم',
    shortDescription:
      'توثيق المهام التدريسية، الخطط الفصلية، الشواهد التعليمية، وأعمال التقويم والمتابعة الصفية.',
    detailedDescription:
      'مساحة مخصصة لتنظيم وتوثيق الأداء التدريسي، تنفيذ الحصص، المبادرات الصفية، وتقارير الإنجاز الدورية.',
    futureFormsMessage:
      'النماذج المعتمدة لقسم المعلم ستضاف في المرحلة القادمة بإذن الله، وسترتبط تلقائياً ببيانات المدرسة والصفة الوظيفية المحددة لهذا القسم في الإعدادات المركزية.',
    roleKey: 'teacher',
    colorName: 'أزرق',
    primaryHex: '#1E4D8C',
    badgeTextClass: 'text-[#1E4D8C]',
    accentBgClass: 'bg-[#1E4D8C]',
    accentSoftBgClass: 'bg-[#F0F5FA]',
    accentBorderClass: 'border-[#C5D7EE]',
    accentHoverBorderClass: 'hover:border-[#1E4D8C]',
    accentTextClass: 'text-[#1E4D8C]',
    buttonBgClass: 'bg-[#1E4D8C] hover:bg-[#163B6B] text-white',
    iconBgClass: 'bg-[#1E4D8C] text-white',
  },
};

export const SECTIONS_LIST: SectionTheme[] = [
  SECTIONS['professional-development'],
  SECTIONS['gifted'],
  SECTIONS['teacher'],
];
