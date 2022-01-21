import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledScripts } from './Scripts.styled';
import { useScripts } from '../../hooks/useScripts';
import Table from './Table';
import Spinner from '../utils/Spinner/Spinner';
import { useEffect } from 'react';
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PageHeader from '../utils/PageHeader/PageHeader';

const Scripts = ({ setToast, setPage }) => {
  const { user } = useAuthContext();
  // const { scripts, isPending, error } = useScripts(user.uid);
  const { scripts, isPending, error } = useScripts(user.uid);

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('scripts');
  }, [setPage])

  // This effect will fire an error alert if the fetch fails. 
  useEffect(() => {
    if (error) {
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'An error occurred while loading scripts'
      }));
    }
  }, [error, setToast])

  return (
    <ContentContainer earlyPadding={true}>
      <StyledScripts className="Scripts" >
        <PageHeader title="Scripts" description="Review previous prescriptions you have written" />
        
        <div className="Scripts__container">
          {isPending && <Spinner />}

          {error &&
            <table className="table table-none">
                <thead className="tableRowHeader">
                  <tr>
                    <th className="tableHeader">Script ID</th>
                    <th className="tableHeader">Medication</th>
                    <th className="tableHeader">Date prescribed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tableRowItems">
                    <td className="tableCellNone" colSpan="3">No scripts written yet</td>
                  </tr>
                </tbody>
              </table>
          }

          {scripts && <div className='table-container'>
            {scripts.length > 0 ? (
              <Table data={scripts} rowsPerPage={15}/>            
            ) : (
              <table className="table table-none">
                <thead className="tableRowHeader">
                  <tr>
                    <th className="tableHeader">Script ID</th>
                    <th className="tableHeader">Medication</th>
                    <th className="tableHeader">Date prescribed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tableRowItems">
                    <td className="tableCellNone" colSpan="3">No scripts written yet</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>}  
        </div>
        
      </StyledScripts>
    </ContentContainer>
  )
}

export default Scripts;
