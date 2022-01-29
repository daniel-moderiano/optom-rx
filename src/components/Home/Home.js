import { StyledHome } from "./Home.styled";
import { Helmet } from 'react-helmet-async';
import formHalf from '../../assets/4k-form-half.png'

const Home = () => {
  return (<>
    <Helmet>
      <title>Computerised PBS prescriptions for Optometrists | OptomRx</title>
      {/* Consider having the word prescription at the start of the title? May not even include name OptomRx? */}
      <meta name="description" content="Write computerised therapeutic prescriptions for optometry items, including PBS and authority scripts."/>
      <link rel="canonical" href="/dashboard" />
    </Helmet>
    <StyledHome className="Home">
      <div className="Home-container">
        <section className="Home__intro">
          <div className="content-container">
            <h2 className="Home__title">Write computerised therpaeutic prescriptions with <strong>OptomRx</strong></h2>
            <p className="subtitle">A free-to-use tool giving Australian optometrists the ability to create professional computerised prescriptions for any therapeutic medications, no matter where you're practicing.</p>
          </div>
        </section>
        <section className="Home__preview" aria-labelledby="description__title">
          <div className="content-container preview-container">
            <div className="description">
              <h3 id="description__title" className="description__title">OptomRx</h3>
              <p className="description__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam harum impedit, aut asperiores nisi laudantium nulla sit, culpa eligendi facilis distinctio veniam ratione temporibus odio a laborum consectetur aperiam velit?</p>
              <div className="description__btns">
                <button>Read more</button>
                <button>Sign up</button>
              </div>
            </div>
            <div className="description__screenshots">
              {/* Images of desktop and/or mobile here */}
              <img src={formHalf} alt="Screenshot of online form for creating new prescription" />
            </div>
          </div>
        </section>
        <section className="Home__features">
          <div className="content-container">
            <h3 className="features__title">Key features</h3>
            <p className="features__subtitle">OptomRx provides a complete suite of tools for all prescriptions</p>
            <div className="features__cards">
              <div className="features__card">
                <span className="card-icon"></span>
                <h4 className="card__title">Feature name</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt, ducimus ipsum iusto harum voluptate iure earum mollitia, eos at accusantium.</p>
                <button className="card-btn">Learn more</button>
              </div>
              <div className="features__card">
                <span className="card-icon"></span>
                <h4 className="card__title">Feature name</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt, ducimus ipsum iusto harum voluptate iure earum mollitia, eos at accusantium.</p>
                <button className="card-btn">Learn more</button>
              </div>
              <div className="features__card">
                <span className="card-icon"></span>
                <h4 className="card__title">Feature name</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt, ducimus ipsum iusto harum voluptate iure earum mollitia, eos at accusantium.</p>
                <button className="card-btn">Learn more</button>
              </div>
              <div className="features__card">
                <span className="card-icon"></span>
                <h4 className="card__title">Feature name</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt, ducimus ipsum iusto harum voluptate iure earum mollitia, eos at accusantium.</p>
                <button className="card-btn">Learn more</button>
              </div>
            </div>
          </div>
          
        </section>
        {/* Possible a final seciton here with a call to action to sign up? */}
      </div>
    </StyledHome>
  </>)
}

export default Home;
