import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import styles from './index.module.scss';
import Text from '~/components/Text';
const Services = () => {
  return (
    <>
      <Text
        type="title"
        style={{
          textAlign: 'center',
          color: '#333',
          marginTop: '10px',
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
      <Container>
        <Row>
          <Col lg={3} sm={3}>
            sv1
          </Col>
          <Col lg={3} sm={3}>
            sv2
          </Col>
          <Col lg={3} sm={3}>
            sv3
          </Col>
          <Col lg={3} sm={3}>
            sv4
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
