import styled from "styled-components";

const StyledScripts = styled.div`
  margin: 3rem 0;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 5.5rem 4rem 5.5rem;
  width: 90%;

  .list {display: none;}

  .Scripts__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    padding: 0;
    margin: 1rem 0 0.75rem 0;
    place-self: flex-start;
  }

  .Scripts__description {
    margin: 0;
  }

  .Scripts__list {
    list-style: none;
    margin: 0;
    padding: 0;

    .Scripts__list-item {
      font-size: 0.9rem;
      background-color: #f8f8f8;
      display: grid;
      grid-template-columns: 5.5rem 1fr 5.5rem;
      margin: 0.2rem 0;
    }
  }


  .Scripts__table {
    margin-top: 2rem;
    border-collapse: collapse;
    width: 100%;

    .table__header-row {
      border-bottom: 1px solid #646e6d;
    }

    tr {
      margin: 0;
      border-bottom: 1px solid #dfe1e1;

      td, th {
        margin: 0;
        padding: 0.5rem 0;
        text-align: left;
        font-size: 0.9rem;
      }
    }
  }
`

export { StyledScripts }