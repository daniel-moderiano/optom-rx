import { StyledRxTemplate } from "./RxTemplate.styled";
import tickbox from '../../assets/tickbox.svg';
import lightTick from '../../assets/light-tick.svg';
import largeTick from '../../assets/large-tick.svg';
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { db } from '../../firebase/config';
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../../hooks/useAuthContext";


const RxTemplate = ({ data, setToast }) => {
  // Deconstructing for cleanliness of code and easier-to-understand operations
  const { drugData, patientData, providerData, miscData } = data;

  // State is null by default, so checking for it's existence alone will ensure this is a valid link containing data vs a simple nav link
  let { state } = useLocation();
  let navigate = useNavigate();

  const { user } = useAuthContext();

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
  };

  const saveRx = async () => {
    // Save a script onto firebase referenced by script ID/Number, containing only non-identifiable information
    await setDoc(doc(db, 'scripts', data.miscData.scriptID), {
      ...data.drugData,
      ...data.miscData,
      favourite: false,
    });

    // Add script data to the current user's saved scripts. This operation should only be called once per script!
    await updateDoc(doc(db, 'users', user.uid), {
      scripts: arrayUnion({
        ...data.drugData,
        ...data.miscData,
        favourite: false,
      })
    });

    setToast((prevData) => ({
      ...prevData,
      visible: true,
      type: 'success',
      message: 'Prescription saved'
    }));

    navigate('/');
  };

  return (
    <StyledRxTemplate className="RxTemplate">
      <h2 className="RxTemplate__title">Review your prescription</h2>
      <div className="ui-description">
        <div className="ui-info ui-scriptNo">Script No: {miscData.scriptID}</div>
                <div className="ui-info ui-date">{formatDate()}</div>
      </div>
      {/* If the template is rendered without a full set of data, many functions will fail. Hence this is rendered conditionally */}
      {state ? <>
        <div data-testid="ui" className="ui-container">
          <section className="ui-provider">
            <h4 className="ui__title">Provider</h4>

              <div className="ui-info ui-provider__contact-upper">
                <div className=" ui-provider__fullName">{`${providerData.prefix ? 'Dr' : ''} ${providerData.fullName}`}</div>
                {formatProvAddress()}
                <div className=" ui-provider__addressLine2">
                  {`${providerData.suburb} ${providerData.state} ${providerData.postcode}`}
                </div>
                <div className="ui-provider__phoneNumber">
                  {`Phone: ${formatPhoneNumber(providerData.phoneNumber)}`}
                </div>
              </div>
              <div className="ui-info ui-provider__prescriberNumber">Prescriber number: {providerData.prescriberNumber}</div>

          </section>

          <section className="ui-patient">
            <h4 className="ui__title">Patient</h4>
              <div className="ui-info ui-patient__contactDetails">
                <div className="ui-patient__fullName">{patientData.fullName}</div>
                <div className="ui-patient__streetAddress">{`${patientData.subpremise} ${patientData.streetAddress}`}</div>
                <div className="ui-patient__addressLine2">{`${patientData.suburb} ${patientData.state} ${patientData.postcode}`}</div>
              </div>

              {!patientData.noMedicare && 
                <div className="ui-info ui-medicare">
                  <div className="ui-patient__medicareNumber">Medicare number: {`${patientData.medicareNumber.substring(0, 4)} ${patientData.medicareNumber.substring(4, 9)} ${patientData.medicareNumber.substring(9, 10)}-${patientData.medicareRefNumber}`}
                  </div>
                </div>
              }
              
          </section>

           {/* Script ID or authority Rx number should go above the medication once finalised, and perhaps with a border bottom */}
           <section className="ui-medication">
            <h4 className="ui__title">Medication</h4>
              <div className="ui-info ui-medication__name">
                {formatDrug(drugData.activeIngredient, drugData.brandName)}
              </div>
              <div className="ui-info med-parameters">
                {drugData.substitutePermitted 
                  ? <div className="ui-brandSub--yes">Brand substitution permitted</div>
                  : <div className="ui-brandSub--no">Brand substitution not permitted</div>
                }
                {drugData.compounded 
                  && <div className="ui-compounded">To be compounded</div>
                } 
              </div>
              
              <div className="ui-info ui-medication__dosage">Dosage: {drugData.dosage}</div>
              <div className="ui-quantityRepeats">
                <div className="ui-info ui-medication__quantity">{`Quantity: ${drugData.quantity}`}</div>
                <div className="ui-info ui-medication__repeats">{`Repeats: ${drugData.repeats}`}</div>
              </div>
              
          </section>

          <section className="ui-miscellaneous">
            {/* Include Script ID and Authority Rx number here */}
            <h4 className="ui__title">PBS and Other</h4>
              
              {drugData.pbsRx 
                ? <div className="ui-info ui-pbsRx ui-pbsRx--selected">PBS prescription</div>
                : <div className="ui-info ui-pbsRx ui-pbsRx">Private (non-PBS) prescription</div>
              }
              {drugData.authRequired && (<div className="ui-auth ui-info">
                <div className="ui-authCode">{`Authority Approval No: ${miscData.authCode}`}</div>
                <div className="ui-authRxNo">{`Authority Script No: ${miscData.authRxNumber}`}</div>
                <div className="ui-justification">
                  <div className="ui-prevAuth">{`Patient has previously received authority: ${miscData.prevAuth ? 'Yes' : 'No'}`}</div>
                  <div className="ui-age">{miscData.age && `Patient's age: ${miscData.age}`}</div>
                  <div className="ui-justification">{`Clinical justification for use of item: ${miscData.justification}`}</div>
                </div>
              </div>)}
          </section>
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
              {!patientData.noMedicare && 
                <div className="patient__medicareNumber">
                  {`${patientData.medicareNumber.substring(0, 4)} ${patientData.medicareNumber.substring(4, 9)} ${patientData.medicareNumber.substring(9, 10)}-${patientData.medicareRefNumber}`}
                </div>
              }
              
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
              ? <div className="pbsSelected"><img className="pbsTick" src={tickbox} alt="" /></div>
              : <div className="nonPbs"><span className="nonPbs-marker">XXXXXXXXXXX</span>Non-PBS</div>
            }
            {!drugData.substitutePermitted && <div className="brandSub"><img className="brandSubTick" src={largeTick} alt="" /></div>}
            <div className="scriptNo">Script No: {miscData.scriptID}</div>
          </section>

          {/* Script ID or authority Rx number should go above the medication once finalised, and perhaps with a border bottom */}
          <section className="medication">
            <h4 className="medication__title">Medication</h4>
            <div data-testid="drugName" className="medication__activeIngredient">
              {formatDrug(drugData.activeIngredient, drugData.brandName)}
            </div>
            {drugData.compounded 
              && <div className="medication__compounded">To be compounded</div>
            } 
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
            <div className="practitionerTick"><img className="optomTick" src={lightTick} alt="" /></div>
          </section>

          {/* Wastes space to render authority section for non-authority required scripts, so render only as needed */}
          {drugData.authRequired && <section className="authority">
            <div className="authority__approvalCode">{`Authority Approval No: ${miscData.authCode}`}</div>
            <div className="authRxNo">{`Authority Script No: ${miscData.authRxNumber}`}</div>
            {/* Optional sections below - not sure how useful these are in this day and age */}
            {/* <div className="authority__authorised">Authorised</div> */}
            {/*<div className="authority__delegate">Delegate...............</div> */}
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
                <div className="provider__phoneNumber">
                  {`Phone: ${formatPhoneNumber(providerData.phoneNumber)}`}
                </div>
              </div>
            </div>
          </section>

          <section className="patient">
            <div className="container">

              {!patientData.noMedicare && 
                <div className="patient__medicareNumber">
                  {`${patientData.medicareNumber.substring(0, 4)} ${patientData.medicareNumber.substring(4, 9)} ${patientData.medicareNumber.substring(9, 10)}-${patientData.medicareRefNumber}`}
                </div>
              }
              
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
              ? <div className="pbsSelected"><img className="pbsTick" src={tickbox} alt="" /></div>
              : <div className="nonPbs"><span className="nonPbs-marker">XXXXXXXXXXX</span>Non-PBS</div>
            }
            {!drugData.substitutePermitted && <div className="brandSub"><img className="brandSubTick" src={largeTick} alt="" /></div>}
            <div className="scriptNo">Script No: {miscData.scriptID}</div>
          </section>

          {/* Script ID or authority Rx number should go above the medication once finalised, and perhaps with a border bottom */}
          <section className="medication">
            <div className="medication__activeIngredient">
              {formatDrug(drugData.activeIngredient, drugData.brandName)}
            </div>
            {drugData.compounded 
              && <div className="medication__compounded">To be compounded</div>
            } 
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
            <div className="authRxNo">{`Authority Script No: ${miscData.authRxNumber}`}</div>
            {/* Optional sections below - not sure how useful these are in this day and age */}
            {/* <div className="authority__authorised">Authorised:</div>
            <div className="authority__delegate">Delegate...............</div> */}
          </section>}
        </div>

        <div className="bottom-container">
          <span className="doctor-copy">Prescriber's Copy</span>
          <section className="provider-upper">
            <div className="container">
              <div className="provider__contact-upper">
                <div className="provider__fullName">{`${providerData.prefix ? 'Dr' : ''} ${providerData.fullName}`}</div>
                {/* Consider appending qualifications after provider name in this copy? */}
                {formatProvAddress()}
                <div className="provider__addressLine2">
                  {`${providerData.suburb} ${providerData.state} ${providerData.postcode}`}
                </div>
              </div>
              <div className="provider__contact-lower">
                <div className="provider__phoneNumber">
                  {`Phone: ${formatPhoneNumber(providerData.phoneNumber)}`}
                </div>
                <div className="provider__prescriberNumber">Prescriber No. {providerData.prescriberNumber}</div>
                
              </div>
            </div>
          </section>

          <section className="patient">
            <div className="container">
              <span className="patient__label">Patient:</span>
              <div className="patient__contactDetails">
                <div className="patient__fullName">{patientData.fullName}</div>
                <div className="patient__streetAddress">{`${patientData.subpremise} ${patientData.streetAddress}`}</div>
                <div className="patient__addressLine2">{`${patientData.suburb} ${patientData.state} ${patientData.postcode}`}</div>
                {/* Unsure if including this here */}
                {!patientData.noMedicare && 
                  <div className="patient__medicareNumber">
                  {`${patientData.medicareNumber.substring(0, 4)} ${patientData.medicareNumber.substring(4, 9)} ${patientData.medicareNumber.substring(9, 10)}-${patientData.medicareRefNumber}`}
                  </div>
                }
                
              </div>
            </div>
          </section>

          <section className="miscellaneous">
            <div className="date">{formatDate()}</div>
            {drugData.authRequired && <div className="authNumbers">
              <div className="authRxNo">{`Authority Script No: ${miscData.authRxNumber}`}</div>
            </div>}
          </section>

          <section className="medication">
            <div className="medication__activeIngredient">
              {formatDrug(drugData.activeIngredient, drugData.brandName)}
            </div>
            {drugData.compounded 
              && <div className="medication__compounded">To be compounded</div>
            } 
            <div className="medication__dosage">{drugData.dosage}</div>
            <div className="quantityRepeats">
              <div className="medication__quantity">{`Quantity: ${drugData.quantity}`}</div>
              <div className="medication__repeats">{`${drugData.repeats} repeats`}</div>
            </div>
            <div className="item-printed-line">
              {drugData.authRequired && <div className="authority__approvalCode">{`Authority Approval No: ${miscData.authCode}`}</div>}
              <span className="item-printed">1 item printed</span>
            </div>

            {drugData.authRequired && (<>
              <section className="authority">
                <div className="extra-details">
                  <div className="prev-auth">{`Patient has received authority for this medicine before: ${miscData.prevAuth ? 'Yes' : 'No'}`}</div>
                  {(miscData.age !== "") && <div className="patient-age">Patient's age: {miscData.age}</div>}
                </div>
                
              </section>
              <div className="indication">Clinical justification for use of item: {miscData.justification}</div>
              </>)}
            
          </section>

          
        </div>

        <div className="RxTemplate__btns">
          <div className="primary-btns">
            <button className="RxTemplate__btn btn-print" onClick={() => {window.print()}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Print</title> 
                <path d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/>
                <rect x="128" y="240" width="256" height="208" rx="24.32" ry="24.32" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/>
                <path d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/>
                <circle cx="392" cy="184" r="24" fill="#fff"/>
              </svg>
              Print
            </button>
            <button type="button" className="RxTemplate__btn btn-finish" onClick={saveRx}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Save</title><path d="M380.93 57.37A32 32 0 00358.3 48H94.22A46.21 46.21 0 0048 94.22v323.56A46.21 46.21 0 0094.22 464h323.56A46.36 46.36 0 00464 417.78V153.7a32 32 0 00-9.37-22.63zM256 416a64 64 0 1164-64 63.92 63.92 0 01-64 64zm48-224H112a16 16 0 01-16-16v-64a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-16 16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
              Save and Finish
            </button>
          </div>
          
          <Link className="RxTemplate__btn btn-edit" to="/form">Make changes</Link>
        </div>
      </> : <h3 className="RxTemplate__subtitle">Fill out the form to generate Rx</h3>}
      
    </StyledRxTemplate>
  );
};

export default RxTemplate;
