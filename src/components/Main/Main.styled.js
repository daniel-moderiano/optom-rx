import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  background-color: #F3F4F7;
  width: 100%;
  padding: 0 0.5rem;

  /* Critical for RxTemplate to render correctly */
  @media print {
    display: block;
    background-color: #fff;
    width: 100%;
    height: auto;
  }
`

export { StyledMain }