import { StyledHome } from './Home.styled';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <StyledHome className="Home">
      <h2 className="Home__title">Home page</h2>
      <div className="Home__welcome">Welcome to OptomRx</div>
      <div className="Home__links">
        <Link className="Home__link" to="/form">Create new prescription</Link>
        <Link className="Home__link" to="/login">Login</Link>
      </div>
      
    </StyledHome>
  )
}

export default Home
