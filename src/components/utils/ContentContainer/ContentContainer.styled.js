import styled from "styled-components";

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 3rem;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 3rem 5.5rem;
  max-width: 1140px;
  width: 100%;
  /* border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: var(--small-shadow); */

  
  @media (max-width: ${props => props.earlyPadding ? '800px' : '590px'}) {
    padding: 3rem 3.5rem;
  }

  @media (max-width: 550px) {
    padding: 3rem 2.5rem;
  }
`

export { StyledContentContainer }