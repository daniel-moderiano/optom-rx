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
    
    .Home__link--prescribers {
      margin-left: 1.5rem;
    }
    
  }

  .Modal {
    .verify-container {
      margin-top: 1rem;
    }

    .img-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 0 2.5rem 0;

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

    .modal-btns {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .button {
        margin: 0;
      }
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

      .Home__link {
        margin: 0 0 1rem 0;
        max-width: 250px;
        width: 100%;
      }
    }
  }
`

export { StyledHome }