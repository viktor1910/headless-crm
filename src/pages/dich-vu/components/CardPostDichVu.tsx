import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './CardPostDichVu.module.scss';
import Text from '~/components/Text';
import Image from 'next/image';

interface CardPostDichVuProps {
  imgSrc: string;
  title: string;
  alt: string;
}

const CardPostDichVu = ({ imgSrc, title, alt }: CardPostDichVuProps) => {
  return (
    <>
      <Card className={styles.cardPremium}>
        <div className={styles.imgContainer}>
          <Image
            src={imgSrc}
            alt={alt}
            fill
            style={{
              objectFit: 'fill',
            }}
          />
        </div>
      </Card>
      <div className={styles.cardBodyContainer}>
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
        <Button variant="outline-secondary" size="lg">
          Xem Thêm
        </Button>
      </div>
    </>
  );
};

export default CardPostDichVu;
