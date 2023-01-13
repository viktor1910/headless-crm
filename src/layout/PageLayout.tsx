import React, { useEffect, useState } from 'react';
import Header from './PageLayout/components/Header';
import Footer from '~/layout/PageLayout/components/Footer';
import styles from './DefaultLayout.module.scss';
import { MainDetailsModel } from './PageLayout/types';
import axiosWrapper from '~/services/axiosConfig';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const [mainDetails, setMainDetails] = useState<MainDetailsModel | undefined>();
  // useEffect(() => {
  //   axiosWrapper
  //     .get<MainDetailsModel[]>('/gallery', {
  //       params: {
  //         slug: 'main-details',
  //       },
  //     })
  //     .then(res => {
  //       setMainDetails(res.data[0]);
  //     });
  // }, [mainDetails]);
  useEffect(() => {
    axiosWrapper

      .get<MainDetailsModel[]>('/gallery', {
        params: {
          slug: 'main-details',
        },
      })

      .then(res => {
        setMainDetails(res.data[0]);
      });
  }, []);

  return (
    <>
      <Header mainDetails={mainDetails} />
      <main className={styles.mainContainer}> {children}</main>
      <Footer mainDetails={mainDetails} />
    </>
  );
};

export default PageLayout;
