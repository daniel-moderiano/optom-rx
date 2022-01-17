import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 3rem;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 3rem 5.5rem;
  max-width: 1140px;
  width: 100%;
  /* border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: var(--small-shadow); */

  .Home__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    margin: 0 0 0.5rem 0;
    padding: 0;
  }

  .Home__links {
    display: flex;
    margin-top: 2rem;

    .Home__link {
      box-sizing: border-box;
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      box-sizing: border-box;
      cursor: pointer;
      padding: 0.45rem 16px 10px 16px;
      border-radius: 2px;
      text-decoration: none;
      

      &:active {
        transform: scale(0.98);
      }

      &:focus {
        outline: 2px solid #104362;
        outline-offset: 2px;
      }
    }

    .Home__link--create {
      min-width: 80px;
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      border: 1px solid transparent;
    }
    
    .Home__link--create:hover {
      background-color: var(--btn-primary-hover);
    }

    .Home__link--prescribers {
      min-width: 80px;
      /* padding-top: 0.45rem; */
      background-color: #fff;
      color: #0b4740;
      border: 1px solid #0b4740;
      margin-left: 1.5rem;
    }
    
    .Home__link--prescribers:hover {
      background-color: var(--btn-positive-hover);
      color: var(--btn-positive-hover-text);
    }
  }

  .Favourites {
    width: 100%;
  }


  .verify-container {
    margin-top: 1rem;
  }
  .modal-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ok-btn {
    box-sizing: border-box;
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    box-sizing: border-box;
    cursor: pointer;
    padding: 5px 16px 6px 16px;
    border-radius: 2px;
    text-decoration: none;
    /* min-width: 80px; */
    background-color: #fff;
    color: #0b4740;
    border: 1px solid #0b4740;
    margin-bottom: 1rem;

    &:hover {
      background-color: var(--btn-positive-hover);
      color: var(--btn-positive-hover-text);
    }
    

    &:active {
      transform: scale(0.98);
    }

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 2px;
    }
  }

  .resend {
    width: 100%;
    text-align: center;
    background-color: transparent;
    border: none;
    color: #48515B;
    /* color: var(--focus); */
    font-size: 0.9rem;
    font-family: var(--font-stack-segoe);
    /* font-weight: bold; */
    padding: 0;
    margin: 0;

    &:hover {
      background-color: transparent;
      color: #1B1E22;
      cursor: pointer;
    }

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }

    &:focus:not(:focus-visible) {
      outline: none
    }

    &:focus-visible {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }
  }

  .img-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;

    .email-svg {
      width: 75px;
      pointer-events: none;
      enable-background:new 0 0 64 64;

      .st0{fill: #77B3D4;}

      .st1{opacity:0.2;}

      .st2{fill:#231F20;}

      .st3{fill:#E0E0D1;}

      .st4{fill:#FFFFFF;}
  
    }
  }

  /* Landscape phone to portrait tablet */
  @media (max-width: 768px) { 
    padding: 3rem 3rem;
    
  }

  /* Landscape phone to portrait tablet */
  @media (max-width: 450px) { 
    /* text-align: center;
    align-items: center; */

    .Home__links {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      /* align-items: center; */
      /* width: 15rem; */
      .Home__link {
        margin: 0 0 1rem 0;
        max-width: 250px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
  }
`

export { StyledHome }