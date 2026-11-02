import React from 'react';
import { Settings } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'professional-development', label: 'التطوير المهني' },
  { id: 'gifted', label: 'الموهوبون' },
  { id: 'teacher', label: 'المعلم' },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="bg-white border-b border-stone-200/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: 3-Zone Navigation Contract */}
        <div className="flex items-center justify-between gap-4 sm:gap-8 py-3.5">
          {/* Zone 1: Brand Title (No system logo per instructions) */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-stone-900 hover:text-stone-700 transition-colors whitespace-nowrap shrink-0 min-h-[44px] flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800 rounded-lg px-1"
          >
            مكتبي المدرسي
          </button>

          {/* Zone 2: Primary Navigation Links (Desktop & Tablet) */}
          <nav
            aria-label="التنقل الرئيسي"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`min-h-[44px] px-2 flex items-center whitespace-nowrap shrink-0 border-b-2 transition-colors cursor-pointer ${
                    isActive
                      ? 'border-stone-900 text-stone-950 font-bold'
                      : 'border-transparent text-stone-600 hover:text-stone-900 hover:border-stone-300'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action (Settings) */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('settings')}
              aria-current={currentPage === 'settings' ? 'page' : undefined}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'settings'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-800 hover:bg-stone-200/80'
              }`}
            >
              <Settings className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>الإعدادات المركزية</span>
            </button>
          </div>
        </div>

        {/* Mobile & Foldable Quick Navigation Strip */}
        <nav
          aria-label="التنقل السريع للجوال"
          className="flex md:hidden items-center gap-1 overflow-x-auto py-1.5 border-t border-stone-100"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Dedicated Official Header Slot for Ministry of Education Logo (PNG) */}
      <div className="bg-[#F6F3EC] border-t border-stone-200/70">
        <div
          data-testid="moe-logo-slot"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center"
        >
          <img
            src="./moe-logo.png"
            alt="شعار وزارة التعليم"
            referrerPolicy="no-referrer"
            className="w-32 sm:w-40 h-auto object-contain select-none"
          />
        </div>
      </div>
    </header>
  );
};
