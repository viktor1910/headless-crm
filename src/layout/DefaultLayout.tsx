import React from 'react';
import styles from './DefaultLayout.module.scss';
import Header from './PageLayout/components/Header';
import Footer from '~/layout/PageLayout/components/Footer';
interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}> {children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
