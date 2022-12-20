import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Section from '~/components/Section';
import Text from '~/components/Text';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './index.module.scss';
const LienHe = () => {
  return (
    <>
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
                  marginTop: '10px',
                  marginBottom: '.5em',
                }}
              >
                Hệ Thống SHYNH PREMIUM
              </Text>
              <div className={styles.textCustom}>
                <Text
                  type="body"
                  style={{
                    textAlign: 'center',
                    color: '#666',
                    marginTop: '30px',
                    marginBottom: '.5em',
                    fontWeight: '600',
                  }}
                >
                  SHYNH PREMIUM Trần Quốc Thảo
                </Text>
              </div>

              <Text
                type="smallBody"
                style={{
                  textAlign: 'center',
                  color: '#666',
                  marginTop: '10px',
                  marginBottom: '.5em',
                }}
              >
                33 Trần Quốc Thảo, P. 6, Q. 3, TP. HCM
              </Text>
              <Text
                type="smallBody"
                style={{
                  textAlign: 'center',
                  color: '#666',
                  marginTop: '10px',
                  marginBottom: '.5em',
                }}
              >
                089 649 1919
              </Text>
            </div>
            <div className={styles.contactInfoDetail}>
              <div className={styles.textCustom}>
                <Text
                  type="body"
                  style={{
                    textAlign: 'center',
                    color: '#666',
                    marginTop: '30px',
                    marginBottom: '.5em',
                    fontWeight: '600',
                  }}
                >
                  SHYNH PREMIUM Trần Quốc Thảo
                </Text>
              </div>
              <Text
                type="smallBody"
                style={{
                  textAlign: 'center',
                  color: '#666',
                  marginTop: '10px',
                  marginBottom: '.5em',
                }}
              >
                33 Trần Quốc Thảo, P. 6, Q. 3, TP. HCM
              </Text>
              <Text
                type="smallBody"
                style={{
                  textAlign: 'center',
                  color: '#666',
                  marginTop: '10px',
                  marginBottom: '.5em',
                }}
              >
                089 649 1919
              </Text>
            </div>
            <div className={styles.contactInfoDetail}>
              <div className={styles.textCustom}>
                <Text
                  type="body"
                  style={{
                    textAlign: 'center',
                    color: '#666',
                    marginTop: '30px',
                    marginBottom: '.5em',
                    fontWeight: '600',
                  }}
                >
                  SHYNH PREMIUM Trần Quốc Thảo
                </Text>
              </div>
              <Text
                type="smallBody"
                style={{
                  textAlign: 'center',
                  color: '#666',
                  marginTop: '10px',
                  marginBottom: '.5em',
                }}
              >
                33 Trần Quốc Thảo, P. 6, Q. 3, TP. HCM
              </Text>
              <Text
                type="smallBody"
                style={{
                  textAlign: 'center',
                  color: '#666',
                  marginTop: '10px',
                  marginBottom: '.5em',
                }}
              >
                089 649 1919
              </Text>
            </div>
          </Col>
          <Col lg={8}>
            <Text
              type="title"
              style={{
                textAlign: 'center',
                color: '#666',
                marginTop: '10px',
                marginBottom: '.5em',
              }}
            >
              Nhận Thông Tin Khuyến Mãi & Góp Ý Dịch Vụ
            </Text>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Họ Và Tên" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Control type="text" placeholder="Số Điện Thoại" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Nội Dung" rows={3} />
              </Form.Group>
              <Button variant="outline-secondary">Đăng Ký</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LienHe;
