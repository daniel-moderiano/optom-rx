import { StyledFAQ } from "./FAQ.styled";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  return (<>
    <Helmet>
      <title>FAQ · OptomRx</title>
      <meta name="description" content="Read through a collection of common questions about OptomRx, and learn more about how it can help you write faster, better prescriptions."/>
      <link rel="canonical" href="/faq" />
    </Helmet>
    <StyledFAQ>
      Coming soon!
    </StyledFAQ>
  </>);
};

export default FAQ;
