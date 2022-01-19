import styled from "styled-components";

const StyledHome = styled.div`
  .Home__title {
    font-family: var(--font-stack-segoe);
    font-weight: 600;
    color: var(--title-color);
    font-size: 2.2rem;
    line-height: 2rem;
    margin: 0 0 0.5rem 0;
    padding: 0;
  }

  .Home__description {
    color: #57606a;
    margin: 0;
    padding: 0;
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .Home__links {
    display: flex;
    

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
      /* color: var(--btn-positive-hover-text); */
    }
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

  .button {
    margin-bottom: 0.5rem;
    margin-top: 0.25rem;
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
  @media (max-width: 450px) { 
    .Home__title {
      font-family: var(--font-stack-segoe);
      font-weight: 600;
      color: var(--title-color);
      font-size: 1.65rem;
      line-height: 1.5rem;
      margin: 0 0 0.5rem 0;
      padding: 0;
    }

    .Home__description {
      color: #57606a;
      margin: 0;
      padding: 0;
      font-size: 1.1rem;
      line-height: 1.25rem;
      margin-bottom: 1.5rem;
    }


    .Modal {
      .Modal__content {
        width: 90%;
        text-align: left;
        max-width: 500px;
      }
    }
    

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