import styled from "styled-components";

const StyledFavourites = styled.div`
  margin-top: 4rem;

  .Favourites__title {
    padding: 0;
    font-size: 1.8rem;
    font-family: var(--font-title);
    color: var(--title-color);
    font-weight: normal;
    margin: 0;
  }


  .Scripts__container {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .list-container {
      width: 100%;
    }
    
    .table-container {
      width: 100%;
    }
  }

  .fav-list {
    list-style: none;
    margin: 0 0 1rem 0;
    padding: 0;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 6px;
    /* border-spacing: 0; */
    /* border-bottom: 1px solid transparent; */
    -moz-border-radius:6px;

    .list-header {
      background-color: #F9FAFB;
      padding: 0.75rem 1.5rem;
      color: #48515B;
      font-size: 0.75rem;
      line-height: 0.85rem;
      text-align: left;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-family: var(--font-stack-segoe-semibold);
      border-top: none;
      /* border-bottom: 1px solid #D1D6DB; */
    }

    .fav-list:nth-child(even) {
      background-color: #F9FAFB;
    }

    .fav-item--none {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 7rem;
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
      color: #5A6572;

      &:hover {
        background-color: #FFFFFF;
      }
    }

    li {
      /* height: 5rem; */
      padding: 0.6rem 1.5rem;
      font-size: 0.9rem;
      color: #48515B;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #D1D6DB;
      margin: 0;

      &:hover {
        background-color: #F9FAFB;
      }

      .btns {
        display: flex;
        align-items: center;
      }

      a {
        /* min-width: 80px; */
        background-color: var(--primary-color);
        color: rgb(255, 255, 255);
        border: none;
        margin-right: 1.5rem;
        text-decoration: none;
        font-size: 0.9rem;
        font-family: var(--font-stack-segoe);
        box-sizing: border-box;
        cursor: pointer;
        padding: 6px 14px 8px 14px;
        border-radius: 2px;

        &:active {
          transform: scale(0.98);
        }

        &:hover {
          background-color: var(--btn-primary-hover);
        }
      }

      .delete-btn {
        background-color: transparent;
        border: none;
        font-size: 0.9rem;
        /* font-weight: bold; */
        color: var(--primary-color);
        font-family: var(--font-stack-segoe);
        margin-left: 1rem;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }


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

  .Spinner {
    margin-top: 2rem;
  }
`

export { StyledFavourites }