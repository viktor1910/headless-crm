import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import styles from './CardDichVu.module.scss';
import Text from '~/components/Text';

interface CardDichVuProps {
  srcImg: string;
  alt: string;
  title: string;
  type: 'danh-muc' | 'noi-bat';
}

const defineClassNameImg = (type: 'danh-muc' | 'noi-bat') => {
  switch (type) {
    case 'noi-bat':
      return styles.imgNoiBat;
    case 'danh-muc':
      return styles.imgDanhMuc;
    default:
      return styles.imgNoiBat;
  }
};

const CardDichVu = ({ srcImg, alt, title, type }: CardDichVuProps) => {
  return (
    <Card className={styles.cardContainer}>
      <div className={defineClassNameImg(type)}>
        <Image
          src={srcImg}
          fill
          alt={alt}
          style={{
            objectFit: 'fill',
          }}
        />
      </div>
      <div>
        <Text
          type="title"
          style={{
            textAlign: 'center',
            color: '#666',
            marginTop: '10px',
            marginBottom: '.5em',
          }}
        >
          {title}
        </Text>
      </div>
    </Card>
  );
};

export default CardDichVu;
