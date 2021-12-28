import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledScripts } from './Scripts.styled';
import { useScripts } from '../../hooks/useScripts';
import { Link } from 'react-router-dom';
import Table from './Table';

const Scripts = () => {
  const { user } = useAuthContext();
  const { scripts } = useScripts(user.uid);

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

  return (
    <StyledScripts className="Scripts">
      <h2 className="Scripts__title">Scripts</h2>
      <p className="Scripts__description">View all prescriptions you have written. Click the script ID for more information.</p>
{/* 
      <div className="indications">
        <button className="indications__btn collapsible" onClick={(event) => {
          document.querySelector(`[data-id='selected']`).classList.toggle('expand');
        }}>Rx<span className="icon up">
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>
      </span></button>
        <div className='indications__content' data-id="selected">Expanded</div>    
      </div> */}
      
      {scripts && 
        <div className="Scripts__container list">
          {scripts.length > 0 ? 
            (<ul className='Scripts__list'>
              {scripts.map(script => (
                <li key={script.scriptID} className="Scripts__list-item">
                  <div className="Scripts__ID"><Link to={`/scripts/${script.scriptID}`}>{script.scriptID}</Link></div>
                  <div className="Scripts_drug">{formatDrug(script)}</div>
                  {/* <div className="Scripts__dosage">{script.dosage}</div>
                  <div className="Scripts__pbs">{script.pbsRx ? 'PBS' : 'Non-PBS'}</div> */}
                  
                  <div className="Scripts__date">{script.date}</div>
                  {/* <div className="Scripts__quantity">{script.quantity}</div>
                  <div className="Scripts__repeats">{script.repeats}</div> */}
                  {/* <div className="Scripts__info"><button>Show more</button></div> */}
                </li>
              ))}
            </ul>)
            : 
            (<div className='Scripts__none'>No prescriptions written yet</div>    )
          }
        </div>
      }



      {scripts && 

        

        <div className="Scripts__container">
        <Table data={scripts} rowsPerPage={3}/>
        {/* Render providers using map function in combination with HTML table */}
        <table className="Scripts__table">
          <thead>
            <tr className="table__header-row">
                <th className="table__header id-header">Script ID</th>
                <th className="table__header medication-header">Medication</th>
                {/* <th className="table__header">Prescriber Number</th> */}
                <th className="table__header date-header">Date prescribed</th>
            </tr>
          </thead>
          {scripts.length > 0 ? 
            (<tbody>
              {scripts.map(script => (
                <tr key={script.scriptID} className="table__data-row">
                  <td className="table__cell name-cell"><Link to={`/scripts/${script.scriptID}`}>{script.scriptID}</Link></td>
                  <td className="table__cell">{formatDrug(script)}</td>
                  <td className="table__cell">{script.date}</td>
                </tr>
              ))}
            </tbody>)
            : (<tbody>
                <tr>
                <td colSpan="3" className='Providers__none-msg'>No providers added yet</td>
                </tr>
            </tbody>
            
            )
          }
          
        </table>
        </div>
      }  
    </StyledScripts>
  )
}

export default Scripts;
