import { StyledAbout } from './About.styled';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (<>
    <Helmet>
      <title>About · OptomRx</title>
      <meta name="description" content="OptomRx, created in 2021, is a new web app for Australian optometrists to write therapeutic prescriptions online. Learn more about us here."/>
      <link rel="canonical" href="/about" />
    </Helmet>
    <StyledAbout>
      Coming soon!
    </StyledAbout>
  </>);
};

export default About;
