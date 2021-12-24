import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import ProviderForm from "../ProviderForm/ProviderForm";
import { StyledEditProvider } from "./EditProvider.styled";
import Fieldset from "../utils/Fieldset/Fieldset";

const EditProvider = ({ googleLoaded, setToast }) => {
  const { id } = useParams();

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

  return (
    <StyledEditProvider>
      <h2 className="EditProvider__title">Edit provider</h2>
      <p className="EditProvider__description">Change any details and then save changes</p>
      <Fieldset className="edit-provider-form" legend="Provider Details">
        <ProviderForm 
          googleLoaded={googleLoaded} 
          standalone={true} 
          data={providerData}
          setData={setProviderData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCancel={cancelEdit}
          toggleBooleanState={() => toggleBooleanState(setProviderData, providerData, 'prefix')}
          submitBtn="Add provider"
          cancelBtn="Cancel"
        />
      </Fieldset>
    </StyledEditProvider>
  )
}

export default EditProvider
