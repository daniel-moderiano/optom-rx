import { StyledAuthorityExtract } from "./AppExtracts.styled";
import Alert from "../../utils/Alert/Alert";
import checkbox from '../../../assets/checkbox.png';

const AuthorityExtract = () => {
  return (
    <StyledAuthorityExtract aria-hidden={true}>

      <div className="Input">
        <div className="container-checkbox">
          <img src={checkbox} alt="" className="checkbox" />
          <span className="label-text">Authority required</span>
        </div>
        <Alert type="neutral" message="This item requires an authority prescription"/>
      </div>

      <div className="AuthNumber">Authority script number: 00028866</div>

       <div className="Input">
        <div className="container">
          <span className="label-text">Authority code</span>
            <div className="input">
              4105
            </div>
          <Alert type="success" message="This medication is available using the streamline code above"/>
        </div>
      </div>
    </StyledAuthorityExtract>
  );
};

export default AuthorityExtract;
