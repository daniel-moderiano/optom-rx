import styled from "styled-components";

const StyledHomeFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;

 

  .footer-top {
    width: 100%;
    border-top: 1px solid #f1f1f1;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .top-container {
      width: 100%;
      max-width: 1140px;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        width: 6rem;
        /* margin-right: 1rem; */
        padding-top: 0.5rem;

        .cls-1 {
          fill: var(--primary-color);
        }

        svg {
          pointer-events: none;
        }
      }

      .footer-secondary-nav {
        width: 100%;
        display: grid;
        max-width: 600px;
        grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
        align-content: center;
        justify-items: flex-start;
        gap: 1rem;

        h4 {
          margin: 0 0 1rem 0;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          
          li:first-child {
            padding: 0 0 1rem 0;
          }

        }

        a {
          color: #263238;
          text-decoration: none;
          font-size: 0.9rem;

          &:hover {
            text-decoration: underline #263238;

          }
        }
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid #dee1e4;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5rem;
    font-size: 0.9rem;
    width: 100%;

    .bottom-container {
      width: 100%;
      max-width: 1140px;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    a {
      color: #263238;
      text-decoration: none;
      margin-right: 1.5rem;

      &:hover {
        text-decoration: underline #263238;

      }
    }
  }
`

export { StyledHomeFooter }