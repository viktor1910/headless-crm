import React from 'react';
import styles from './index.module.scss';
import Text from '~/components/Text';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import imgDatLich from '../../../public/img/imgDatLich.webp';
const DatLich = () => {
  return (
    <>
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
        <Row>
          <Col lg={6}>
            <div className={styles.wrapperDatLich}>
              <div className={styles.image1}>
                <Image src={imgDatLich} alt="" />
              </div>
              <div className={styles.image2}>
                <div className={styles.imageWrapper}></div>
              </div>

              <div className={styles.image3}>
                <Image src={imgDatLich} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Form>
              <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="HọTên" />
              </Form.Group>
              <Form.Group className="mb-5" controlId="exampleForm.ControlInput2">
                <Form.Control type="text" placeholder="Điện Thoại" />
              </Form.Group>
              <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea3">
                <Form.Control as="textarea" placeholder="Nội Dung Đặt Lịch" rows={3} />
              </Form.Group>
              <Button variant="outline-secondary" size="lg">
                Đặt Lịch
              </Button>
              <Text
                type="body"
                style={{
                  marginTop: '10px',
                  color: 'gray',
                }}
              >
                Tất cả các ngày trong tuần: 9:00 sáng tới 20:00 tối
              </Text>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DatLich;
