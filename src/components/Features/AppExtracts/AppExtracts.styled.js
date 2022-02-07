import styled from "styled-components";

const StyledIndicationsExtract = styled.div`
  background-color: #ffffff;
  border-radius: 6px;

  .Indications {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #48515B;

    .collapsible {
      background-color: #F4F5F6;
      padding: 0.6rem 0.75rem 0.75rem 1rem;
      border-radius: 6px 6px 0 0;
    }

    .Indications__content {
      padding: 1rem 1rem 1.25rem 1rem;

      .Indication__extra {
        padding: 0.5rem 0 0 0;

        ul {
          list-style-type: square;
          padding-left: 1.5rem;
          margin: 0;

          li {
            padding: 0.75rem 0 0 0.2rem;
          }
        }

        .Indication__clinical, .Indication__and {
          font-weight: bold;
          padding: 0.75rem 0.5rem 0.25rem 0rem;
        }
      }
    }
  }

  .Input {
    margin-bottom: 1.25rem;
    position: relative;

    .container {
      display: flex;
      align-items: center;
    }

    .checkbox {
      width: 16px;
      margin-right: 0.5rem;
    }

    .label-text {
      font-size: 0.9rem;
      display: flex;
      flex-direction: column;
    }

    .alert-container {
      svg {
        margin-top: 0.15rem;
      }
    }
  }
`

const StyledQuantityExtract = styled.div`
  padding-bottom: 1rem;

  .Input {
    margin-top: 1.25rem;
    max-width: 18rem;

    .input {
      margin-top: 0.5rem;
      width: 5rem;
      position: relative;
      pointer-events: none;
      padding: 0.52rem 0.85rem 0.6rem 0.85rem;   
      border-radius: 4px;
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      background-color: #fff;
      transition: border-color 150ms ease-in-out;
      border: 1px solid var(--success);
    }

    .label-text {
      font-size: 0.9rem;
      display: flex;
      flex-direction: column;
    }

    .tickCircle {
      position: absolute;
      width: 22px;
      top: 0.27rem;
      right: 10px;
      background-color: #fff;
      padding: 0.45rem 0 0.4rem 0.3rem;
      animation-name: fadeIn;
      animation-timing-function: ease;
      animation-duration: 100ms;
    }

    .alert-container {
      width: 100%;
      min-width: 320px;
      svg {
        margin-top: 0.15rem;
      }
    }
  }

  @media (max-width: 350px) {
    margin-left: 0;
    .Input {
      .alert-container {
        width: 100%;
        min-width: 0;
      }
    }
  }
}
`

const StyledAuthorityExtract = styled.div`
  padding-bottom: 1rem;

  .Input {
    margin-top: 1.25rem;
    max-width: 26rem;

    .input {
      margin-top: 0.5rem;
      position: relative;
      pointer-events: none;
      padding: 0.52rem 0.85rem 0.6rem 0.85rem;   
      border-radius: 4px;
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      background-color: #fff;
      transition: border-color 150ms ease-in-out;
      border: 1px solid rgb(144, 147, 150);
    }

    .checkbox {
      width: 16px;
      margin-right: 0.5rem;
    }

    .container-checkbox {
      display: flex;
      align-items: center;
    }

    .label-text {
      font-size: 0.9rem;
      display: flex;
      flex-direction: column;
    }

    .alert-container {
      width: 100%;
      svg {
        margin-top: 0.15rem;
      }
    }
  }

  .AuthNumber {
    font-size: 0.9rem;
    margin-top: 1.25rem;
  }
`

