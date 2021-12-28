import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledScripts } from './Scripts.styled';
import { useScripts } from '../../hooks/useScripts';
import Table from './Table';

const Scripts = () => {
  const { user } = useAuthContext();
  const { scripts } = useScripts(user.uid);

  return (
    <StyledScripts className="Scripts">
      <h2 className="Scripts__title">Scripts</h2>
      <p className="Scripts__description">View all prescriptions you have written. Click the script ID for more information.</p>
      
      {scripts && 
        <div className="Scripts__container">
          {scripts.length > 0 ? (
            <Table data={scripts} rowsPerPage={5}/>
          ) : (
            <div className='Scripts__none'>No scripts written yet</div>
          )}
          
        </div>
      }  
    </StyledScripts>
  )
}

export default Scripts;
