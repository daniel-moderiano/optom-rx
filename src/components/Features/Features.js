import { StyledFeatures } from "./Features.styled";
import { useEffect } from "react";
import Button from '../utils/Button/Button';
import { Helmet } from 'react-helmet-async';
import laptopMockup from '../../assets/macbook-mockup.png';
import sampleRx from '../../assets/example-rx-noline.jpg'
import lemi from '../../assets/lemi-lmbc.png';
import authority from '../../assets/authority.png';
import indications from '../../assets/indications.png';
import quantityRepeats from '../../assets/quantityRepeats.png';



const Features = ({ setPage }) => {
  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('features');
  }, [setPage]);

  const ready = true;

  return (
    <StyledFeatures>
      {ready ? (<div className="Features-container">
        <section className="Features__intro">
          <div className="content-container">
            <h2 className="Features__title">Features</h2>
            <p className="subtitle">Learn more about the unique features that make OptomRx first in class for writing therapeutic prescriptions.</p>
          </div>          
        </section>

        <section className="Features__pbs" aria-labelledby="description__title">
          <h3 id="description__title" className="description__title">Real-time PBS data</h3>
          <div className="content-container pbs-container indications-container">
            <div className="description">
              <h4 className="description__title">Instant PBS availability and indications</h4>
              <p className="description__text">The moment you select a medication, OptomRx will show you whether it is eligible for PBS prescribing. If the medication is restricted or required authority, you can optionally view the indications for it's use under the PBS.</p>
            </div>
            <div className="description__screenshots indications">
              <img src={indications} alt="Online form indicating PBS availability and indications for use" />
            </div>
          </div>

          <div className="content-container pbs-container quantityRepeats-container">
          <div className="description__screenshots quantityRepeats">
              <img src={quantityRepeats} alt="Online form indicating max quantity and repeats for a PBS medication" />
            </div>
            <div className="description">
              <h4 className="description__title">Avoid mistakes in prescribing</h4>
              <p className="description__text">Every PBS medication has maximum allowable quantity and repeats. Using up-to-date PBS data, OptomRx shows you these values for any selected PBS medication, so you making any prescribing errors less likely.</p>
            </div>
           
          </div>

          <div className="content-container pbs-container authority-container">
            <div className="description">
              <h4 className="description__title">Save time for those less common authority scripts</h4>
              <p className="description__text">Where a streamline authority code is available, it will be supplied for you, automatically. For those medications requiring manual authority codes, OptomRx will advise you where to apply for authority.</p>
            </div>
            <div className="description__screenshots authority">
              <img src={authority} alt="Online form indicating authority is required for a medication" />
            </div>
          </div>
        </section>


        <section className="Features__lemi" aria-labelledby="lemi__title">
          <div className="content-container lemi-container">
          <div className="lemi__screenshots">
              <img src={lemi} alt="Front cover of LEMI and LMBC guides for active ingredient prescribing" />
            </div>
            <div className="lemi__description">
              <h3 id="lemi__title" className="lemi__title">Active ingredient prescribing</h3>
              <p className="lemi__text">Guidelines exist for all prescribers in Australia regarding active ingredient prescribing. Medications, by default, should be prescribed by active ingredient. There are two key exceptions:</p>
              <ul className="lemi__list">
                <li>Those medicines listed in the List of Excluded Medicinal Items (LEMI); these items should be prescribed by brand only, and</li>
                <li>Those medicines listed in the List of Medicines for Brand Consideration (LMBC); prescribers should consider including the brand name when prescribing these items.</li>
              </ul>
              <p className="lemi__text">OptomRx takes the work out of checking which items belong to the LEMI or LMBC, and automatically adjusts your prescription to meet relevant guidelines. You can find out if any LEMI/LMBC adjustments have been made while writing any prescription with OptomRx.</p>
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
