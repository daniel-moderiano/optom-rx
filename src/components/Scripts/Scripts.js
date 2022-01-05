import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledScripts } from './Scripts.styled';
import { useScripts } from '../../hooks/useScripts';
import Table from './Table';
import Spinner from '../utils/Spinner/Spinner';
import { useEffect } from 'react';

const Scripts = ({ setToast }) => {
  const { user } = useAuthContext();
  const { scripts, isPending, error } = useScripts(user.uid);

  // This effect will fire an error alert if the fetch fails. 
  // TODO: make error toast
  useEffect(() => {
    if (error) {
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Failed to fetch'
      }));
    }
  }, [error, setToast])

  return (
    <StyledScripts className="Scripts">
      <h2 className="Scripts__title">Scripts</h2>
      <p className="Scripts__description">View all prescriptions you have written. Click the script ID for more information.</p>

      {isPending && <Spinner />}
      {error && <div>{error}</div>}
      
      {scripts && 
        <div className="Scripts__container">
          {scripts.length > 0 ? (
            <Table data={scripts} rowsPerPage={20}/>
          ) : (
            <div className='Scripts__none'>No scripts written yet</div>
          )}
          
        </div>
      }  
    </StyledScripts>
  )
}

export default Scripts;
