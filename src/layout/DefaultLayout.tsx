import React from 'react';
import styles from './DefaultLayout.module.scss';
import Header from '~/layout/PageLayout/components/Header';
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
      {/* <div>This is head layout</div>
      <main className={styles.mainContainer}>{children}</main>
      <div>This is footer</div> */}
    </>
  );
};

export default PageLayout;
