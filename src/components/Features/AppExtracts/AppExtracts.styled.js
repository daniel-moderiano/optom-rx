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

export { StyledIndicationsExtract, StyledQuantityExtract, StyledAuthorityExtract }