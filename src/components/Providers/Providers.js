
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledProviders } from "./Providers.styled";
import { Link } from "react-router-dom";
import TableProviders from './TableProviders';
import Spinner from '../utils/Spinner/Spinner';
import { useEffect } from 'react';


const Providers = ({ setToast }) => {
  const { user } = useAuthContext();
  // This should be called using the curernt user ID to query the collection
  const { documents: providers, isPending, error } = useCollection('providers', ['uid', '==', user.uid]);

  // This effect will fire an error alert if the fetch fails. 
  useEffect(() => {
    if (error) {
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'No internet connection detected'
      }));
    }
  }, [error, setToast]);

  return (
    <StyledProviders className="Providers">
      <h2 className="Providers__title">Providers</h2>
      <p className="Providers__description">Use this section to add provider details that can be used in your prescriptions</p>
  
      <Link className="Providers__add-btn" to={`/add-provider`}>Add new provider</Link> 

      <div className="Providers__container">
        {isPending && <Spinner />}

        {/* {error && <table className="table">
                <thead className="tableRowHeader">
                  <tr>
                    <th className="tableHeader">Name</th>
                    <th className="tableHeader">Location</th>
                    <th className="tableHeader actions-header">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tableRowItems">
                    <td className="tableCellNone" colSpan="3">No providers added yet</td>
                  </tr>
                </tbody>
              </table>} */}

        {providers && <div className='table__container'>
          <div className="Providers__list">
            {providers.length > 0 ? (
              <TableProviders data={providers} rowsPerPage={10} setToast={setToast} />
            ) : (
              <table className="table">
                <thead className="tableRowHeader">
                  <tr>
                    <th className="tableHeader">Name</th>
                    <th className="tableHeader">Location</th>
                    <th className="tableHeader actions-header">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tableRowItems">
                    <td className="tableCellNone" colSpan="3">No providers added yet</td>
                  </tr>
                </tbody>
              </table>
            )}
                
          </div>  
        </div>}

      </div>
    </StyledProviders>
  )
}

export default Providers;
