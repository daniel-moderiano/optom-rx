import { StyledHome } from './Home.styled';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

const Home = () => {
  const { user, resetData } =  useAuthContext();
  
  return (
    <StyledHome className="Home">
      <h2 className="Home__title">Welcome, {user.displayName}</h2>
      <div className="Home__welcome">Select an option to get started</div>
      <div className="Home__links">
        <Link onClick={resetData} className="Home__link Home__link--create" to='/form' state={ { newRx: true } }>Create prescription</Link>
        <Link className="Home__link Home__link--providers" to="/providers">View providers</Link>
      </div>
    </StyledHome>
  )
}

export default Home

