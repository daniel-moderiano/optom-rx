import styled from "styled-components";

const StyledFeatures = styled.div`
width: 100%;
  font-size: 1.1rem;

  .example {
    margin: 5rem;
    width: 700px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }

  .content-container {
    max-width: 1600px;
    margin: 0 1rem;
    text-align: left;
    padding: 1rem;
  }

  .Features__title {
    font-weight: 700;
    font-size: 3.5rem;
    margin: 0 0 1.5rem 0;
    line-height: 4rem;
    width: 100%;
  }

  .message {
    text-align: center;
    font-size: 2.5rem;
    margin-top: 2rem;
  }

  .subtitle {
    font-size: 1.3rem;
    font-weight: 500;
    color: #546E7A;
    /* max-width: 700px; */
    border-bottom: 1px solid #dee1e4;
    padding-bottom: 3rem;
  }

  .Features__intro {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-top: 1px solid #dee1e4; */
    background-image: linear-gradient(to top, #ffffff 0%, #F3F4F7 100%);
    background-color: #fff;
    padding: 2rem 0 0 0;

    .content-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: left;
      /* max-width: 932px; */

      p {
        margin-bottom: 2rem;
      }
    }
  }

  .Features__pbs {
    padding: 1rem 0 4rem 0;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #FFFFFF;
    /* border-top: 1px solid #dee1e4; */

    h3 {
      font-size: 2.7rem;
      font-weight: 600;
      line-height: 3rem;
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
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 1rem;
    }

    .pbs-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .description {
      text-align: left;
      max-width: 400px;
      line-height: 1.5rem;

      h4 {
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 2.5rem;
        margin: 0 0 1rem 0;
      }
    }

    .description__screenshots {
      max-width: 500px;
    }

    .authority {
      max-width: 450px;
      margin: 0 0 0 0rem;
    }

    .quantityRepeats {
      max-width: 385px;
      margin: 0 2rem 0 0;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .Features__lemi {
    padding: 5rem 0 4.5rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F9FAFB;

    .lemi-container {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .lemi__description {
      margin-left: 0.5rem;
      text-align: left;
      max-width: 450px;
      line-height: 1.5rem;

      h3 {
        font-size: 2.7rem;
        font-weight: 600;
        line-height: 3rem;
        margin: 0 0 2rem 0;
      }

      p {
        margin: 1rem 0;
      }
    }

    .lemi__list {
      list-style: numeric;
      padding: 0 0 0 1rem;

      li {
        padding: 0.25rem 0 0.25rem 0.25rem;
      }
    }

    .lemi__screenshots {
      max-width: 550px;
    }

    img {
      width: 100%;     
      height: auto;
    }
  }

  .Features__prescribers {
    padding: 4rem 0 3.5rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;

    .prescribers-container {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .prescribers-description {
      /* margin-left: 3rem; */
      text-align: left;
      max-width: 880px;
      line-height: 1.5rem;

      h3 {
        font-size: 2.7rem;
        font-weight: 600;
        line-height: 3rem;
        margin: 0 0 1rem 0;
      }
    }

    .prescribers__screenshots {
      max-width: 880px;
      margin: 2rem 0;
    }

    img {
      width: 100%;     
      height: auto;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    }

    .mobile {
      display: none;
      max-width: 300px;
    }
  }

  .Features__represcribe {
    padding: 5.5rem 0 4rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F9FAFB;

    .represcribe-container {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .represcribe__description {
      margin-right: 1rem;
      text-align: left;
      max-width: 400px;
      line-height: 1.5rem;

      h3 {
        font-size: 2.7rem;
        font-weight: 600;
        line-height: 3rem;
        margin: 0 0 2rem 0;
      }

      p {
        margin: 1rem 0;
      }
    }

    .represcribe__screenshots {
      max-width: 500px;
    }

    img {
      width: 100%;     
      height: auto;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    }
  }

  .Features__data {
    padding: 1rem 0 5.5rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F9FAFB;

    .data-container {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .data__description {
      margin-left: 2rem;
      text-align: left;
      max-width: 390px;
      line-height: 1.5rem;

      h3 {
        font-size: 2.7rem;
        font-weight: 600;
        line-height: 3rem;
        margin: 0 0 2rem 0;
      }

      .data__text {
        margin: 1rem 0;
      }
    }

    .data__screenshots {
      max-width: 550px;
    }

    img {
      width: 100%;     
      height: auto;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    }
  }

  .Features__action {
    padding: 4.5rem 0 6rem 0;
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

      .action__title {
        font-size: 2.7rem;
        font-weight: 600;
        line-height: 3rem;
        margin: 0.5rem 0 2rem 0;
        text-align: center;
      }

      .action__subtitle {
        font-size: 1.3rem;
        font-weight: 500;
        color: #546E7A;
        max-width: 700px;
      }

      .button {
        padding: 0.5rem 1.8rem 0.7rem 1.8rem;
        height: auto;
        font-size: 1.15rem;
        font-weight: 500;
        letter-spacing: 0.02rem;
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
        margin-right: 4rem;
        max-width: 500px;
      }
    }

    .Features__data {
      .data__description {
        margin-left: 4rem;
        max-width: 500px;
      }
    }
  }

  /* Mobile/tablet breakpoint */
  @media (max-width: 800px) {
    font-size: 1.05rem;
    line-height: 1.4rem;

    
    .Features__action {
      .content-container {
        .action__title {
          font-size: 2.5rem;
          line-height: 2.75rem;
        }

        .button {
          padding: 0.5rem 1.6rem 0.6rem 1.6rem;
          height: auto;
          font-size: 1.1rem;
        }
      }
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
        font-size: 2.5rem;
        line-height: 2.75rem;
        text-align: left;
        margin: 0;
        padding: 0 2rem;
        width: 100%;
        max-width: 664px;
      }

      .pbs-container {
        flex-direction: column;
        margin-top: 0;
       
        .description {
          align-items: center;
          justify-content: center;
          text-align: left;
          max-width: 600px;
        }

        .authority, .indications, .quantityRepeats {
          margin-top: 3rem;
        }
      }

      .quantityRepeats-container {
        flex-direction: column-reverse;
        
        h3 {
            font-size: 2.5rem;
            line-height: 2.75rem;
          }
      }
    }

    .Features__lemi {
      padding-top: 3rem;
      padding-bottom: 3rem;
      .lemi-container {
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: center;
        .lemi__description {
          text-align: left;
          margin: 0 0 2rem 0;
          max-width: 600px;
          h3 {
            font-size: 2.5rem;
            line-height: 2.75rem;
          }
        }
      }
    }

    .Features__prescribers {
      padding-top: 2.75rem;
      padding-bottom: 2.5rem;
      .prescribers-container {
        .prescribers-description {
          margin: 0 0 1rem 0;
          max-width: 600px;
          text-align: left;
          h3 {
            font-size: 2.5rem;
            line-height: 2.75rem;
          }
        }
      }
      .mobile {
        display: block;
      }
    }


    .Features__represcribe {
      padding-top: 3rem;
      .represcribe-container {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .represcribe__description {
          text-align: left;
          margin: 0 0 2rem 0;
          max-width: 600px;
          h3 {
            font-size: 2.5rem;
            line-height: 2.75rem;
          }
        }
      }
    }

    .Features__data {
      padding-bottom: 4rem;
      .data-container {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        .data__description {
          text-align: left;
          margin: 0 0 2rem 0;
          max-width: 600px;
          h3 {
            font-size: 2.5rem;
            line-height: 2.75rem;
          }
        }
      }
    }

 

    .desktop {
      display: none;
    }

    .Features__action {
      padding-top: 4rem;
      .action-container {
        .action__title {
          font-size: 2.5rem;
          line-height: 2.75rem;
        }

        .action__subtitle {
          font-size: 1.2rem;
          max-width: 500px;
          line-height: 1.7rem;
        }
      }
    }
  }

  /* Smaller mobile screens */
  @media (max-width: 430px) {
    font-size: 1rem;
    line-height: 1.4rem;

    .Features__title {
      font-size: 2.5rem;
      margin: 0rem 0 1.5rem 0;
      line-height: 2.75rem;
    }

    .subtitle {
      font-size: 1.1rem;
      max-width: 300px;
      line-height: 1.5rem;
    }

    .Features__pbs {
      .pbs-subtitle {
        margin-bottom: 1rem;
        max-width: 332px;
        line-height: 1.5rem;
        font-size: 1.05rem;
      }

      h3 {
        font-size: 2.1rem;
        line-height: 2.5rem;
        margin: 0;
        padding: 0 2rem;
        width: 100%;
        max-width: 364px;
      }

      .pbs-container {       
        .description {
          max-width: 300px;

          h4 {
            line-height: 2.1rem;
          }
        }

        .authority, .indications, .quantityRepeats {
          margin: 2rem 0 0 0;
        }
      }

      .quantityRepeats-container {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
      }
    }

    .Features__lemi {
      .lemi-container {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        .lemi__description {
          text-align: left;
          margin: 0 0 2rem 0;
          max-width: 300px;
          h3 {
            font-size: 2.1rem;
            line-height: 2.5rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
    
    .Features__represcribe {
      .represcribe-container {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .represcribe__description {
          text-align: left;
          margin: 0 0 2rem 0;
          max-width: 300px;
          h3 {
            font-size: 2.1rem;
            line-height: 2.5rem;
            margin-bottom: 1rem;
          }
        }
      }
    }

    .Features__data {
      .data-container {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        .data__description {
          text-align: left;
          margin: 0 0 2rem 0;
          max-width: 300px;
          h3 {
            font-size: 2.1rem;
            line-height: 2.5rem;
            margin-bottom: 1rem;
          }
        }
      }
    }

    .Features__prescribers {
      .prescribers-container {
        .prescribers-description {
          margin: 0 0 1rem 0;
          max-width: 300px;
          text-align: left;
          h3 {
            font-size: 2.1rem;
            line-height: 2.5rem;
            margin-bottom: 1rem;
          }
        }
      }
    }

    .Features__action {
      .action-container {
        .action__title {
          font-size: 2.1rem;
          line-height: 2.5rem;
          margin-bottom: 1.25rem;
        }

        .action__subtitle {
          font-size: 1.1rem;
          max-width: 300px;
          line-height: 1.6rem;
        }
      }
    }
  }
`

export { StyledFeatures }