import { StyledHome } from './Home.styled';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import Favourites from '../Favourites/Favourites';
import { useEffect, useState } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import Modal from '../utils/Modal/Modal';

const Home = ({ setToast, setPage, firstSignIn, setFirstSignIn }) => {
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
      sendEmailVerification(user)
        .then(() => {
          console.log('Email sent');
        })
        .catch((err) => {
          // Not relevant to display error or success to user, they will be able to manually resend if no email is received. The manual resend has success/error UI handlers
          console.log(err);
        })  
    }
  }, [firstSignIn, setFirstSignIn, user])

  const resendEmailVerification = async () => {
    try {
      await sendEmailVerification(user);
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Email sent successfully'
      }));
    } catch (error) {
      console.log(error);
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'An error occurred while sending verification email'
      }));
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
      {/* <img className="email-icon" src={emailIcon} alt="Email icon" /> */}

<svg className="email-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 64 64" aria-describedby='email-svg-title'>
     <title id='email-svg-title'>Email icon</title>
    <g id="Layer_1">
      <g>
        <circle className="st0" cx="32" cy="32" r="32"/>
      </g>
      <g>
        <g className="st1">
          <path className="st2" d="M52,44c0,2.2-1.8,4-4,4H16c-2.2,0-4-1.8-4-4V24c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4V44z"/>
        </g>
        <g>
          <path className="st3" d="M52,42c0,2.2-1.8,4-4,4H16c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4V42z"/>
        </g>
        <g className="st1">
          <g>
            <path className="st2" d="M35.5,30.2c-1.9-2.1-5.1-2.1-7,0L13,43.2c-0.2,0.2-0.3,0.4-0.5,0.6c0.7,1.3,2,2.2,3.4,2.2h32
              c1.5,0,2.7-0.9,3.4-2.2c-0.1-0.2-0.3-0.4-0.5-0.6L35.5,30.2z"/>
          </g>
        </g>
        <g>
          <g>
            <path className="st3" d="M35.5,32c-1.9-1.9-5.1-1.9-7,0L13,43.5c-0.2,0.2-0.3,0.3-0.5,0.5c0.7,1.2,2,1.9,3.4,1.9h32
              c1.5,0,2.7-0.8,3.4-1.9c-0.1-0.2-0.3-0.3-0.5-0.5L35.5,32z"/>
          </g>
        </g>
        <g className="st1">
          <g>
            <path className="st2" d="M12.6,20.2c0.7-1.3,2-2.2,3.4-2.2h32c1.5,0,2.7,0.9,3.4,2.2c-0.1,0.2-0.3,0.4-0.5,0.6l-15.4,13
              c-1.9,2.1-5.1,2.1-7,0L12.6,20.2z"/>
          </g>
        </g>
        <g>
          <g>
            <path className="st4" d="M28.5,32c1.9,1.9,5.1,1.9,7,0L51,20.5c0.2-0.2,0.3-0.3,0.5-0.5c-0.7-1.2-2-1.9-3.4-1.9H16
              c-1.5,0-2.7,0.8-3.4,1.9c0.1,0.2,0.3,0.3,0.5,0.5L28.5,32z"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Layer_2">
    </g>
    </svg>

    </div>
  </div>

  

      <div className="modal-btns">
        {/* <button type="button" className="ok-btn" onClick={() => setShowModal(false)}>OK</button> */}
        <button type="button" className="resend" onClick={resendEmailVerification}>Didn't get the mail? Send it again.</button>
      </div>
 

</Modal>}
      
    </StyledHome>

    
    </>
  )
}

export default Home

