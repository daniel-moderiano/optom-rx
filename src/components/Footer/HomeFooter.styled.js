import styled from "styled-components";

const StyledHomeFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F9FAFB;
  background-color: #fff;

  .HomeFooter__container {
    margin: 0 3rem;
    max-width: 1140px;
    width: 100%;

    .footer-secondary-navigation {
      display: flex;

      a {
        padding: 0 1rem;
      }
    }
  }

  .footer-terms {
    border-top: 1px solid #dee1e4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4.5rem;
    font-size: 0.9rem;

    a {
      color: #263238;
      text-decoration: none;
      margin-right: 1.5rem;

      &:hover {
        text-decoration: underline #263238;

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