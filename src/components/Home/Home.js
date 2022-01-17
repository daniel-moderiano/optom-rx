import { StyledHome } from './Home.styled';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import Favourites from '../Favourites/Favourites';
import { useEffect, useState } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import Modal from '../utils/Modal/Modal';
import emailIcon from '../../assets/email.svg';

const Home = ({ setToast, setPage, firstSignIn, setFirstSignIn }) => {
  const { user } =  useAuthContext();
  const [showModal, setShowModal] = useState(false);

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('home');
  }, [setPage]);

  useEffect(() => {
    console.log('Call sign in effect');
    // If the user has just signed up for an account and hits the home page for the first time, display the email modal
    if (firstSignIn) {
      setShowModal(true);
      setFirstSignIn(false);
    }
  }, [firstSignIn, setFirstSignIn])

  const resendEmailVerification = async () => {
    try {
      await sendEmailVerification(user);
      console.log('Email sent');
    } catch (error) {
      console.log(error.code);
    }
  }

 
  return (<>
    <StyledHome className="Home">

      <h2 className="Home__title">Welcome, {user.displayName}</h2>
      <div className="Home__welcome">Select an option to get started</div>
      <div className="Home__links">
        <Link className="Home__link Home__link--create" to='/form' state={ { newRx: true } }>Create prescription</Link>
        <Link className="Home__link Home__link--prescribers" to="/providers">View prescribers</Link>
      </div>

      <div className="Favourites">
      <Favourites setToast={setToast}/>
    </div>

    {showModal && <Modal title="Verify your email" closeModal={() => setShowModal(false)}>
  
  <div className="verify-container">
    <p className="verify-message">An email verification link has been sent to your email address. Follow the link to verify your email and activate all features.</p>
    <div className="img-container">
      <img className="email-icon" src={emailIcon} alt="Email icon" />
    </div>
  </div>

  

      <div className="btns">
        {/* <button type="button" className="ok-btn" onClick={() => setShowModal(false)}>OK</button> */}
        <button type="button" className="resend" onClick={resendEmailVerification}>Didn't get the mail? Send it again.</button>
      </div>
 

</Modal>}
      
    </StyledHome>

    
    </>
  )
}

export default Home

