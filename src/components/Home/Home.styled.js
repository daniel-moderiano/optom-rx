import styled from "styled-components";

const StyledHome = styled.main`
  width: 100%;

  .content-container {
    max-width: 1300px;
    margin: 0 1rem;
    text-align: center;
    padding: 1rem;
  }

  .Home__title {
    font-weight: 700;
    font-size: 4rem;
    margin: 0 0 2rem 0;
    line-height: 4.5rem;
  }

  .subtitle {
    font-size: 1.3rem;
    font-weight: 600;
    color: #546E7A;
    max-width: 600px;
  }

  .Home__intro {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-top: 1px solid #dee1e4;
    margin: 0 2.75rem;
    padding: 1rem 0 5rem 0;

    .content-container {
      max-width: 800px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  
  .Home__preview {
    padding: 3rem 0 5rem 0;
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
      margin-right: 2rem;
      text-align: left;

      h3 {
        font-size: 2.6rem;
      }
    }

    img {
      max-width: 100%;
      height: auto;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
      border-radius: 2px;
    }
  }

  .Home__features {
    padding: 5rem 0 5rem 0;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: #F9FAFB; */

    .features__title {
      font-size: 2.6rem;
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
        /* box-shadow: 0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%); */
        border: 1px solid #dee1e4;
        border-radius: 6px;
        padding: 2rem 1.5rem;

        &:hover {
          background-color: #F9FAFB;
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
`

export { StyledHome }