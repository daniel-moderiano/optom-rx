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
    border-top: 1px solid #F1F1F1;
    padding: 2rem 0 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .top-container {
      width: 100%;
      max-width: 1000px;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo-container {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        font-size: 0.9rem;
        min-width: 170px;
      }

      .logo {
        width: 6rem;
        margin-left: 1rem;
        /* padding-top: 0.5rem; */
        /* margin-bottom: 0.25rem; */

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
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        align-content: center;
        justify-items: flex-start;
        gap: 0.5rem;

        h4 {
          margin: 0 0 1rem 0;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          
          /* li:first-child {
            padding: 0 0 1rem 0;
          } */
          li {
            padding: 0 0 0.5rem 0;
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
    /* height: 4.5rem; */
    font-size: 0.9rem;
    width: 100%;

    .bottom-container {
      width: 100%;
      max-width: 1000px;
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .links {
      .terms-link {
        margin-right: 1.5rem;
      }

      a {
        color: #263238;
        text-decoration: none;
        

        &:hover {
          text-decoration: underline #263238;

        }
      }
    }
  }

  /* Mobile breakpoint */
  @media (max-width: 600px) {
    .footer-top {
      padding: 2rem 0 1.5rem 0;
      .top-container {
        flex-direction: column;

        .footer-secondary-nav {
          justify-items: center;
          text-align: center;
        }

        .logo-container {
          justify-content: center;
          align-items: center;
        }

        .logo {
          margin-top: 0rem;
          padding-bottom: 0.3rem;
        }

        .column {
          margin-bottom: 1rem;
        }
      }
    }

    /* .bottom-container {
      flex-direction: column;

      .links {
        padding-bottom: 0.75rem;
      }
    } */
  }
`

export { StyledHomeFooter }