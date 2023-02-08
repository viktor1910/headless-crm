import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Section from '~/components/Section';
import Text from '~/components/Text';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './index.module.scss';
import { MainDetailsModel } from '~/layout/PageLayout/types';
import axiosWrapper from '~/services/axiosConfig';
import PageLayout from '~/layout/PageLayout';

interface LienHeProps {
  data: MainDetailsModel;
}

const LienHe = ({ data }: LienHeProps) => {
  return (
    <PageLayout mainDetails={data}>
      <Text
        type="title"
        style={{
          textAlign: 'center',
        }}
      >
        Liên Hệ
      </Text>
      <hr
        style={{
          width: '20%',
          margin: '20px auto',
        }}
      />
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4567691244047!2d106.67719421471841!3d10.776285492321579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ff49b2e5eb9%3A0x84130cb24cc5cbe9!2zSMOgIMSQw7QgQ2VudHJvc2EgSG91c2U!5e0!3m2!1svi!2s!4v1671466645741!5m2!1svi!2s"
          width="100%"
          height="auto"
          style={{ border: '0' }}
          loading="lazy"
        ></iframe>
        <Row>
          <Col lg={4}>
            <div className={styles.contactInfoDetail}>
              <Text
                type="title"
                style={{
                  textAlign: 'center',
                  color: '#666',
                  marginTop: '2rem',
                  marginBottom: '.5em',
                }}
              >
                {data.acf.page_title}
              </Text>
              <div className={styles.textCustom}>
                <span
                  dangerouslySetInnerHTML={{ __html: data.acf.address_list }}
                  style={{
                    fontSize: '20px',
                    textAlign: 'center',
                    color: '#666',
                    marginTop: '30px',
                    marginBottom: '.5em',
                    fontWeight: '600',
                    lineHeight: '50px',
                  }}
                />
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <Text
              type="title"
              style={{
                textAlign: 'center',
                color: '#666',
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              Nhận Thông Tin Khuyến Mãi & Góp Ý Dịch Vụ
            </Text>
            <Form className="text-center">
              <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Họ Và Tên" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                <Form.Control type="text" placeholder="Số Điện Thoại" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Nội Dung" rows={3} />
              </Form.Group>
              <Button className="mb-4" variant="outline-secondary">
                Đăng Ký
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export default LienHe;

export const getStaticProps = async () => {
  const res = await axiosWrapper
    .get<MainDetailsModel[]>('/gallery', {
      params: {
        slug: 'main-details',
      },
    })
    .then(res => res.data[0]);
  return {
    props: {
      data: res,
    },
    revalidate: 1,
  };
};
