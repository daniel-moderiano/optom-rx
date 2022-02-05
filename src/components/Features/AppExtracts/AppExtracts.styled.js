import styled from "styled-components";

const StyledIndicationsExtract = styled.div`
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
`

export { StyledIndicationsExtract }