import React from 'react';
import { useSettings } from '../context/SettingsContext';

export const Footer: React.FC = () => {
  const { settings } = useSettings();

  return (
    <footer className="bg-white border-t border-stone-200/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
          <span className="font-semibold text-stone-700">مكتبي المدرسي</span>
          {settings.schoolName && (
            <>
              <span aria-hidden="true">·</span>
              <span>{settings.schoolName}</span>
            </>
          )}
          {settings.academicYear && (
            <>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">العام الدراسي {settings.academicYear}</span>
            </>
          )}
        </div>
        <p className="text-center sm:text-left text-stone-500">
          يعمل النظام محلياً داخل متصفحك دون إرسال أي بيانات إلى خادم خارجي
        </p>
      </div>
    </footer>
  );
};
