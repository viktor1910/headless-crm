import React from 'react';
import Header from './PageLayout/components/Header';
import Footer from '~/layout/PageLayout/components/Footer';
import styles from './DefaultLayout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}> {children}</main>
      <Footer />
    </>
  );
};
