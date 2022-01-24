import Spinner from "../utils/Spinner/Spinner";
import Select from 'react-select';
import { Link } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";

const PrescriberDetails = ({ setData }) => {
  const { user } = useAuthContext();
  const { documents: providers, isPending } = useCollection('providers', ['uid', '==', user.uid]);
  const [selectOptions, setSelectOptions] = useState([]);
  const [chosenProvider, setChosenProvider] = useState("");

  // Used to fill the React Select component options using providers fetched from firestore. Will also set the selected option to the default provider if one exists
  useEffect(() => {
    // Do not run unless a providers collection exists (i.e. has been fetched from firebase)
    if (providers) {
      let providerSelectOptions = [];

      providers.forEach((provider, index) => {
        // Add the provider to the select option list
        providerSelectOptions.push({
          value: provider.id,
          label: `${provider.fullName} (${(provider.practiceName !== "") ? provider.practiceName + `, ${provider.suburb}` : provider.suburb})`,
        });

        // Set the first provider as selected. If a default exists, this will be replaced
        if (index === 0) {
          setChosenProvider(providerSelectOptions[0]);
          setData({
            ...provider,
          })
        }

        // Check for a default provider
        if (provider.default) {
          // Update the select element accordingly
          setChosenProvider(providerSelectOptions[index]);
          // Also set state to provider data to ensure the form is pre-filled. Do NOT use previous data. Overwrite.
          setData({
            ...provider,
          })
        };
      });
      setSelectOptions(providerSelectOptions);
    }
  }, [providers, setData]);

  // A handle change function specifically for the select element. Sets both the input state and providerData based on selection
  const handleSelectChange = (event) => {
    setChosenProvider(event);
    // Use the unique document ID to grab the provider from the fetched providers array
    const providerId = event.value;
    // Note the provider is returned from array.filter as an array, hence destructuring
    const [provider] = providers.filter((provider) => provider.id === providerId);
    setData({
      ...provider,
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

      {providers && (<>
        {(providers.length > 0) ? (
          <>
            <label id="react-select-id">Select prescriber
              <Select
                options={selectOptions}
                isSearchable={false}
                value={chosenProvider}
                onChange={handleSelectChange}
                styles={customStyles}
                placeholder="Select prescriber..."
                id="react-select"
                aria-labelledby="react-select-id"
              />
            </label>
          </>
        ) : (
          <Link className="btn-primary add-new-btn" to="/add-provider">Add new provider</Link>
        )}
      </>)}
    </>   
  );
};

export default PrescriberDetails;
