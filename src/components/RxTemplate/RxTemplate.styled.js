import styled from "styled-components";

const StyledRxTemplate = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  position: relative;
  margin: 0;
  padding: 0;

  img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    /* This pixel value is specific for the image in question, and is a veyr close approximation to a real PBS form */
    width: 902px;
    /* opacity: 0.5; */
    margin: 0;
    padding: 0;
  }
  /* box-sizing: border-box; */
  padding: 0;
  margin: 0;
  width: 902px;
  height: 1275px;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .provider-upper {
    position: absolute;
    width: 100%;
    /* display: none; */
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
    /* display: none; */
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

  /* .patient__streetAddress {
    position: absolute;
  }

  .patient__addressLine2 {
    position: absolute;
  } */

  .miscellaneous {
    position: absolute;
    /* display: none; */
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
      /* font-weight: bold; */
      /* border-top: 2px solid #000; */
      padding-top: 12px;
      width: 80px;
      box-sizing: border-box;

      .nonPbs-marker {
        bottom: 17px;
        left: -16px;
        position: absolute;
        /* border-top: 2px dashed #000; */
        /* height: 2px; */
        width: 150px;
        font-size: 17px;
        /* font-weight: 500; */
        /* font-family: 'Times New Roma', Courier, monospace; */
      }
    }
    
    .brandSub {
      position: absolute;
      left: 148px;
      top: 12px;
      font-size: 24px;
      /* font-weight: bold; */
    }
  }

  .medication {
    position: absolute;
    /* display: none; */
    left: 112px;
    top: 366px;
    width: 330px;
    border-bottom: 1px solid #b8b8b8;
    /* border-top: 1px solid #000; */
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


  @media print {
    @page {
      size: auto;
      margin: 0mm;
    }

  }

  
`

export { StyledRxTemplate }