import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.user || props.url === '/login' || props.url === '/signup') ? 'var(--background)' : '#fff'};
  width: 100%;
  padding: ${props => props.user ? '0 0.5rem' : '0'};

  /* Critical for RxTemplate to render correctly */
  @media print {
    display: block;
    background-color: #fff;
    width: 100%;
    height: auto;
  }
`

export { StyledMain }