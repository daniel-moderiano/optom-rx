import { StyledContact } from './Contact.styled';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (<>
    <Helmet>
      <title>Contact Us · OptomRx</title>
      <meta name="description" content="OptomRx is an evolving project. We are always looking for feedback, and are happy to help with any issues."/>
      <link rel="canonical" href="/contact" />
    </Helmet>
    <StyledContact>
      Coming soon!
    </StyledContact>
  </>);
};

export default Contact;
