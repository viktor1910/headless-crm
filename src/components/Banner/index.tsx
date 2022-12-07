import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import styles from './index.module.scss';

interface CarouselProps {
  images: Array<{
    desktop: string;
    mobile: string;
  }>;
}

const Banner = ({ images }: CarouselProps) => {
  return (
    <>
      <div className={styles.imageBanner}>
        <Carousel fade>
          {images.map(image => (
            <Carousel.Item key={image.desktop} className={styles.carouselItem}>
              <div className={styles.image}>
                <Image src={image.desktop} alt="1" fill />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className={styles.imageBannerMd}>
        <Carousel>
          {images.map(image => (
            <Carousel.Item key={image.mobile}>
              <div className={styles.image}>
                <Image src={image.mobile} alt="1" fill />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
