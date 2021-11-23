import styled from "styled-components";

const StyledRxTemplate = styled.div`
  /* All screen display styling here */

  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  width: 100%;

  /* Remove this in prod (img element will be removed) */
  img {
    display: none;
  }

  .left-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .pbsSelected, 
    .nonPbs-marker, 
    .brandSub, 
    .item-printed, 
    .provider-lower {
        display: none;
    }

    .medication {
      margin-bottom: 1rem;
    }

    h4 {
      border-bottom: 1px solid #000;
      padding-bottom: 0.3rem;
      width: 50%;
      font-size: 1.4rem;
    }
  }



  .RxTemplate__btns {
    margin-left: 4rem;

    .RxTemplate__btn {
      border-radius: 4px;
      border: 1px solid white;
      font-size: 1rem;
      padding: 0.5rem;
    }

    .RxTemplate__btn:hover {
      cursor: pointer;
      transform: scale(0.98);
      
    }

    .RxTemplate__btn:active {}

    .btn-print {
      background-color: #259c5b;
      color: white;
      font-size: 1rem;
      padding: 0.5rem;
      width: 6rem;
    }

    .btn-editRx {
      background-color: #f3f3f3;
      color: #3b3b3b;
      font-size: 1rem;
      padding: 0.5rem;
      width: 10rem;
      margin-right: 2rem;
    }
  }

 

  .right-container {
    display: none;
  }

  /* Print styles are created to match the dimensions of the physical Rx form */
  @media print {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    position: relative;
    margin: 0;
    padding: 0;
    /* width: 902px;
    height: 1275px; */

    h2, h3, h4, button, .RxTemplate__btns {
      display: none;
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