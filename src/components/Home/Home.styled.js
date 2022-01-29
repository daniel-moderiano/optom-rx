import styled from "styled-components";

const StyledHome = styled.main`
  /* max-width: 1140px; */
  /* margin: 0 1rem; */
  color: #263238;
  background-color: var(--background);

  .content-container {
    max-width: 1140px;
    margin: 0 1rem;
    text-align: center;
    padding: 1rem;
  }

  .Home__title {
    font-weight: 300;
    font-size: 2.5rem;

    strong {
      font-weight: 700;
    }
  }

  .subtitle {
    font-size: 1.3rem;
    font-weight: 600;
    color: #546E7A;
  }

  .Home__intro {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  
  .Home__preview {
    margin: 6rem 0 0 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F9FAFB;

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
    margin: 6rem 0 0 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .features__title {
      font-size: 2.6rem;
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


      .features__card {
        max-width: 300px;
        margin: 0.75rem;
      }
    }
  }
`

export { StyledHome }