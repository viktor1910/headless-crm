import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/img/download.png';
import styles from '../index.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '~/components/Text';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
const Footer = () => {
  return (
    <Container fluid>
      <Row className={styles.rowFooter}>
        <Col lg={4} sm={6} className={styles.footerAddress}>
          <Text
            type="title"
            style={{
              textAlign: 'center',
              color: '#333',
              marginTop: '10px',
            }}
          >
            Công ty TNHH Shynh House
          </Text>
          <Text
            type="smallBody"
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: '10px',
            }}
          >
            591 Sư Vạn Hạnh, Phường 13, Quận 10
          </Text>
          <Text
            type="smallBody"
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: '10px',
            }}
          >
            Email:cskh@shynhpremium.vn | 1900989800
          </Text>
        </Col>
        <Col lg={4} sm={6} className={styles.footerMst}>
          <Image src={logo} alt="" width={140} height={110} />
          <Text
            type="smallBody"
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: '10px',
              maxWidth: '300px',
            }}
          >
            Mã Số Thuế :111111111 do Sở Kế Hoạch đầu tư TP.HCM cấp ngày 13/02/2015
          </Text>
        </Col>
        <Col lg={4} sm={6} className={styles.footerForm}>
          <Text
            type="title"
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: '10px',
              marginBottom: '.5em',
            }}
          >
            Đăng Ký Nhận Khuyến Mãi
          </Text>
          <Form>
            <InputGroup>
              <Form.Control placeholder="Please enter your name..." />
              <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
            </InputGroup>

            <InputGroup>
              <Form.Control placeholder="Please enter your phone number" />
              <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
            </InputGroup>

            <Button variant="light">
              <Text
                type="body"
                style={{
                  textAlign: 'center',
                  color: '#666',
                  marginTop: '5px',
                }}
              >
                Đăng Ký
              </Text>
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className={styles.footerNameCompany}>
        <Text
          type="title"
          style={{
            textAlign: 'center',
            color: '#666',
            marginTop: '10px',
          }}
        >
          Shynh Premium 3 Tháng 2
        </Text>
        <Text
          type="body"
          style={{
            textAlign: 'center',
            color: '#666',
            marginTop: '10px',
          }}
        >
          326 Đường 3 Tháng 2, Phường 12, Quận 10
        </Text>
      </Row>
      <Row className={styles.footerCopyright} fixe="bottom">
        <Text
          type="body"
          style={{
            textAlign: 'center',
            color: 'gray',
            marginTop: '10px',
          }}
        >
          © 2021 SHYNH PREMIUM.
        </Text>
      </Row>
    </Container>
  );
};

export default Footer;
