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
    text-align: center;
    padding: 1rem;
  }

  .Features__title {
    font-weight: 700;
    font-size: 3.5rem;
    margin: 0 0 1.5rem 0;
    line-height: 4rem;
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
    max-width: 700px;
  }

  .Features__intro {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-top: 1px solid #dee1e4; */
    background-image: linear-gradient(to top, #ffffff 0%, #F3F4F7 100%);
    background-color: #fff;
    padding: 2rem 0 5rem 0;

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

  
  .Features__pbs {
    padding: 3rem 0 4.5rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #FFFFFF;

    h3 {
      font-size: 2.7rem;
      font-weight: 600;
      line-height: 3rem;
      margin: 0 1rem 1rem 1rem;
    }

    .pbs-subtitle {
      font-size: 1.1rem;
      font-weight: 500;
      color: #546E7A;
      max-width: 700px;
      margin: 0 1rem;
    }

    .pbs-container {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 1rem;
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

    .quantityRepeats-container {
      /* margin-left: 4rem; */
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

  .Features__prescribers {
    padding: 6rem 0 5rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F9FAFB;

    .prescribers-container {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .prescribers-description {
      /* margin-left: 3rem; */
      text-align: center;
      max-width: 800px;
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

  .Features__lemi {
    padding: 6rem 0 5rem 0;
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

  .Features__represcribe {
    padding: 6rem 0 5rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;

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
    padding: 6rem 0 5rem 0;
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
      max-width: 500px;
      line-height: 1.7rem;
    }

    .Features__pbs {
      .pbs-subtitle {
        margin-bottom: 2rem;
        max-width: 500px;
      }

      .pbs-container {
        flex-direction: column;
        margin-top: 0;
       
        .description {
          align-items: center;
          justify-content: center;
          text-align: center;
          max-width: 500px;
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
    
    .Features__represcribe {
      .represcribe-container {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .represcribe__description {
          text-align: center;
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
      .data-container {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        .data__description {
          text-align: center;
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
      .prescribers-container {
        .prescribers-description {
          margin: 0 0 1rem 0;
          max-width: 600px;
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

    .desktop {
      display: none;
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
      line-height: 1.6rem;
    }

    .Features__pbs {
      .pbs-subtitle {
        margin-bottom: 2rem;
        max-width: 500px;
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
        align-items: flex-start;
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
          text-align: center;
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
          text-align: center;
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
          h3 {
            font-size: 2.1rem;
            line-height: 2.5rem;
            margin-bottom: 1rem;
          }
        }
      }
    }

    .Features__action {
      .content-container {
        .action__title {
          font-size: 2.1rem;
          line-height: 2.5rem;
          margin-bottom: 1.25rem;
        }
      }
    }
  }
`

export { StyledFeatures }