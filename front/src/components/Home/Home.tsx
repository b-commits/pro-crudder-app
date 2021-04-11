/** @jsxImportSource @emotion/react */
import { homeBackground } from './Home-style';
import UserForm from './UserForm';

const Home: React.FC = () => {
  return (
    <div css={homeBackground}>
      <UserForm />
    </div>
  );
};

export default Home;
