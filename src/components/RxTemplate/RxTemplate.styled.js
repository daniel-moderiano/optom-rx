import styled from "styled-components";

const StyledRxTemplate = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  background-color: #FFFFFF;
  padding: 3.5rem 5.5rem;
  max-width: 1140px;
  width: 100%;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: var(--small-shadow);

  .RxTemplate__subtitle {
    font-weight: 400;
    color: #363C45;
    max-width: 500px;
  }

  .ui-description {
    display: flex;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-left: 0.1rem;
    font-size: 0.9rem;
    color: #48515B;
  }

  .ui-container {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-radius: 6px;
    line-height: 1.5rem;

    .ui__title {
      margin: 0 0 0.25rem 0;
      padding: 0.75rem 1rem;
      background-color: #F9FAFB;
      font-size: 1.3rem;
      font-family: var(--font-stack-segoe);
      font-weight: 400;
      color: #48515B;
      border-top: none;
    }

    .ui-info {
      padding: 0.5rem 1rem 0 1rem;
      font-size: 0.9rem;
      color: #48515B;
      max-width: 450px;
    }

    section {
      padding-bottom: 0.75rem;
    }

    .ui-auth, .ui-justification {
      padding-top: 0.5rem;
    }
  }

  .RxTemplate__btns {
    margin: 2rem 0 0 0;
    display: flex;
    justify-content: space-between;
    width: 100%;

    svg {
      width: 20px;
      margin-right: 0.5rem;
      margin-top: 0.1rem;
    }

    .primary-btns {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-print {
      margin-right: 1.5rem;
    }
  }

  .right-container, .left-container, .bottom-container--left, .bottom-container--right {
    display: none;
  }

  /* Landscape phones/portrait tables */
  @media (max-width: 768px) { 
    padding: 3rem 3rem;

    .ui-container {
      .ui__title {
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
  }

  /* Landscape phones/portrait tables, where previous styling begins to break */
  @media (max-width: 550px) { 
    padding: 3rem 2.5rem;

    .ui-description {
      flex-direction: column;
    }

    .RxTemplate__btns {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      .primary-btns {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        width: 100%;
      }

      .button {
        width: 90%;
        margin: 0;
        max-width: 300px;
      }

      .btn-print {
        margin: 0 0 1.5rem 0;
      }
    }
  }

  /* Portrait phones */
  @media (max-width: 475px) {
    .ui-container {
      .ui__title {
        padding: 0.4rem 1rem;
        font-size: 1.1rem;
        font-weight: 400;
      }
    }
  }

  /* Portrait phones (smaller screens) */
  @media (max-width: 400px) {
    padding: 3rem 1.5rem;
  }

  /* Print styles are created to match the dimensions of the physical Rx form. These are slightly printer dependent, but should transfer reasonably well across machines */
  @media print {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    position: relative;
    margin: 0;
    padding: 0;
    display: block;
    margin-top: 6px;
    border: none;
    border-radius: 0;
    box-shadow: 0;
    width: auto;
    max-width: none;

    .ui-container, .ui-description {
      display: none;
    }

    h1, h2, h3, h4, button, .RxTemplate__btns {
      display: none;
      margin: 0;
      padding: 0;
    }

    /* Styles all relevant components in the two upper scripts, since they are all relatively positioned to their left and right parent containers respectively */
    .upper-containers {
      .provider-upper {
        position: absolute;
        width: 450px;
      }

      .container {
        position: relative;
        width: 100%;
        height: 100%;
      }

      .provider-upper {
        position: absolute;
        width: 450px;
      }
          
      .provider__contact-upper {
        position: absolute;
        left: 90px;
        top: 20px;

        .provider__streetAddress {
          max-width: 330px;
        }
      }

      .provider__contact-lower {
        position: absolute;
        left: 90px;
        top: 103px;
        display: flex;
        justify-content: space-between;
        width: 300px;
      }

      .patient {
        position: absolute;
      }

      .patient__contactDetails {
        position: absolute;
        left: 100px;
        top: 240px;
        width: 330px;
        font-weight: bold;
      }

      .patient__medicareNumber {
        position: absolute;
        top: 138px;
        left: 140px;
        width: 150px;
        font-weight: bold;
      }

      .miscellaneous {
        position: absolute;
        top: 311px;
        left: 40px;

        .scriptNo {
          position: absolute;
          left: 190px;
          top: 52px;
          width: 200px;
          text-align: right;
        }

        .pbsSelected {
          width: 17px;
          height: 17px;
          display: block;
          /* Without position the img will size relative to the miscellaneous div above */
          position: absolute;
          top: 20px;

          .pbsTick {
            display: block;
            height: 100%;
            width: 100%;
          }
        }

        .nonPbs {
          position: absolute;
          top: 27px;
          left: -18px;
          padding-top: 12px;
          width: 80px;
          box-sizing: border-box;

          .nonPbs-marker {
            bottom: 17px;
            left: -16px;
            position: absolute;
            width: 150px;
            font-size: 17px;
          }
        }
        
        .brandSub {
          position: absolute;
          left: 148px;
          top: 12px;
          font-size: 24px;
          width: 18px;

          .largeTick {
            display: block;
            height: 100%;
            width: 100%;
          }
        }
      }

      .medication {
        position: absolute;
        left: 102px;
        top: 386px;
        width: 330px;
        border-bottom: 1px solid #b8b8b8;
        padding: 2px 0;

        .medication__activeIngredient {
          font-weight: bold;
          max-width: 330px;
        }

        .medication__compounded {
          margin: 0.4rem 0 0.3rem 0;
          text-transform: uppercase;
        }

        .medication__brandName {
          font-weight: bold;
        }

        .quantityRepeats {
          display: flex;
          justify-content: space-between;
          width: 170px;
        }

        .item-printed {
          position: absolute;
          bottom: -22px;
          right: 2px;
        }
      }

      .provider-lower {
        display: block;
        position: absolute;
        left: 102px;
        top: 536px;
        width: 330px;

        .provider__fullName--low {
          position: absolute;
          top: 16px;
        }
        
        .practitionerTick {
          position: absolute;
          left: 322px;
          top: 100px;
          width: 20px;

          .optomTick {
            display: block;
            height: 100%;
            width: 100%;
          }
        }
      }

      .authority {
        border-top: 1px solid #b8b8b8;
        padding-top: 3px;
        position: absolute;
        left: 102px;
        top: 574px;
        width: 330px;
      }

      .provider__fullName {
        font-weight: bold;
      }
    }

    .left-container {
      display: block;
      margin: 0;
      line-height: normal;   
    }

    .right-container {
      display: block;
      position: absolute;
      left: 456px;
    }

    /* Styles all relevant components in the two lower scripts, since they are all relatively positioned to their left and right parent containers respectively */
    .lower-containers {
      .doctor-copy {
        position: absolute;
        font-style: italic;
        font-size: 15px;
      }

      .container {
        position: relative;
        width: 100%;
        height: 100%;
      }

      .provider-upper {
        position: absolute;
        width: 450px;
        top: 8px;

        .provider__contact-upper {
          position: absolute;
          left: 70px;
          top: 20px;

          .provider__streetAddress {
            max-width: 330px;
          }
        }

        .provider__contact-lower {
          position: absolute;
          left: 70px;
          top: 76px;
          display: flex;
          justify-content: space-between;
          width: 390px;
        }
      }

      .patient {
        position: relative;

        .container {
          display: flex;
          position: absolute;
          width: auto;
          top: 114px;
          left: 70px;
          align-items: flex-start;

          .patient__contactDetails {
            width: 340px;
            margin-left: 6px;
          }

          .patient__medicareNumber {
            display: flex;
            justify-content: space-between;
            width: 150px;
          }
        }        
      }

      .miscellaneous {
        position: absolute;
        top: 196px;
        left: 70px;

        .authNumbers {
          position: absolute;
          left: 190px;
          top: 0;
          width: 200px;
          text-align: right;
        }
      }

      .medication {
        position: absolute;
        left: 70px;
        top: 222px;
        width: 390px;
        padding: 2px 0;

        .medication__activeIngredient {
          width: 400px;
        }

        .medication__compounded {
          margin: 0.4rem 0 0.3rem 0;
          text-transform: uppercase;
        }

        .medication__brandName {
          font-weight: bold;
        }

        .quantityRepeats {
          display: flex;
          justify-content: space-between;
          width: 170px;
        }

        .item-printed-line {
          display: flex;
          justify-content: space-between;
          width: 390px;
          border-top: 1px solid #b8b8b8;
          margin-top: 0.2rem;
          padding-top: 0.2rem;
        }
      }

      .authority {
        margin-top: 0.75rem;

        .extra-details {
          margin-bottom: 0.75rem;
        }
      }
    }

    .bottom-container--right {
      display: block;
      margin: 0;
      line-height: normal;
      position: relative;
      top: 814px;
      left: 410px;
      font-size: 14.5px;
      width: 400px;

      .doctor-copy {
        left: 178px;
      }
    }

    .bottom-container--left {
      display: block;
      margin: 0;
      line-height: normal;
      position: relative;
      top: 814px;
      left: -40px;
      font-size: 14.5px;
      width: 400px;

      .doctor-copy {
        left: 208px;
      }
    }

    @page {
      size: auto;
      margin: 0mm;
    }
  }
`

export { StyledRxTemplate }