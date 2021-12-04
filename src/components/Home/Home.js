import { StyledHome } from './Home.styled';
import { Link } from 'react-router-dom';
import { useNumbers } from '../../hooks/useNumbers';

const Home = () => {
  const { scriptNo, authRxNo, isError, isLoading } = useNumbers();
  console.log('Re-rendering');

  return (
    <StyledHome className="Home">
      <h2 className="Home__title">Home page</h2>
      <div className="Home__welcome">Welcome to OptomRx</div>
      <div className="Home__links">
        <Link className="Home__link" to="/form">Create new prescription</Link>
        <Link className="Home__link" to="/login">Login</Link>
      </div>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
        
      ) : (
        <>
          <div>Script No: {scriptNo}</div>
          <div>Auth No: {authRxNo}</div>
        </>
      )}
      
    </StyledHome>
  )
}

export default Home

