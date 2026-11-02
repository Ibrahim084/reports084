import React from 'react';
import { PageId } from '../types';
import { SectionPage } from './SectionPage';

interface GiftedPageProps {
  onNavigate: (page: PageId) => void;
}

export const GiftedPage: React.FC<GiftedPageProps> = ({ onNavigate }) => {
  return <SectionPage sectionId="gifted" onNavigate={onNavigate} />;
};
