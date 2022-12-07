import { PageLayout } from '../layout/PageLayout';
import { MainSlider } from './style';
import Text from '~/components/Text';
import Banner from '~/components/Banner';
import { Container } from 'react-bootstrap';
import Section from '~/components/Section';

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
