import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 3rem;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 5.5rem;
  width: 90%;
  max-width: 880px;

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

      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      box-sizing: border-box;
      cursor: pointer;
      padding: 8px 16px 10px 16px;
      border-radius: 2px;
      text-decoration: none;

      &:active {
        transform: scale(0.98);
      }
    }

    .Home__link--create {
      min-width: 80px;
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      border: none;
    }
    
    .Home__link--create:hover {
      background-color: var(--btn-primary-hover);
    }

    .Home__link--providers {
      min-width: 80px;
      background-color: #fff;
      color: #0b4740;
      border: 1px solid #0b4740;
      margin-left: 1.5rem;
    }
    
    .Home__link--providers:hover {
      background-color: var(--btn-positive-hover);
      color: var(--btn-positive-hover-text);
    }
  }
`

export { StyledHome }