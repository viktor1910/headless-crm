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
      <Container fluid>
        <Row className={styles.service}>
          <Col lg={4} md={12}>
            <Row xs={1} md={2} className="g-2">
              <Col lg={6} className={styles.colServices}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="smallBody"
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
              </Col>
              <Col lg={6} className={styles.colServices}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="smallBody"
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
              </Col>
              <Col lg={6} className={styles.colServices}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="smallBody"
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
              </Col>
              <Col lg={6} className={styles.colServices}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="smallBody"
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
              </Col>
            </Row>
          </Col>
          <Col lg={4} className={styles.colImage}>
            <Row className={styles.rowImage}>
              <Image src={imgCenter} alt="" />
            </Row>
          </Col>
          <Col lg={4} md={12}>
            <Row xs={1} md={2} className="g-2">
              <Col lg={6} className={styles.colServices}>
                <Card className={styles.cardServices}>
                  <Image src={demoImage} alt="" width={200} height={250} />
                  <Card.Body>
                    <Text
                      type="smallBody"
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
                      type="smallBody"
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
                      type="smallBody"
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
                      type="smallBody"
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
      </Container>
    </>
  );
};

export default Services;
