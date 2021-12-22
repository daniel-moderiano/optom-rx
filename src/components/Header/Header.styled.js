import styled from "styled-components";

const StyledHeader = styled.header`
  color: #FFFFFF;
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 4rem;

  h1 {
    margin: 0;
    padding: 0 0.25rem 0.2rem 1rem;
    /* font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif; */
    font-family: var(--font-title);
    font-weight: normal;

    a {
      text-decoration: none;
      color: #FFFFFF;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    height: 100%;

    img {
      /* width: 40px; */
      height: 40px;
      margin-top: 0.5rem;
      flex-shrink: 0;
    }
  }

  @media print {
    display: none;
  }

  /* Can also include nav styling here */
`

export { StyledHeader }