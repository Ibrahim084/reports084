import React from 'react';
import { OfficialInfoBar } from '../components/OfficialInfoBar';
import { SectionCard } from '../components/SectionCard';
import { useSettings } from '../context/SettingsContext';
import { SECTIONS_LIST } from '../data/sections';
import { PageId, SectionId } from '../types';
import { getRoleForSection } from '../utils/settingsStorage';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { settings } = useSettings();

  const handleSelectSection = (sectionId: SectionId) => {
    onNavigate(sectionId);
  };

  return (
    <div className="space-y-8">
      {/* Main Hero Heading */}
      <section className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 lg:p-10 text-center sm:text-right">
        <div className="max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-stone-900 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            مكتبي المدرسي
          </h1>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            مساحة منظمة لتوثيق أعمالي ومهامي المدرسية
          </p>
        </div>
      </section>

      {/* Unified School & Teacher Information Bar */}
      <OfficialInfoBar onEditSettings={() => onNavigate('settings')} />

      {/* Three Main Independent Sections */}
      <section aria-labelledby="sections-heading" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h2
            id="sections-heading"
            className="text-lg sm:text-xl font-bold font-display text-stone-900"
          >
            الأقسام الرئيسية للنظام
          </h2>
          <span className="text-xs sm:text-sm text-stone-500">
            اختر القسم للانتقال إلى مساحته المستقلة
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 foldable-grid gap-5 sm:gap-6">
          {SECTIONS_LIST.map((section) => (
            <SectionCard
              key={section.id}
              section={section}
              roleTitle={getRoleForSection(settings, section.id)}
              onSelect={handleSelectSection}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
