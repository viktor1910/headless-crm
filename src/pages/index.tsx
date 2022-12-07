import { PageLayout } from '../layout/PageLayout';
import { MainSlider } from './style';
import Text from '~/components/Text';
import Banner from '~/components/Banner';
import { Container } from 'react-bootstrap';
import Section from '~/components/Section';
import { GetStaticProps } from 'next';
import client from '~/apollo/client';
import { GET_HOME_PAGE_IMAGE } from '~/apollo/queries/get-homepage-image';

interface HomeProps {
  bannerMd: Array<{
    src: string;
    alt: string;
    title: string;
  }>;
  bannerLg: Array<{
    src: string;
    alt: string;
    title: string;
  }>;
}

export default function Home({ bannerMd, bannerLg }: HomeProps) {
  console.log('🚀 ~ file: index.tsx:25 ~ Home ~ bannerLg', bannerLg);

  return (
    <PageLayout>
      <MainSlider>
        <Banner bannerLg={bannerLg} bannerMd={bannerMd} />
      </MainSlider>
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
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const { data } = await client.query({
    query: GET_HOME_PAGE_IMAGE,
  });
  const bannerMd = data.bannerMd.edges.map((edge: any) => {
    return {
      src: edge.node.sourceUrl,
      alt: edge.node.altText,
    };
  });
  const bannerLg = data.bannerLg.edges.map((edge: any) => {
    return {
      src: edge.node.sourceUrl,
      alt: edge.node.altText,
    };
  });

  return {
    props: {
      bannerMd: bannerMd,
      bannerLg: bannerLg,
    },
  };
};
