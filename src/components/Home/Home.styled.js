import styled from "styled-components";

const StyledHome = styled.main`
  width: 100%;

  .content-container {
    max-width: 1600px;
    margin: 0 1rem;
    text-align: center;
    padding: 1rem;
  }

  .Home__title {
    font-weight: 700;
    font-size: 4rem;
    margin: 0rem 0 1.5rem 0;
    line-height: 4.5rem;
  }

  .subtitle {
    font-size: 1.3rem;
    font-weight: 500;
    color: #546E7A;
    max-width: 700px;
  }

  .Home__intro {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-top: 1px solid #dee1e4; */
    background-image: linear-gradient(to top, #ffffff 0%, #F3F4F7 100%);
    padding: 1rem 0 5rem 0;

    .content-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      max-width: 1200px;

      p {
        margin-bottom: 2rem;
      }

      .button {
        padding: 0.5rem 1.8rem 0.7rem 1.8rem;
        height: auto;
        font-size: 1.15rem;
        font-weight: 600;
        letter-spacing: 0.02rem;
      }
    }
  }

  .description__btns {
    display: flex;
    margin-top: 2rem;

    .button {
      width: 100%;
      max-width: 140px;
    }

    .signup {
      margin-right: 1rem;
    }
  }

  
  .Home__preview {
    padding: 3rem 0 6rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #F9FAFB; */

    .preview-container {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .description {
      margin-right: 4rem;
      text-align: left;
      max-width: 400px;
      line-height: 1.5rem;

      h3 {
        font-size: 2.7rem;
        font-weight: 600;
        line-height: 3rem;
        margin: 0 0 2rem 0;
      }
    }

    .description__screenshots {
      max-width: 700px;
    }

    img {
      width: 100%;
      height: auto;
      /* box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px; */
      /* border-radius: 6px; */
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

    .features__title {
      font-size: 2.6rem;
      font-weight: 600;
      line-height: 3rem;
      margin: 0 0 1rem 0;
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
        max-width: 320px;
        margin: 0.75rem;
        background-color: #fff;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px 0px;
        border: 1px solid #dee1e4;
        border-radius: 6px;
        padding: 2rem 1.5rem;
        transition: ease-in-out 150ms;

        &:hover {
          /* background-color: #F9FAFB; */
          border-color: rgba(49, 119, 111, 0.5);
          box-shadow: rgba(49, 119, 111, 0.2) 0px 8px 24px 0px;
          cursor: pointer;
        }

        h4 {
          margin: 0;
          padding: 0.25rem 0 1rem 0;
          font-size: 1.35rem;
          font-weight: 600;
        }
        
        .button {
          margin: 1.75rem auto 0 auto;
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

    .stationery-description {
      margin-left: 4rem;
      text-align: left;
      max-width: 500px;
      line-height: 1.5rem;

      h3 {
        font-size: 2.7rem;
        font-weight: 600;
        line-height: 3rem;
        margin: 0 0 2rem 0;
      }

      a {
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
    border-bottom: 1px solid #f1f1f1;

    .action-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h3 {
        font-size: 2.7rem;
        font-weight: 600;
        line-height: 3rem;
        margin: 0.5rem 0 2rem 0;
      }

      .button {
        padding: 0.5rem 1.8rem 0.7rem 1.8rem;
        height: auto;
        font-size: 1.15rem;
        font-weight: 600;
        letter-spacing: 0.02rem;
      }
    }
  }
`

export { StyledHome }