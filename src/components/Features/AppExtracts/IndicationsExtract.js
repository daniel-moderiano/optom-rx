import { StyledIndicationsExtract } from "./AppExtracts.styled";

const IndicationsExtract = () => {
  return (
    <StyledIndicationsExtract class="Indications">
      <div class="Indications__btn collapsible">
        {/* <button type="button">Restricted benefit:</button> */}
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
    </StyledIndicationsExtract>
  );
};

export default IndicationsExtract;
