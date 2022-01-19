import styled from "styled-components";

const StyledFavourites = styled.div`
  margin-top: 4rem;
  width: 100%;
  
  

  .Favourites__title {
    padding: 0;

    margin: 0;


    font-size: 1.65rem;
    font-weight: 200;
    font-family: var(--font-stack-segoe);
    color: var(--title-color);

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
    
    border-radius: 6px;
    -moz-border-radius:6px;
    background-color: #fff;
    /* border: 1px solid rgba(0, 0, 0, 0.1); */
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;


    .list-header {
      background-color: #F9FAFB;
      padding: 0.75rem 1.5rem;
      color: #48515B;
      font-size: 0.75rem;
      line-height: 0.85rem;
      text-align: left;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-weight: 600;
      border-top: none;
    }

    .fav-list:nth-child(even) {
      background-color: #F9FAFB;
    }

    .list-header--none {
      font-size: 0;
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

      .cell-title {
        display: none;
      }

      .item-name {
        padding-right: 1rem;
      }

      .actions {
        display: flex;
        /* align-items: center; */

        .btns {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
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

        &:focus {
          outline: 2px solid #104362;
          outline-offset: 2px;
        }
      }

      .delete-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        border-radius: 2px;
        font-size: 0.9rem;
        height: 1rem;
        margin-top: 0.1rem;
        padding-bottom: 0.2rem;
        /* font-weight: bold; */
        color: var(--primary-color);
        font-family: var(--font-stack-segoe);
        /* margin-left: 1rem; */

        &:hover {
          cursor: pointer;
          color: var(--btn-primary-hover);
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
          outline-offset: 2px;
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

  .Modal {
    .error-container {
      margin-top: 1.25rem;
      background-color: #FBE9E7;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem;
      border-radius: 2px;

      .error-icon {
        line-height: 0;
        margin-right: 0.5rem;
      }

      .error-text {
        color: #C02121;
        font-size: 0.9rem;
        font-weight: 600;
      }
    }

    .provider-display {
      padding-top: 1.25rem;
      margin-bottom: 2rem;
      .provider-label {
        font-size: 0.85rem;
        color: #5A6572;
        margin-bottom: 0.4rem;
      }
    }

    .Modal__buttons {
      padding-top: 0.5rem;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-end;
      

      .button {
        font-size: 0.9rem;
        min-width: 80px;
        width: 100px;
        height: 35px;
      }
   
      .cancel {
        margin-right: 1rem;
      }
    }

    
  }

  /* Landscape phone to portrait tablet */
  @media (max-width: 550px) { 

    
    
    .fav-list {
      border: none;
      box-shadow: none;

      .list-header {
        /* text-align: center; */
        display: none;
      }

      .list-header--none {
        /* text-align: center; */
        display: block;
      }

      .fav-item {
        padding: 0;
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        border-radius: 6px;
        -moz-border-radius:6px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;
        /* border: 1px solid rgba(0, 0, 0, 0.1); */

        &:hover {
          background-color: #fff;
        }

        .item-name {
          position: relative;
          /* padding: 2.1rem 1rem 0.9rem 1rem; */
          width: 100%;
          border: none;
          padding: 0;

          .item-content {
            display: block;
            padding: 0.9rem 1rem 0.9rem 1rem;
          }
        }

        .cell-title {
          display: block;
          width: 100%;
          background-color: #F9FAFB;
          padding: 0.2rem 0rem 0.2rem 0.5rem;
          color: #48515B;
          font-size: 0.75rem;
          text-align: left;
          text-transform: uppercase;
          letter-spacing: 0.05rem;
          font-family: var(--font-stack-segoe-semibold);
          border-top: none;
        }

        .actions {
          position: relative;
          
          width: 100%;
          border: none;
          display: flex;
          flex-direction: column;

          .btns {
            padding: 1rem 1rem 0.9rem 1rem;
          }
        }
      }
    }

    .Modal {
      .Modal__content {
        width: 90%;
        text-align: left;
      }
    }

    .fav-list--none {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      -moz-border-radius:6px;

      .fav-item--none {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 7rem;
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
        color: #5A6572;
        box-shadow: none;
        border-top: 1px solid #d0d7de;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        text-align: center;

        &:hover {
          background-color: #FFFFFF;
        }
      }
  
    }
  }

  @media (max-width: 768px) {
    .Favourites__title {
      font-size: 1.55rem;
    }
  }

  @media (max-width: 475px) {
    .Favourites__title {
      font-size: 1.4rem;
    }
  }




`

export { StyledFavourites }