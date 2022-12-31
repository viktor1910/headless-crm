import React from 'react';
import Section from '~/components/Section';
import Text from '~/components/Text';
import styles from './index.module.scss';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axiosWrapper from '~/services/axiosConfig';
import { CardDichVuModel, Categories, CategoriesModel } from '~/pages/types';
import CardDichVu from './components/CardDichVu';
import CardPostDichVu from './components/CardPostDichVu';
import { GetServerSideProps } from 'next/types';

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
  name: string;
}

const DichVu = ({ data, dichVuNoiBat, danhMucDichVu, name }: DichVuProps) => {
  console.log(data);
  return (
    <>
      <Section title={name} subTitle="Dịch vụ nổi bật">
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

      <Section title={name} subTitle="Tất cả dịch vụ">
        <Row className={styles.styledRow}>
          {data.map(d => (
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

export const getServerSideProps: GetServerSideProps = async context => {
  const res = await axiosWrapper
    .get<CardDichVuModel[]>('/posts', {
      params: {
        // @ts-ignore
        categories: context.params.slug,
        per_page: 10,
      },
    })
    .then(res => res.data);
  const dichVuNoiBat = await axiosWrapper
    // @ts-ignore
    .get<CardDichVuModel[]>(`/posts?categories=${Categories.DichVuNoiBat}&categories=${context.params.slug}`, {
      params: {
        per_page: 10,
      },
    })
    .then(res => res.data);
  const danhMucDichVu = await axiosWrapper.get<CardDichVuModel[]>('/danh-muc-dich-vu').then(res => res.data);

  const categories = await axiosWrapper
    .get<CategoriesModel[]>('/categories', {
      params: {
        // @ts-ignore
        include: context.params.slug,
      },
    })
    .then(res => res.data);
  return {
    props: {
      data: res,
      dichVuNoiBat,
      danhMucDichVu,
      name: categories ? categories[0].name : '',
    },
  };
};
