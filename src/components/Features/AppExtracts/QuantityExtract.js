import { StyledQuantityExtract } from "./AppExtracts.styled";
import Alert from "../../utils/Alert/Alert";

const QuantityExtract = () => {
  return (
    <StyledQuantityExtract aria-hidden={true}>
      <div className="Input">
        <div className="container">
          <span className="label-text">Quantity</span>
            <div className="input">
              1
              <svg xmlns="http://www.w3.org/2000/svg" className="tickCircle hide" viewBox="0 0 512 512">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="#fff" stroke="#0a7e00" strokeMiterlimit="10" strokeWidth="25"/>
              <path fill="#fff" stroke="#0a7e00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="27" d="M352 176L217.6 336 160 272"/>
              </svg>
            </div>
          <Alert type="neutral" message="Maximum allowed quantity under the PBS is 1"/>
        </div>
      </div>

      <div className="Input repeatsInput">
        <div className="container">
          <span className="label-text">Repeats</span>
            <div className="input">
              5
              <svg xmlns="http://www.w3.org/2000/svg" className="tickCircle hide" viewBox="0 0 512 512">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="#fff" stroke="#0a7e00" strokeMiterlimit="10" strokeWidth="25"/>
              <path fill="#fff" stroke="#0a7e00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="27" d="M352 176L217.6 336 160 272"/>
              </svg>
            </div>
          <Alert type="neutral" message="Maximum allowed repeats under the PBS is 5"/>
        </div>
      </div>


    </StyledQuantityExtract>
  );
};

export default QuantityExtract;
