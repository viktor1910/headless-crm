import { GetServerSideProps } from 'next';
import React from 'react';
import axiosWrapper from '~/services/axiosConfig';
import { BaiVietDichVuModel } from '../types';
import Text from '~/components/Text';
import styles from './index.module.scss';

interface BaiVietKhuyenMai {
  data: BaiVietDichVuModel;
}

const BaiVietKhuyenMai = ({ data }: BaiVietKhuyenMai) => {
  console.log(data);
  return (
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
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const res = await axiosWrapper
    .get<BaiVietDichVuModel[]>('posts', {
      params: context.params,
    })
    .then(resp => resp.data);
  return {
    props: {
      data: res[0],
    },
  };
};

export default BaiVietKhuyenMai;
