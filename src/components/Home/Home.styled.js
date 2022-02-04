import styled from "styled-components";

const StyledHome = styled.main`
  width: 100%;
  font-size: 1.1rem;

  .content-container {
    max-width: 1600px;
    margin: 0 1rem;
    text-align: center;
    padding: 1rem;
  }

  .Home__title {
    font-weight: 700;
    font-size: 3.5rem;
    margin: 0 0 1.5rem 0;
    line-height: 4rem;
  }

  .subtitle {
    font-size: 1.3rem;
    font-weight: 500;
    color: #546E7A;
    max-width: 700px;
  }

  .signup {
    padding: 0.5rem 1.8rem 0.7rem 1.8rem;
    height: auto;
    font-size: 1.15rem;
    letter-spacing: 0.01rem;
  }

  .Home__intro {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to top, #ffffff 0%, #F3F4F7 100%);
    background-color: #fff;
    padding: 2rem 0 5rem 0;

    .content-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      max-width: 1200px;

      p {
        margin-bottom: 2rem;
      }
    }
  }

  .home__btns {
    display: flex;
    margin-top: 2rem;

    .button {
      width: 100%;
      max-width: 140px;
    }

    .get-started {
      margin-right: 1rem;
    }
  }

  .section__title {
    font-size: 2.7rem;
    font-weight: 600;
    line-height: 3rem;
    margin: 0 0 2rem 0;
  }

  .Home__preview {
    padding: 3rem 0 6rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;

    .preview-container {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .preview__description {
      text-align: left;
      max-width: 400px;
      line-height: 1.5rem;

      .preview__btns {
        margin-right: 2rem;
      }
    }

    .preview__screenshots {
      max-width: 700px;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .Home__features {
    padding: 5rem 0 5rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #F9FAFB;

    .content-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .features__subtitle {
      font-size: 1.3rem;
      font-weight: 400;
      color: #546E7A;
    }

    .features__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 3rem;
      width: 100%;

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
          /* background-color: #F9FAFB; */
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
  }

  .Home__stationery {
    padding: 6rem 0 5rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F9FAFB;

    .stationery-container {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .stationery__description {
      margin-left: 3rem;
      text-align: left;
      max-width: 550px;
      line-height: 1.5rem;

      .stationery__btns {
        display: flex;
        margin-top: 2rem;
        margin-right: 3.5rem;

        .button {
          width: 100%;
          max-width: 140px;
        }

        .signup {
          margin-right: 1rem;
        }
      }

      .services-aus-link {
        color: var(--neutral);
        svg {
          height: 18px;
          display: none;
          margin-bottom: -0.25rem;
          margin-left: 0.1rem;
        }

        &:visited {
          color: var(--neutral);
        }

        &:hover {
          svg {
            display: inline;
          }
        }
      }
    }

    .stationery__screenshots {
      max-width: 550px;
    }

    img {
      width: 100%;     
      height: auto;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    }
  }

  .Home__action {
    padding: 5rem 0 6rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    .action-container {
      display: flex;
      align-items: center;
      justify-content: center;
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
        margin-right: 4rem;
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

    .signup {
      padding: 0.5rem 1.6rem 0.6rem 1.6rem;
      height: auto;
      font-size: 1.1rem;
    }

    .preview-container {
      flex-direction: column;

      .preview__description  {
        text-align: center;
        justify-content: center;
        align-items: center;
        max-width: 550px;
/* 
        .preview__title {
          font-size: 2.5rem;
          line-height: 2.75rem;
        } */

        .preview__btns {
          margin-right: 0;
          justify-content: center;
        }
      }

      .preview__screenshots {
        margin-top: 3rem;
        max-width: 500px;
      }
    }

    .Home__features {
      .content-container {
        .features__cards {
          margin-top: 2rem;
        }

        .features__subtitle {
          font-size: 1.2rem;
          max-width: 500px;
          line-height: 1.7rem;
        }
      }
    }

    .stationery-container {
      flex-direction: column-reverse;

      .stationery__description {
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-left: 0;

        .stationery__btns {
          margin-right: 0;
          justify-content: center;
        }
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

    .Home__features {
      .content-container {
        .features__card {
          margin: 0.75rem 0;
        }

        .features__subtitle {
          font-size: 1.1rem;
          max-width: 300px;
          line-height: 1.6rem;
          margin: 0;
        }
      }
    }

    .preview-container {
      .preview__description {
        display: flex;
        flex-direction: column;
        align-items: center;

        .preview__text {
          max-width: 300px;
        }
        
        .preview__btns {
          margin-right: 0;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 100%;

          .button {
            max-width: 200px;
          }

          .signup {
            margin: 0 0 1rem 0;
          }
        }
      }
    }

    .stationery-container {
      .stationery__description {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .stationery__text {
          max-width: 300px;
        }
        
        .stationery__btns {
          margin-right: 0;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 100%;

          .signup {
            margin: 0 0 1rem 0;
          }

          .button {
            max-width: 200px;
          }
        }
      }
    }
  }
`

export { StyledHome }