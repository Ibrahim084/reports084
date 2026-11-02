import React from 'react';
import { ArrowRight, Award, BookOpen, FolderOpen, GraduationCap, Settings } from 'lucide-react';
import { OfficialInfoBar } from '../components/OfficialInfoBar';
import { useSettings } from '../context/SettingsContext';
import { SECTIONS } from '../data/sections';
import { PageId, SectionId } from '../types';
import { getRoleForSection } from '../utils/settingsStorage';

interface SectionPageProps {
  sectionId: SectionId;
  onNavigate: (page: PageId) => void;
}

function renderSectionHeaderIcon(id: SectionId) {
  switch (id) {
    case 'professional-development':
      return <GraduationCap className="w-8 h-8" aria-hidden="true" />;
    case 'gifted':
      return <Award className="w-8 h-8" aria-hidden="true" />;
    case 'teacher':
      return <BookOpen className="w-8 h-8" aria-hidden="true" />;
  }
}

export const SectionPage: React.FC<SectionPageProps> = ({ sectionId, onNavigate }) => {
  const { settings } = useSettings();
  const section = SECTIONS[sectionId];
  const roleTitle = getRoleForSection(settings, sectionId);

  return (
    <div className="space-y-6">
      {/* Top Action Bar with Return to Home Button */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="min-h-[44px] px-4 py-2 rounded-xl bg-white border border-stone-300 text-sm font-semibold text-stone-800 hover:bg-stone-100 transition-colors inline-flex items-center gap-2 cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>العودة للرئيسية</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('settings')}
          className="min-h-[44px] px-4 py-2 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors inline-flex items-center gap-2 cursor-pointer"
        >
          <Settings className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>تعديل الصفة أو بيانات المدرسة</span>
        </button>
      </div>

      {/* Section Header Card */}
      <section
        className={`bg-white rounded-2xl border ${section.accentBorderClass} p-6 sm:p-8`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          <div
            className={`w-16 h-16 rounded-2xl ${section.iconBgClass} flex items-center justify-center shrink-0`}
          >
            {renderSectionHeaderIcon(section.id)}
          </div>

          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold">
              <span className={section.accentTextClass}>قسم مستقل</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-700">الصفة المعتمدة: {roleTitle || 'غير محددة'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-stone-900">
              {section.title}
            </h1>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-4xl">
              {section.detailedDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Unified School & Section Role Metadata */}
      <OfficialInfoBar sectionId={sectionId} />

      {/* Dedicated Container for Future Forms */}
      <section
        aria-labelledby="future-forms-heading"
        className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-10"
      >
        <div className="border-b border-stone-100 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2
              id="future-forms-heading"
              className="text-lg sm:text-xl font-bold font-display text-stone-900"
            >
              مساحة النماذج والتقارير المعتمدة — {section.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              مرتبطة تلقائياً ببيانات الإعدادات المركزية وصفة ({roleTitle || 'غير محددة'})
            </p>
          </div>
        </div>

        <div
          className={`rounded-2xl border border-dashed ${section.accentBorderClass} ${section.accentSoftBgClass} p-8 sm:p-12 text-center max-w-2xl mx-auto my-2`}
        >
          <div
            className={`w-12 h-12 rounded-xl ${section.iconBgClass} flex items-center justify-center mx-auto mb-4`}
          >
            <FolderOpen className="w-6 h-6" aria-hidden="true" />
          </div>

          <h3 className="text-base sm:text-lg font-bold font-display text-stone-900 mb-2">
            النماذج ستضاف لاحقاً
          </h3>

          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            {section.futureFormsMessage}
          </p>
        </div>
      </section>
    </div>
  );
};
