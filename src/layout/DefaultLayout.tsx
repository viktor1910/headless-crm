import React from 'react';
import styles from './DefaultLayout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <div>This is head layout</div>
      <main className={styles.mainContainer}>{children}</main>
      <div>This is footer</div>
    </>
  );
};

export default PageLayout;
