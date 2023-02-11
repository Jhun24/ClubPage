import {
  Content,
  Footer,
  ImageSlider,
  ContactUs,
  LinkPreviewNoToolTip,
  List,
  Poster,
  SimpleListView,
  SimpleText,
  Title,
} from '~/components';
import { InstagramLink, KakaoTalkLink, MyCampusLink } from '~/const';

const Home = () => {
  return (
    <>
      <Title />

      <List height="auto" width={1000}>
        <Content title="지원하기">
          <Poster />
        </Content>
      </List>

      <List height={430} width={1000} justifyContent="center">
        <Content title="공지 사항" useArrow>
          <SimpleListView />
        </Content>
      </List>

      <List height={200} width={1000} justifyContent="space-between">
        <Content title="모집 여부" animation="fadeInLeft">
          <SimpleText text="현재 모집중이 아닙니다" />
        </Content>

        <Content title="현재 일정" animation="fadeInRight">
          <SimpleText text="11기 운영진 교육" type="semiBold" />
        </Content>
      </List>

      <List height={630} width={1000} justifyContent="center">
        <Content title="활동 사진" animation="fadeInRight" useArrow>
          <ImageSlider />
        </Content>
      </List>

      <List height={200} width={1000} justifyContent="space-between">
        <Content title="연락하기" />
        <Content title="카카오톡">
          <ContactUs imageType="kakaotalk" url={KakaoTalkLink} />
        </Content>
        <Content title="인스타그램">
          <ContactUs imageType="instagram" url={InstagramLink} />
        </Content>
        <Content title="마이캠퍼스">
          <ContactUs imageType="mycampus" url={MyCampusLink} />
        </Content>
      </List>
      <Footer />
    </>
  );
};

export default Home;
