import {
  Content,
  Footer,
  Link,
  List,
  SimpleListView,
  SimpleText,
  Title,
} from '~/components';
import { InstagramLink, KakaoTalkLink, MyCampusLink } from '~/const';

const Home = () => {
  return (
    <>
      <Title />
      <List height={400} width={1000} justifyContent="center">
        <Content title="공지 사항" animation="fadeInDown">
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

      <List height={350} width={1000} justifyContent="center">
        <Content title="활동 사진" animation="fadeIn">
          <h2>내용</h2>
        </Content>
      </List>

      <List height={200} width={1000} justifyContent="space-between">
        <Content title="연락하기" animation="fadeIn" />
        <Content title="카카오톡" animation="fadeIn">
          <Link type="kakaotalk" url={KakaoTalkLink} />
        </Content>
        <Content title="인스타그렘" animation="fadeIn">
          <Link type="instagram" url={InstagramLink} />
        </Content>
        <Content title="마이캠퍼스" animation="fadeIn">
          <Link type="mycampus" url={MyCampusLink} />
        </Content>
      </List>
      <Footer />
    </>
  );
};

export default Home;
