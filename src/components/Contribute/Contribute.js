import { Helmet } from "react-helmet-async";
import { StyledContribute } from "./Contribute.styled";

const Contribute = () => {
  return (<>
    <Helmet>
      <title>Contribute · OptomRx</title>
      <meta name="description" content="Learn about contributing to OptomRx through open source development."/>
      <link rel="canonical" href="/contribute" />
    </Helmet>
    <StyledContribute>
      Coming soon!
    </StyledContribute>
  </>);
};

export default Contribute;
