import { StyledHome } from "./Home.styled";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (<>
    <Helmet>
      <title>Computerised PBS prescriptions for Optometrists | OptomRx</title>
      {/* Consider having the word prescription at the start of the title? May not even include name OptomRx? */}
      <meta name="description" content="Write computerised therapeutic prescriptions for optometry items, including PBS and authority scripts."/>
      <link rel="canonical" href="/dashboard" />
    </Helmet>
    <StyledHome className="Home">
      <h2 className="Home__title">Welcome to OptomRx</h2>
    </StyledHome>
  </>)
}

export default Home;
