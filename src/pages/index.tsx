import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import styles from './index.module.scss';
import { PageLayout } from '../layout/PageLayout';
import { MainSlider } from './style';
import Banner from '~/components/Banner';

export default function Home() {
  return (
    <PageLayout>
      <MainSlider>
        <Banner
          images={[
            {
              desktop: 'https://shynhpremium.vn/wp-content/uploads/2021/06/SIET-MO-CANH-TAY-1546-x-540.png',
              mobile: 'https://shynhpremium.vn/wp-content/uploads/2021/06/Banner-Thermage-FLX-resize-419-x-553.png',
            },
            {
              desktop: 'https://shynhpremium.vn/wp-content/uploads/2021/06/Filler-tao-hinh-1546-x-540.png',
              mobile: 'https://shynhpremium.vn/wp-content/uploads/2021/06/Banner-Thermage-FLX-resize-419-x-553.png',
            },
          ]}
        />
      </MainSlider>
    </PageLayout>
  );
}
