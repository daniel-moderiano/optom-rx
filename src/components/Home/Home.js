import { StyledHome } from './Home.styled';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import Favourites from '../Favourites/Favourites';
import { useEffect, useState } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import Modal from '../utils/Modal/Modal';
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PageHeader from '../utils/PageHeader/PageHeader';

const Home = ({ setToast, setPage, firstSignIn, setFirstSignIn, resetData }) => {
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

 
  return (
    <ContentContainer earlyPadding={true}>
      <StyledHome className="Home" >
        <PageHeader title={`Welcome, ${user.displayName}`} description="Create a new script or prescribe one of your favourites"/>

          <Link className="Home__link btn-primary" to='/form' onClick={resetData} state={ { newRx: true } }>New prescription</Link>
          
          <div className="Favourites">
            <Favourites user={user} setToast={setToast}/>
          </div>

        {showModal && (<Modal title="Verify your email" closeModal={() => setShowModal(false)} type="emailVerify"/>)}
      </StyledHome>
    </ContentContainer>
  )
}

export default Home

