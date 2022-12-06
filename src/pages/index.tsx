import React from 'react';
import Image from 'next/image';
import { Container, Col, Row, Carousel } from 'react-bootstrap';

import styles from './index.module.scss';

const HomePage = () => {
  return (
    <div>
      <div className={styles.imageBanner}>
        <Carousel>
          <Carousel.Item>
            <div className={styles.image}>
              <Image
                src="https://shynhpremium.vn/wp-content/uploads/2021/06/SIET-MO-CANH-TAY-1546-x-540.png"
                alt="1"
                fill
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.imageBannerMd}>
        <Carousel>
          <Carousel.Item>
            <div className={styles.image}>
              <Image
                src="https://shynhpremium.vn/wp-content/uploads/2021/06/Banner-Thermage-FLX-resize-419-x-553.png"
                alt="1"
                fill
                sizes="100vw"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
