import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledScripts } from './Scripts.styled';
import ScriptsTable from './ScriptsTable';
import Spinner from '../utils/Spinner/Spinner';
import { useEffect } from 'react';
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PageHeader from '../utils/PageHeader/PageHeader';
import { useUserData } from '../../hooks/useUserData';
import { useConditionalToast } from '../../hooks/useConditionalToast';
import { Helmet } from 'react-helmet-async';
import testScripts from './testScripts';

const Scripts = ({ setToast, setPage }) => {
  const { user } = useAuthContext();
  // Note the scripts array here is an unusual morph of JSON and normal arrays, and the reverse function will not work unless you first stringify then parse it
  const { documents: scripts, isPending, error } = useUserData(user.uid, 'scripts');

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('scripts');
  }, [setPage]);


  // This will fire an error alert if the fetch fails. 
  useConditionalToast(error, setToast, 'An error occurred while loading scripts');

  return (<>
    <Helmet>
      <title>Scripts · OptomRx</title>
      <meta name="description" content="View all the prescriptions you have written. Saved scripts contain all medication details for that script, but no patient data." />
      <link rel="canonical" href="/dashboard" />
    </Helmet>
    <ContentContainer earlyPadding={true}>
      <StyledScripts className="Scripts" >
        <PageHeader title="Scripts" description="Review previous prescriptions you have written" />

        <div className="Scripts__container">
          {isPending && <Spinner />}

          {/* Present an empty table if scripts can't be fetched, or none exist (below) */}
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

          {scripts && <>
            {scripts.length > 0 ? (
              <>
                {/* <ScriptsTable scripts={JSON.parse(JSON.stringify(scripts)).reverse()} scriptsPerPage={15} /> */}
                <ScriptsTable scripts={testScripts} scriptsPerPage={15} />
              </>
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
          </>}
        </div>

      </StyledScripts>
    </ContentContainer>
  </>)
}

export default Scripts;

