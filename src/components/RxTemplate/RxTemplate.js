import { StyledRxTemplate } from "./RxTemplate.styled";
import Rx from '../../assets/template-sized.jpg';

const RxTemplate = ({ data, date }) => {
  // Deconstructing for cleanliness of code and easier-to-understand operations
  const { drugData, patientData, providerData } = data;

  // TODO: adjust date for Australia (currently US)

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

  const formatMedicareNumber = (medicareNumber) => {

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
            <div className="provider__addressLine2">{`${providerData.suburb} ${providerData.state} ${providerData.postcode}`}</div>
            
          </div>
          <div className="provider__contact-lower">
            <div className="provider__prescriberNumber">{providerData.prescriberNumber}</div>
            <div data-testid="phone" className="provider__phoneNumber">{`Phone: ${formatPhoneNumber(providerData.phoneNumber)}`}</div>
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
        <div className="medication__activeIngredient">{drugData.activeIngredient[0].toUpperCase() + drugData.activeIngredient.substring(1)}</div>
        <div className="medication__brandName">{drugData.brandName}</div>
        <div className="medication__dosage">{drugData.dosage}</div>
        <div className="quantityRepeats">
          <div className="medication__quantity">{`Quantity: ${drugData.quantity}`}</div>
          <div className="medication__repeats">{`${drugData.repeats} repeats`}</div>
        </div>
        

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
