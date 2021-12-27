import { StyledHome } from './Home.styled';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

const Home = () => {
  // TODO: Clear all existing data in App.js when new Rx button is clicked
  const { user } =  useAuthContext();
  return (
    <StyledHome className="Home">
      <h2 className="Home__title">Welcome, {user.displayName}</h2>
      <div className="Home__welcome">Select an option to get started</div>
      <div className="Home__links">
        <Link className="Home__link Home__link--create" to='/form' state={ { newRx: true } }>Create prescription</Link>
        <Link className="Home__link Home__link--providers" to="/providers">View providers</Link>
      </div>

    </StyledHome>
  )
}

export default Home

