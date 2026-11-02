import React from 'react';
import { PageId } from '../types';
import { SectionPage } from './SectionPage';

interface TeacherPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeacherPage: React.FC<TeacherPageProps> = ({ onNavigate }) => {
  return <SectionPage sectionId="teacher" onNavigate={onNavigate} />;
};
