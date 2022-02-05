import { StyledIndicationsExtract } from "./AppExtracts.styled";
import Alert from "../../utils/Alert/Alert";
import checkbox from '../../../assets/checkbox.png'

const IndicationsExtract = () => {
  return (
    <StyledIndicationsExtract aria-hidden={true}>
      <div className="Input">
        <div className="container">
          <img src={checkbox} alt="" className="checkbox" />
          <span className="label-text">PBS prescription</span>
        </div>
        <Alert type="neutral" message="This item is available on the PBS (authority required)"/>
      </div>

      <div className="Indications">
        <div class="Indications__btn collapsible">
            Restricted benefit:
          </div>
          <div class="Indications__content expand">
            <div class="Indication">
              <div class="Indication__main">Severe dry eye syndrome</div>
              <div class="Indication__extra">
              <div class="Indication__clinical">Clinical criteria:</div>
              <ul class="Indication__list">
                <li class="Indication__list-item">Patient must be sensitive to preservatives in multi-dose eye drops</li>
              </ul>
            </div>
            </div>
          </div>
      </div>
    </StyledIndicationsExtract>
  );
};

export default IndicationsExtract;
