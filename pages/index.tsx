import { Content, Footer, List, Title } from '~/components';

const Home = () => {
  return (
    <>
      <Title />
      <List height={350} width={1000} justifyContent="center">
        <Content title="공지 사항" animation="fadeInDown">
          <h2>내용</h2>
        </Content>
      </List>

      <List height={200} width={1000} justifyContent="space-between">
        <Content title="박스 1" animation="fadeInLeft">
          <h2>내용</h2>
        </Content>

        <Content title="박스 2" animation="fadeInRight">
          <h2>내용</h2>
        </Content>
      </List>

      <List height={350} width={1000} justifyContent="center">
        <Content title="박스 3" animation="fadeInUp">
          <h2>내용</h2>
        </Content>
      </List>
      <Footer />
    </>
  );
};

export default Home;
