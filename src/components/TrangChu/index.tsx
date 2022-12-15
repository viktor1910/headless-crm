import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import styles from './index.module.scss';
import Text from '~/components/Text';
import Card from 'react-bootstrap/Card';
import demoImage from '../../../public/img/demoImage.png';
import imgCenter from '../../../public/img/centerimg.webp';
import sl1 from '../../../public/img/Artboard-2.png';
import sl2 from '../../../public/img/Artboard-3.jpg';
import sl3 from '../../../public/img/Artboard-4.png';
import imgCol from '../../../public/img/leQuyen.webp';
import imgNone from '../../../public/img/etd1.webp';
import Slider from 'react-slick';
const TrangChu = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slider = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const simpleSlider = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <Slider {...settings} className={styles.customReview}>
              <Image src={sl1} alt="First slide" />

              <Image src={sl2} alt="Second slide" />

              <Image src={sl3} alt="Third slide" />
            </Slider>
          </Col>
          <Col lg={6}>
            <div className={styles.textReview}>
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
        <Text
          type="title"
          style={{
            textAlign: 'center',
            color: '#333',
            marginTop: '4rem',
          }}
        >
          Dịch Vụ
        </Text>
        <hr
          style={{
            width: '20%',
            margin: '20px auto',
          }}
        />
        <Row className={styles.rowService}>
          <Col lg={4} md={12}>
            <Row xs={2}>
              <Col lg={6} className={styles.colServices}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="title"
                      style={{
                        textAlign: 'center',
                        color: '#666',
                        marginTop: '10px',
                        marginBottom: '.5em',
                      }}
                    >
                      Some quick example text 1
                    </Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="title"
                      style={{
                        textAlign: 'center',
                        color: '#666',
                        marginTop: '10px',
                        marginBottom: '.5em',
                      }}
                    >
                      Some quick example text 1
                    </Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="title"
                      style={{
                        textAlign: 'center',
                        color: '#666',
                        marginTop: '10px',
                        marginBottom: '.5em',
                      }}
                    >
                      Some quick example text 1
                    </Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className={styles.colServices}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="title"
                      style={{
                        textAlign: 'center',
                        color: '#666',
                        marginTop: '10px',
                        marginBottom: '.5em',
                      }}
                    >
                      Some quick example text 1
                    </Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={4} className={styles.colImage}>
            <Row>
              <Image src={imgCenter} alt="" />
            </Row>
          </Col>
          <Col lg={4} md={12}>
            <Row xs={2}>
              <Col lg={6} className={styles.colServices}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="title"
                      style={{
                        textAlign: 'center',
                        color: '#666',
                        marginTop: '10px',
                        marginBottom: '.5em',
                      }}
                    >
                      Some quick example text 2
                    </Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="title"
                      style={{
                        textAlign: 'center',
                        color: '#666',
                        marginTop: '10px',
                        marginBottom: '.5em',
                      }}
                    >
                      Some quick example text 2
                    </Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className={styles.colServices}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="title"
                      style={{
                        textAlign: 'center',
                        color: '#666',
                        marginTop: '10px',
                        marginBottom: '.5em',
                      }}
                    >
                      Some quick example text 2
                    </Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="title"
                      style={{
                        textAlign: 'center',
                        color: '#666',
                        marginTop: '10px',
                        marginBottom: '.5em',
                      }}
                    >
                      Some quick example text 2
                    </Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Text
          type="title"
          style={{
            textAlign: 'center',
            color: '#333',
            marginTop: '4rem',
          }}
        >
          Trải Nghiệm Sự Khác Biệt
        </Text>
        <hr
          style={{
            width: '20%',
            margin: '20px auto',
          }}
        />
        <Row className={styles.imgNone}>
          <Col>
            <Slider {...slider} className={styles.slickSlider}>
              <div className={styles.cardSlider}>
                <Image src={imgNone} alt="" />
              </div>
              <div className={styles.cardSlider}>
                <Image src={imgNone} alt="" />
              </div>
              <div className={styles.cardSlider}>
                <Image src={imgNone} alt="" />
              </div>
              <div className={styles.cardSlider}>
                <Image src={imgNone} alt="" />
              </div>
              <div className={styles.cardSlider}>
                <Image src={imgNone} alt="" />
              </div>
              <div className={styles.cardSlider}>
                <Image src={imgNone} alt="" />
              </div>
            </Slider>
          </Col>
        </Row>
        <Row className={styles.customSlider}>
          <Col lg={12}>
            <Slider {...simpleSlider}>
              <div className={styles.cardSlider}>
                <Row>
                  <Col lg={8} sm={12} className={styles.cardServices}>
                    <Image src={imgCol} alt="" />
                  </Col>
                  <Col lg={4} sm={12}>
                    <div className={styles.textSlider}>
                      <Text
                        type="body"
                        style={{
                          textAlign: 'center',
                          color: '#666',
                          marginTop: '10px',
                          marginBottom: '.5em',
                        }}
                      >
                        Quyên luôn cố gắng giữ cho vẻ ngoài rạng rỡ và hoàn thiện để xuất hiện thật tuyệt vời trước công
                        chúng. Và Shynh Premium chính là nơi Quyên chọn để giữ cho làn da luôn mướt mịn, trắng khỏe, duy
                        trì vóc dáng thon thả, quyến rũ. Shynh Premium chính là ngôi nhà thứ 2 giúp Quyên lưu giữ thanh
                        xuân và tỏa sáng bất cứ lúc nào
                      </Text>
                      <Text
                        type="title"
                        style={{
                          textAlign: 'center',
                          color: '#666',
                          marginTop: '10px',
                          marginBottom: '.5em',
                        }}
                      >
                        Lệ Quyên
                      </Text>
                      <Text
                        type="body"
                        style={{
                          textAlign: 'center',
                          color: '#666',
                          marginTop: '10px',
                          marginBottom: '.5em',
                        }}
                      >
                        Singer
                      </Text>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={styles.cardSlider}>
                <Row>
                  <Col lg={8} sm={12} className={styles.cardServices}>
                    <Image src={imgCol} alt="" />
                  </Col>
                  <Col lg={4} sm={12}>
                    123
                  </Col>
                </Row>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TrangChu;
