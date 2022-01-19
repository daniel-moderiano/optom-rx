import styled from "styled-components";

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 3.5rem 5.5rem;
  max-width: 1140px;
  width: 100%;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: var(--small-shadow);

  /* Early padding is suitable for those pages containing tables */
  @media (max-width: ${props => props.earlyPadding ? '800px' : '590px'}) {
    padding: 3rem 3.5rem;
  }

  /* This is the typical breakpoint for tables to transition to a card display */
  @media (max-width: 550px) {
    padding: 3rem 2.5rem;
  }

  /* For smaller screens (portrait phones) */
  @media (max-width: 400px) {
    padding: 3rem 1.5rem;
  }

`

export { StyledContentContainer }