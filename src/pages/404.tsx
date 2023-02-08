import React from 'react';
import PageLayout from '~/layout/PageLayout';
import { MainDetailsModel } from '~/layout/PageLayout/types';
import axiosWrapper from '~/services/axiosConfig';

interface Custom404Props {
  mainDetails: MainDetailsModel;
}

const Custom404 = ({ mainDetails }: Custom404Props) => {
  return <PageLayout mainDetails={mainDetails}>404 not found this page</PageLayout>;
};

export const getStaticProps = async () => {
  const mainDetails = await axiosWrapper
    .get<MainDetailsModel[]>('/gallery', {
      params: {
        slug: 'main-details',
      },
    })
    .then(res => res.data[0]);

  return {
    props: {
      mainDetails,
    },
    revalidate: 1,
  };
};

export default Custom404;
