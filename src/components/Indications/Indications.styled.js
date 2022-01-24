import styled from "styled-components";

const StyledIndications = styled.div`
  margin-bottom: 1.5rem;
  width: 26rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  transform-origin: top;

  /* Style the button that is used to open and close the collapsible content */
  .collapsible {
    font-size: 0.9rem;
    background-color: #F4F5F6;
    padding: 0.6rem 0.75rem 0.75rem 1rem;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-family: var(--font-stack-segoe);
    border-top: none;
    color: #48515B;
    border-radius: 6px 6px 0 0;
    cursor: pointer;

    &:hover {
      background-color: #E8EAED;
    }
    
    &:focus {
      outline: 2px solid #a360ac;
      outline-offset: 1px;
    }

    button {
      cursor: pointer;
      font-size: 0.9rem;
      background-color: #F4F5F6;
      color: #48515B;
      font-family: var(--font-stack-segoe);
      border: none;
      margin: 0;
      padding: 0;
      background-color: transparent;
      border-radius: 2px;

      &:focus {
        outline: 2px solid #104362;
        outline-offset: 1px;
      }

      &:focus:not(:focus-visible) {
        outline: none
      }

      &:focus-visible {
        outline: 2px solid #104362;
        outline-offset: 2px;
      }
    }
  }

  /* Concerns the indication text itself from the PBS (dot points and main criteria) */
  .Indications__content {
    overflow: hidden;
    padding: 1rem 1rem 1.25rem 1rem;
    font-size: 0.9rem;
    color: #48515B;

    a {
      color: var(--neutral);
    }
    
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

    &.expand {
      display: block;
    }

    &.collapse {
      display: none;
    }
  }

  @media (max-width: 590px) {
    max-width: 26rem;
    width: 100%;
  }
`

export { StyledIndications }