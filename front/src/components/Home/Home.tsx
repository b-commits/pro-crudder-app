/** @jsxImportSource @emotion/react */
import { Container } from '@material-ui/core';
import { homeBackground } from './Home-style';

const Home: React.FC = () => {
  return (
    <Container css={homeBackground} maxWidth="xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veniam nam
      molestiae fuga quasi placeat, non, nemo cumque fugiat at ducimus
      temporibus. Amet harum modi ut quo qui ullam sint.
    </Container>
  );
};

export default Home;
