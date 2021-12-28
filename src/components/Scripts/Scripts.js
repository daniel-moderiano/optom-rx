import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledScripts } from './Scripts.styled';
import { useScripts } from '../../hooks/useScripts';
import { useEffect } from 'react';

const Scripts = () => {
  const { user } = useAuthContext();
  const { scripts } = useScripts(user.uid);
  console.log(scripts);

  return (
    <StyledScripts className="Providers">
      <h2 className="Providers__title">Scripts</h2>
      <p className="Providers__description">Use this section to view prescriptions you've written and save favourites for quick prescribing</p>
      
      {scripts && 
        <div className="Providers__list">
          {scripts.length > 0 ? 
            (<ul>
              {scripts.map(script => (
                <li key={script.scriptID} className="table__data-row">
                  <div className="table__cell name-cell">{script.activeIngredient}</div>
                  <div className="table__cell">{script.brandName}</div>
                </li>
              ))}
            </ul>)
            : 
            <div colSpan="4" className='Providers__none-msg'>No providers added yet</div>    
  
          }
          </div>}
      
    </StyledScripts>
  )
}

export default Scripts;
