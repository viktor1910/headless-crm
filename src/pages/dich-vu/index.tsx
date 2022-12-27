import React from 'react';
import Section from '~/components/Section';
import Text from '~/components/Text';
import styles from './index.module.scss';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import demoImage from '../../../public/img/demoImage.png';
import demoPremium from '../../../public/img/premium.jpg';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDichVu from './components/CardDichVu';
import CardPostDichVu from './components/CardPostDichVu';

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 5,
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

const DichVu = () => {
  return (
    <>
      <Section title="Dịch Vụ Nổi Bật" subTitle="">
        <Container fluid>
          <Slider {...settings}>
            <CardDichVu
              srcImg="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              alt=""
              title="something"
              type="noi-bat"
            />
            <CardDichVu
              srcImg="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              alt=""
              title="something"
              type="noi-bat"
            />
            <CardDichVu
              srcImg="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              alt=""
              title="something"
              type="noi-bat"
            />
            <CardDichVu
              srcImg="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              alt=""
              title="something"
              type="noi-bat"
            />
            <CardDichVu
              srcImg="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              alt=""
              title="something"
              type="noi-bat"
            />
            <CardDichVu
              srcImg="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              alt=""
              title="something"
              type="noi-bat"
            />
          </Slider>
        </Container>
      </Section>
      <Section title="Dịch Vụ Nổi Bật" subTitle="">
        <Container fluid>
          <Slider {...settingDanhMuc}>
            <CardDichVu
              srcImg="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              alt=""
              title="something"
              type="danh-muc"
            />
            <CardDichVu
              srcImg="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              alt=""
              title="something"
              type="danh-muc"
            />
            <CardDichVu
              srcImg="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              alt=""
              title="something"
              type="danh-muc"
            />
            <CardDichVu
              srcImg="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              alt=""
              title="something"
              type="danh-muc"
            />
          </Slider>
        </Container>
      </Section>

      <Section title="Dịch Vụ" subTitle="">
        <Row className={styles.styledRow}>
          <Col xl={4} lg={6} sm={12} className={styles.styledCol}>
            <CardPostDichVu
              alt=""
              imgSrc="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              title="Detox Skin thải độc hồi sinh làn da khỏe"
            />
          </Col>
          <Col xl={4} lg={6} sm={12} className={styles.styledCol}>
            <CardPostDichVu
              alt=""
              imgSrc="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              title="Detox Skin thải độc hồi sinh làn da khỏe"
            />
          </Col>
          <Col xl={4} lg={6} sm={12} className={styles.styledCol}>
            <CardPostDichVu
              alt=""
              imgSrc="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              title="Detox Skin thải độc hồi sinh làn da khỏe"
            />
          </Col>
          <Col xl={4} lg={6} sm={12} className={styles.styledCol}>
            <CardPostDichVu
              alt=""
              imgSrc="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              title="Detox Skin thải độc hồi sinh làn da khỏe"
            />
          </Col>
          <Col xl={4} lg={6} sm={12} className={styles.styledCol}>
            <CardPostDichVu
              alt=""
              imgSrc="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              title="Detox Skin thải độc hồi sinh làn da khỏe"
            />
          </Col>
          <Col xl={4} lg={6} sm={12} className={styles.styledCol}>
            <CardPostDichVu
              alt=""
              imgSrc="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              title="Detox Skin thải độc hồi sinh làn da khỏe"
            />
          </Col>
          <Col xl={4} lg={6} sm={12} className={styles.styledCol}>
            <CardPostDichVu
              alt=""
              imgSrc="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              title="Detox Skin thải độc hồi sinh làn da khỏe"
            />
          </Col>
          <Col xl={4} lg={6} sm={12} className={styles.styledCol}>
            <CardPostDichVu
              alt=""
              imgSrc="https://shynhpremium.vn/wp-content/uploads/2021/10/Cong-nghe-tre-hoa-Thermage-FLX-1.png"
              title="Detox Skin thải độc hồi sinh làn da khỏe"
            />
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default DichVu;
