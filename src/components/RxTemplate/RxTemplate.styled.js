import styled from "styled-components";

const StyledRxTemplate = styled.div`
  /* All screen display styling here */
  background-color: #fff;
  font-size: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: var(--font-stack-segoe);

  .RxTemplate__title {
    font-size: 2rem;
    margin: 1.5rem 0 3rem 0;
    padding: 0;
    color: #142d53;
  }

  /* Remove this in prod (img element will be removed) */
  img {
    display: none;
  }

  .ui-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin-bottom: 2rem;
    line-height: 1.3rem;

    .ui-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
    }

    h4 {
      border-bottom: 1px solid #142d53;
      font-family: var(--font-title);
      padding-bottom: 0.8rem;
      font-size: 1.8rem;
      margin: 0 0 1rem 0;
      color: #142d53;
      font-weight: normal;
    }

    .ui-medicare {
      display: flex;
      justify-content: space-between;
      width: 17rem;
      margin-top: 0.5rem;
    }

    /* .ui-medication__name, .ui-patient__fullName, .ui-provider__fullName {
      font-weight: bold;
    } */

    .ui-provider__prescriberNumber {
      margin-top: 0.5rem;
    }

    .ui-pbsRx {
      margin-bottom: 0.5rem;
    }

    .ui-date, .ui-quantityRepeats {
      margin: 0.5rem 0;
    }

    section {
      padding: 0;
      margin: 0;
      height: auto;
    }
  }


  .RxTemplate__btns {
    place-self: flex-end;
    margin-right: 10%;

    .RxTemplate__btn {
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      box-sizing: border-box;
      cursor: pointer;
      padding: 8px 16px 10px 16px;
      border-radius: 2px;
    }

    .btn-print {
      min-width: 80px;
      background-color: rgb(0, 120, 212);
      color: rgb(255, 255, 255);
      border: 1px solid rgb(0, 120, 212);         
    }
    
    .btn-print:hover {
      background-color: rgb(16, 110, 190);
      border: 1px solid rgb(16, 110, 190);
    }
          
    .btn-editRx {
      margin-right: 2rem;
      min-width: 80px;
      background-color: rgb(255, 255, 255);
      color: rgb(50, 49, 48);
      border: 1px solid rgb(138, 136, 134);                
    }
    .btn-editRx:hover {
      background-color: rgb(243, 242, 241);
      color: rgb(32, 31, 30);
    }
  }

  .right-container, .left-container {
    display: none;
  }

  /* Print styles are created to match the dimensions of the physical Rx form */
  @media print {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    position: relative;
    margin: 0;
    padding: 0;
    display: block;
    /* width: 902px;
    height: 1275px; */

    .ui-main-container {
      display: none;
    }

    h2, h3, h4, button, .RxTemplate__btns {
      display: none;
      margin: 0;
      padding: 0;
    }

    img {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      /* This pixel value is specific for the image in question, and is a very close approximation to a real PBS form */
      width: 902px;
      margin: 0;
      padding: 0;
      display: block;
    }

    .left-container {
      display: block;
      margin: 0;
      line-height: normal;
      
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
        width: 300px;
        font-weight: bold;
      }

      .patient__medicareNumber {
        position: absolute;
        display: flex;
        justify-content: space-between;
        top: 138px;
        left: 140px;
        width: 110px;
        font-weight: bold;
      }

      .miscellaneous {
        position: absolute;
        top: 311px;
        left: 40px;

        /* Consider date reduced font size */
        /* .date {
          font-size: 14px;
        } */

        .pbsSelected {
          width: 17px;
          height: 17px;
          display: block;
          /* Without position the img will size relative to the miscellaneous div above */
          position: absolute;
          top: 20px;

          img {
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
        }
      }

      .medication {
        position: absolute;
        left: 112px;
        top: 366px;
        width: 330px;
        border-bottom: 1px solid #b8b8b8;
        padding: 2px 0;

        .medication__activeIngredient {
          font-weight: bold;
          max-width: 330px;
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
        left: 112px;
        top: 502px;
        width: 330px;
        
        .practitionerTick {
          position: absolute;
          left: 315px;
          top: 134px;
          font-size: 26px;
          font-weight: bold;
        }
      }

      .authority {
        border-top: 1px solid #b8b8b8;
        padding-top: 2px;
        position: absolute;
        left: 112px;
        top: 540px;
        width: 330px;
      }

      .provider__fullName {
        font-weight: bold;
      }
    }

    .right-container {
      display: block;
      position: absolute;
      left: 456px;

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
        width: 300px;
        font-weight: bold;
      }

      .patient__medicareNumber {
        position: absolute;
        display: flex;
        justify-content: space-between;
        top: 138px;
        left: 140px;
        width: 110px;
        font-weight: bold;
      }

      .miscellaneous {
        position: absolute;
        top: 311px;
        left: 40px;

        /* Consider date reduced font size */
        /* .date {
          font-size: 14px;
        } */

        .pbsSelected {
          width: 17px;
          height: 17px;
          display: block;
          /* Without position the img will size relative to the miscellaneous div above */
          position: absolute;
          top: 20px;

          img {
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
        }
      }

      .medication {
        position: absolute;
        left: 112px;
        top: 366px;
        width: 330px;
        border-bottom: 1px solid #b8b8b8;
        padding: 2px 0;

        .medication__activeIngredient {
          font-weight: bold;
          max-width: 330px;
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
        position: absolute;
        left: 112px;
        top: 502px;
        width: 330px;
        
        .practitionerTick {
          position: absolute;
          left: 315px;
          top: 134px;
          font-size: 26px;
          font-weight: bold;
        }
      }

      .authority {
        border-top: 1px solid #b8b8b8;
        padding-top: 2px;
        position: absolute;
        left: 112px;
        top: 540px;
        width: 330px;
      }

      .provider__fullName {
        font-weight: bold;
      }
    }

    @page {
      size: auto;
      margin: 0mm;
    }
  }
`

export { StyledRxTemplate }