import styled from "styled-components";

const StyledViewScript = styled.div`
  margin-top: 3rem;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 5.5rem;
  width: 90%;
  max-width: 880px;

  .EditProvider__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    padding: 0;
    margin: 1rem 0 0.75rem 0;
  }

  .EditProvider__description {
    margin: 0;
  }

  .ProviderForm__btns {
    place-self: flex-end;
    margin-top: 1rem;

    .ProviderForm__btn {
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

    .submit-btn {
      min-width: 80px;
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      border: none;
      margin-left: 1.5rem;
    }
    
    .submit-btn:hover {
      background-color: var(--btn-primary-hover);
    }
          
    .cancel-btn {
      text-decoration: none;
      /* margin-right: 2rem; */
      min-width: 80px;
      background-color: var(--btn-secondary);
      color: var(--btn-secondary-text);
      border: none;
    }
    .cancel-btn:hover {
      background-color: var(--btn-secondary-hover);
      color: #21252A;
    }
  }

  .Script__info {
    display: grid;
    grid-template-areas: 
    'title-drug title-pbs title-other'
    'drug pbs date'
    'dosage auth date'
    'quantity auth date'
    'repeats compounded date'
    ;

    .Script__drug {
      grid-area: drug;
    }

    .Script__pbs {
      grid-area: pbs;
    }

    .Script__dosage {
      grid-area: dosage;
    }

    .Script__quantity {
      grid-area: quantity;
    }

    .Script__repeats {
      grid-area: repeats;
    }

    .Script__authority {
      grid-area: auth;
    }

    .Script__date {
      grid-area: date;
    }

    .Script__title--medication {
      grid-area: 'title-drug';
    }

    .Script__title--pbs {
      grid-area: 'title-pbs';
    }

    .Script__title--other {
      grid-area: 'title-other';
    }

  }

`

export { StyledViewScript }