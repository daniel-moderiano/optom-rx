import { StyledIndications } from "./Indications.styled";
import { useEffect, useState } from "react";

const Indications = ({ indicationsData }) => {
  const [expandIndication, setExpandIndication] = useState(false);
  const [indicationHTML, setIndicationHTML] = useState('');
  
  // When the indication data for a drug changes in the Rx form, convert the raw PBS text describing indications for a medication, format it to UI freindly format, and update the indication HTML state with the formatted result
  useEffect(() => {
    let indicationStr = indicationsData;
    // One or two medications use the term 'treatment criteria' instead of 'clinical criteria'. There is no real world implications of the difference, so clinical criteria is set as the standard here
    if (indicationStr.includes('Treatment criteria')) {
      indicationStr = indicationStr.replace('Treatment criteria', 'Clinical criteria');
    }

    // Ciclosporin has an absurdly complex indication criteria. Do not even bother with this, link to the PBS site instead. Look for the unique 'at least 30%' requirements only present for this drug (at this time).
    if (indicationStr.includes('at least 30%')) {
      const html = `<div className="Indication">
        <div className="Indication__main">This medication has complex restrictions, please review the <a target="_blank" href="https://www.pbs.gov.au/medicine/item/12663L">PBS listing</a></div>
      </div>`;
      setIndicationHTML(html);
      return;
    }

    // If the term 'criteria' exists in the string, it means there is an indication + further constraints. Format accordingly
    if (indicationStr.includes('Clinical criteria')) {
      const mainIndication = indicationStr.split('Clinical criteria')[0].trim();
      const splitIndication = indicationStr.split('Clinical criteria');
      const specificCriteria = splitIndication[1];

      // Format the initial clinical criteria point, always appearing before an 'AND' in the string
      let preAnd = specificCriteria.split('AND')[0];
      preAnd = preAnd.replace(':', '').replace('*', '').trim();
      preAnd = preAnd.slice(0, preAnd.length - 1);

      // Format dot points that exist after an 'AND' in the string, if they exist
      if (specificCriteria.split('AND').length > 1) {
        const postAnd = specificCriteria.split('AND')[1];
        const dotPoints = postAnd.split('* ').filter((point) => point !== " ");

        const mapPoints = () => {
          const ul = document.createElement('ul');
          dotPoints.forEach((point) => {
            const li = document.createElement('li');
            li.classList.add('indication__list-item');
            li.textContent = point;
            ul.appendChild(li);
          });
          return ul.outerHTML;
        }
        const html = `
          <div class="Indication">
            <div class="Indication__main">${mainIndication}</div>
            <div class="Indication__extra">
              <div class="Indication__clinical">Clinical criteria:</div>
                <ul class="Indication__list">
                  <li class="Indication__list-item">${preAnd}</li>
                </ul>
              <div class="Indication__and">AND</div>
              ${mapPoints()}
            </div>     
          </div>`;
        setIndicationHTML(html);
      } else {
        // Ignore the above if there is no 'AND' with additional points
        const html = `<div class="Indication">
          <div class="Indication__main">${mainIndication}</div>
          <div class="Indication__extra">
          <div class="Indication__clinical">Clinical criteria:</div>
            <ul class="Indication__list">
              <li class="Indication__list-item">${preAnd}</li>
            </ul>
          </div>
        </div>`;
        setIndicationHTML(html);
      }
    } else {
      // If 'criteria' doesn't appear in the string, it must only be a single indication with no constraints
      const html = `<div className="Indication">
        <div className="Indication__main">${indicationStr}</div>
      </div>`;
      setIndicationHTML(html);
    }
  }, [indicationsData]);

  return (
    <StyledIndications className="Indications">
      <div className="Indications__btn collapsible" onClick={() => setExpandIndication((prevState) => !prevState)}>
        <button type="button" onClick={(event) => {
            event.stopPropagation();
            setExpandIndication((prevState) => !prevState);
          }}
        >Restricted benefit:</button>
      </div>
      <div data-testid="indications-content" className={`Indications__content ${expandIndication ? 'expand' : 'collapse'}`} dangerouslySetInnerHTML={{ __html: indicationHTML }}></div>
    </StyledIndications>
  );
};

export default Indications;
