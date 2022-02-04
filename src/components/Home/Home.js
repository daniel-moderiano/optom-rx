import { StyledHome } from "./Home.styled";
import { Helmet } from 'react-helmet-async';
import laptopMockup from '../../assets/macbook-mockup.png';
import sampleRx from '../../assets/example-rx-noline.jpg'
import pbsLogo from '../../assets/pbs-logo.svg'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ setPage }) => {
  // Adjust homeHeader prop to true to adjust header styling specifically for this page
  useEffect(() => {
    setPage('homepage');
  }, [setPage]);

  return (<>
    <Helmet>
      <title>Online therapeutic prescriptions for Optometrists | OptomRx</title>
      <meta name="description" content="Giving Australian optometrists the tools to professionally create and manage therapeutic prescriptions online, including PBS and authority scripts."/>
      <link rel="canonical" href="/dashboard" />
    </Helmet>

    <StyledHome className="Home">
      <div className="Home-container">

        <section className="Home__intro">
          <div className="content-container">
            <h2 className="Home__title">Professional therapeutic prescriptions</h2>
            <p className="subtitle">Create and manage therapeutic prescriptions online, with integrated PBS support and tools to supercharge efficiency.</p>
            <Link to="/signup" className="btn-primary button signup">Sign up to OptomRx</Link>
          </div>          
        </section>

        <section className="Home__preview" aria-labelledby="preview__title">
          <div className="content-container">
            <div className="preview__description description">
              <h3 id="preview__title" className="section__title">Accessible for all Australian Optometrists</h3>
              <p className="preview__text Home__text">Corporate, independent, rural or metro - OptomRx's web app means you have access to professional computerised scripts anywhere.</p>
              <div className="preview__btns Home__btns">
                <Link to="/signup" className="btn-primary button get-started">Get started</Link>
                <Link to="/features" className="btn-ghost button">Learn more</Link>
              </div>
            </div>
            <div className="preview__screenshots Home__screenshots">
              <img src={laptopMockup} alt="Online form for creating new prescription" />
            </div>
          </div>
        </section>
  
        <section className="Home__stationery" aria-labelledby="stationery__title">
          <div className="content-container stationery-container">
          <div className="stationery__screenshots Home__screenshots">
              <img src={sampleRx} alt="Printed PBS prescription on computerised PBS form" />
            </div>
            <div className="stationery__description description">
              <h3 id="stationery__title" className="section__title">Move away from handwritten scripts</h3>
              <p className="stationery__text Home__text">OptomRx pairs with computer generated PBS forms to create professional facing scripts for patients, consistent with GPs and other allied health providers. These forms can be ordered in bulk from <a className="services-aus-link" target="_blank" rel="noreferrer" href="https://www.servicesaustralia.gov.au/pbs-and-rpbs-stationery-for-optometrists?context=22851">Services Australia<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="18px" fill="#263238"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></a>.</p>
              <div className="stationery__btns Home__btns">
                <Link to="/signup" className="btn-primary button get-started">Get started</Link>
                <Link to="/features" className="btn-ghost button">Learn more</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="Home__features" aria-labelledby="features__title">
          <div className="content-container">
            <h3 id="features__title" className="section__title">Streamline prescription writing</h3>
            <p className="subtitle">OptomRx provides unique tools to make writing prescriptions quick and easy.</p>
            <div className="features__cards">
              <div className="features__card">
                <span className="card-icon"><img src={pbsLogo} alt="PBS logo" /></span>
                <h4 className="card__title">Real-time PBS data</h4>
                <p className="card-text">Receive up-to-date PBS information on your selected medication as you write your prescription.</p>
                <Link to="/features" className="btn-primary button">Learn more</Link>
              </div>
              <div className="features__card">
                <span className="card-icon">
                <svg width="50px" height="50px" viewBox="0 0 24 24">
                    <path fill="#31776f" d="M15,20A1,1 0 0,0 16,19V4H8A1,1 0 0,0 7,5V16H5V5A3,3 0 0,1 8,2H19A3,3 0 0,1 22,5V6H20V5A1,1 0 0,0 19,4A1,1 0 0,0 18,5V9L18,19A3,3 0 0,1 15,22H5A3,3 0 0,1 2,19V18H13A2,2 0 0,0 15,20M9,6H14V8H9V6M9,10H14V12H9V10M9,14H14V16H9V14Z" />
                </svg>
                </span>
                <h4 className="card__title">Active ingredient prescribing</h4>
                <p className="card-text">Automatically adjust medication format based on active ingredient or brand only prescribing requirements.</p>
                <Link to="/features" className="btn-primary button">Learn more</Link>
              </div>
              <div className="features__card">
                <span className="card-icon"> <svg xmlns="http://www.w3.org/2000/svg" className="icon arrow-icon" viewBox="0 0 512 512" width="50px" height="50px"><path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" fill="#31776f" stroke="31776f" strokeLinejoin="round" strokeWidth="10" /></svg></span>
                <h4 className="card__title">Instant re-prescribe</h4>
                <p className="card-text">Save your frequently prescribed medicines as favourites to instantly re-prescribe them with a single click.</p>
                <Link to="/features" className="btn-primary button">Learn more</Link>
              </div>
              <div className="features__card">
                <span className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="50px" viewBox="0 0 24 24" width="50px" fill="#31776f"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3C23,14.82,19.43,13.53,16.67,13.13z"/><path d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76 C14.09,11.9,14.53,12,15,12z"/><path d="M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S7,9.1,7,8C7,6.9,7.9,6,9,6z"/><path d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z M15,18H3l0-0.99C3.2,16.29,6.3,15,9,15s5.8,1.29,6,2V18z"/></g></g></svg></span>
                <h4 className="card__title">Multiple prescribers</h4>
                <p className="card-text">Add prescriber details for all locations you are practicing and seamlessly switch as needed.</p>
                <Link to="/features" className="btn-primary button">Learn more</Link>
              </div>
            </div>
          </div>
        </section>

         
        <section className="Home__action" aria-labelledby="action__title">
          <div className="content-container action-container">
            <p className="subtitle action__subtitle">Try it for yourself</p>
            <h3 id="action__title" className="section__title">OptomRx is free to use. Always.</h3>
            <Link to="/signup" className="btn-primary button signup">Sign up to OptomRx</Link>
          </div>
        </section>
      </div>
    </StyledHome>
  </>)
}

export default Home;
