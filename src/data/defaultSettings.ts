import { SchoolSettings } from '../types';

export const DEFAULT_SCHOOL_SETTINGS: SchoolSettings = {
  schoolName: '',
  educationDepartment: '',
  principalName: '',
  userName: '',
  academicYear: '',
  roles: {
    professionalDevelopment: '',
    gifted: '',
    teacher: '',
  },
};

export const SETTINGS_STORAGE_KEY = 'maktabi_al_madrasi_settings_v1';