const StyledPrescribersExtract = styled.div`
  text-align: left;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  .Prescribers {
    width: 100%;
    height: 100%;
    transform: scale(0.85);
    margin-bottom: -0.5rem;
  }

  .Prescribers__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .Prescribers__add-btn {
    max-width: 190px;
    margin-top: 1.85rem;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    box-sizing: border-box;
    padding: 0.45rem 16px 10px 16px;
    border-radius: 2px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.4rem;
    border: 1px solid transparent;
    background-color: var(--primary-color);
    color: rgb(255, 255, 255);
  }

  .table, .data-table {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-collapse: separate;
    border-radius: 6px;
    border-spacing: 0;
    -moz-border-radius:6px;
    margin-top: 2rem;

    .tableHeader {
      background-color: #F9FAFB;
      padding: 0.75rem 1.5rem;
      color: #48515B;
      font-size: 0.75rem;
      line-height: 0.85rem;
      text-align: left;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-weight: 600;
      border-top: none;
      border-bottom: 1px solid #D1D6DB;
    }

    .tableHeader:first-child {
      border-top-left-radius: 6px;
    }

    .tableHeader:last-child {
      border-top-right-radius: 6px;
    }

    .tableCell {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
      color: #48515B;
      border-bottom: 1px solid #D1D6DB;
      vertical-align: middle;

      .table__action {
        font-size: 0.85rem;
        font-family: var(--font-stack-segoe);
        box-sizing: border-box;
        text-decoration: none;
        padding: 2px 8px 5px 8px;
        border-radius: 2px;
        background-color: #fff;
        box-sizing: border-box;
        height: 1.75rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .default {
        color: var(--neutral);
        border: 0.1rem solid #4a7188; 
        width: 8rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .default--selected {
        width: 8rem;
        color: #fff;
        border: 0.1rem solid #1A6899; 
        background-color: #1A6899;
      }

      .edit {
        margin-right: 0.8rem;
        color: var(--btn-positive);
        border: 0.1rem solid var(--btn-positive); 
      }

      .delete {
        border: 0.1rem solid var(--btn-negative); 
        color: var(--btn-negative);
        margin-right: 0.8rem;
      }

      .btns {
        display: flex;

        .non-default {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    } 

    .tableRowItems:last-child {
      .tableCell {
        border-bottom: none;
      }
    }
  }

  .TableFooter {
    padding-top: 0.8rem;
    width: 100%;
    font-weight: 500;
    text-align: left;
    font-size: 16px;
    color: #2c3e50;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .arrow {
      background-color: #fff;
      border: none;
      padding-bottom: 0.1rem;
    }

    .arrow-right {
      margin-left: 0.75rem;
      border-radius: 2px;
    }

    .arrow-left {
      margin-right: 0.75rem;
      border-radius: 2px;
    }

    .button {
      font-family: var(--font-stack-segoe);
      font-size: 0.85rem;
      border: none;
      padding: 3px 10px 5px 10px;
      margin: 2px;
      border-radius: 8px;
    }

    .activeButton {
      color: white;
      background: #31776f;
    }

    .inactiveButton {
      color: #2c3e50;
      background: #ffffff;
    }

    /* Landscape phones/portrait tables */
    @media (max-width: 768px) { 
      justify-content: center;
    }
  }

  /* Landscape phones/portrait tables. Converts table to card view */
  @media(max-width: 700px) {
    .data-table {
      border: none;
      box-shadow: none;
      padding: 0;

      thead {
        left: -9999px;
        position: absolute;
        visibility: hidden;
      }

      tr {
        border-bottom: 0;
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
        border-collapse: separate;
        border-radius: 6px;
        border-spacing: 0;
        -moz-border-radius:6px;
      }

      .tableCell {
        position: relative;
        padding: 2.1rem 1rem 0.9rem 1rem;
        width: 100%;
        border: none;

        &:nth-of-type(3) {
          border-radius: 6px;
          width: 100%;
        }
      }

      .tableCell:before {
        position: absolute;
        top: 0;
        left: 0;
        content: attr(data-title);
        display: inline-block;
        height: 14px;
        width: calc(100% - 0.5rem);
        background-color: #F9FAFB;
        padding: 0.2rem 0rem 0.2rem 0.5rem;
        color: #48515B;
        font-size: 0.75rem;
        line-height: 0.85rem;
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        font-family: var(--font-stack-segoe-semibold);
        border-top: none;
      }

      .tableRowItems:last-child {
        border-radius: 6px;
        margin-bottom: 0;
      }
    }

    .TableFooter {
      justify-content: center;
    }
  }

  /* Portrait phones, specifically smaller screens */
  @media(max-width: 360px) {
    .btns {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .default, .default--selected {
        margin-top: 1rem;
      }

      .delete {
        margin: 0;
      }
    }

    .Prescribers {
      margin-top: -2.65rem;
      transform: scale(0.78);
    }
    .TableFooter {
      margin-bottom: -3.65rem;
    }
  } 

  @media(max-width: 700px) {
    .Prescribers {
      margin-top: -1rem;

      .middleRow {
        display: none;
      }
    }

    .TableFooter {
      margin-bottom: -1rem;
    }
  }

  @media(max-width: 450px) {
    .Prescribers {
      margin-top: -2.5rem;
      transform: scale(0.78);
    }
    .TableFooter {
      margin-bottom: -3.6rem;
    }
  }

`

