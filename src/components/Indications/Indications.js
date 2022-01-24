import { StyledIndications } from "./Indications.styled";
import { useState } from "react";

const Indications = ({ indicationHTML }) => {
  const [expandIndication, setExpandIndication] = useState(false);

  return (
    <StyledIndications className="Indications">
      <div className="Indications__btn collapsible" onClick={() => setExpandIndication((prevState) => !prevState)}>
        <button type="button" onClick={(event) => {
            event.stopPropagation();
            setExpandIndication((prevState) => !prevState);
          }}
        >Restricted benefit:</button>
      </div>
      <div className={`Indications__content ${expandIndication ? 'expand' : 'collapse'}`} dangerouslySetInnerHTML={{ __html: indicationHTML }}></div>
    </StyledIndications>
  );
};

export default Indications;
