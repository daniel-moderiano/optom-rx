import styled from "styled-components";

const StyledHomeFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .HomeFooter__container {
    margin: 0 3rem;
    max-width: 1140px;
    border-top: 1px solid #dee1e4;
    padding: 4rem 0;
    width: 100%;

    .footer-secondary-navigation {
      display: flex;

      a {
        padding: 0 1rem;
      }
    }
  }

  .logo {
    width: 6rem;

    .cls-1 {
      fill: var(--primary-color);
    }

    svg {
      pointer-events: none;
    }
  }



`

export { StyledHomeFooter }