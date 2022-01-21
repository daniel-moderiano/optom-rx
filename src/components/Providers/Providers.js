
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledProviders } from "./Providers.styled";
import { Link } from "react-router-dom";
import TableProviders from './TableProviders';
import Spinner from '../utils/Spinner/Spinner';
import { useEffect } from 'react';
import ContentContainer from '../utils/ContentContainer/ContentContainer'
import PageHeader from '../utils/PageHeader/PageHeader';


const Providers = ({ setToast, setPage }) => {
  const { user } = useAuthContext();
  // This should be called using the curernt user ID to query the collection
  const { documents: providers, isPending, error } = useCollection('providers', ['uid', '==', user.uid]);

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('prescribers');
  }, [setPage])

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
    <ContentContainer earlyPadding={true}>
      <StyledProviders className="Providers">
        <PageHeader title="Prescribers" description="Use this section to add provider details that can be used in your prescriptions"/>

        <Link className="Providers__add-btn btn-primary" to={`/add-provider`}>Add new provider</Link> 

        <div className="Providers__container">
          {isPending && <Spinner />}

          {providers && <div className='table__container'>
            <div className="Providers__list">
              {providers.length > 0 ? (
                <TableProviders data={providers} rowsPerPage={10} setToast={setToast} />
              ) : (
                <table className="table table-none">
                  <thead className="tableRowHeader">
                    <tr>
                      <th className="tableHeader">Name</th>
                      <th className="tableHeader">Location</th>
                      <th className="tableHeader actions-header">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tableRowItems">
                      <td data-title="Providers" className="tableCellNone" colSpan="3">No providers added yet</td>
                    </tr>
                  </tbody>
                </table>
              )}
                  
            </div>  
          </div>}

        </div>
      </StyledProviders>
    </ContentContainer>
  )
}

export default Providers;
