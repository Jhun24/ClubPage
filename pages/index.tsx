import { useQuery } from 'react-query';
import Skeleton from 'react-loading-skeleton';

import { getRecuritment, getPoster } from '~/api';
import {
  Content,
  Footer,
  ImageSlider,
  ContactUs,
  List,
  Poster,
  SimpleListView,
  SimpleText,
  Title,
} from '~/components';
import { InstagramLink, KakaoTalkLink, MyCampusLink } from '~/const';

const Home = () => {
  const PosterQuery = () => {
    const { isLoading, isError, data } = useQuery('poster', getPoster);
  };

  const useRecuritmentQuery = () => {
    const { isLoading, isError, data, error } = useQuery(
      'recuritment',
      getRecuritment
    );

    if (isLoading) {
      return (
        <>
          <Skeleton
            style={{
              marginLeft: 20,
              width: 300,
            }}
          />
          <Skeleton
            style={{
              marginLeft: 20,
              width: 300,
            }}
          />
          <Skeleton
            style={{
              marginLeft: 20,
              width: 300,
            }}
          />
        </>
      );
    }

    if (isError) {
      return <SimpleText text="Error: External Server Error" />;
    }

    return <SimpleText text="현재 모집중이 아닙니다" />;
  };

  return (
    <>
      <Title />

      <List height="auto" width={1000}>
        <Content title="지원하기">
          <Poster />
        </Content>
      </List>

      <List height={430} width={1000} justifyContent="center">
        <Content title="공지 사항" url="/list" useArrow>
          <SimpleListView />
        </Content>
      </List>

      <List height={200} width={1000} justifyContent="space-between">
        <Content title="모집 여부" animation="fadeInLeft">
          {useRecuritmentQuery()}
        </Content>

        <Content title="현재 일정" animation="fadeInRight">
          <SimpleText text="11기 운영진 교육" type="semiBold" />
        </Content>
      </List>

      <List height={630} width={1000} justifyContent="center">
        <Content title="활동 사진" url="/image" useArrow>
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
