import { StyledRxTemplate } from "./RxTemplate.styled";
import Rx from '../../assets/template-sized.jpg';

const RxTemplate = ({ data, date }) => {
  // Deconstructing for cleanliness of code and easier-to-understand operations
  const { drugData, patientData, providerData } = data;

  return (
    <StyledRxTemplate className="RxTemplate">
      {/* <img src={Rx} alt="" /> */}

      <section className="provider-upper">
        <div className="container">
          <div className="provider__contact-upper">
            <div className="provider__fullName">{`${providerData.prefix && 'Dr'} ${providerData.fullName}`}</div>
            
            <div className="provider__subpremise">{providerData.subpremise}</div>
            <div className="provider__streetAddress">{providerData.streetAddress}</div>
            
            {/* <div className="provider__suburb">{providerData.suburb}</div>
            <div className="provider__state">{providerData.state}</div>
            <div className="provider__postcode">{providerData.postcode}</div> */}
            <div className="provider__addressLine2">{`${providerData.suburb} ${providerData.state} ${providerData.postcode}`}</div>
            
          </div>
          <div className="provider__contact-lower">
            <div className="provider__prescriberNumber">{providerData.prescriberNumber}</div>
            <div className="provider__phoneNumber">{`Phone: ${providerData.phoneNumber}`}</div>
          </div>
        
          
        </div>
        
      </section>

      <section className="patient">
        <div className="container">
          <div className="patient__medicareNumber">{`${patientData.medicareNumber}-${patientData.medicareRefNumber}`}</div>
          {/* <div className="patient__medicareIRN">{patientData.medicareRefNumber}</div> */}
          <div className="patient__contactDetails">
            <div className="patient__fullName">{patientData.fullName}</div>
            <div className="patient__subpremise">{patientData.subpremise}</div>
            <div className="patient__streetAddress">{patientData.streetAddress}</div>
            <div className="patient__addressLine2">{`${patientData.suburb} ${patientData.state} ${patientData.postcode}`}</div>
            {/* <div className="patient__suburb">{patientData.suburb}</div>
          <div className="patient__state">{patientData.state}</div>
          <div className="patient__postcode">{patientData.postcode}</div> */}
          </div>
         
          {/* Consider a conditional here for combining subpremise and streetAddress into addressLine1, which is then split into 1 or two lines dpending on length */}
          
          
        </div>
      </section>
      <section className="miscellaneous">
        {/* Include date and potentially Script ID here. Consider also the PBS yes/no, and brand substitution yes/no here */}
        <div className="date">{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</div>
      </section>
      <section className="medication">
        {/* Active ingredient should be capitalised */}
        <div className="medication__activeIngredient">{drugData.activeIngredient}</div>
        <div className="medication__brandName">{drugData.brandName}</div>
        <div className="medication__dosage">{drugData.dosage}</div>
        <div className="medication__quantity">{drugData.quantity}</div>
        <div className="medication__repeats">{drugData.repeats}</div>

      </section>
      <section className="provider-lower">
        {/* Used to display provider details next to, or below signature space */}
        <div className="provider__fullName">{`${providerData.prefix && 'Dr'} ${providerData.fullName}`}</div>
        {/* Qualifications should only be included in the lower section */}
        <div className="provider__qualifications">{providerData.qualifications}</div>
      </section>
    </StyledRxTemplate>
  );
};

export default RxTemplate;
