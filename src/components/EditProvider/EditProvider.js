import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import ProviderForm from "../ProviderForm/ProviderForm";

const EditProvider = ({ googleLoaded }) => {
  const { id } = useParams();

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
    })
    console.log('Edited provider');
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
        toggleBooleanState={() => toggleBooleanState(setProviderData, providerData, 'prefix')}
        hideForm={() => console.log('Cancel')}
      />
    </div>
  )
}

export default EditProvider
