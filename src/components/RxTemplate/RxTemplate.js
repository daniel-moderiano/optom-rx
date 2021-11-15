import { StyledRxTemplate } from "./RxTemplate.styled";
import Rx from '../../assets/template-sized.jpg';
import tickbox from '../../assets/tickbox.svg';

const RxTemplate = ({ data, date }) => {
  // Deconstructing for cleanliness of code and easier-to-understand operations
  const { drugData, patientData, providerData, miscData } = data;

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

  const formatMedicareNumber = (medicareNumber, IRN) => {
    return (<>
      <div className="medicareNumber__main">
        {`${medicareNumber.substring(0, 4)} ${medicareNumber.substring(4, 9)} ${medicareNumber.substring(9, 10)}`}
      </div>
      <div className="medicareNumber__IRN">
        {`${IRN}`}
      </div>
    </>)
  };
  
  const formatDrug = (activeIngredient, brandName) => {
    const capitalised = activeIngredient[0].toUpperCase() + activeIngredient.substring(1);
    if (!capitalised.includes('eye')) {
      return `${capitalised.replace(',', ` (${brandName}),`)}`;
    } else {
      return `${capitalised.replace('eye', `(${brandName}) eye`)}`;
    }
  };

  return (
    <StyledRxTemplate className="RxTemplate">
      <img src={Rx} alt="" />
      
      <section className="provider-upper">
        <div className="container">
          <div className="provider__contact-upper">
            <div className="provider__fullName">{`${providerData.prefix && 'Dr'} ${providerData.fullName}`}</div>
            <div className="provider__subpremise">{providerData.subpremise}</div>
            <div className="provider__streetAddress">{providerData.streetAddress}</div>
            {/* <div className="provider__suburb">{providerData.suburb}</div>
            <div className="provider__state">{providerData.state}</div>
            <div className="provider__postcode">{providerData.postcode}</div> */}
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
          {/* <div className="patient__medicareNumber">{`${patientData.medicareNumber}-${patientData.medicareRefNumber}`}</div> */}
          <div className="patient__medicareNumber">
            {formatMedicareNumber(patientData.medicareNumber, patientData.medicareRefNumber)}
          </div>
          <div className="patient__contactDetails">
            <div className="patient__fullName">{patientData.fullName}</div>
            {/* <div className="patient__subpremise">{patientData.subpremise}</div> */}
            <div className="patient__streetAddress">{`${patientData.subpremise} ${patientData.streetAddress}`}</div>
            <div className="patient__addressLine2">{`${patientData.suburb} ${patientData.state} ${patientData.postcode}`}</div>
            {/* <div className="patient__suburb">{patientData.suburb}</div>
          <div className="patient__state">{patientData.state}</div>
          <div className="patient__postcode">{patientData.postcode}</div> */}
          </div>
          {/* Consider a conditional here for combining subpremise and streetAddress into addressLine1, which is then split into 1 or two lines dpending on length */}
        </div>
      </section>

      <section className="miscellaneous">
        {/* Include Script ID and Authority Rx number here */}
        <div className="date">{date}</div>
        {miscData.pbsRx 
          ? <div className="pbsSelected"><img src={tickbox} alt="" /></div>
          : <div className="nonPbs"><span className="nonPbs-marker">⨉⨉⨉⨉⨉⨉⨉⨉⨉</span>Non-PBS</div>
        }
        
        <div className="brandSub">✓</div>
      </section>

      <section className="medication">
        <div data-testid="drugName" className="medication__activeIngredient">
          {formatDrug(drugData.activeIngredient, drugData.brandName)}
        </div>
        <div className="medication__dosage">{drugData.dosage}</div>
        <div className="quantityRepeats">
          <div className="medication__quantity">{`Quantity: ${drugData.quantity}`}</div>
          <div className="medication__repeats">{`${drugData.repeats} repeats`}</div>
        </div>
      </section>
      {/* Will only ever be 1 item printed, so consider omitting this */}

      <span className="item-printed">1 item printed</span>

      <section className="provider-lower">
        {/* Used to display provider details next to, or below signature space */}
        <div className="provider__fullName">{`${providerData.prefix && 'Dr'} ${providerData.fullName}`}</div>
        {/* Qualifications should only be included in the lower section */}
        <div className="provider__qualifications">{providerData.qualifications}</div>
        <div className="practitionerTick">🗸</div>
      </section>

      {/* Wastes space to render authority section for non-authority required scripts, so render only as needed */}
      {miscData.authRequired && <section className="authority">
        <div className="authority__approvalCode">{`Authority Approval No: ${miscData.authCode}`}</div>
        {/* Optional sections below - not sure how useful these are in this day and age */}
        {/* <div className="authority__authorised">Authorised:</div>
        <div className="authority__delegate">Delegate...............</div> */}
      </section>}
      
    </StyledRxTemplate>
  );
};

export default RxTemplate;
