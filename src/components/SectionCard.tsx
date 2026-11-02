import React from 'react';
import { ArrowLeft, Award, BookOpen, GraduationCap } from 'lucide-react';
import { SectionId, SectionTheme } from '../types';

interface SectionCardProps {
  section: SectionTheme;
  roleTitle: string;
  onSelect: (id: SectionId) => void;
}

function renderSectionIcon(id: SectionId) {
  switch (id) {
    case 'professional-development':
      return <GraduationCap className="w-7 h-7" aria-hidden="true" />;
    case 'gifted':
      return <Award className="w-7 h-7" aria-hidden="true" />;
    case 'teacher':
      return <BookOpen className="w-7 h-7" aria-hidden="true" />;
  }
}

export const SectionCard: React.FC<SectionCardProps> = ({
  section,
  roleTitle,
  onSelect,
}) => {
  return (
    <article
      className={`group bg-white rounded-2xl border ${section.accentBorderClass} ${section.accentHoverBorderClass} p-6 sm:p-7 flex flex-col justify-between transition-all duration-150 hover:shadow-md`}
    >
      <div>
        {/* Top Row: Icon & Section Color Identity */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div
            className={`w-14 h-14 rounded-2xl ${section.iconBgClass} flex items-center justify-center shrink-0 shadow-xs`}
          >
            {renderSectionIcon(section.id)}
          </div>
          <span className={`text-xs font-semibold ${section.accentTextClass}`}>
            الصفة: {roleTitle || 'غير محددة'}
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-xl sm:text-2xl font-bold font-display text-stone-900 mb-2.5">
          {section.title}
        </h2>

        {/* Section Short Description */}
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
          {section.shortDescription}
        </p>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-stone-100">
        <button
          type="button"
          onClick={() => onSelect(section.id)}
          className={`w-full min-h-[48px] px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-between transition-colors cursor-pointer ${section.buttonBgClass}`}
        >
          <span>الدخول إلى قسم {section.title}</span>
          <ArrowLeft className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};
