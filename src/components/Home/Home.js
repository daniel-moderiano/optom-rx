import { StyledHome } from './Home.styled';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

// If implementing quick links, consider a list setup like below
// {scripts && 
//   <div className="Scripts__container list">
//     {scripts.length > 0 ? 
//       (<ul className='Scripts__list'>
//         {scripts.map(script => (
//           <li key={script.scriptID} className="Scripts__list-item">
//             <div className="Scripts__ID"><Link to={`/scripts/${script.scriptID}`}>{script.scriptID}</Link></div>
//             <div className="Scripts_drug">{formatDrug(script)}</div>
//             <div className="Scripts__date">{script.date}</div>
//           </li>
//         ))}
//       </ul>)
//       : 
//       (<div className='Scripts__none'>No prescriptions written yet</div>    )
//     }
//   </div>
// }

const Home = () => {
  // TODO: Clear all existing data in App.js when new Rx button is clicked
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

