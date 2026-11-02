import React, { createContext, useContext, useState } from 'react';
import { SchoolSettings } from '../types';
import {
  clearSettingsInStorage,
  loadSettingsFromStorage,
  saveSettingsToStorage,
} from '../utils/settingsStorage';

interface SettingsContextValue {
  settings: SchoolSettings;
  updateSettings: (newSettings: SchoolSettings) => boolean;
  resetSettings: () => void;
}

const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SchoolSettings>(() => loadSettingsFromStorage());

  const updateSettings = (newSettings: SchoolSettings): boolean => {
    const normalized: SchoolSettings = {
      schoolName: newSettings.schoolName.trim(),
      educationDepartment: newSettings.educationDepartment.trim(),
      principalName: newSettings.principalName.trim(),
      userName: newSettings.userName.trim(),
      academicYear: newSettings.academicYear.trim(),
      roles: {
        professionalDevelopment: newSettings.roles.professionalDevelopment.trim(),
        gifted: newSettings.roles.gifted.trim(),
        teacher: newSettings.roles.teacher.trim(),
      },
    };
    const ok = saveSettingsToStorage(normalized);
    setSettings(normalized);
    return ok;
  };

  const resetSettings = () => {
    const defaults = clearSettingsInStorage();
    setSettings(defaults);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return ctx;
}
