import Spinner from "../utils/Spinner/Spinner";
import Select from 'react-select';
import { Link } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";

// Created to improve parent RxForm readability only
const PrescriberDetails = ({ setData }) => {
  const { user } = useAuthContext();
  const { documents: prescribers, isPending } = useCollection('prescribers', ['uid', '==', user.uid]);
  const [selectOptions, setSelectOptions] = useState([]);
  const [chosenPrescriber, setChosenPrescriber] = useState("");

  // Used to fill the React Select component options using prescribers fetched from firestore. Will also set the selected option to the default prescriber if one exists
  useEffect(() => {
    // Do not run unless a prescribers collection exists (i.e. has been fetched from firebase)
    if (prescribers) {
      let prescriberSelectOptions = [];

      prescribers.forEach((prescriber, index) => {
        // Add the prescriber to the select option list
        prescriberSelectOptions.push({
          value: prescriber.id,
          label: `${prescriber.fullName} (${(prescriber.practiceName !== "") ? prescriber.practiceName + `, ${prescriber.suburb}` : prescriber.suburb})`,
        });

        // Set the first prescriber as selected. If a default exists, this will be replaced
        if (index === 0) {
          setChosenPrescriber(prescriberSelectOptions[0]);
          setData({
            ...prescriber,
          })
        }

        // Check for a default prescriber
        if (prescriber.default) {
          // Update the select element accordingly
          setChosenPrescriber(prescriberSelectOptions[index]);
          // Also set state to prescriber data to ensure the form is pre-filled. Do NOT use previous data. Overwrite.
          setData({
            ...prescriber,
          })
        };
      });
      setSelectOptions(prescriberSelectOptions);
    }
  }, [prescribers, setData]);

  // A handle change function specifically for the select element. Sets both the input state and prescriberData based on selection
  const handleSelectChange = (event) => {
    setChosenPrescriber(event);
    // Use the unique document ID to grab the prescriber from the fetched prescribers array
    const prescriberId = event.value;
    // Note the prescriber is returned from array.filter as an array, hence destructuring
    const [prescriber] = prescribers.filter((prescriber) => prescriber.id === prescriberId);
    setData({
      ...prescriber,
    })
  }

  // Sets the CSS styles for React Select component
  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? '1px solid rgb(144, 147, 150)' : '1px solid rgb(144, 147, 150)',
      boxShadow: state.isFocused ? '0' : '0',
      outline: state.isFocused ? "2px solid #104362" : 'none',
      outlineOffset: state.isFocused ? "2px" : 'none',
      width: '26rem',
      padding: '0.12rem 0 0.11rem 0.85rem',
      borderRadius: '4px',
      fontSize: "1rem",
      marginTop: '0.5rem',
      marginBottom: '0.5rem',

      '&:hover': {
        borderColor: state.isFocused ? '#104362' : 'rgb(178, 182, 185)',
        cursor: 'pointer'
      },

      "@media (max-width: 590px)": {
        width: "100%",
        maxWidth: "26rem",
        marginRight: "1.5rem",
      },
    }),

    menu: (base, state) => ({
      ...base,
      maxWidth: "26rem",
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      paddingLeft: '0',
    }),
  }

  return (<>
      {isPending && <Spinner />}

      {prescribers && (<>
        {(prescribers.length > 0) ? (
          <>
            <label id="react-select-id">Select prescriber
              <Select
                options={selectOptions}
                isSearchable={false}
                value={chosenPrescriber}
                onChange={handleSelectChange}
                styles={customStyles}
                placeholder="Select prescriber..."
                id="react-select"
                aria-labelledby="react-select-id"
              />
            </label>
          </>
        ) : (
          <Link className="btn-primary add-new-btn" to="/add-prescriber">Add new prescriber</Link>
        )}
      </>)}
    </>   
  );
};

export default PrescriberDetails;
