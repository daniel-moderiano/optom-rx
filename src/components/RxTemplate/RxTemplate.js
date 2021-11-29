import { StyledRxTemplate } from "./RxTemplate.styled";
import Rx from '../../assets/template-sized.jpg';
import tickbox from '../../assets/tickbox.svg';
import { useLocation, useHistory } from "react-router";

const RxTemplate = ({ data }) => {
  // Deconstructing for cleanliness of code and easier-to-understand operations
  const { drugData, patientData, providerData, miscData } = data;

  const { state } = useLocation();
  let history = useHistory();
  

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.substring(0, 2) === '04') {
      // Format as mobile phone number
      return `${phoneNumber.substring(0, 4)} ${phoneNumber.substring(4, 7)} ${phoneNumber.substring(7, 10)}`;
    } else if (phoneNumber.substring(0, 2) === '13') {
      // Format as business number, depending on total length
      if (phoneNumber.length === 6) {
        // Format as 6 digit '13' number
        return `${phoneNumber.substring(0, 2)} ${phoneNumber.substring(2, 4)} ${phoneNumber.substring(4, 6)}`;
      } else {
        // Format as 1300 number
        return `${phoneNumber.substring(0, 4)} ${phoneNumber.substring(4, 7)} ${phoneNumber.substring(7, 10)}`;
      }
    } else {
      // Format as standard 10 digit landline number
      return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 6)} ${phoneNumber.substring(6, 10)}`;
    }
  };

  // Controls when to split a line to ensure the address is displayed as well as practicable
  const formatProvAddress = () => {
    if (providerData.subpremise.length > 20) {
      return (<>
        <div className="provider__subpremise">{providerData.subpremise}</div>
        <div className="provider__streetAddress">{providerData.streetAddress}</div>
      </>);
    } else {
      return (<div className="provider__streetAddress">
        {`${providerData.subpremise} ${providerData.streetAddress}`}
      </div>);
    }
  }
  
  // Finalised drug format is dependant on whether the Rx has brand name included/only selected
  const formatDrug = (activeIngredient, brandName) => {
    const capitalised = activeIngredient[0].toUpperCase() + activeIngredient.substring(1);
    console.log();
    // Brand name only
    if (drugData.brandOnly) {
      if (!capitalised.includes('eye')) {
        if (capitalised.includes('spray')) {
          return `${brandName} ${capitalised.substr(capitalised.indexOf('spray'), 5)}`;
        } else {
          return brandName;
        }
      } else {
        return `${brandName} ${capitalised.substr(capitalised.indexOf('eye'))}`;
      }
    }    
    // Brand name NOT to be included
    if (!drugData.includeBrand) {
      return capitalised;
    }
    // Brand name included in addition to active ingredient
    if (!capitalised.includes('eye')) {
      if (capitalised.includes('spray')) {
        return `${capitalised.replace('spray', `(${brandName}) spray`)}`;
      } else {
        return `${capitalised.replace(',', ` (${brandName}),`)}`;
      }
    } else {
      return `${capitalised.replace('eye', `(${brandName}) eye`)}`;
    }
  };

  const formatDate = () => {
    return `${miscData.date.substring(8)}/${miscData.date.substring(5, 7)}/${miscData.date.substring(0, 4)}`;
  }

  const editForm = () => {
    history.push('/');
  }

  return (
    <StyledRxTemplate className="RxTemplate">
      <h2 className="RxTemplate__title">Review your prescription</h2>
      {/* If the template is rendered without a full set of data, many functions will fail. Hence this is rendered conditionally */}
      {state.validData ? <>
        <img src={Rx} alt="" />
        <div className="ui-container">
          <section className="ui-provider-upper">
            <h4 className="ui-provider__title">Provider</h4>
            <div className="ui-container">
              <div className="ui-provider__contact-upper">
                <div className="ui-provider__fullName">{`${providerData.prefix ? 'Dr' : ''} ${providerData.fullName}`}</div>
                {formatProvAddress()}
                <div className="ui-provider__addressLine2">
                  {`${providerData.suburb} ${providerData.state} ${providerData.postcode}`}
                </div>
              </div>
              <div className="ui-provider__contact-lower">
                <div className="ui-provider__prescriberNumber">{providerData.prescriberNumber}</div>
                <div data-testid="phone" className="ui-provider__phoneNumber">
                  {`Phone: ${formatPhoneNumber(providerData.phoneNumber)}`}
                </div>
              </div>
            </div>
          </section>

          <section className="ui-patient">
            <h4 className="ui-patient__title">Patient</h4>
            <div className="ui-container">
              <div className="ui-patient__medicareNumber">
                {`${patientData.medicareNumber.substring(0, 4)} ${patientData.medicareNumber.substring(4, 9)} ${patientData.medicareNumber.substring(9, 10)}-${patientData.medicareRefNumber}`}
              </div>
              <div className="ui-patient__contactDetails">
                <div className="ui-patient__fullName">{patientData.fullName}</div>
                <div className="ui-patient__streetAddress">{`${patientData.subpremise} ${patientData.streetAddress}`}</div>
                <div className="ui-patient__addressLine2">{`${patientData.suburb} ${patientData.state} ${patientData.postcode}`}</div>
              </div>
            </div>
          </section>

          <section className="ui-miscellaneous">
            {/* Include Script ID and Authority Rx number here */}
            <div className="ui-date">{formatDate()}</div>
            {drugData.pbsRx 
              ? <div className="ui-pbsSelected"><img src={tickbox} alt="" /></div>
              : <div className="ui-nonPbs"><span className="ui-nonPbs-marker">XXXXXXXXXXX</span>Non-PBS</div>
            }
            {!drugData.substitutePermitted && <div className="ui-brandSub">✓</div>}
            
          </section>

          {/* Script ID or authority Rx number should go above the medication once finalised, and perhaps with a border bottom */}
          <section className="ui-medication">
            <h4 className="ui-medication__title">Medication</h4>
            <div data-testid="drugName" className="ui-medication__activeIngredient">
              {formatDrug(drugData.activeIngredient, drugData.brandName)}
            </div>
            <div className="ui-medication__dosage">{drugData.dosage}</div>
            <div className="ui-quantityRepeats">
              <div className="ui-medication__quantity">{`Quantity: ${drugData.quantity}`}</div>
              <div className="ui-medication__repeats">{`${drugData.repeats} repeats`}</div>
            </div>
          </section>

          {/* Wastes space to render authority section for non-authority required scripts, so render only as needed */}
          {drugData.authRequired && <section className="ui-authority">
            <div className="ui-authority__approvalCode">{`Authority Approval No: ${miscData.authCode}`}</div>
            {/* Optional sections below - not sure how useful these are in this day and age */}
            {/* <div className="authority__authorised">Authorised:</div>
            <div className="authority__delegate">Delegate...............</div> */}
          </section>}
        </div>


        <div className="left-container">
          <section className="provider-upper">
            <h4 className="provider__title">Provider</h4>
            <div className="container">
              <div className="provider__contact-upper">
                <div className="provider__fullName">{`${providerData.prefix ? 'Dr' : ''} ${providerData.fullName}`}</div>
                {formatProvAddress()}
                <div className="provider__addressLine2">
                  {`${providerData.suburb} ${providerData.state} ${providerData.postcode}`}
                </div>
              </div>
              <div className="provider__contact-lower">
                <div className="provider__prescriberNumber">{providerData.prescriberNumber}</div>
                <div data-testid="phone" className="provider__phoneNumber">
                  {`Phone: ${formatPhoneNumber(providerData.phoneNumber)}`}
                </div>
              </div>
            </div>
          </section>

          <section className="patient">
            <h4 className="patient__title">Patient</h4>
            <div className="container">
              <div className="patient__medicareNumber">
                {`${patientData.medicareNumber.substring(0, 4)} ${patientData.medicareNumber.substring(4, 9)} ${patientData.medicareNumber.substring(9, 10)}-${patientData.medicareRefNumber}`}
              </div>
              <div className="patient__contactDetails">
                <div className="patient__fullName">{patientData.fullName}</div>
                <div className="patient__streetAddress">{`${patientData.subpremise} ${patientData.streetAddress}`}</div>
                <div className="patient__addressLine2">{`${patientData.suburb} ${patientData.state} ${patientData.postcode}`}</div>
              </div>
            </div>
          </section>

          <section className="miscellaneous">
            {/* Include Script ID and Authority Rx number here */}
            <div className="date">{formatDate()}</div>
            {drugData.pbsRx 
              ? <div className="pbsSelected"><img src={tickbox} alt="" /></div>
              : <div className="nonPbs"><span className="nonPbs-marker">XXXXXXXXXXX</span>Non-PBS</div>
            }
            {!drugData.substitutePermitted && <div className="brandSub">✓</div>}
            
          </section>

          {/* Script ID or authority Rx number should go above the medication once finalised, and perhaps with a border bottom */}
          <section className="medication">
            <h4 className="medication__title">Medication</h4>
            <div data-testid="drugName" className="medication__activeIngredient">
              {formatDrug(drugData.activeIngredient, drugData.brandName)}
            </div>
            <div className="medication__dosage">{drugData.dosage}</div>
            <div className="quantityRepeats">
              <div className="medication__quantity">{`Quantity: ${drugData.quantity}`}</div>
              <div className="medication__repeats">{`${drugData.repeats} repeats`}</div>
            </div>
            <span className="item-printed">1 item printed</span>
          </section>
          {/* Will only ever be 1 item printed, so consider omitting this */}

          <section className="provider-lower">
            {/* Used to display provider details next to, or below signature space */}
            <div className="provider__fullName">{`${providerData.prefix ? 'Dr' : ''} ${providerData.fullName}`}</div>
            {/* Qualifications should only be included in the lower section */}
            <div className="provider__qualifications">{providerData.qualifications}</div>
            <div className="practitionerTick">🗸</div>
          </section>

          {/* Wastes space to render authority section for non-authority required scripts, so render only as needed */}
          {drugData.authRequired && <section className="authority">
            <div className="authority__approvalCode">{`Authority Approval No: ${miscData.authCode}`}</div>
            {/* Optional sections below - not sure how useful these are in this day and age */}
            {/* <div className="authority__authorised">Authorised:</div>
            <div className="authority__delegate">Delegate...............</div> */}
          </section>}
        </div>
        <div className="right-container">
          <section className="provider-upper">
            <div className="container">
              <div className="provider__contact-upper">
                <div className="provider__fullName">{`${providerData.prefix ? 'Dr' : ''} ${providerData.fullName}`}</div>
                {formatProvAddress()}
                <div className="provider__addressLine2">
                  {`${providerData.suburb} ${providerData.state} ${providerData.postcode}`}
                </div>
              </div>
              <div className="provider__contact-lower">
                <div className="provider__prescriberNumber">{providerData.prescriberNumber}</div>
                <div data-testid="phone" className="provider__phoneNumber">
                  {`Phone: ${formatPhoneNumber(providerData.phoneNumber)}`}
                </div>
              </div>
            </div>
          </section>

          <section className="patient">
            <div className="container">
              <div className="patient__medicareNumber">
                {`${patientData.medicareNumber.substring(0, 4)} ${patientData.medicareNumber.substring(4, 9)} ${patientData.medicareNumber.substring(9, 10)}-${patientData.medicareRefNumber}`}
              </div>
              <div className="patient__contactDetails">
                <div className="patient__fullName">{patientData.fullName}</div>
                <div className="patient__streetAddress">{`${patientData.subpremise} ${patientData.streetAddress}`}</div>
                <div className="patient__addressLine2">{`${patientData.suburb} ${patientData.state} ${patientData.postcode}`}</div>
              </div>
            </div>
          </section>

          <section className="miscellaneous">
            {/* Include Script ID and Authority Rx number here */}
            <div className="date">{formatDate()}</div>
            {drugData.pbsRx 
              ? <div className="pbsSelected"><img src={tickbox} alt="" /></div>
              : <div className="nonPbs"><span className="nonPbs-marker">XXXXXXXXXXX</span>Non-PBS</div>
            }
            {!drugData.substitutePermitted && <div className="brandSub">✓</div>}
            
          </section>

          {/* Script ID or authority Rx number should go above the medication once finalised, and perhaps with a border bottom */}
          <section className="medication">
            <div data-testid="drugName" className="medication__activeIngredient">
              {formatDrug(drugData.activeIngredient, drugData.brandName)}
            </div>
            <div className="medication__dosage">{drugData.dosage}</div>
            <div className="quantityRepeats">
              <div className="medication__quantity">{`Quantity: ${drugData.quantity}`}</div>
              <div className="medication__repeats">{`${drugData.repeats} repeats`}</div>
            </div>
            <span className="item-printed">1 item printed</span>
          </section>
          {/* Will only ever be 1 item printed, so consider omitting this */}

          <section className="provider-lower">
            {/* Used to display provider details next to, or below signature space */}
            <div className="provider__fullName">{`${providerData.prefix ? 'Dr' : ''} ${providerData.fullName}`}</div>
            {/* Qualifications should only be included in the lower section */}
            <div className="provider__qualifications">{providerData.qualifications}</div>
            {/* <div className="practitionerTick">🗸</div> */}
          </section>

          {/* Wastes space to render authority section for non-authority required scripts, so render only as needed */}
          {drugData.authRequired && <section className="authority">
            <div className="authority__approvalCode">{`Authority Approval No: ${miscData.authCode}`}</div>
            {/* Optional sections below - not sure how useful these are in this day and age */}
            {/* <div className="authority__authorised">Authorised:</div>
            <div className="authority__delegate">Delegate...............</div> */}
          </section>}
        </div>
        <div className="RxTemplate__btns">
          <button className="RxTemplate__btn btn-editRx" onClick={editForm}>Make changes</button>
          <button className="RxTemplate__btn btn-print" onClick={() => window.print()}>Print</button>
        </div>
      </> : <h3 className="RxTemplate__subtitle">Fill out the form to generate Rx</h3>}
      
    </StyledRxTemplate>
  );
};

export default RxTemplate;
