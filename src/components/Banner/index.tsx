import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={styles.imageBanner}>
        <Slider {...settings}>
          {bannerLg?.map(image => (
            <div key={image.src} className={styles.carouselItem}>
              <div className={styles.image}>
                <Image src={image.src} alt={image.alt} fill />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.imageBannerMd}>
        <Slider {...settings}>
          {bannerMd?.map(image => (
            <div key={image.src}>
              <div className={styles.image}>
                <Image src={image.src} alt={image.alt} fill />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Banner;
