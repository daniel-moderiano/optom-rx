import styled from "styled-components";

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 3rem 0;
  background-color: #FFFFFF;
  /* box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%); */
  padding: 3rem 5.5rem;
  max-width: 1140px;
  width: 100%;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: var(--small-shadow);

  .Home__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    margin: 0 0 0.5rem 0;
    padding: 0;
  }
`

export { StyledSettings }