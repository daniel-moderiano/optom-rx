import styled from "styled-components";

const StyledRxTemplate = styled.div`
  margin-top: 3rem;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 5.5rem;
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;

  .RxTemplate__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    padding: 0;
    margin: 1rem 0 0 0;
  }

  .ui-description {
    display: flex;
    justify-content: space-between;
    padding-top: 1.5rem;
    padding-left: 0.1rem;
    font-size: 0.9rem;
    color: #48515B;
  }

  .ui-container {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 6px;

    .ui__title {
      margin: 0;
      background-color: #F9FAFB;
      padding: 0.75rem 0.75rem;
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

    .ui-info {
      padding: 0.5rem 0.75rem;
      font-size: 0.9rem;
      color: #48515B;
      line-height: 1.2rem;
    }

    .ui-medication {
      padding-bottom: 0.5rem;
    }

    .ui-provider {
      padding-bottom: 0.5rem;
    }


    .ui-patient {
      padding-bottom: 0.5rem;
    }


    .ui-miscellaneous {
      padding-bottom: 0.5rem;
    }

    .ui-justification {
      padding-top: 0.5rem;
    }


  }


  .RxTemplate__btns {

    margin: 2rem 0 2rem 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    /* padding-left: 0.75rem; */

    .primary-btns {
      display: flex;
    }

    .RxTemplate__btn {
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      box-sizing: border-box;
      cursor: pointer;
      padding: 8px 16px 10px 16px;
      border-radius: 2px;

      svg {
        width: 20px;
        margin-right: 0.5rem;
        margin-top: 0.2rem;
      }

      &:active {
        transform: scale(0.98);
      }
    }

    .btn-finish, .btn-print {
      min-width: 80px;
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      /* background-color: #fff;
      color: var(--primary-color);
      border: 0.1rem solid var(--primary-color); */
      border: none;
      margin-right: 1.5rem;
      text-decoration: none;       
    }
    
    .btn-finish:hover, .btn-print:hover {
      background-color: var(--btn-primary-hover);
    }
          
    .btn-edit {
      display: block;
      text-decoration: none;
      background-color: var(--btn-secondary);
      color: var(--btn-secondary-text);
      border: none;            
    }

    .btn-edit:hover {
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

    .ui-container, .ui-description {
      display: none;
    }

    h2, h3, h4, button, .RxTemplate__btns {
      display: none;
      margin: 0;
      padding: 0;
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
          /* font-style: italic; */
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
        
        .practitionerTick {
          position: absolute;
          left: 312px;
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
          /* font-style: italic; */
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
        position: absolute;
        left: 102px;
        top: 536px;
        width: 330px;
        
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

    .bottom-container {
      display: block;
      margin: 0;
      line-height: normal;
      position: relative;
      top: 820px;
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

        .authNumbers {
          position: absolute;
            left: 190px;
            top: 0;
            width: 200px;
            text-align: right;
          .authRxNo {
            
          }
        }

        
      }

      .medication {
        position: absolute;
        left: 70px;
        top: 222px;
        width: 390px;
        /* border-bottom: 1px solid #b8b8b8; */
        padding: 2px 0;

        .medication__activeIngredient {
          width: 400px;
        }

        .medication__compounded {
          margin: 0.4rem 0 0.3rem 0;
          /* font-style: italic; */
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
          /* position: absolute;
          bottom: -22px;
          right: 2px; */
        }
      }

      .authority {
        margin-top: 0.75rem;

        .extra-details {
          margin-bottom: 0.75rem;
        }
      }
    }

    @page {
      size: auto;
      margin: 0mm;
    }
  }
`

export { StyledRxTemplate }