import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import ProviderForm from "../ProviderForm/ProviderForm";

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
    <div>
      Provider - { id }
      <Link to="/providers">Go back</Link>
      <ProviderForm 
        googleLoaded={googleLoaded} 
        standalone={true} 
        data={providerData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={cancelEdit}
        toggleBooleanState={() => toggleBooleanState(setProviderData, providerData, 'prefix')}
        hideForm={() => console.log('Cancel')}
      />
    </div>
  )
}

export default EditProvider
