import styled from "styled-components";

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 3rem 0;
  background-color: #FFFFFF;
  /* box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%); */
  padding: 3rem 5.5rem;
  max-width: 1140px;
  width: 100%;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: var(--small-shadow);

  .Home__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    margin: 0 0 0.5rem 0;
    padding: 0;
  }

  .hidden {
    display: none;
  }

  .Modal {

.provider-display {

  .provider-label {
    font-size: 0.85rem;
    color: #5A6572;
    margin-bottom: 0.4rem;
    margin-left: 0.1rem;
    /* font-style: italic; */
  }
}

.form-field {
  width: 100%;
  margin-bottom: 0.4rem;

  label {
    font-size: 1rem;
  }
}

.Modal__buttons {
  padding-top: 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  .Modal__btn {
    font-size: 0.9rem;
    font-family: var(--font-stack-segoe);
    box-sizing: border-box;
    cursor: pointer;
    padding: 6px 14px 8px 14px;
    border-radius: 2px;
    min-width: 80px;
    min-width: 85px;
    height: 2rem;

    &:active {
      transform: scale(0.98);
    }

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 2px;
    }
  }

  .delete-btn {
    
    background-color: var(--btn-primary);
    color: rgb(255, 255, 255);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;      

  }
  
  .delete-btn:hover {
    background-color: var(--btn-primary-hover);
  }
        
  .cancel-btn {
    text-decoration: none;
    margin-right: 1rem;
    min-width: 85px;
    background-color: var(--btn-secondary);
    color: var(--btn-secondary-text);
    border: none;
  }
  .cancel-btn:hover {
    background-color: var(--btn-secondary-hover);
    color: #21252A;
  }
}
}

`

export { StyledSettings }