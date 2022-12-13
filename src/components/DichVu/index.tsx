import React from 'react';
import Section from '~/components/Section';
import Text from '../Text';
import styles from './index.module.scss';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import demoImage from '../../../public/img/demoImage.png';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const DichVu = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  var settingService = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <Section title="Dịch Vụ Nổi Bật" subTitle="">
        <Container fluid>
          <Slider {...settings} className={styles.slickSlider}>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </Container>
      </Section>
      <Section title="Danh Mục Dịch Vụ" subTitle="">
        <Container fluid>
          <Slider {...settingService} className={styles.slickSlider}>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className={styles.card}>
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
                    Some quick example text
                  </Text>
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </Container>
      </Section>

      <Section title="Dịch Vụ" subTitle="">
        <Container fluid>
          <Row>
            <Col lg={4}>
              <Card className={styles.card}>
                <Image src={demoImage} alt="" width={400} height={250} />
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
                    Some quick example text
                  </Text>
                  <Button variant="secondary">Xem Thêm</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className={styles.card}>
                <Image src={demoImage} alt="" width={400} height={250} />
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
                    Some quick example text
                  </Text>
                  <Button variant="secondary">Xem Thêm</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className={styles.card}>
                <Image src={demoImage} alt="" width={400} height={250} />
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
                    Some quick example text
                  </Text>
                  <Button variant="secondary">Xem Thêm</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className={styles.card}>
                <Image src={demoImage} alt="" width={400} height={250} />
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
                    Some quick example text
                  </Text>
                  <Button variant="secondary">Xem Thêm</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className={styles.card}>
                <Image src={demoImage} alt="" width={400} height={250} />
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
                    Some quick example text
                  </Text>
                  <Button variant="secondary">Xem Thêm</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className={styles.card}>
                <Image src={demoImage} alt="" width={400} height={250} />
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
                    Some quick example text
                  </Text>
                  <Button variant="secondary">Xem Thêm</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default DichVu;
