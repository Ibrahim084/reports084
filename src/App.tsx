/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SettingsProvider } from './context/SettingsContext';
import { GiftedPage } from './pages/GiftedPage';
import { HomePage } from './pages/HomePage';
import { ProfessionalDevelopmentPage } from './pages/ProfessionalDevelopmentPage';
import { SettingsPage } from './pages/SettingsPage';
import { TeacherPage } from './pages/TeacherPage';
import { PageId } from './types';
import { pageToHash, parseHashToPage } from './utils/settingsStorage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() =>
    typeof window !== 'undefined' ? parseHashToPage(window.location.hash) : 'home'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(parseHashToPage(window.location.hash));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      const targetHash = pageToHash(page);
      if (window.location.hash !== targetHash) {
        window.history.pushState(null, '', targetHash);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <SettingsProvider>
      <div dir="rtl" className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />

        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'professional-development' && (
            <ProfessionalDevelopmentPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'gifted' && <GiftedPage onNavigate={handleNavigate} />}
          {currentPage === 'teacher' && <TeacherPage onNavigate={handleNavigate} />}
          {currentPage === 'settings' && <SettingsPage onNavigate={handleNavigate} />}
        </main>

        <Footer />
      </div>
    </SettingsProvider>
  );
}
