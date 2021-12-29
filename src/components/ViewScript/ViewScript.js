import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { StyledViewScript } from "./ViewScript.styled.";

const ViewScript = ({ setToast }) => {
  const { id } = useParams();
  const [scriptData, setScriptData] = useState(null);

  // Fetch the script data using the supplied ID
  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getDoc(doc(db, 'scripts', id));
      setScriptData(docSnap.data());
    };

    fetchData();
  }, [id])

  let navigate = useNavigate();

  const [providerData, setProviderData] = useState({
    prefix: false,
    fullName: '',
    qualifications: '',
    practiceName: '',
    streetAddress: '',
    subpremise: '',
    suburb: '',
    postcode: '',
    state: '',
    phoneNumber: '',
    prescriberNumber: '',
    default: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProviderData((prevData) => ({
      ...prevData, 
      [name]: value 
    }));
  };

  const toggleBooleanState = (setData, data, boolToChange) => {
    let newState = true;
    if (data[boolToChange]) {
      newState = false;
    }
    setData((prevData) => ({
      ...prevData,
      [boolToChange]: newState,
    }));
  };

  const handleSubmit = async () => {
    // Add default
    await updateDoc(doc(db, 'providers', id), {
      ...providerData,
    });

    // Either a toast message here, or navigate back to Providers page and use an app-wide Toast alert system to show a toast on navigation back
    setToast((prevData) => ({
      ...prevData,
      visible: true,
      type: 'success',
      message: 'Saved changes!'
    }));

    navigate('/providers');
  };

  const cancelEdit = () => {
    navigate('/providers');
  }

  useEffect(() => {
    const docRef = doc(db, 'providers', id);

    const fetchProvider = async () => {
      const docSnap = await getDoc(docRef);
      setProviderData((prevData) => ({
        ...prevData,
        ...docSnap.data(),
      }));
    };

    fetchProvider();
  }, [id]);

  // Create a more UI friendly summary of drug name +/- brand
  const formatDrug = (script) => {
    const capitalised = script.activeIngredient[0].toUpperCase() + script.activeIngredient.substring(1);
    // Brand name only
    if (script.brandOnly) {
      if (!capitalised.includes('eye')) {
        if (capitalised.includes('spray')) {
          return `${script.brandName} ${capitalised.substr(capitalised.indexOf('spray'), 5)}`;
        } else {
          return script.brandName;
        }
      } else {
        return `${script.brandName} ${capitalised.substr(capitalised.indexOf('eye'))}`;
      }
    }    
    // Brand name NOT to be included
    if (!script.includeBrand) {
      return capitalised;
    }
    // Brand name included in addition to active ingredient
    if (!capitalised.includes('eye')) {
      if (capitalised.includes('spray')) {
        return `${capitalised.replace('spray', `(${script.brandName}) spray`)}`;
      } else {
        return `${capitalised.replace(',', ` (${script.brandName}),`)}`;
      }
    } else {
      return `${capitalised.replace('eye', `(${script.brandName}) eye`)}`;
    }
  };

  const formatDate = (date) => {
    return `${date.substring(8)}/${date.substring(5, 7)}/${date.substring(0, 4)}`;
  };

  return (
    <StyledViewScript>
      <h2 className="EditProvider__title">Script #{id}</h2>
      <p className="EditProvider__description">Patient details are not saved in OptomRx. Only medication details will be available for review.</p>
      <div className="container">
        {scriptData && 
          <div className="Script__info">
            <div className="Script__medication">
              <div className="Script__title Script__title--medication">Medication details</div>
              <div className="Script__info--section Script__drug">{formatDrug(scriptData)}</div>
              {scriptData.compounded && <div className="Script__info--section Script__compounded">To be compounded</div>}
              <div className="Script__info--section Script__substitute">{`${scriptData.substitutePermitted ? 'Brand substitution allowed' : 'Brand substitution not permitted'}`}</div>
              <div className="Script__info--section Script__dosage">Dosage: {scriptData.dosage}</div>
              <div className="Script__info--section Script__quantity">Quantity: {scriptData.quantity}</div>
                <div className="Script__info--section Script__repeats">Repeats: {scriptData.repeats}</div>
            </div>

            <div className="Script__pbs">
              <div className="Script__title Script__title--pbs">PBS details</div>
              <div className="Script__info--section Script__pbs">{`${scriptData.pbsRx ? 'PBS prescription' : 'Non-PBS prescription'}`}</div>

              {scriptData.authRequired && <div className="Script__authority">
                {/* <div className="Script__authReq">Authority prescription</div> */}
                <div className="Script__info--section Script__authCode">Authority code: {scriptData.authCode}</div>
                <div className="Script__info--section Script__authNum">Authority Rx No: {scriptData.authRxNumber}</div>
                <div className="Script__info--section Script__indications">TODO: manual notes/indications</div>
              </div>}
            </div>
          
            <div className="Script__other">
            <div className="Script__title Script__title--other">Other details</div>
            <div className="Script__info--section Script__date">Date prescribed: {formatDate(scriptData.date)}</div>
          
            
            </div>
          
          </div>
        }
        
        <div className="ProviderForm__btns">
          <Link to="/scripts" className="cancel-btn ProviderForm__btn">Go back</Link>
          <Link to="/scripts" className="submit-btn ProviderForm__btn">Re-prescribe</Link>
        </div>

      </div>
      
    </StyledViewScript>
  )
}

export default ViewScript
