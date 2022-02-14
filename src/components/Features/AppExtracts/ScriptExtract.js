import { StyledScriptExtract } from "./AppExtracts.styled";
import PageHeader from "../../utils/PageHeader/PageHeader";

const ScriptExtract = () => {
  return (
    <StyledScriptExtract aria-hidden={true}>
      <div class="sc-giYglK kquWbv Script">
        <PageHeader title="Script #00001234" />

        <div class="Script__info">
          <div class="Script__medication">
            <div class="Script__title Script__title--medication">Medication details</div>
            <div class="Script__info--section Script__drug">Latanoprost 0.005% (Xalatan) eye drops, 2.5 mL</div>
            <div class="Script__info--section Script__substitute">Brand substitution allowed</div>
            <div class="Script__info--section Script__dosage">Dosage: Once nightly both eyes</div>
            <div class="Script__info--section Script__quantity">Quantity: 1</div>
            <div class="Script__info--section Script__repeats">Repeats: 5</div>
          </div>

          <div class="Script__pbs">
            <div class="Script__title Script__title--pbs">PBS details</div>
            <div class="Script__info--section Script__pbs">PBS prescription</div>
            <div class="Script__info--section Script__date">Prescribed: Feb 13, 2022, 3:15 PM</div>
          </div>
        </div>

        <div class="PrescriberForm__btns">
          <div class="re-prescribe">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon arrow-icon" viewBox="0 0 512 512"><path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" fill="#ffffff" stroke="currentColor" strokeLinejoin="round" strokeWidth="10"></path></svg>
            <span>Re-prescribe</span>
          </div>
          <div class="sc-iCfMLu iLkslw fav-btn">
            <svg class="icon star-icon" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="23px" viewBox="0 0 24 24" width="22px" fill="#ffffff"><g><path d="M0,0h24v24H0V0z" fill="none"></path><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"></path></g>
            </svg>
            <span>Add to favourites</span>
          </div>
        </div>
      </div>
    </StyledScriptExtract>
  );
};

export default ScriptExtract;
