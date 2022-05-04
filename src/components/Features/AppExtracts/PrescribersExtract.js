import { StyledPrescribersExtract } from "./AppExtracts.styled";
import PageHeader from "../../utils/PageHeader/PageHeader";

const PrescribersExtract = () => {
  return (
    <StyledPrescribersExtract aria-hidden={true}>

        <div className="sc-hGPBjI cwdyBG Prescribers">
          <PageHeader title="Prescribers" description="Add and modify prescriber details for your prescriptions"/>

          <span className="Prescribers__add-btn">Add new prescriber</span>

          <div className="Prescribers__container">
            <table className="table data-table" aria-describedby="Prescribers__description">
              <thead className="tableRowHeader">
                <tr role="row">
                  <th role="columnheader" className="tableHeader" scope="col">Name</th>
                  <th role="columnheader" className="tableHeader" scope="col">Location</th>
                  <th role="columnheader" className="tableHeader actions-header" scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="tableRowItems">
                  <td role="cell" data-title="Name" className="tableCell">Andrew Practitioner</td>
                  <td role="cell" data-title="Location" className="tableCell">Royal Adelaide Hospital, Adelaide</td>
                  <td role="cell" data-title="Actions" className="tableCell actions-cell">
                    <div className="btns">
                      <div className="non-default">
                        <div className="table__action edit">Edit</div>
                        <div className="table__action delete">Delete</div>
                      </div>
                      <div className="table__action default">Set as default</div>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="tableRowItems middleRow">
                  <td role="cell" data-title="Name" className="tableCell">Andrew Practitioner</td>
                  <td role="cell" data-title="Location" className="tableCell">All Eyes Optometry, Adelaide</td>
                  <td role="cell" data-title="Actions" className="tableCell actions-cell">
                    <div className="btns">
                      <div className="non-default">
                        <div className="table__action edit">Edit</div>
                        <div className="table__action delete">Delete</div>
                      </div>
                      <div className="table__action default default--selected">Remove default</div>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="tableRowItems">
                  <td role="cell" data-title="Name" className="tableCell">Andrew Practitioner</td>
                  <td role="cell" data-title="Location" className="tableCell">Flinders Health2Go, Bedford Park</td>
                  <td role="cell" data-title="Actions" className="tableCell actions-cell">
                    <div className="btns">
                      <div className="non-default">
                        <div className="table__action edit">Edit</div>
                        <div className="table__action delete">Delete</div>
                      </div>
                      <div className="table__action default">Set as default</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="sc-dlVxhl ciziMa TableFooter">
              <div className="arrow arrow-left">«</div>
              <div className="button activeButton">1</div>
              <div className="arrow arrow-right">»</div>
            </div>
          </div>
        </div>

    </StyledPrescribersExtract>
  );
};

export default PrescribersExtract;
