import styled from "styled-components";

const StyledHome = styled.div`
  .Home__link {
    max-width: 160px;
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

  @media (max-width: 450px) { 
    .Modal {
      .Modal__content {
        width: 90%;
        text-align: left;
        max-width: 500px;
      }
    }
  }
`

export { StyledHome }