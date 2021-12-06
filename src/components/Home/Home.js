import { StyledHome } from './Home.styled';
import { Link } from 'react-router-dom';

const Home = () => {
  // TODO: Clear all existing data in App.js when new Rx button is clicked

  return (
    <StyledHome className="Home">
      <h2 className="Home__title">Home page</h2>
      <div className="Home__welcome">Welcome to OptomRx</div>
      <div className="Home__links">
        <Link className="Home__link" to='/form' state={ { newRx: true } }>Create new prescription</Link>
        <Link className="Home__link" to="/login">Login</Link>
      </div>

    </StyledHome>
  )
}

export default Home

