import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/img/favicon.jpeg';
import styles from '../index.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '~/components/Text';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { MainDetailsModel } from '../types';

interface FooterProps {
  mainDetails?: MainDetailsModel;
}

const Footer = ({ mainDetails }: FooterProps) => {
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
            {mainDetails?.acf.page_title}
          </Text>
          <Text
            type="smallBody"
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: '10px',
            }}
          >
            {/* <span
              dangerouslySetInnerHTML={{ __html: mainDetails?.acf.address_list || '' }}
              style={{
                textAlign: 'center',
                color: '#666',
                marginTop: '10px',
              }}
            /> */}
          </Text>
          <Text
            type="smallBody"
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: '10px',
            }}
          >
            Email:{mainDetails?.acf.email} | {mainDetails?.acf.phone_number}
          </Text>
        </Col>
        <Col lg={4} sm={6} className={styles.footerMst}>
          <Image src={logo} alt="" width={140} height={110} />
          {/* <Text
            type="smallBody"
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: '10px',
              maxWidth: '300px',
            }}
          >
            Mã Số Thuế :111111111 do Sở Kế Hoạch đầu tư TP.HCM cấp ngày 13/02/2015
          </Text> */}
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
          {mainDetails?.acf.page_title}
        </Text>
        <Text
          type="body"
          style={{
            textAlign: 'center',
            color: '#666',
            marginTop: '10px',
          }}
        >
          {mainDetails?.acf.main_address}
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
          © 2021 Kanghee.
        </Text>
      </Row>
    </Container>
  );
};

export default Footer;
