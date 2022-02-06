import { StyledDashboardExtract } from "./AppExtracts.styled";
import PageHeader from "../../utils/PageHeader/PageHeader";

const DashboardExtract = () => {
  return (
    <StyledDashboardExtract>
      <div class="sc-hGPBjI cwdyBG Dashboard">
        <PageHeader title="Welcome, Practitioner" description="Create a new script or prescribe one of your favourites" />

        <div class="Dashboard__link">New prescription</div>

        <div class="Favourites">
            <h2 class="Favourites__title">Favourites</h2>

            <ul class="fav-list">
              <li class="first-list-item">
                <span>Script name</span>
                <span class="actions-span">Actions</span>
              </li>

              <li class="fav-item first-fav">
                <div class="item-name">
                  <span class="cell-title">Script name</span>
                  <span class="item-content">Hylo-Fresh PRN (PBS script)</span>
                </div>
                <div class="actions">
                  <span class="cell-title">Actions</span>
                  <div class="btns">
                    <div class="prescribe">Prescribe</div>
                    <div class="delete-btn">Delete</div>
                  </div>
                </div>
              </li>
              <li class="fav-item">
                <div class="item-name">
                  <span class="cell-title">Script name</span>
                  <span class="item-content">FML 4x/day (PBS script)</span>
                </div>
                <div class="actions">
                  <span class="cell-title">Actions</span>
                  <div class="btns">
                    <div class="prescribe">Prescribe</div>
                    <div class="delete-btn">Delete</div>
                  </div>
                </div>
              </li>
              <li class="fav-item">
                <div class="item-name">
                  <span class="cell-title">Script name</span>
                  <span class="item-content">Atropine 0.05% (myopia control)</span>
                </div>
                <div class="actions">
                  <span class="cell-title">Actions</span>
                  <div class="btns">
                    <div class="prescribe">Prescribe</div>
                    <div class="delete-btn">Delete</div>
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
