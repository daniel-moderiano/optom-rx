import { StyledHome } from "./Home.styled";
import { Helmet } from 'react-helmet-async';
import formHalf from '../../assets/4k-form-half.png';
import pbsPaper from '../../assets/pbs-paper.jpg';
import pbsLogo from '../../assets/pbs-logo.svg'
import { useEffect } from "react";

const Home = ({ setPage }) => {
  // Adjust homeHeader prop to true to adjust header styling specifically for this page
  useEffect(() => {
    setPage('homepage');
  }, [setPage]);

  return (<>
    <Helmet>
      <title>Online therapeutic prescriptions for Optometrists | OptomRx</title>
      <meta name="description" content="Professionally create and manage therapeutic prescriptions online, including PBS and authority scripts"/>
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
              <img src={pbsPaper} alt="Blank PBS computerised prescription paper" />
            </div>
          </div>
        </section>
        <section className="Home__features">
          <div className="content-container">
            <h3 className="features__title">Key features</h3>
            <p className="features__subtitle">OptomRx provides a complete suite of tools for all prescriptions</p>
            <div className="features__cards">
              <div className="features__card">
                <span className="card-icon"><img src={pbsLogo} alt="PBS logo" /></span>
                <h4 className="card__title">Real time PBS data</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt, ducimus ipsum iusto harum voluptate iure earum mollitia, eos at accusantium.</p>
                <button className="card-btn">Learn more</button>
              </div>
              <div className="features__card">
                <span className="card-icon">
                <svg width="50px" height="50px" viewBox="0 0 24 24">
                    <path fill="#31776f" d="M15,20A1,1 0 0,0 16,19V4H8A1,1 0 0,0 7,5V16H5V5A3,3 0 0,1 8,2H19A3,3 0 0,1 22,5V6H20V5A1,1 0 0,0 19,4A1,1 0 0,0 18,5V9L18,19A3,3 0 0,1 15,22H5A3,3 0 0,1 2,19V18H13A2,2 0 0,0 15,20M9,6H14V8H9V6M9,10H14V12H9V10M9,14H14V16H9V14Z" />
                </svg>
                </span>
                <h4 className="card__title">Active ingredient prescribing</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt, ducimus ipsum iusto harum voluptate iure earum mollitia, eos at accusantium.</p>
                <button className="card-btn">Learn more</button>
              </div>
              <div className="features__card">
                <span className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#31776f"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"/></svg></span>
                <h4 className="card__title">Favourite scripts</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt, ducimus ipsum iusto harum voluptate iure earum mollitia, eos at accusantium.</p>
                <button className="card-btn">Learn more</button>
              </div>
              <div className="features__card">
                <span className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="50px" viewBox="0 0 24 24" width="50px" fill="#31776f"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3C23,14.82,19.43,13.53,16.67,13.13z"/><path d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76 C14.09,11.9,14.53,12,15,12z"/><path d="M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S7,9.1,7,8C7,6.9,7.9,6,9,6z"/><path d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z M15,18H3l0-0.99C3.2,16.29,6.3,15,9,15s5.8,1.29,6,2V18z"/></g></g></svg></span>
                <h4 className="card__title">Multiple prescribers</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt, ducimus ipsum iusto harum voluptate iure earum mollitia, eos at accusantium.</p>
                <button className="card-btn">Learn more</button>
              </div>
              <div className="features__card">
                <span className="card-icon">
                  <svg width="50px" height="50px" viewBox="0 0 24 24">
                    <path fill="#31776f" d="M10 4A4 4 0 0 0 6 8A4 4 0 0 0 10 12A4 4 0 0 0 14 8A4 4 0 0 0 10 4M17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13M10 14C5.58 14 2 15.79 2 18V20H11.5A6.5 6.5 0 0 1 11 17.5A6.5 6.5 0 0 1 11.95 14.14C11.32 14.06 10.68 14 10 14M17.5 14.5C19.16 14.5 20.5 15.84 20.5 17.5C20.5 18.06 20.35 18.58 20.08 19L16 14.92C16.42 14.65 16.94 14.5 17.5 14.5M14.92 16L19 20.08C18.58 20.35 18.06 20.5 17.5 20.5C15.84 20.5 14.5 19.16 14.5 17.5C14.5 16.94 14.65 16.42 14.92 16Z" />
                </svg>
                </span>
                <h4 className="card__title">No patient data retention</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt, ducimus ipsum iusto harum voluptate iure earum mollitia, eos at accusantium.</p>
                <button className="card-btn">Learn more</button>
              </div>
            </div>
          </div>
          
        </section>
        {/* Possible a final seciton here with a call to action to sign up? */}
        <section className="Home__intro">
          <div className="content-container">
            <h2 className="Home__title">Write computerised therpaeutic prescriptions with <strong>OptomRx</strong></h2>
            <p className="subtitle">A free-to-use tool giving Australian optometrists the ability to create professional computerised prescriptions for any therapeutic medications, no matter where you're practicing.</p>
          </div>
        </section>
      </div>
    </StyledHome>
  </>)
}

export default Home;
