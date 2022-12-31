import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import styles from './CardDichVu.module.scss';
import Text from '~/components/Text';
import { CardDichVuModel } from '~/pages/types';

interface CardDichVuProps {
  data: CardDichVuModel;
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

const CardDichVu = ({ data, type }: CardDichVuProps) => {
  return (
    <Card className={type === 'danh-muc' ? styles.danhMucContainer : styles.cardContainer}>
      <div className={type === 'danh-muc' ? styles.imgDanhMuc : styles.imgNoiBat}>
        {data.acf?.feature_image_url && (
          <Image
            src={data.acf?.feature_image_url}
            fill
            alt={data.acf.feature_image_alt}
            style={{
              objectFit: 'fill',
            }}
          />
        )}
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
          <span dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
        </Text>
      </div>
    </Card>
  );
};

export default CardDichVu;
