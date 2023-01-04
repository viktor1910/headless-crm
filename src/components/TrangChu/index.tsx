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
import { CardDichVuModel } from '~/pages/types';
import Link from 'next/link';
import { ImagesAPIResponse, ImagesModel, ReviewModel } from '~/@types/Banner';
import { getImages } from '~/services/util';

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

interface TrangChuProps {
  dichVuNoiBat: CardDichVuModel[];
  resultWelcome: ImagesModel[];
  resultCenteringImg: ImagesModel[];
  resultWelcomeText: ImagesAPIResponse;
  resultCenteringMain: string;
  review: ReviewModel[];
}

function chunkArray(arr: Array<any>, n: number) {
  var chunkLength = Math.max(arr.length / n, 1);
  var chunks = [];
  for (var i = 0; i < n; i++) {
    if (chunkLength * (i + 1) <= arr.length) chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
  }
  return chunks;
}

const TrangChu = ({
  dichVuNoiBat,
  resultWelcome,
  resultCenteringImg,
  resultCenteringMain,
  review,
  resultWelcomeText,
}: TrangChuProps) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6} className={styles.textReview}>
            <Slider {...settings} className={styles.customReview}>
              {resultWelcome.map(result => (
                <img src={result.src} alt={result.alt} key={result.src} />
              ))}
            </Slider>
          </Col>
          <Col lg={6} className={styles.textReview}>
            <Text
              type="body"
              style={{
                textAlign: 'center',
                color: '#333',
              }}
            >
              <strong>{resultWelcomeText.acf?.first_number}</strong>
              <span>{resultWelcomeText.acf?.first_label}</span>
            </Text>
            <Text
              type="body"
              style={{
                textAlign: 'center',
                color: '#333',
              }}
            >
              <strong>{resultWelcomeText.acf?.second_number}+</strong>
              <span>{resultWelcomeText.acf?.second_label}</span>
            </Text>
            <Text
              type="body"
              style={{
                textAlign: 'center',
                color: '#333',
              }}
            >
              <strong>{new Intl.NumberFormat().format(resultWelcomeText.acf?.third_number || 0)}+</strong>
              <span>{resultWelcomeText.acf?.third_label}</span>
            </Text>
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
              {chunkArray(dichVuNoiBat, 2)[0].map(dichvu => {
                return (
                  <Col lg={6} style={{ padding: '0' }} className={styles.colServices} key={dichvu?.slug}>
                    <Link
                      href={`/bai-viet/${dichvu?.slug}`}
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <Card className={styles.cardServices}>
                        <img
                          src={dichvu?.acf?.feature_image_url || ''}
                          alt={dichvu?.acf?.feature_image_alt || ''}
                          style={{ padding: '10px 5px' }}
                        />
                        <Card.Body style={{ padding: '0' }}>
                          <Text
                            type="body"
                            style={{
                              textAlign: 'center',
                              color: '#666',
                              marginTop: '10px',
                              marginBottom: '.5em',
                            }}
                          >
                            {dichvu?.title.rendered}
                          </Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col lg={4} className={styles.colImage}>
            <Row>
              <img src={resultCenteringMain} alt="" />
            </Row>
          </Col>
          <Col lg={4} md={12}>
            <Row xs={2}>
              {chunkArray(dichVuNoiBat, 2)[1]?.map(dichvu => {
                return (
                  <Col lg={6} style={{ padding: '0' }} className={styles.colServices} key={dichvu?.slug}>
                    <Link
                      href={`/bai-viet/${dichvu?.slug}`}
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <Card className={styles.cardServices}>
                        <img
                          src={dichvu?.acf?.feature_image_url || ''}
                          alt={dichvu?.acf?.feature_image_alt || ''}
                          style={{ padding: '10px 5px' }}
                        />
                        <Card.Body style={{ padding: '0' }}>
                          <Text
                            type="body"
                            style={{
                              textAlign: 'center',
                              color: '#666',
                              marginTop: '10px',
                              marginBottom: '.5em',
                            }}
                          >
                            {dichvu?.title.rendered}
                          </Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
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
              {resultCenteringImg.map(result => (
                <div className={styles.cardSlider} key={result.src}>
                  <img src={result.src} alt={result.alt} />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
        <Row className={styles.customSlider}>
          <Col lg={12}>
            <Slider {...simpleSlider}>
              {review.map((result, index) => {
                let img;
                const reviewImg = getImages(result);

                img = reviewImg ? reviewImg[0].src : '';
                return (
                  <div className={styles.cardSlider} key={`${result.acf?.author}-${index}`}>
                    <Row>
                      <Col lg={8} sm={12} className={styles.cardCustomer}>
                        <img src={img} alt="" />
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
                            {result.acf?.review}
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
                            {result.acf?.author}
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
                            {result.acf?.job_title}
                          </Text>
                        </div>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TrangChu;
