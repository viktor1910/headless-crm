import Text from '~/components/Text';
import Banner from '~/components/Banner';
import { Container } from 'react-bootstrap';
import Section from '~/components/Section';
import TrangChu from '~/components/TrangChu';
import axiosWrapper from '~/services/axiosConfig';
import { ImagesAPIResponse, ImagesModel, ReviewModel } from '~/@types/Banner';
import { getImages } from '~/services/util';
import { CardDichVuModel, Categories } from '../services/types';

interface HomeProps {
  resultBannerDesktop: ImagesModel[];
  resultBannerMobile: ImagesModel[];
  resultWelcome: ImagesModel[];
  resultWelcomeText: ImagesAPIResponse;
  resultCenteringImg: ImagesModel[];
  resultCenteringMain: string;
  review: ReviewModel[];
  dichVuNoiBat: CardDichVuModel[];
}

export default function Home({
  resultBannerDesktop,
  resultBannerMobile,
  resultWelcome,
  resultWelcomeText,
  resultCenteringImg,
  resultCenteringMain,
  review,
  dichVuNoiBat,
}: HomeProps) {
  return (
    <>
      <div>
        <Banner bannerLg={resultBannerDesktop} bannerMd={resultBannerMobile} />
      </div>
      <Container>
        <Section title="CHÀO MỪNG BẠN ĐẾN VỚI" subTitle={resultWelcomeText.acf?.welcome_title}>
          <span
            dangerouslySetInnerHTML={{ __html: resultWelcomeText.acf?.welcome_description || '' }}
            style={{
              textAlign: 'center',
              color: '#666',
              fontSize: '16px',
            }}
          />
        </Section>
      </Container>
      <TrangChu
        dichVuNoiBat={dichVuNoiBat}
        resultWelcome={resultWelcome}
        resultCenteringImg={resultCenteringImg}
        resultCenteringMain={resultCenteringMain}
        resultWelcomeText={resultWelcomeText}
        review={review}
      />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axiosWrapper.get<ImagesAPIResponse[]>('/gallery').then(res => res.data);
  const review = await axiosWrapper.get<ReviewModel[]>('/review').then(res => res.data);

  const bannerDesktop = res.find(i => i.slug === 'banner-desktop');
  const bannerMobile = res.find(i => i.slug === 'banner-mobile');
  const welcome = res.find(i => i.slug === 'welcome');
  const centering = res.find(i => i.slug === 'centering');

  const resultBannerDesktop = bannerDesktop ? getImages(bannerDesktop) : [];
  const resultBannerMobile = bannerMobile ? getImages(bannerMobile) : [];
  const resultWelcome = welcome ? getImages(welcome) : [];
  const resultWelcomeText = welcome;
  const resultCenteringImg = centering ? getImages(centering) : [];
  const resultCenteringMain = centering?.acf?.center_image;

  const dichVuNoiBat = await axiosWrapper
    .get<CardDichVuModel[]>('/posts', {
      params: {
        categories: Categories.DichVuNoiBat,
        per_page: 8,
      },
    })
    .then(res => res.data);

  return {
    props: {
      resultBannerDesktop,
      resultBannerMobile,
      resultWelcome,
      resultWelcomeText,
      resultCenteringImg,
      resultCenteringMain,
      review,
      dichVuNoiBat,
    },
  };
};
