import { useState } from "react";
import FormField from "../FormField/FormField";

const RxForm = () => {

  const [data, setData] = useState({
    drug: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  return (
    <form className="rxform">
      <FormField 
        fieldType="text" 
        name="drug" 
        label="Medication" 
        placeholder={"Enter medication name"} 
        value={data.drug} 
        onChange={handleChange} 
      />
    </form>
  )
}

export default RxForm
