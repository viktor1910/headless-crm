import React from 'react';
import Header from './components/Header';
import Footer from '~/layout/PageLayout/components/Footer';
import styles from '~/layout/DefaultLayout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </>
  );
};
