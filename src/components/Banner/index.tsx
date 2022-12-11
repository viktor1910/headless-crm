import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import styles from './index.module.scss';

interface CarouselProps {
  bannerMd?: Array<{
    src: string;
    alt: string;
  }>;
  bannerLg?: Array<{
    src: string;
    alt: string;
  }>;
}

const Banner = ({ bannerMd, bannerLg }: CarouselProps) => {
  return (
    <>
      <div className={styles.imageBanner}>
        <Carousel fade>
          {bannerLg?.map(image => (
            <Carousel.Item key={image.src} className={styles.carouselItem}>
              <div className={styles.image}>
                <Image src={image.src} alt={image.alt} fill />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className={styles.imageBannerMd}>
        <Carousel>
          {bannerMd?.map(image => (
            <Carousel.Item key={image.src}>
              <div className={styles.image}>
                <Image src={image.src} alt={image.alt} fill />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
