import React from 'react';
import Section from '~/components/Section';
import styles from './index.module.scss';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axiosWrapper from '~/services/axiosConfig';
import { CardDichVuModel, CategoriesModel } from '~/services/types';
import CardDichVu from '../../components/DichVu/components/CardDichVu';
import CardPostDichVu from '../../components/DichVu/components/CardPostDichVu';
import { GetServerSideProps } from 'next/types';
import { MainDetailsModel } from '~/layout/PageLayout/types';
import PageLayout from '~/layout/PageLayout';

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
  mainDetails: MainDetailsModel;
}

const DichVu = ({ data, dichVuNoiBat, danhMucDichVu, name, mainDetails }: DichVuProps) => {
  return (
    <PageLayout mainDetails={mainDetails}>
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
    </PageLayout>
  );
};

export default DichVu;

export const getServerSideProps: GetServerSideProps = async context => {
  const mainDetails = await axiosWrapper
    .get<MainDetailsModel[]>('/gallery', {
      params: {
        slug: 'main-details',
      },
    })
    .then(res => res.data[0]);
  const res = await axiosWrapper
    .get<CardDichVuModel[]>('/posts', {
      params: {
        // @ts-ignore
        categories: context.params.slug,
        per_page: 10,
      },
    })
    .then(res => res.data);

  const { id: idDichVuNoiBat } = await axiosWrapper
    .get<any>('/categories', {
      params: {
        slug: 'dich-vu-noi-bat',
      },
    })
    .then(res => res.data?.at(0));

  const dichVuNoiBat = await axiosWrapper
    // @ts-ignore
    .get<CardDichVuModel[]>(`/posts?categories=${idDichVuNoiBat}&categories=${context.params.slug}`, {
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
      mainDetails,
    },
  };
};
