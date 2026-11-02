import React from 'react';
import { PageId } from '../types';
import { SectionPage } from './SectionPage';

interface ProfessionalDevelopmentPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProfessionalDevelopmentPage: React.FC<ProfessionalDevelopmentPageProps> = ({
  onNavigate,
}) => {
  return <SectionPage sectionId="professional-development" onNavigate={onNavigate} />;
};
