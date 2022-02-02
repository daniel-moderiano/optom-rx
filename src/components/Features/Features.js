import { StyledFeatures } from "./Features.styled";
import { useEffect } from "react";
import Button from '../utils/Button/Button';
import { Helmet } from 'react-helmet-async';
import laptopMockup from '../../assets/macbook-mockup.png';
import sampleRx from '../../assets/example-rx-noline.jpg'
import pbsLogo from '../../assets/pbs-logo.svg'


const Features = ({ setPage }) => {
  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('features');
  }, [setPage]);

  const ready = false;

  return (
    <StyledFeatures>
      {ready ? (<div className="Features-container">

<section className="Features__intro">
  <div className="content-container">
    <h2 className="Features__title">Features</h2>
    <p className="subtitle">Learn more about the unique features that make OptomRx first in class for writing therapeutic prescriptions.</p>
  </div>          
</section>

<section className="Features__preview" aria-labelledby="description__title">
  <div className="content-container preview-container">
    <div className="description">
      <h3 id="description__title" className="description__title">Real-time PBS data</h3>
      <p className="description__text">Corporate, independent, rural or metro - OptomRx's web app means you have access to professional computerised scripts anywhere.</p>
      <div className="description__btns">
        <Button classLabel="signup">Get started</Button>
        <Button design="ghost">Learn more</Button>
      </div>
    </div>
    <div className="description__screenshots">
      <img src={laptopMockup} alt="Screenshot of online form for creating new prescription" />
    </div>
  </div>
</section>

{/* Possible a final seciton here with a call to action to sign up? */}
<section className="Features__stationery" aria-labelledby="stationery__title">
  <div className="content-container stationery-container">
  <div className="stationery__screenshots">
      <img src={sampleRx} alt="Printed PBS prescription on computerised PBS form" />
    </div>
    <div className="stationery-description">
      <h3 id="stationery__title" className="stationery__title">Active ingredient prescribing</h3>
      <p className="stationery__text">OptomRx pairs with computer generated PBS forms to create professional facing scripts for patients, consistent with GPs and other allied health providers. These forms can be ordered in bulk from <a target="_blank" rel="noreferrer" href="https://www.servicesaustralia.gov.au/pbs-and-rpbs-stationery-for-optometrists?context=22851">Services Australia<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="18px" fill="#263238"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></a>.</p>
      <div className="stationery__btns">
        <Button classLabel="signup">Get started</Button>
        <Button design="ghost">Learn more</Button>
      </div>
    </div>
  </div>
</section>

<section className="Features__preview" aria-labelledby="description__title">
  <div className="content-container preview-container">
    <div className="description">
      <h3 id="description__title" className="description__title">Instant re-prescribe</h3>
      <p className="description__text">Corporate, independent, rural or metro - OptomRx's web app means you have access to professional computerised scripts anywhere.</p>
      <div className="description__btns">
        <Button classLabel="signup">Get started</Button>
        <Button design="ghost">Learn more</Button>
      </div>
    </div>
    <div className="description__screenshots">
      <img src={laptopMockup} alt="Screenshot of online form for creating new prescription" />
    </div>
  </div>
</section>

{/* Possible a final seciton here with a call to action to sign up? */}
<section className="Features__stationery" aria-labelledby="stationery__title">
  <div className="content-container stationery-container">
  <div className="stationery__screenshots">
      <img src={sampleRx} alt="Printed PBS prescription on computerised PBS form" />
    </div>
    <div className="stationery-description">
      <h3 id="stationery__title" className="stationery__title">Multiple prescribers</h3>
      <p className="stationery__text">OptomRx pairs with computer generated PBS forms to create professional facing scripts for patients, consistent with GPs and other allied health providers. These forms can be ordered in bulk from <a target="_blank" rel="noreferrer" href="https://www.servicesaustralia.gov.au/pbs-and-rpbs-stationery-for-optometrists?context=22851">Services Australia<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="18px" fill="#263238"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></a>.</p>
      <div className="stationery__btns">
        <Button classLabel="signup">Get started</Button>
        <Button design="ghost">Learn more</Button>
      </div>
    </div>
  </div>
</section>


<section className="Features__preview" aria-labelledby="description__title">
  <div className="content-container preview-container">
    <div className="description">
      <h3 id="description__title" className="description__title">No patient data retention</h3>
      <p className="description__text">Corporate, independent, rural or metro - OptomRx's web app means you have access to professional computerised scripts anywhere.</p>
      <div className="description__btns">
        <Button classLabel="signup">Get started</Button>
        <Button design="ghost">Learn more</Button>
      </div>
    </div>
    <div className="description__screenshots">
      <img src={laptopMockup} alt="Screenshot of online form for creating new prescription" />
    </div>
  </div>
</section>

<section className="Features__action" aria-labelledby="action__title">
  <div className="content-container action-container">
    <p className="subtitle">Try it for yourself</p>
    <h3 id="action__title" className="action__title">OptomRx is free to use. Always.</h3>
    <Button classLabel="signup">Sign up to OptomRx</Button>
  </div>
</section>
</div>) : (
  <div className="message">Coming soon!</div>
)}
    </StyledFeatures>
  );
};

export default Features;
