import data from '../../pbs/pbsData.json'
import { useEffect, useState } from "react";

const DrugAutocomplete = () => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    let matches = data.filter((drug) => {
      const regex = new RegExp(`^${searchText}`, 'i');
      return drug['brand-name'].match(regex) || drug['tpuu-or-mpp-pt'].match(regex);
    });

    if (searchText.length === 0) {
      matches = [];
    }

    console.log(matches);
  }, [searchText]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <div>
      <label htmlFor="drugAutocomplete">
        <input 
          type="text" 
          id="drugAutocomplete"
          onChange={handleChange}
          value={searchText}
        />
      </label>
    </div>
  );
};

export default DrugAutocomplete;

