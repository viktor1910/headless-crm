import Text from '~/components/Text';
import Banner from '~/components/Banner';
import { Container } from 'react-bootstrap';
import Section from '~/components/Section';
import TrangChu from '~/components/TrangChu';
import axiosWrapper from '~/services/axiosConfig';
import { ImagesAPIResponse, ImagesModel } from '~/@types/Banner';
import { getBannerImage } from '~/services/util';
import { CardDichVuModel, Categories } from './types';

interface HomeProps {
  bannerMd?: ImagesModel[];
  bannerLg?: ImagesModel[];
  dichVuNoiBat: CardDichVuModel[];
}

export default function Home({ bannerMd, bannerLg, dichVuNoiBat }: HomeProps) {
  return (
    <>
      {/* <div>
        <Banner bannerLg={bannerLg} bannerMd={bannerMd} />
      </div> */}
      <Container>
        <Section title="CHÀO MỪNG BẠN ĐẾN VỚI" subTitle="VIỆN THẨM MỸ NÂNG CƠ CÔNG NGHỆ CAO HÀNG ĐẦU CHÂU Á">
          <Text
            type="body"
            style={{
              textAlign: 'center',
              color: '#666',
            }}
          >
            Viện thẩm mỹ Công nghệ cao SHYNH PREMIUM ra đời năm 2018 với sứ mệnh mang đến cho quý khách hàng những trải
            nghiệm làm đẹp chất lượng và cao cấp nhất. Tự hào là Viện thẩm mỹ dẫn đầu xu thế làm đẹp với 5 chi nhánh
            trên cả nước, Shynh Premium hiện đang sở hữu hơn 10 Công nghệ cao hàng đầu Thế giới, hân hạnh đồng hành
            trong hành trình làm đẹp của hàng triệu phụ nữ Việt Nam.
          </Text>
          <Text
            type="body"
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: '10px',
            }}
          >
            Với lối kiến trúc ấn tượng và sang trọng; quy tụ đội ngũ bác sĩ nội khoa hàng đầu, kỹ thuật viên tay nghề
            cao, giàu kinh nghiệm, quý khách hàng sẽ được tận hưởng một không gian thư giãn đẳng cấp 5 sao cũng như các
            dịch vụ hoàn hảo tại SHYNH PREMIUM.
          </Text>
          <Text
            type="body"
            style={{
              textAlign: 'center',
              color: '#666',
              marginTop: '10px',
            }}
          >
            CHỌN SHYNH LÀ XINH ĐẸP!
          </Text>
        </Section>
      </Container>
      <TrangChu dichVuNoiBat={dichVuNoiBat} />
    </>
  );
}

export const getStaticProps = async () => {
  // const res = await axiosWrapper.get<ImagesAPIResponse[]>('/hinh-anh').then(res => res.data);

  // const bannerDesktop = res.find(i => i.slug === 'banner-desktop');
  // const bannerMobile = res.find(i => i.slug === 'banner-mobile');

  // const resultBannerDesktop = bannerDesktop ? getBannerImage(bannerDesktop) : [];

  // const resultBannerMobile = bannerMobile ? getBannerImage(bannerMobile) : [];

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
      bannerMd: [],
      bannerLg: [],
      dichVuNoiBat,
    },
  };
};
