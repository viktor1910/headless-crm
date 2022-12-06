import React from 'react';
import Header from '../components/Header';
import Footer from '~/components/Footer';
import { AppContainer, AppLayout } from '../pages/style';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <AppContainer>
      <Header />
      <AppLayout>{children}</AppLayout>
      <Footer />
    </AppContainer>
  );
};
