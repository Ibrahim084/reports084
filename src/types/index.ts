export type SectionId = 'professional-development' | 'gifted' | 'teacher';

export type PageId = 'home' | SectionId | 'settings';

export interface SchoolSettings {
  schoolName: string;
  educationDepartment: string;
  principalName: string;
  userName: string;
  academicYear: string;
  roles: {
    professionalDevelopment: string;
    gifted: string;
    teacher: string;
  };
}

export interface SectionTheme {
  id: SectionId;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  futureFormsMessage: string;
  roleKey: keyof SchoolSettings['roles'];
  colorName: string;
  primaryHex: string;
  badgeTextClass: string;
  accentBgClass: string;
  accentSoftBgClass: string;
  accentBorderClass: string;
  accentHoverBorderClass: string;
  accentTextClass: string;
  buttonBgClass: string;
  iconBgClass: string;
}
