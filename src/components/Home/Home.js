import { StyledHome } from './Home.styled';
import { Link } from 'react-router-dom';
import { useNumbers } from '../../hooks/useNumbers';
import { useState } from 'react';

const Home = () => {
  const location = {
    pathname: '/form',
    state: { newRx: true }
  }

  const [{ scriptNo, authRxNo, isError, isLoading }, fetchNumbers] = useNumbers();
  const [numState, setNumState] = useState({ script: '', auth: '' })

  return (
    <StyledHome className="Home">
      <h2 className="Home__title">Home page</h2>
      <div className="Home__welcome">Welcome to OptomRx</div>
      <div className="Home__links">
        <Link className="Home__link" to={location}>Create new prescription</Link>
        <Link className="Home__link" to="/login">Login</Link>
      </div>

      <button 
        onClick={() => {
          fetchNumbers().then(() => {setNumState((prevState) => ({ ...prevState, script: scriptNo, auth: authRxNo }))})}}>Fetch
      </button>

    </StyledHome>
  )
}

export default Home

