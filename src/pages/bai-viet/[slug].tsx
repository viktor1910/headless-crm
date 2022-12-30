import { GetServerSideProps } from 'next';
import React from 'react';
import axiosWrapper from '~/services/axiosConfig';
import { BaiVietDichVuModel } from '../types';
import Text from '~/components/Text';
import Section from '~/components/Section';

interface BaiVietDichVuProps {
  data: BaiVietDichVuModel;
}

const BaiVietDichVu = ({ data }: BaiVietDichVuProps) => {
  return (
    <div>
      <Text
        type="title"
        style={{
          textAlign: 'center',
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
      </Text>
      <Text type="body">
        <span dangerouslySetInnerHTML={{ __html: data.excerpt?.rendered || '' }} />
      </Text>
      <hr
        style={{
          width: '20%',
          margin: '20px auto',
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

export default BaiVietDichVu;
