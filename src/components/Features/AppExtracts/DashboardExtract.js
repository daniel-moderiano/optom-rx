import { StyledDashboardExtract } from "./AppExtracts.styled";
import PageHeader from "../../utils/PageHeader/PageHeader";

const DashboardExtract = () => {
  return (
    <StyledDashboardExtract aria-hidden={true}>
      <div className="sc-hGPBjI cwdyBG Dashboard">
        <PageHeader title="Welcome, Practitioner" description="Create a new script or prescribe one of your favourites" />

        <div className="Dashboard__link">New prescription</div>

        <div className="Favourites">
            <h2 className="Favourites__title">Favourites</h2>

            <ul className="fav-list">
              <li className="first-list-item">
                <span>Script name</span>
                <span className="actions-span">Actions</span>
              </li>

              <li className="fav-item first-fav">
                <div className="item-name">
                  <span className="cell-title">Script name</span>
                  <span className="item-content">Hylo-Fresh PRN (PBS script)</span>
                </div>
                <div className="actions">
                  <span className="cell-title">Actions</span>
                  <div className="btns">
                    <div className="prescribe">Prescribe</div>
                    <div className="delete-btn">Delete</div>
                  </div>
                </div>
              </li>
              <li className="fav-item">
                <div className="item-name">
                  <span className="cell-title">Script name</span>
                  <span className="item-content">FML 4x/day (PBS script)</span>
                </div>
                <div className="actions">
                  <span className="cell-title">Actions</span>
                  <div className="btns">
                    <div className="prescribe">Prescribe</div>
                    <div className="delete-btn">Delete</div>
                  </div>
                </div>
              </li>
              <li className="fav-item">
                <div className="item-name">
                  <span className="cell-title">Script name</span>
                  <span className="item-content">Atropine 0.05% (myopia control)</span>
                </div>
                <div className="actions">
                  <span className="cell-title">Actions</span>
                  <div className="btns">
                    <div className="prescribe">Prescribe</div>
                    <div className="delete-btn">Delete</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </StyledDashboardExtract >
  );
};

export default DashboardExtract;
