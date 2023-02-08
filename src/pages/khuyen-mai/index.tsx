import React from 'react';
import styles from './index.module.scss';
import Text from '~/components/Text';
import Section from '~/components/Section';
import { Col, Container, Row } from 'react-bootstrap';
import axiosWrapper from '~/services/axiosConfig';
import { BaiVietDichVuModel } from '../../services/types';
import Link from 'next/link';
import { MainDetailsModel } from '~/layout/PageLayout/types';
import PageLayout from '~/layout/PageLayout';

interface KhuyenMaiProps {
  data: BaiVietDichVuModel[];
  mainDetails: MainDetailsModel;
}

const KhuyenMai = ({ data, mainDetails }: KhuyenMaiProps) => {
  return (
    <PageLayout mainDetails={mainDetails}>
      <Section title="Thẻ Quà Tặng" subTitle="">
        <Text
          type="body"
          style={{
            textAlign: 'center',
            color: '#666',
            marginTop: '-20px',
          }}
        >
          Đẹp mọi khoảng khắc trong vòng tay
        </Text>
        <Text
          type="body"
          style={{
            textAlign: 'center',
            color: '#666',
            marginTop: '10px',
          }}
        >
          Kanghee phát triển công nghệ làm đẹp kết hợp dưỡng chất từ thiên nhiên và mỹ phẩm tân tiến, mang đến các sản
          phẩm chăm sóc làn da chuyên nghiệp tối ưu cho mọi khách hàng.
        </Text>
      </Section>
      <Container fluid>
        <Row className={styles.gifContainer}>
          {data.map(d => (
            <Col xs={12} sm={6} md={4} key={d.slug}>
              <Link href={`/khuyen-mai/${d.slug}`} style={{ textDecoration: 'none' }}>
                <div className={styles.Gif}>
                  <div className={styles.itemImg}>
                    <img src={d.acf?.feature_image_url} alt={d.acf?.feature_image_url} />
                  </div>

                  <div className={styles.itemText}>
                    <Text
                      type="title"
                      style={{
                        textAlign: 'center',
                        color: '#666',
                        marginTop: '10px',
                        marginBottom: '.5em',
                      }}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: d.title.rendered }}
                        style={{
                          fontSize: '20px',
                          fontWeight: '700',
                        }}
                      />
                    </Text>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const res = await axiosWrapper
    .get<BaiVietDichVuModel[]>('khuyen-mai', {
      params: {
        per_page: 10,
      },
    })
    .then(resp => resp.data);

  const mainDetails = await axiosWrapper
    .get<MainDetailsModel[]>('/gallery', {
      params: {
        slug: 'main-details',
      },
    })
    .then(res => res.data[0]);
  return {
    props: {
      data: res,
      mainDetails,
    },
    revalidate: 1,
  };
};

export default KhuyenMai;
