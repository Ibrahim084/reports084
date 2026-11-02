import React from 'react';
import { useSettings } from '../context/SettingsContext';
import { SectionId } from '../types';
import { getRoleForSection } from '../utils/settingsStorage';

interface OfficialInfoBarProps {
  sectionId?: SectionId;
  onEditSettings?: () => void;
}

export const OfficialInfoBar: React.FC<OfficialInfoBarProps> = ({
  sectionId,
  onEditSettings,
}) => {
  const { settings } = useSettings();
  const activeRole = sectionId ? getRoleForSection(settings, sectionId) : null;

  return (
    <section
      aria-label="البيانات الأساسية للمدرسة والمعلم"
      className="bg-white rounded-2xl border border-stone-200/90 p-4 sm:p-5"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-stone-600">
            <span>
              الإدارة التعليمية:{' '}
              <strong className="font-semibold text-stone-900">
                {settings.educationDepartment || 'غير محدد'}
              </strong>
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>
              المدرسة:{' '}
              <strong className="font-semibold text-stone-800">
                {settings.schoolName || 'غير محدد'}
              </strong>
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>
              العام الدراسي:{' '}
              <strong className="font-semibold text-stone-900 tabular-nums">
                {settings.academicYear || 'غير محدد'}
              </strong>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-stone-600">
            <span>
              الاسم:{' '}
              <strong className="font-semibold text-stone-900">
                {settings.userName || 'غير محدد'}
              </strong>
            </span>
            {sectionId && (
              <>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>
                  الصفة الوظيفية في هذا القسم:{' '}
                  <strong className="font-semibold text-stone-900">
                    {activeRole || 'غير محددة'}
                  </strong>
                </span>
              </>
            )}
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>
              مدير المدرسة:{' '}
              <strong className="font-semibold text-stone-900">
                {settings.principalName || 'غير محدد'}
              </strong>
            </span>
          </div>
        </div>

        {onEditSettings && (
          <div className="shrink-0">
            <button
              type="button"
              onClick={onEditSettings}
              className="w-full sm:w-auto min-h-[44px] px-4 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm font-semibold text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors flex items-center justify-center whitespace-nowrap cursor-pointer"
            >
              تعديل بيانات المدرسة والصفات
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
