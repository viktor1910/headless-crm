import React from 'react';
import styles from './index.module.scss';
import Text from '~/components/Text';
import Section from '~/components/Section';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import ImgKhuyenMai from '../../../public/img/ImageKhuyenMai.png';
const KhuyenMai = () => {
  return (
    <>
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
          Shynh Premium phát triển công nghệ làm đẹp kết hợp dưỡng chất từ thiên nhiên và mỹ phẩm tân tiến, mang đến các
          sản phẩm chăm sóc làn da chuyên nghiệp tối ưu cho mọi khách hàng.
        </Text>
      </Section>
      <Container fluid>
        <div className={styles.Gif}>
          <div className={styles.itemGift}>
            <div className={styles.itemImg}>
              <Image src={ImgKhuyenMai} alt="" />
            </div>

            <div className={styles.itemText}>
              <Text
                type="smallBody"
                style={{
                  textAlign: 'center',
                  color: '#666',
                }}
              >
                “PREMIUM” – SIÊU SỰ KIỆN VỚI 3 ĐIỀU KHÔNG THỂ BỎ LỠ!
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default KhuyenMai;
