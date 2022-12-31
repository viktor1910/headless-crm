import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import styles from './CardDichVu.module.scss';
import Text from '~/components/Text';
import { CardDichVuModel } from '~/pages/types';
import Link from 'next/link';

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
  const link = () => {
    if (type === 'noi-bat') {
      return `/bai-viet/${data.slug}`;
    }
    if (data.categories) {
      return `/dich-vu/${data.categories[0]}`;
    }
    return '/dich-vu';
  };
  return (
    <Link href={link()} style={{ textDecoration: 'none' }}>
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
            <span
              dangerouslySetInnerHTML={{ __html: data.title.rendered }}
              style={{
                fontSize: '20px',
                fontWeight: '700',
              }}
            />
          </Text>
        </div>
      </Card>
    </Link>
  );
};

export default CardDichVu;
