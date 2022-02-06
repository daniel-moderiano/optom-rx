import styled from "styled-components";

const StyledFeatures = styled.div`
  width: 100%;
  font-size: 1.1rem;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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

  .section__title {
    font-size: 2.7rem;
    font-weight: 600;
    line-height: 3rem;
    margin: 0 0 2rem 0;
  }

  .Features__title {
    font-weight: 700;
    font-size: 3.5rem;
    margin: 0 0 1.5rem 0;
    line-height: 4rem;
    width: 100%;
  }

  .subtitle {
    font-size: 1.3rem;
    font-weight: 500;
    color: #546E7A;
  }

  .signup {
    padding: 0.5rem 1.8rem 0.7rem 1.8rem;
    height: auto;
    font-size: 1.15rem;
    letter-spacing: 0.01rem;
  }

  .description {
    text-align: left;
    line-height: 1.5rem;
  }

  img {
    height: auto;
    width: 100%;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }

  .Features__intro {
    /* background-image: linear-gradient(to top, #ffffff 0%, #F3F4F7 100%); */
    background-color: #fff;
    padding: 2rem 0 0 0;

    .content-container {
      flex-direction: column;
      text-align: left;

      p {
        padding-bottom: 2rem;
        border-bottom: 1px solid #dee1e4;
      }
    }
  }

  .Features__pbs {
    padding: 3rem 0 3.5rem 0;
    text-align: left;
    flex-direction: column;
    background-color: #FFFFFF;

    h3 {
      margin: 0 1rem;
      padding: 0 1rem;
    }

    .pbs-subtitle {
      font-size: 1.1rem;
      font-weight: 500;
      color: #546E7A;
      margin: 0 1rem;
      padding: 1rem;
      text-align: center;
    }

    .pbs-container {
      margin: 2rem 1rem;
    }

    .pbs-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .pbsDOMBox {
      text-align: left;
      /* box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px; */
      box-shadow: 0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%);
      box-shadow: rgba(149, 157, 165, 0.3) 0px 12px 48px 0px;
      
      border-radius: 6px;
      /* margin-left: 3rem; */
      /* animation-duration: 350ms;
      animation-name: fadeIn;
      animation-timing-function: ease-out; */
    }

    /* @keyframes fadeIn {
      0% {
        transform: translateY(-4rem);
        opacity: 10%;
      }
      100% {
        transform: translateY(0);
        opacity: 100%;
      }
    } */

    .indicationsDOMBox {
      margin-left: 3rem;
      margin-top: 1rem;
      max-width: 430px;
      width: 100%;
      padding: 1.5rem 2rem;
    }

    .quantityDOMBox {
      margin-right: 3rem;
      padding: 0.3rem 2rem 1rem 2rem;
    }

    .authorityDOMBox {
      max-width: 400px;
      min-width: 350px;
      margin-left: 2rem;
      padding: 0.3rem 2rem 0.75rem 2rem;
    }

    .description {
      max-width: 400px;

      h4 {
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 2.5rem;
        margin: 0 0 1rem 0;
      }
    }

    img {
      box-shadow: none;
    }
  }

  .Features__lemi {
    padding: 5rem 0 4.5rem 0;
    background-color: #F9FAFB;

    .lemi__description {
      margin-left: 0.5rem;
      max-width: 450px;

      p {
        margin: 1rem 0;
      }
    }

    .lemi__screenshots {
      max-width: 500px;

      img {
        box-shadow: none;
      }
    }
  }

  .Features__prescribers {
    padding: 4rem 0 3.5rem 0;
    background-color: #FFFFFF;

    .prescribers-container {
      flex-direction: column;
    }

    .prescribers__description {
      max-width: 880px;
    }

    .prescribersDOMBox {
      margin-top: 2rem;
      width: 100%;
    }
  }

  .Features__represcribe {
    padding: 5.5rem 0 4rem 0;
    background-color: #F9FAFB;

    .represcribe__description {
      margin-right: 1rem;
      max-width: 400px;
      width: 100%;

      p {
        margin: 1rem 0;
      }
    }

    .represcribeDOMBox {
      width: 100%;
      min-width: 385px;
    }
  }

  .Features__data {
    padding: 1rem 0 5.5rem 0;
    background-color: #F9FAFB;

    .data__description {
      margin-left: 2rem;
      max-width: 390px;

      .data__text {
        margin: 1rem 0;
      }
    }

    .dataDOMBox {
      width: 100%;
      min-width: 385px;
    }
  }

  .Features__action {
    padding: 4rem 0 6rem 0;
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
    .Features__title {
      font-size: 4rem;
      margin: 0rem 0 1.5rem 0;
      line-height: 4.5rem;
    }

    .Features__lemi {
      .lemi__description {
        margin-left: 3rem;
        max-width: 500px;
      }
    }

    .Features__represcribe {
      .represcribe__description {
        margin-right: 3rem;
        max-width: 500px;
      }

      .represcribeDOMBox {
        min-width: 500px;
        padding: 0 0.5rem;
      }
    }

    .Features__data {
      .data__description {
        margin-left: 3rem;
        max-width: 500px;
      }

      .dataDOMBox {
        min-width: 500px;
      }
    }
  }

  /* Mobile/tablet breakpoint */
  @media (max-width: 800px) {
    font-size: 1.05rem;
    line-height: 1.4rem;

    .section__title {
      font-size: 2.5rem;
      line-height: 2.75rem;
      margin-bottom: 1.5rem;
      width: 100%;
    }

    .signup {
      padding: 0.5rem 1.6rem 0.6rem 1.6rem;
      height: auto;
      font-size: 1.1rem;
    }

    .Features__title {
      font-size: 3rem;
      margin: 0rem 0 1.5rem 0;
      line-height: 3.5rem;
    }

    .subtitle {
      font-size: 1.2rem;
      max-width: 600px;
      line-height: 1.7rem;
    }

    .Features__pbs {
      padding-bottom: 2rem;
      padding-top: 0;

      .pbs-subtitle {
        margin-bottom: 1rem;
        max-width: 632px;
        text-align: left;
      }

      h3 {
        text-align: left;
        margin: 0;
        padding: 2rem 2rem 0 2rem;
        max-width: 664px;
      }

      .pbs-container {
        flex-direction: column;
        margin-top: 0;
       
        .description {
          max-width: 600px;
        }

        .pbsDOMBox {
          margin: 1rem 0 0 0;
        }

        .indicationsDOMBox {
          margin-top: 2rem;
          margin-bottom: 1.5rem;
        }

        .quantityDOMBox {
          margin-top: 2rem;
        }

        .authorityDOMBox {
          margin-top: 2rem;
          /* margin-bottom: 1.5rem; */
        }
      }

      .quantityRepeats-container {
        flex-direction: column-reverse;
      }
    }

    .Features__lemi {
      padding-top: 2.5rem;
      padding-bottom: 3rem;
      .lemi-container {
        flex-direction: column-reverse;
        .lemi__description {
          margin: 0 0 2rem 0;
          max-width: 600px;
        }
      }
    }

    .Features__prescribers {
      padding-top: 2.75rem;
      padding-bottom: 4rem;
      .prescribers-container {
        .prescribers__description {
          margin: 0 0 1rem 0;
          max-width: 600px;
          text-align: left;
        }
      }
    }

    .Features__represcribe {
      padding-top: 3rem;
      .represcribe-container {
        flex-direction: column;
        .represcribe__description {
          text-align: left;
          margin: 0 0 2rem 0;
          max-width: 600px;
        }
      }
    }

    .Features__data {
      padding-bottom: 4rem;
      .data-container {
        flex-direction: column-reverse;
        .data__description {
          text-align: left;
          margin: 0 0 2rem 0;
          max-width: 600px;
        }
      }
    }
  }

  /* Smaller mobile screens */
  @media (max-width: 460px) {
    font-size: 1rem;
    line-height: 1.4rem;

    .content-container {
      margin: 0 0.5rem;
    }

    .section__title {
      font-size: 2.1rem;
      line-height: 2.5rem;
      margin-bottom: 1rem;
    }

    .Features__title {
      font-size: 2.7rem;
      margin: 0rem 0 1.5rem 0;
      line-height: 2.75rem;
    }

    .subtitle {
      font-size: 1.1rem;
      max-width: 350px;
      line-height: 1.5rem;
    }

    .Features__data {
      .data__description {
        margin-left: 3rem;
        max-width: 500px;
      }
      .dataDOMBox {
        min-width: 0;
      }
    }

    .Features__represcribe {
      .represcribeDOMBox {
        width: 100%;
        min-width: 0;
      }
    }

    .Features__pbs {
      .pbs-subtitle {
        max-width: 382px;
        font-size: 1.05rem;
        margin: 0 0.5rem;
      }

      h3 {
        margin: 0;
        padding: 2rem 1.5rem 0 1.5rem;
        max-width: 398px;
      }

      .pbs-container {       
        margin: 0 0.5rem;
        .description {
          max-width: 350px;

          h4 {
            line-height: 2.1rem;
          }
        }

        .pbsDOMBox {
          max-width: 350px;
        }

        .indicationsDOMBox {
          padding: 1rem 1.25rem;
          min-width: 0;
        }

        .quantityDOMBox {
          padding: 0 1.25rem 0.35rem 1.25rem;
          min-width: 0;
        }

        .authorityDOMBox {
          padding: 0 1.25rem;
          min-width: 0;
        }
      }
    }
  }
`

export { StyledFeatures }