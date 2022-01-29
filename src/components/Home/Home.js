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
      <section className="Home__intro">
        <h2 className="Home__title">Write computerised therpaeutic prescriptions with <strong>OptomRx</strong></h2>
        <p className="subtitle">A free-to-use tool giving Australian optometrists the ability to create professional computerised prescriptions for any therapeutic medications, no matter where you're practicing.</p>
      </section>
      <section className="Home__preview">
        <div className="description">
          <h3 className="description-title">OptomRx</h3>
          <p className="description-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam harum impedit, aut asperiores nisi laudantium nulla sit, culpa eligendi facilis distinctio veniam ratione temporibus odio a laborum consectetur aperiam velit?</p>
        </div>
        <div className="screenshots">
          {/* Images of desktop and/or mobile here */}
        </div>
      </section>
      <section className="Home__features">
        {/* Grid styling here with icons if possible indicating features */}
      </section>
      {/* Possible a final seciton here with a call to action to sign up? */}
    </StyledHome>
  </>)
}

export default Home;
