import React, { useEffect, useState } from 'react';
import Section from '~/components/Section';
import Text from '~/components/Text';
import styles from './index.module.scss';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDichVu from '../../components/DichVu/components/CardDichVu';
import CardPostDichVu from '../../components/DichVu/components/CardPostDichVu';
import axiosWrapper from '~/services/axiosConfig';
import { CardDichVuModel, Categories } from '../../services/types';
// import axios from 'axios';
const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const settingDanhMuc = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface DichVuProps {
  data: CardDichVuModel[];
  dichVuNoiBat: CardDichVuModel[];
  danhMucDichVu: CardDichVuModel[];
}

const DichVu = ({ data, dichVuNoiBat, danhMucDichVu }: DichVuProps) => {
  // useEffect(() => {
  //   axiosWrapper

  //     .get('/posts', {
  //       params: {
  //         categories: Categories.DichVuNoiBat,
  //         per_page: 10,
  //       },
  //     })

  //     .then(res => console.log(res.data));
  // });

  return (
    <>
      <Section title="Dịch Vụ Nổi Bật" subTitle="">
        <Container fluid>
          <Slider {...settings}>
            {dichVuNoiBat.map(dichvu => (
              <div key={dichvu.slug}>
                <CardDichVu data={dichvu} type="noi-bat" />
              </div>
            ))}
          </Slider>
        </Container>
      </Section>
      <Section title="Danh Mục Dịch Vụ" subTitle="">
        <Container fluid>
          <Slider {...settingDanhMuc}>
            {danhMucDichVu.map(dichvu => (
              <div key={dichvu.slug}>
                <CardDichVu data={dichvu} type="danh-muc" />
              </div>
            ))}
          </Slider>
        </Container>
      </Section>

      <Section title="Dịch Vụ" subTitle="">
        <Row className={styles.styledRow}>
          {data?.map(d => (
            <Col xl={4} lg={6} sm={12} className={styles.styledCol} key={d.slug}>
              <CardPostDichVu data={d} />
            </Col>
          ))}
        </Row>
      </Section>
    </>
  );
};

export default DichVu;

export const getServerSideProps = async () => {
  const res =
    (await axiosWrapper
      .get<CardDichVuModel[]>('/posts', {
        params: {
          categories: Categories.DichVu,
          per_page: 10,
        },
      })
      .then(res => res.data)) || [];
  const dichVuNoiBat =
    (await axiosWrapper
      .get<CardDichVuModel[]>('/posts', {
        params: {
          categories: Categories.DichVuNoiBat,
          per_page: 10,
        },
      })
      .then(res => res.data)) || [];

  const danhMucDichVu = (await axiosWrapper.get<CardDichVuModel[]>('/danh-muc-dich-vu').then(res => res.data)) || [];
  // console.log(danhMucDichVu + 'aaa');
  // console.log(dichVuNoiBat + 'bbb');
  return {
    props: {
      data: res,
      dichVuNoiBat,
      danhMucDichVu,
    },
  };
};
