import {
  Content,
  Footer,
  List,
  Nav,
  Title,
  SimpleListView,
} from '~/components';

const ListPage = () => {
  return (
    <>
      <Nav />
      <Title />
      <List width={1000} height={1200}>
        <Content title="공지 사항" animation="fadeIn">
          <SimpleListView />
        </Content>
      </List>
      <Footer />
    </>
  );
};

export default ListPage;
