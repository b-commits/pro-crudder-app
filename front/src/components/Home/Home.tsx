/** @jsxImportSource @emotion/react */
import { Container } from '@material-ui/core';
import { homeBackground } from './Home-style';
import UserForm from './UserForm';

const Home: React.FC = () => {
  return (
    <Container css={homeBackground} maxWidth="xl">
      <br></br>
      <UserForm />
    </Container>
  );
};

export default Home;
