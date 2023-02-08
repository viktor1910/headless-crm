import { GetServerSideProps } from 'next';
import React from 'react';
import axiosWrapper from '~/services/axiosConfig';
import { BaiVietDichVuModel } from '../../services/types';
import styles from './index.module.scss';
import { MainDetailsModel } from '~/layout/PageLayout/types';
import PageLayout from '~/layout/PageLayout';

interface BaiVietKhuyenMai {
  data: BaiVietDichVuModel;
  mainDetails: MainDetailsModel;
}

const BaiVietKhuyenMai = ({ data, mainDetails }: BaiVietKhuyenMai) => {
  return (
    <PageLayout mainDetails={mainDetails}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <span dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
        </div>
        <span dangerouslySetInnerHTML={{ __html: data.excerpt?.rendered || '' }} />
        <hr
          style={{
            width: '20%',
            margin: '50px auto',
          }}
        />
        <span dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      </div>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const res = await axiosWrapper
    .get<BaiVietDichVuModel[]>('posts', {
      params: context.params,
    })
    .then(resp => resp.data);

  const mainDetails = await axiosWrapper
    .get<MainDetailsModel[]>('/gallery', {
      params: {
        slug: 'main-details',
      },
    })
    .then(res => res.data[0]);

  return {
    props: {
      data: res[0],
      mainDetails,
    },
  };
};

export default BaiVietKhuyenMai;
