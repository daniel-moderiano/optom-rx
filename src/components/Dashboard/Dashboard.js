import { StyledDashboard } from './Dashboard.styled';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import Favourites from '../Favourites/Favourites';
import { useEffect, useState } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import Modal from '../utils/Modal/Modal';
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PageHeader from '../utils/PageHeader/PageHeader';
import { Helmet } from 'react-helmet-async';

const Dashboard = ({ setToast, setPage, firstSignIn, setFirstSignIn, resetData }) => {
  const { user } =  useAuthContext();
  const [showModal, setShowModal] = useState(false);

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('home');
  }, [setPage]);


  useEffect(() => {
    // If the user has just signed up for an account and hits the home page for the first time, display the email modal
    if (firstSignIn) {
      setShowModal(true);
      setFirstSignIn(false);
      // Not relevant to display error or success to user, they will be able to manually resend if no email is received. The manual resend has success/error UI handlers. Hence no .then or .catch is included
      sendEmailVerification(user);
    }
  }, [firstSignIn, setFirstSignIn, user])

 
  return (<>
    <Helmet>
      <title>Dashboard</title>
      <meta name="description" content="Choose a favourite script to quickly write a prescription, or start fresh with a blank prescription."/>
      <link rel="canonical" href="/dashboard" />
    </Helmet>
    <ContentContainer earlyPadding={true}>
      <StyledDashboard className="Dashboard" >
        <PageHeader title={`Welcome, ${user.displayName}`} description="Create a new script or prescribe one of your favourites"/>

          <Link className="Dashboard__link btn-primary" to='/new-prescription' onClick={resetData} state={ { newRx: true } }>New prescription</Link>
          
          <div className="Favourites">
            <Favourites user={user} setToast={setToast}/>
          </div>

        {showModal && (<Modal title="Verify your email" closeModal={() => setShowModal(false)} type="emailVerify"/>)}
      </StyledDashboard>
    </ContentContainer>
  </>)
}

export default Dashboard;

