import styled from "styled-components";

const StyledIndicationsExtract = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  padding: 2rem 2rem 2rem 2rem;

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
  }
`

const StyledQuantityExtract = styled.div`
  .Input {
    margin-bottom: 1.25rem;
    width: 26rem;

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
  }
}
`

const StyledAuthorityExtract = styled.div`
  .Input {
    margin-bottom: 1.25rem;
    width: 26rem;

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
  }

  .AuthNumber {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
`

const StyledPrescribersExtract = styled.div`
  text-align: left;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  padding: 2.5rem 3rem 2rem 3rem;

  .Prescribers__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .Spinner {
      margin-top: 4rem;
    }
  }

  .Prescribers__add-btn {
    max-width: 175px;
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
  } 
`

export { StyledIndicationsExtract, StyledQuantityExtract, StyledAuthorityExtract, StyledPrescribersExtract }