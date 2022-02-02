import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  width: 100%;
  padding: 0 0.5rem;

  &.home-main {
    color: #263238;
    /* background-color: #fff; */
    width: 100%;
    padding: 0;
  }

  /* Critical for RxTemplate to render correctly */
  @media print {
    display: block;
    background-color: #fff;
    width: 100%;
    height: auto;
  }
`

export { StyledMain }