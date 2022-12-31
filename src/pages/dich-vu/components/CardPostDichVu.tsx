import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './CardPostDichVu.module.scss';
import Text from '~/components/Text';
import Image from 'next/image';
import { CardDichVuModel } from '~/pages/types';
import axiosWrapper from '~/services/axiosConfig';
import Link from 'next/link';

interface CardPostDichVuProps {
  data: CardDichVuModel;
}

const CardPostDichVu = ({ data }: CardPostDichVuProps) => {
  return (
    <Link href={`/bai-viet/${data.slug}`} style={{ textDecoration: 'none' }}>
      <Card className={styles.cardPremium}>
        <div className={styles.imgContainer}>
          {data.acf?.feature_image_url && (
            <Image
              src={data.acf.feature_image_url}
              alt={data.acf.feature_image_alt}
              fill
              style={{
                objectFit: 'fill',
              }}
            />
          )}
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
          <span
            dangerouslySetInnerHTML={{ __html: data.title.rendered }}
            style={{
              fontSize: '20px',
              fontWeight: '700',
            }}
          />
        </Text>
        <Button variant="outline-secondary" size="lg">
          Xem Thêm
        </Button>
      </div>
    </Link>
  );
};

export default CardPostDichVu;
