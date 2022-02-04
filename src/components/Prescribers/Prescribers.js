
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledPrescribers } from './Prescribers.styled';
import { Link } from "react-router-dom";
import PrescribersTable from './PrescribersTable';
import Spinner from '../utils/Spinner/Spinner';
import { useEffect } from 'react';
import ContentContainer from '../utils/ContentContainer/ContentContainer'
import PageHeader from '../utils/PageHeader/PageHeader';
import { useConditionalToast } from '../../hooks/useConditionalToast';
import { Helmet } from 'react-helmet-async';

const Prescribers = ({ setToast, setPage }) => {
  const { user } = useAuthContext();
  // This should be called using the curernt user ID to query the collection
  const { documents: prescribers, isPending, error } = useCollection('prescribers', ['uid', '==', user.uid]);

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('prescribers');
  }, [setPage])

  // Fire an error alert if the fetch fails. 
  useConditionalToast(error, setToast, 'An error occurred while fetching prescribers');

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error])

  return (<>
    <Helmet>
      <title>Prescribers · OptomRx</title>
      <meta name="description" content="Add, edit, or delete prescriber profiles. Use these profiles as needed when you create new scripts."/>
      <link rel="canonical" href="/prescribers" />
    </Helmet>
    <ContentContainer earlyPadding={true}>
      <StyledPrescribers className="Prescribers">
        <PageHeader title="Prescribers" description="Add and modify prescriber details for your prescriptions"/>

        <Link className="Prescribers__add-btn btn-primary" to={`/add-prescriber`}>Add new prescriber</Link> 

        <div className="Prescribers__container">
          {isPending && <Spinner />}

          {prescribers && <>
            {prescribers.length > 0 ? (
              <PrescribersTable data={prescribers} rowsPerPage={10} setToast={setToast} user={user} />
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
                    <td data-title="Prescribers" className="tableCellNone" colSpan="3">No prescribers added yet</td>
                  </tr>
                </tbody>
              </table>
            )}
          </>}
        </div>
      </StyledPrescribers>
    </ContentContainer>
  </>)
}

export default Prescribers;
