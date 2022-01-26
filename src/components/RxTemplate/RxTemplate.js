import { StyledRxTemplate } from "./RxTemplate.styled";
import tickbox from '../../assets/tickbox.svg';
import lightTick from '../../assets/light-tick.svg';
import largeTick from '../../assets/large-tick.svg';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { db } from '../../firebase/config';
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState, useEffect } from "react";
import Dots from '../utils/Dots/Dots';
import PageHeader from '../utils/PageHeader/PageHeader';
import Button from '../utils/Button/Button';
import { useFormatting } from "../../hooks/useFormatting";
import { useImmediateToast } from '../../hooks/useImmediateToast';

const RxTemplate = ({ data, setToast, setPage }) => {
  // Deconstructing data for cleanliness of code and easier-to-understand operations
  const { drugData, patientData, prescriberData, miscData } = data;
  const { formatDrug, formatDate, formatPhoneNumber, formatMedicareNumber, formatPrescriberAddress } = useFormatting();
  let navigate = useNavigate();
  const { user } = useAuthContext();
  const { showSuccessToast, showErrorToast } = useImmediateToast();

  const [isPending, setIsPending] = useState(false)

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage(null);
  }, [setPage])

  // Used when the user clicks the 'save and finish' btn. Scripts will not be saved by default otherwise
  const saveRx = async () => {
    setIsPending(true);
    try {
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
        })
      });

      setIsPending(false);
      showSuccessToast(setToast, 'Prescription saved');
      navigate('/');
    } catch (error) {
      setIsPending(false);
      showErrorToast(setToast, 'An error occurred while saving the script');
    }
  };

  return (
    <StyledRxTemplate className="RxTemplate">
      <PageHeader title="Review your prescription" />

      {/* If the template is rendered without a full set of data, many functions will fail. Hence this is rendered conditionally. Check is performed against presence of patient data  */}
      {Object.keys(patientData).length > 0 ? <>
        <div className="ui-description">
          <div className="ui-info ui-date">{formatDate(miscData.date)}</div>
          <div className="ui-info ui-scriptNo">Script No: {miscData.scriptID}</div>
        </div>
        <div data-testid="ui" className="ui-container">
          <section className="ui-prescriber">
            <h4 className="ui__title">Prescriber</h4>

            <div className="ui-info ui-prescriber__contact-upper">
              <div className=" ui-prescriber__fullName">{`${prescriberData.prefix ? 'Dr' : ''} ${prescriberData.fullName}`}</div>
              {formatPrescriberAddress(prescriberData)}
              <div className=" ui-prescriber__addressLine2">
                {`${prescriberData.suburb} ${prescriberData.state} ${prescriberData.postcode}`}
              </div>
              <div className="ui-prescriber__phoneNumber">
                {`Phone: ${formatPhoneNumber(prescriberData.phoneNumber)}`}
              </div>
            </div>
            <div className="ui-info ui-prescriber__prescriberNumber">Prescriber number: {prescriberData.prescriberNumber}</div>
          </section>

          <section className="ui-patient">
            <h4 className="ui__title">Patient</h4>
            <div className="ui-info ui-patient__contactDetails">
              <div className="ui-patient__fullName">{patientData.fullName}</div>
              <div className="ui-patient__streetAddress">{`${patientData.subpremise} ${patientData.streetAddress}`}</div>
              <div className="ui-patient__addressLine2">{`${patientData.suburb} ${patientData.state} ${patientData.postcode}`}</div>
            </div>

            {(patientData.medicareNumber.trim() !== "" && patientData.medicareRefNumber !== "") &&
              <div className="ui-info ui-medicare">
                <div className="ui-patient__medicareNumber">Medicare number: {formatMedicareNumber(patientData.medicareNumber, patientData.medicareRefNumber)}
                </div>
              </div>
            }
          </section>

          <section className="ui-medication">
            <h4 className="ui__title">Medication</h4>
            <div className="ui-info ui-medication__primary-info">
              {formatDrug(drugData)}
              <div className="ui-medication__dosage">Dosage: {drugData.dosage}</div>
              <div className="ui-medication__quantity">{`Quantity: ${drugData.quantity}`}</div>
              <div className="ui-medication__repeats">{`Repeats: ${drugData.repeats}`}</div>
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
          </section>

          <section className="ui-miscellaneous">
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
                <div className="ui-justification">{`Clinical justification for use of item: ${miscData.justification === "" ? 'None provided' : miscData.justification}`}</div>
              </div>
            </div>)}
          </section>
        </div>

        <div className="upper-containers">
          <div className="left-container">
            <section className="prescriber-upper">
              <h4 className="prescriber__title">Prescriber</h4>
              <div className="container">
                <div className="prescriber__contact-upper">
                  <div className="prescriber__fullName">{`${prescriberData.prefix ? 'Dr' : ''} ${prescriberData.fullName}`}</div>
                  {formatPrescriberAddress(prescriberData)}
                  <div className="prescriber__addressLine2">
                    {`${prescriberData.suburb} ${prescriberData.state} ${prescriberData.postcode}`}
                  </div>
                </div>
                <div className="prescriber__contact-lower">
                  <div className="prescriber__prescriberNumber">{prescriberData.prescriberNumber}</div>
                  <div data-testid="phone" className="prescriber__phoneNumber">
                    {`Phone: ${formatPhoneNumber(prescriberData.phoneNumber)}`}
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

                {(patientData.medicareNumber.trim() !== "" && patientData.medicareRefNumber !== "") &&
                  <div className="patient__medicareNumber">
                    {formatMedicareNumber(patientData.medicareNumber, patientData.medicareRefNumber)}
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
              <div className="date">{formatDate(miscData.date)}</div>
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
                {formatDrug(drugData)}
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

            <section className="prescriber-lower">
              {/* Used to display prescriber details next to, or below signature space */}
              <div className={`${prescriberData.qualifications === "" ? 'prescriber__fullName prescriber__fullName--low' : 'prescriber__fullName'}`}>{`${prescriberData.prefix ? 'Dr' : ''} ${prescriberData.fullName}`}</div>
              {/* Qualifications should only be included in the lower section */}
              <div className="prescriber__qualifications">{prescriberData.qualifications}</div>
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
            <section className="prescriber-upper">
              <div className="container">
                <div className="prescriber__contact-upper">
                  <div className="prescriber__fullName">{`${prescriberData.prefix ? 'Dr' : ''} ${prescriberData.fullName}`}</div>
                  {formatPrescriberAddress(prescriberData)}
                  <div className="prescriber__addressLine2">
                    {`${prescriberData.suburb} ${prescriberData.state} ${prescriberData.postcode}`}
                  </div>
                </div>
                <div className="prescriber__contact-lower">
                  <div className="prescriber__prescriberNumber">{prescriberData.prescriberNumber}</div>
                  <div className="prescriber__phoneNumber">
                    {`Phone: ${formatPhoneNumber(prescriberData.phoneNumber)}`}
                  </div>
                </div>
              </div>
            </section>

            <section className="patient">
              <div className="container">

                {(patientData.medicareNumber.trim() !== "" && patientData.medicareRefNumber !== "") &&
                  <div className="patient__medicareNumber">
                    {formatMedicareNumber(patientData.medicareNumber, patientData.medicareRefNumber)}
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
              <div className="date">{formatDate(miscData.date)}</div>
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
                {formatDrug(drugData)}
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

            <section className="prescriber-lower">
              {/* Used to display prescriber details next to, or below signature space */}
              <div className={`${prescriberData.qualifications === "" ? 'prescriber__fullName prescriber__fullName--low' : 'prescriber__fullName'}`}>{`${prescriberData.prefix ? 'Dr' : ''} ${prescriberData.fullName}`}</div>
              {/* Qualifications should only be included in the lower section */}
              <div className="prescriber__qualifications">{prescriberData.qualifications}</div>
            </section>

            {/* Wastes space to render authority section for non-authority required scripts, so render only as needed */}
            {drugData.authRequired && <section className="authority">
              <div className="authority__approvalCode">{`Authority Approval No: ${miscData.authCode}`}</div>
              <div className="authRxNo">{`Authority Script No: ${miscData.authRxNumber}`}</div>
            </section>}
          </div>
        </div>

        <div className="lower-containers">
          {drugData.authRequired && <div className="bottom-container--left">
            <span className="doctor-copy">--Prescriber's Copy--</span>
            <section className="prescriber-upper">
              <div className="container">
                <div className="prescriber__contact-upper">
                  <div className="prescriber__fullName">{`${prescriberData.prefix ? 'Dr' : ''} ${prescriberData.fullName}`}</div>
                  {/* Consider appending qualifications after prescriber name in this copy? */}
                  {formatPrescriberAddress(prescriberData)}
                  <div className="prescriber__addressLine2">
                    {`${prescriberData.suburb} ${prescriberData.state} ${prescriberData.postcode}`}
                  </div>
                </div>
                <div className="prescriber__contact-lower">
                  <div className="prescriber__phoneNumber">
                    {`Phone: ${formatPhoneNumber(prescriberData.phoneNumber)}`}
                  </div>
                  <div className="prescriber__prescriberNumber">Prescriber No. {prescriberData.prescriberNumber}</div>

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

                  {(patientData.medicareNumber.trim() !== "" && patientData.medicareRefNumber !== "") &&
                    <div className="patient__medicareNumber">
                      {formatMedicareNumber(patientData.medicareNumber, patientData.medicareRefNumber)}
                    </div>
                  }

                </div>
              </div>
            </section>

            <section className="miscellaneous">
              <div className="date">{formatDate(miscData.date)}</div>
              {drugData.authRequired && <div className="authNumbers">
                <div className="authRxNo">{`Authority Script No: ${miscData.authRxNumber}`}</div>
              </div>}
            </section>

            <section className="medication">
              <div className="medication__activeIngredient">
                {formatDrug(drugData)}
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


          </div>}

          {drugData.authRequired && <div className="bottom-container--right">
            <span className="doctor-copy">--Services Australia/DVA Copy--</span>
            <section className="prescriber-upper">
              <div className="container">
                <div className="prescriber__contact-upper">
                  <div className="prescriber__fullName">{`${prescriberData.prefix ? 'Dr' : ''} ${prescriberData.fullName}`}</div>
                  {/* Consider appending qualifications after prescriber name in this copy? */}
                  {formatPrescriberAddress(prescriberData)}
                  <div className="prescriber__addressLine2">
                    {`${prescriberData.suburb} ${prescriberData.state} ${prescriberData.postcode}`}
                  </div>
                </div>
                <div className="prescriber__contact-lower">
                  <div className="prescriber__phoneNumber">
                    {`Phone: ${formatPhoneNumber(prescriberData.phoneNumber)}`}
                  </div>
                  <div className="prescriber__prescriberNumber">Prescriber No. {prescriberData.prescriberNumber}</div>

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

                  {(patientData.medicareNumber.trim() !== "" && patientData.medicareRefNumber !== "") &&
                    <div className="patient__medicareNumber">
                      {formatMedicareNumber(patientData.medicareNumber, patientData.medicareRefNumber)}
                    </div>
                  }

                </div>
              </div>
            </section>

            <section className="miscellaneous">
              <div className="date">{formatDate(miscData.date)}</div>
              {drugData.authRequired && <div className="authNumbers">
                <div className="authRxNo">{`Authority Script No: ${miscData.authRxNumber}`}</div>
              </div>}
            </section>

            <section className="medication">
              <div className="medication__activeIngredient">
                {formatDrug(drugData)}
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


          </div>}
        </div>

        <div className="RxTemplate__btns">
          <div className="primary-btns">
            <Button classLabel="btn-print" handleClick={() => { window.print() }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24" fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="32" /><rect x="128" y="240" width="256" height="208" rx="24.32" ry="24.32" fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="32" /><path d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24" fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="32" /><circle cx="392" cy="184" r="24" fill="#ffffff" /></svg>
              Print
            </Button>
            <Button classLabel="btn-finish" handleClick={saveRx}>
              {isPending ? (
                <Dots color="white" />
              ) : (<>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M380.93 57.37A32 32 0 00358.3 48H94.22A46.21 46.21 0 0048 94.22v323.56A46.21 46.21 0 0094.22 464h323.56A46.36 46.36 0 00464 417.78V153.7a32 32 0 00-9.37-22.63zM256 416a64 64 0 1164-64 63.92 63.92 0 01-64 64zm48-224H112a16 16 0 01-16-16v-64a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-16 16z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg>
                Save and Finish
              </>)}
            </Button>
          </div>

          <Link className="btn-secondary button" to="/form">Make changes</Link>
        </div>
      </> : <h3 className="RxTemplate__subtitle">We couldn't find any prescription data, please write a new prescription and try again.</h3>}

    </StyledRxTemplate>
  );
};

export default RxTemplate;
