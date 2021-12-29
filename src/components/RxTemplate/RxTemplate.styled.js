import styled from "styled-components";

const StyledRxTemplate = styled.div`
  margin-top: 3rem;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 5.5rem;
  width: 90%;
  max-width: 880px;
  display: flex;
  flex-direction: column;

  .RxTemplate__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    padding: 0;
    margin: 1rem 0 0.75rem 0;
  }

  /* Remove this in prod (img element will be removed) */
  img {
    display: none;
  }

  .ui-container {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;

    .ui__title {
      background-color: #F9FAFB;
      padding: 0.75rem 0.5rem;
      /* margin-top: 0.5rem; */
      /* color: #48515B; */
      /* text-align: left;
      font-size: 0.75rem;
      line-height: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-family: var(--font-stack-segoe-semibold); */
      font-size: 1.3rem;
      font-family: var(--font-title);
      color: var(--title-color);
      border-top: none;
      font-weight: normal;
      /* border-bottom: 1px solid #D1D6DB; */
    }

  }


  .RxTemplate__btns {
    place-self: flex-end;
    margin: 2.5rem 0;

    .RxTemplate__btn {
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      box-sizing: border-box;
      cursor: pointer;
      padding: 8px 16px 10px 16px;
      border-radius: 2px;

      &:active {
        transform: scale(0.98);
      }
    }

    .btn-print {
      min-width: 80px;
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      border: none;
      margin-left: 1.5rem;
      text-decoration: none;       
    }
    
    .btn-print:hover {
      background-color: var(--btn-primary-hover);
    }
          
    .btn-editRx {
      text-decoration: none;
      /* margin-right: 2rem; */
      min-width: 80px;
      background-color: var(--btn-secondary);
      color: var(--btn-secondary-text);
      border: none;            
    }
    .btn-editRx:hover {
      background-color: var(--btn-secondary-hover);
      color: #21252A;
    }
  }

  .right-container, .left-container, .bottom-container {
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
      z-index: 1;
      opacity: 0.5;
      /* This pixel value is specific for the image in question, and is a very close approximation to a real PBS form */
      width: 902px;
      margin: 0;
      padding: 0;
      display: block;
      display: none;
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
        width: 330px;
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

        .scriptNo {
          position: absolute;
          left: 200px;
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
        top: 386px;
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
        top: 522px;
        width: 330px;
        
        .practitionerTick {
          position: absolute;
          left: 315px;
          top: 114px;
          font-size: 26px;
          font-weight: bold;
        }
      }

      .authority {
        border-top: 1px solid #b8b8b8;
        padding-top: 3px;
        position: absolute;
        left: 112px;
        top: 560px;
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
        width: 330px;
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

        .scriptNo {
          position: absolute;
          left: 200px;
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
        top: 386px;
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
        top: 522px;
        width: 330px;
        
      }

      .authority {
        border-top: 1px solid #b8b8b8;
        padding-top: 3px;
        position: absolute;
        left: 112px;
        top: 560px;
        width: 330px;
      }

      .provider__fullName {
        font-weight: bold;
      }
    }

    .bottom-container {
      display: block;
      margin: 0;
      line-height: normal;
      position: relative;
      top: 826px;
      left: 410px;
      font-size: 14.5px;
      width: 400px;

      .doctor-copy {
        position: absolute;
        font-style: italic;
        left: 215px;
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
            width: 110px;
          }
        }        
      }

      .miscellaneous {
        position: absolute;
        top: 196px;
        left: 70px;

        .authRxNo {
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
        border-bottom: 1px solid #b8b8b8;
        padding: 2px 0;

        .medication__activeIngredient {
          width: 400px;
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

      .authority {
        position: absolute;
        left: 70px;
        top: 284px;
        width: 330px;

        .authority__approvalCode {
          position: absolute;
          top: 0px;
        }

        .auth-numbers {
          display: flex;
          justify-content: space-between;
          width: 400px;
        }

        .extra-details {
          display: flex;
          justify-content: space-between;
          width: 360px;
          position: absolute;
          top: 40px;
        }
      }
      .indication {
        position: absolute;
        top: 350px;
        left: 70px;
      }
    }

    @page {
      size: auto;
      margin: 0mm;
    }
  }
`

export { StyledRxTemplate }