const StyledDashboardExtract = styled.div`
  text-align: left;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.25rem;

  .Dashboard {
    width: 100%;
    height: 100%;
    transform: scale(0.85);
    position: relative;
  }

  .Dashboard__link {
    max-width: 175px;
    margin-top: 1.5rem;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    box-sizing: border-box;
    padding: 0.45rem 16px 10px 16px;
    border-radius: 2px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.4rem;
    border: 1px solid transparent;
    background-color: var(--primary-color);
    color: rgb(255, 255, 255);
  }

  .Favourites {
    margin-top: 2.5rem;
    margin-bottom: -0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    
    .Favourites__title {
      margin: 0;
      font-size: 1.6rem;
      font-weight: 300;
      color: var(--title-color);
      width: 100%;
      text-align: left;
    }
    
    .list-header {
      text-align: right;
      background-color: white;
      padding: 1rem 1.5rem 1rem 0rem;
      color: #48515B;
      line-height: 0.85rem;
      font-size: 1.6rem;
      font-weight: 300;
      color: var(--title-color);
      border-radius: 6px;
    }

    .fav-list {
      list-style: none;
      margin: 1rem 0 1rem 0;
      padding: 0;
      width: 100%;
      border-radius: 6px;
      -moz-border-radius:6px;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

      .fav-list:nth-child(even) {
        background-color: #F9FAFB;
      }

      .first-list-item {
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background-color: #F9FAFB;
        padding: 0.2rem 1.5rem 0.2rem 1rem;
        color: #48515B;
        font-size: 0.75rem;
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        font-family: var(--font-stack-segoe-semibold);

        .actions-span {
          width: 162px;
        }
      }

      .fav-item {
        padding: 0.6rem 1.5rem 0.6rem 1rem;
        font-size: 0.9rem;
        color: #48515B;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #D1D6DB;
        margin: 0;

        .cell-title {
          display: none;
        }

        .item-name {
          padding-right: 1rem;
        }

        .actions {
          display: flex;

          .btns {
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
        }

        .prescribe {
          margin-right: 1.5rem;
          padding: 6px 13px 8px 13px;
          height: auto;
          font-size: 0.9rem;
          box-sizing: border-box;
          font-family: var(--font-stack-segoe);
          box-sizing: border-box;
          border-radius: 2px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          background-color: var(--primary-color);
          color: rgb(255, 255, 255);
        }

        .delete-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          border: none;
          border-radius: 2px;
          font-size: 0.9rem;
          height: 1rem;
          margin-top: 0.1rem;
          padding-bottom: 0.2rem;
          color: var(--primary-color);
          font-family: var(--font-stack-segoe);
        }
      }
    }

    /* Landscape phone to portrait tablet - convert table to cards display */
    @media (max-width: 550px) { 
      align-items: flex-start;

      .Favourites__title {
        display: block;
        margin-top: 0.5rem;
      }
      margin-bottom: -4.5rem;

      .list-header {
          display: none;
        }
      
      .fav-list {
        border: none;
        box-shadow: none;

        .list-header {
          display: none;
        }

        .first-list-item {
          display: none;
        }

        .fav-item {
          padding: 0;
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
          border-radius: 6px;
          -moz-border-radius:6px;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
          border-top: none;

          &:hover {
            background-color: #fff;
          }

          .item-name {
            position: relative;
            width: 100%;
            border: none;
            padding: 0;

            .item-content {
              display: block;
              padding: 0.9rem 1rem 0.9rem 1rem;
            }
          }

          .cell-title {
            display: block;
            width: 100%;
            background-color: #F9FAFB;
            padding: 0.2rem 0rem 0.2rem 0.5rem;
            color: #48515B;
            font-size: 0.75rem;
            text-align: left;
            text-transform: uppercase;
            letter-spacing: 0.05rem;
            font-family: var(--font-stack-segoe-semibold);
            border-top: none;
          }

          .actions {
            position: relative;
            width: 100%;
            border: none;
            display: flex;
            flex-direction: column;

            .btns {
              padding: 1rem 1rem 0.9rem 1rem;
            }
          }
        }
      }
    }

    /* Landscape phones/portrait tables */
    @media (max-width: 768px) {
      .Favourites__title {
        font-size: 1.55rem;
      }
    }

    /* Portrait phones */
    @media (max-width: 475px) {
      .Favourites__title {
        font-size: 1.4rem;
      }

      .fav-list {
        .first-fav {
          display: none;
        }
      }
    }
  }

  @media (max-width: 550px) {
    .Dashboard {
      margin-top: -1.55rem;
    }
  }

  @media (max-width: 475px) {
    padding: 0;
    .Dashboard {
      transform: scale(0.8);
    }
  }
`

