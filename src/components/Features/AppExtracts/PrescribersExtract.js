import { StyledPrescribersExtract } from "./AppExtracts.styled";
import PageHeader from "../../utils/PageHeader/PageHeader";

const PrescribersExtract = () => {
  return (
    <StyledPrescribersExtract aria-hidden={true}>

        <div class="sc-hGPBjI cwdyBG Prescribers">
          <PageHeader title="Prescribers" description="Add and modify prescriber details for your prescriptions"/>

          <span class="Prescribers__add-btn">Add new prescriber</span>

          <div class="Prescribers__container">
            <table class="table data-table" aria-describedby="Prescribers__description">
              <thead class="tableRowHeader">
                <tr role="row">
                  <th role="columnheader" class="tableHeader" scope="col">Name</th>
                  <th role="columnheader" class="tableHeader" scope="col">Location</th>
                  <th role="columnheader" class="tableHeader actions-header" scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" class="tableRowItems">
                  <td role="cell" data-title="Name" class="tableCell">Andrew Practitioner</td>
                  <td role="cell" data-title="Location" class="tableCell">Royal Adelaide Hospital, Adelaide</td>
                  <td role="cell" data-title="Actions" class="tableCell actions-cell">
                    <div class="btns">
                      <div class="non-default">
                        <div class="table__action edit">Edit</div>
                        <div class="table__action delete">Delete</div>
                      </div>
                      <div class="table__action default">Set as default</div>
                    </div>
                  </td>
                </tr>
                <tr role="row" class="tableRowItems middleRow">
                  <td role="cell" data-title="Name" class="tableCell">Andrew Practitioner</td>
                  <td role="cell" data-title="Location" class="tableCell">All Eyes Optometry, Adelaide</td>
                  <td role="cell" data-title="Actions" class="tableCell actions-cell">
                    <div class="btns">
                      <div class="non-default">
                        <div class="table__action edit">Edit</div>
                        <div class="table__action delete">Delete</div>
                      </div>
                      <div class="table__action default default--selected">Remove default</div>
                    </div>
                  </td>
                </tr>
                <tr role="row" class="tableRowItems">
                  <td role="cell" data-title="Name" class="tableCell">Andrew Practitioner</td>
                  <td role="cell" data-title="Location" class="tableCell">Flinders Health toGo, Bedford Park</td>
                  <td role="cell" data-title="Actions" class="tableCell actions-cell">
                    <div class="btns">
                      <div class="non-default">
                        <div class="table__action edit">Edit</div>
                        <div class="table__action delete">Delete</div>
                      </div>
                      <div class="table__action default">Set as default</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="sc-dlVxhl ciziMa TableFooter">
              <div class="arrow arrow-left">«</div>
              <div class="button activeButton">1</div>
              <div class="arrow arrow-right">»</div>
            </div>
          </div>
        </div>

    </StyledPrescribersExtract>
  );
};

export default PrescribersExtract;
