import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import sl1 from '../../../public/img/Artboard-2.png';
import sl2 from '../../../public/img/Artboard-3.jpg';
import sl3 from '../../../public/img/Artboard-4.png';
import styles from './index.module.scss';
import Slider from 'react-slick';
const SlideWrapper = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <Slider dots infinite speed={500} autoplay slidesToShow={1} slidesToScroll={1}>
            <Image className="d-block w-100" src={sl1} alt="First slide" />
            <Image className="d-block w-100" src={sl2} alt="Second slide" />
            <Image className="d-block w-100" src={sl3} alt="Third slide" />
          </Slider>
        </Col>
        <Col lg={6}>
          <div className={styles.mainService}>
            <p>
              <strong>5</strong>Chi Nhánh Tại TP.HCM,Hà Nội,Đà Nẵng
            </p>
            <p>
              <strong>100+</strong>Dịch Vụ Làm Đẹp Hàng Đầu
            </p>
            <p>
              <strong>1.000.000+</strong>Lượt Khách Mỗi Năm
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SlideWrapper;