const StyledScriptExtract = styled.div`
  text-align: left;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  .Script {
    width: 100%;
    height: 100%;
    transform: scale(0.85);
    position: relative;

    .PrescriberForm__btns {
      margin: 2rem 0 0rem 0;
      display: flex;
      align-items: center;
      width: 100%;

      .fav-btn, .re-prescribe {
        box-sizing: border-box;
        font-size: 1rem;
        font-family: var(--font-stack-segoe);
        box-sizing: border-box;
        padding: 0.45rem 16px 10px 16px;
        border-radius: 2px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.4rem;
        border: 1px solid transparent;
        background-color: var(--primary-color);
        color: rgb(255, 255, 255);
      }

      span {
        padding: 8px 16px 10px 4px;
      }

      .icon {
        margin-right: 0.2rem;
        margin-left: 13px;
        width: 24px;
      }

      .star-icon {
        margin-top: -0.1rem;
        margin-left: 13px;
      }
      
      .re-prescribe {
        padding: 0;
        margin-right: 1.5rem;
      }
      
      .fav-btn {
        padding: 0;
      }
    }

    .Script__info {
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      
      .Script__title {
        background-color: #F9FAFB;
        padding: 0.75rem 0.75rem;
        font-size: 1.2rem;
        font-family: var(--font-stack-segoe);
        font-weight: 400;
        color: #48515B;
        border-top: none;
      }

      .Script__info--section {
        padding: 0.5rem 0.75rem;
        font-size: 0.9rem;
        color: #48515B;
      }

      .Script__medication, .Script__pbs {
        padding-bottom: 0.5rem;
      }
    }

    /* Portrait phones */
    @media (max-width: 470px) { 
      .PrescriberForm__btns {
        display: none;
        flex-direction: column;

        .re-prescribe, .fav-btn {
          width: 90%;
          min-width: 80px;
        }

        .re-prescribe {
          width: 90%;
          margin: 0 0 1.5rem 0;
        }
      }
    }
  }

  @media (max-width: 470px) { 
    .Script {
      margin-top: -0.25rem;

      .Script__info {
        .Script__pbs {
          padding-bottom: 0;
        }
      }
    }
  }
`

export { StyledIndicationsExtract, StyledQuantityExtract, StyledAuthorityExtract, StyledPrescribersExtract, StyledDashboardExtract, StyledScriptExtract }