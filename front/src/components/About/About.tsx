/** @jsxImportSource @emotion/react */
import { Container } from '@material-ui/core';
import { aboutBackground } from './About-style';

const About: React.FC = () => {
  return (
    <Container css={aboutBackground} maxWidth="xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt adipisci
      facilis libero pariatur error repellendus incidunt esse nostrum quasi
      soluta, nulla deleniti quaerat hic corporis ex illo eum sint aliquid?
    </Container>
  );
};

export default About;
