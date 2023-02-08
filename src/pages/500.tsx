import React from 'react';
import PageLayout from '~/layout/PageLayout';
import { MainDetailsModel } from '~/layout/PageLayout/types';
import axiosWrapper from '~/services/axiosConfig';
interface Custom500Props {
  mainDetails: MainDetailsModel;
}
const Custom500 = ({ mainDetails }: Custom500Props) => {
  return <PageLayout mainDetails={mainDetails}>500 error. contact admin</PageLayout>;
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

export default Custom500;
