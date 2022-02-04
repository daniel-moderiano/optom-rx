import styled from "styled-components";

const StyledHome = styled.main`
  width: 100%;
  font-size: 1.1rem;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-container {
    max-width: 1600px;
    margin: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
  }

  .Home__title {
    font-weight: 700;
    font-size: 3.5rem;
    margin: 0 0 1.5rem 0;
    line-height: 4rem;
  }
 
  .section__title {
    font-size: 2.7rem;
    font-weight: 600;
    line-height: 3rem;
    margin: 0 0 2rem 0;
  }

  .subtitle {
    font-size: 1.3rem;
    font-weight: 500;
    color: #546E7A;
    max-width: 720px;
  }

  .description {
    text-align: left;
    line-height: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .Home__btns {
    display: flex;
    margin-top: 2rem;

    .button {
      width: 100%;
      max-width: 140px;
      min-width: 120px;
    }

    .get-started {
      margin-right: 1rem;
    }
  }

  .Home__screenshots {
    img {
      width: 100%;
      height: auto;
    }
  }

  .signup {
    padding: 0.5rem 1.8rem 0.7rem 1.8rem;
    height: auto;
    font-size: 1.15rem;
    letter-spacing: 0.01rem;
  }

  .Home__intro {
    /* background-image: linear-gradient(to top, #ffffff 0%, #F3F4F7 100%); */
    background-color: #fff;
    padding: 2rem 0 5rem 0;

    .content-container {
      flex-direction: column;

      .subtitle {
        margin-bottom: 2rem;
      }
    }
  }

  .Home__preview {
    padding: 3rem 0 6rem 0;
    background-color: #FFFFFF;

    .preview__description {
      max-width: 420px;
    }

    .preview__btns {
      margin-right: 1rem;
    }

    .preview__screenshots {
      max-width: 700px;
    }
  }

  .Home__features {
    padding: 5rem 0 5rem 0;
    background-color: #F9FAFB;

    .content-container {
      flex-direction: column;
    }

    .features__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 3rem;
    }

    .features__card {
      max-width: 345px;
      margin: 0.5rem;
      background-color: #fff;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px 0px;
      border: 1px solid #dee1e4;
      border-radius: 6px;
      padding: 2rem 1.5rem;
      font-size: 1rem;
      transition: ease-in-out 150ms;

      &:hover {
        border-color: rgba(49, 119, 111, 0.5);
        box-shadow: rgba(49, 119, 111, 0.2) 0px 8px 24px 0px;
      }

      h4 {
        margin: 0;
        padding: 0.25rem 0 1rem 0;
        font-size: 1.25rem;
        font-weight: 600;
      }
      
      .button {
        margin: 1.75rem auto 0 auto;
        max-width: 130px;
      }

      img {
        width: 90px;
        height: 50px;
      }
    }
  }

  .Home__stationery {
    padding: 6rem 0 5rem 0;
    background-color: #F9FAFB;

    .stationery__description {
      margin-left: 3rem;
      max-width: 450px;
    }

    /* Causes btns to shrink in a similar fashion to those in the section above */
    .stationery__btns {
      margin-right: 3.5rem;
    }

    .services-aus-link {
      color: var(--neutral);
      svg {
        height: 18px;
        display: none;
        margin-bottom: -0.25rem;
        margin-left: 0.1rem;
      }

      &:hover {
        svg {
          display: inline;
        }
      }
    }

    .stationery__screenshots {
      max-width: 550px;
    }

    img {
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    }
  }

  .Home__action {
    padding: 5rem 0 6rem 0;
    background-color: #fff;

    .action-container {
      flex-direction: column;

      .action__subtitle {
        margin-bottom: 0.5rem;
      }
    }
  }

  /* Lagre screens */
  @media (min-width: 1000px) {
    .Home__title {
      font-size: 4rem;
      margin: 0rem 0 1.5rem 0;
      line-height: 4.5rem;
    }

    .Home__preview {
      .preview__description {
        margin-right: 2rem;
      }
    }

    .Home__stationery {
      .stationery__description {
        margin-left: 5rem;
      }
    }
  }

  /* Mobile/tablet breakpoint */
  @media (max-width: 800px) {
    font-size: 1.05rem;
    line-height: 1.4rem;

    .Home__title {
      font-size: 3rem;
      margin: 0rem 0 1.5rem 0;
      line-height: 3.5rem;
    }

    .subtitle {
      font-size: 1.2rem;
      max-width: 500px;
      line-height: 1.7rem;
    }

    .section__title {
      font-size: 2.5rem;
      line-height: 2.75rem;
      margin-bottom: 1.5rem;
    }

    .description {
      text-align: center;
      align-items: center;
    }

    .signup {
      padding: 0.5rem 1.6rem 0.6rem 1.6rem;
      height: auto;
      font-size: 1.1rem;
    }

    .Home__preview {
      .content-container {
        flex-direction: column;
      }

      .preview__description  {
        max-width: 550px;
      }

      .preview__btns {
        margin-right: 0;
        justify-content: center;
      }

      .preview__screenshots {
        margin-top: 3rem;
        max-width: 500px;
      }
    }

    .Home__features {
      .features__cards {
        margin-top: 2rem;
      }
    }

    .stationery-container {
      flex-direction: column-reverse;

      .stationery__description {
        margin-left: 0;
      }

      .stationery__btns {
        margin-right: 0;
        justify-content: center;
      }

      .stationery__screenshots {
        margin-top: 3rem;
        max-width: 500px;
      }
    }
  }

  /* Smaller mobile screens */
  @media (max-width: 430px) {
    font-size: 1rem;
    line-height: 1.4rem;

    .content-container {
      margin: 0 0.5rem;
    }

    .Home__title {
      font-size: 2.5rem;
      margin: 0rem 0 1.5rem 0;
      line-height: 2.75rem;
    }

    .subtitle {
      font-size: 1.1rem;
      max-width: 300px;
      line-height: 1.6rem;
    }

    .section__title {
      font-size: 2.1rem;
      line-height: 2.5rem;
      margin-bottom: 1rem;
    }

    .Home__btns {
      margin-right: 0;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .button {
        max-width: 220px;
      }

      .get-started {
        margin: 0 0 1rem 0;
      }
    }

    .Home__text {
      max-width: 320px;
    }

    .Home__features {
      .features__card {
        margin: 0.75rem 0;
      }
    }
  }
`

export { StyledHome }