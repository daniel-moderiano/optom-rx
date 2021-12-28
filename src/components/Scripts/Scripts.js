
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import FormField from "../FormField/FormField";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import { StyledScripts } from './Scripts.styled';
import { useScripts } from '../../hooks/useScripts';
import { useEffect } from 'react';

const Scripts = () => {
  const { user } = useAuthContext();
  console.log(user.uid);
  const { scripts } = useScripts(user.uid);

  useEffect(() => {
    console.log(scripts);
  }, [scripts])


  return (
    <StyledScripts className="Providers">
      <h2 className="Providers__title">Scripts</h2>
      <p className="Providers__description">Use this section to view prescriptions you've written and save favourites for quick prescribing</p>
      
    
      
    </StyledScripts>
  )
}

export default Scripts;
