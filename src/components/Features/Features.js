import { StyledFeatures } from "./Features.styled";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import lemiOptimised from '../../assets/optimised/lemi-lmbc.png';
import { Link } from "react-router-dom";
import IndicationsExtract from "./AppExtracts/IndicationsExtract";
import QuantityExtract from "./AppExtracts/QuantityExtract";
import AuthorityExtract from "./AppExtracts/AuthorityExtract";
import PrescribersExtract from "./AppExtracts/PrescribersExtract";
import DashboardExtract from "./AppExtracts/DashboardExtract";
import ScriptExtract from "./AppExtracts/ScriptExtract";

const Features = ({ setPage }) => {
  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('features');
  }, [setPage]);

  return (<>
    <Helmet>
      <title>Features · OptomRx</title>
      <meta name="description" content="Discover some of the unique features that OptomRx has to offer, including  standout PBS support."/>
      <link rel="canonical" href="/features" />
    </Helmet>
    <StyledFeatures>
      <div className="Features-container">
        <section className="Features__intro">
          <div className="content-container">
            <h2 className="Features__title">Features</h2>
            <p className="subtitle">Learn about the key features that make OptomRx the complete solution for writing therapeutic prescriptions.</p>
          </div>          
        </section>

        <section className="Features__pbs" aria-labelledby="description__title">
          <h3 id="description__title" className="section__title">Real-time PBS data</h3>
          <p className="pbs-subtitle">Available for all PBS scripts</p>
          <div className="content-container pbs-container indications-container">
            <div className="description">
              <h4 className="description__title">Instant PBS availability and indications</h4>
              <p className="description__text">The moment you select a medication, OptomRx will show you whether it is eligible for PBS prescribing. If the medication is restricted or requires authority, you can optionally view the indications for it's use under the PBS.</p>
            </div>
            <div className="indicationsDOMBox pbsDOMBox">
              <IndicationsExtract />
            </div>
          </div>

          <div className="content-container pbs-container quantityRepeats-container">
            <div className="quantityDOMBox pbsDOMBox">
              <QuantityExtract />
            </div>
            <div className="description">
              <h4 className="description__title">Avoid mistakes in prescribing</h4>
              <p className="description__text">Every PBS medication has maximum allowable quantity and repeats. Using up-to-date PBS data, OptomRx shows you these values for any selected PBS medication, making any prescribing errors less likely.</p>
            </div>
          </div>

          <div className="content-container pbs-container authority-container">
            <div className="description">
              <h4 className="description__title">Save time for those less common authority scripts</h4>
              <p className="description__text">When a streamline authority code is available, it will be supplied for you, automatically. For those medications requiring manual authority codes, OptomRx will advise you where to apply for authority.</p>
            </div>
            <div className="authorityDOMBox pbsDOMBox">
              <AuthorityExtract />
            </div>
          </div>
        </section>

        <section className="Features__lemi" aria-labelledby="lemi__title">
          <div className="content-container lemi-container">
          <div className="lemi__screenshots">
              <img src={lemiOptimised} loading="lazy" alt="Front cover of LEMI and LMBC guides for active ingredient prescribing" />
            </div>
            <div className="lemi__description description">
              <h3 id="lemi__title" className="section__title">Active ingredient prescribing</h3>
              <p className="lemi__text">Guidelines now exist for all prescribers in Australia, requiring active ingredient prescribing in many cases. Several ophthalmic medications however belong to the List of Excluded Medicinal Items (LEMI) or the List of Medicines for Brand Consideration (LMBC), where active ingredient prescribing may not apply.</p>
              <p className="lemi__text">OptomRx identifies which items belong to the LEMI or LMBC, and automatically adjusts your prescriptions to meet relevant guidelines. You can find out if any LEMI/LMBC adjustments have been made while writing your scripts, and overwrite this if necessary.</p>
            </div>
          </div>
        </section>

        <section className="Features__prescribers" aria-labelledby="prescribers__title">
          <div className="content-container prescribers-container">
            <div className="prescribers__description description">
              <h3 id="prescribers__title" className="section__title">Multiple prescribers</h3>
              <p className="prescribers__text">Whether you work in a single practice, or locum all across Australia - OptomRx supports as many prescriber profiles as you need. Prescriber profiles can be modified, added, or removed with ease. Simply select whichever prescriber details you wish to use when you write a prescription. Simplify things further with default selection for your most common practice location.</p>
            </div>
            <div className="prescribersDOMBox">
              <PrescribersExtract />
            </div>
          </div>
        </section>

        <section className="Features__represcribe" aria-labelledby="represcribe__title">
          <div className="content-container represcribe-container">
            <div className="represcribe__description description">
              <h3 id="represcribe__title" className="section__title">Instant re-prescribe</h3>
              <p className="represcribe__text">In practice, you'll be reaching for the same scripts over and over; why waste time re-writing the same script every time? With OptomRx, you are able to save any script as a 'favourite'.</p>
              <p className="represcribe__text">These favourites contain specific medication details, e.g. ingredient, quantity, repeats, dosage, etc. You can re-prescribe these favourites with a single click. Just add patient details, and the script is done. Quick and easy. </p>
            </div>
            <div className="represcribeDOMBox">
              <DashboardExtract />
            </div>
          </div>
        </section>

        <section className="Features__data" aria-labelledby="data__title">
          <div className="content-container data-container">
            <div className="dataDOMBox">
              <ScriptExtract />
            </div>
            <div className="data__description description">
              <h3 id="data__title" className="section__title">No patient data retention</h3>
              <p className="data__text"><strong>Patient information is never saved on OptomRx.</strong> When you save a script, only non-identifiable information regarding medication and PBS details are retained. For authority scripts, prescriber copies are provided in the printable template for your records.</p>
              <p className="data__text">The decision to avoid patient data retention was made in the spirit of patient safety, and the vision of OptomRx as a prescription writing tool, not a prescription database.</p>
            </div>
          </div>
        </section>

        <section className="Features__action" aria-labelledby="action__title">
          <div className="content-container action-container">
            <p className="subtitle action__subtitle">Try it for yourself</p>
            <h3 id="action__title" className="section__title">OptomRx is free to use</h3>
            <Link to="/signup" className="btn-primary button signup">Sign up to OptomRx</Link>
          </div>
        </section>
        
      </div>       
    </StyledFeatures>
  </>);
};

export default Features;
