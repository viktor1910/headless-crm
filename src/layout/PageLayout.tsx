import React from 'react';
import Header from './PageLayout/components/Header';
import Footer from '~/layout/PageLayout/components/Footer';
import styles from './DefaultLayout.module.scss';
import { MainDetailsModel } from './PageLayout/types';

interface PageLayoutProps {
  mainDetails: MainDetailsModel;
  children: React.ReactNode;
}

const PageLayout = ({ children, mainDetails }: PageLayoutProps) => {
  return (
    <>
      <Header mainDetails={mainDetails} />
      <main className={styles.mainContainer}>{children}</main>
      <Footer mainDetails={mainDetails} />
    </>
  );
};

export default PageLayout;
