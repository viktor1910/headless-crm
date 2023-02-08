import React from 'react';
import styles from './index.module.scss';
import Text from '~/components/Text';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { ImagesAPIResponse, ImagesModel } from '~/@types/Banner';
import axiosWrapper from '~/services/axiosConfig';
import { getImages } from '~/services/util';
import { MainDetailsModel } from '~/layout/PageLayout/types';
import PageLayout from '~/layout/PageLayout';

interface DatLichProps {
  resultCenteringImg: ImagesModel[];
  mainDetails: MainDetailsModel;
}

const DatLich = ({ resultCenteringImg, mainDetails }: DatLichProps) => {
  return (
    <PageLayout mainDetails={mainDetails}>
      <Text
        type="title"
        style={{
          textAlign: 'center',
        }}
      >
        Đặt Lịch
      </Text>
      <hr
        style={{
          width: '20%',
          margin: '20px auto',
        }}
      />
      <Container>
        <Row className={styles.displayRow}>
          <Col lg={6} className={styles.wrapperCol} style={{ margin: '0', padding: '0' }}>
            {resultCenteringImg.length > 2 && (
              <div className={styles.wrapperDatLich}>
                <div className={styles.image1}>
                  <Image src={resultCenteringImg[0].src} alt={resultCenteringImg[0].alt} width={400} height={400} />
                </div>
                <div className={styles.image2}>
                  <div className={styles.imageWrapper}></div>
                </div>

                <div className={styles.image3}>
                  <Image src={resultCenteringImg[1].src} alt={resultCenteringImg[1].alt} width={400} height={400} />
                </div>
              </div>
            )}
          </Col>
          <Col lg={6} className={styles.displayCol} style={{ margin: '0', padding: '0' }}>
            <Form>
              <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="HọTên" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                <Form.Control type="text" placeholder="Điện Thoại" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea3">
                <Form.Control as="textarea" placeholder="Nội Dung Đặt Lịch" rows={3} />
              </Form.Group>
              <Button variant="outline-secondary">Đặt Lịch</Button>
              <Text
                type="body"
                style={{
                  marginTop: '10px',
                  marginBottom: '10px',
                  color: 'gray',
                }}
              >
                Tất cả các ngày trong tuần: 9:00 sáng tới 20:00 tối
              </Text>
            </Form>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const mainDetails = await axiosWrapper
    .get<MainDetailsModel[]>('/gallery', {
      params: {
        slug: 'main-details',
      },
    })
    .then(res => res.data[0]);

  const res = await axiosWrapper.get<ImagesAPIResponse[]>('/gallery').then(res => res.data);

  const centering = res.find(i => i.slug === 'centering');

  const resultCenteringImg = centering ? getImages(centering) : [];
  return {
    props: {
      resultCenteringImg,
      mainDetails,
    },
    revalidate: 1,
  };
};

export default DatLich;
