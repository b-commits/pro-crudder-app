/** @jsxImportSource @emotion/react */
import { Container } from '@material-ui/core';
import { homeBackground } from './Home-style';
import ThemedComponent from './ThemedComponent';
import UserForm from './UserForm';

const Home: React.FC = () => {
  return (
    <Container css={homeBackground} maxWidth="xl">
      <br></br>
      <UserForm />
      <ThemedComponent />
    </Container>
  );
};

export default Home;
