import styled from "styled-components";

const StyledFavourites = styled.div`
  margin-top: 4rem;
  
  .Favourites__title {
    margin: -0.75rem 0 0 0;
    font-size: 1.6rem;
    font-weight: 300;
    color: var(--title-color);
    display: none;
  }

  .fav-list {
    list-style: none;
    margin: 1rem 0 1rem 0;
    padding: 0;
    width: 100%;
    border-radius: 6px;
    -moz-border-radius:6px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;

    .list-header {
      background-color: #F9FAFB;
      padding: 1rem 1.5rem 1.1rem 1.5rem;
      color: #48515B;
      font-size: 0.75rem;
      line-height: 0.85rem;
      font-size: 1.5rem;
      font-weight: 300;
      color: #48515B;
    }

    .fav-list:nth-child(even) {
      background-color: #F9FAFB;
    }

    .fav-item--none {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 7rem;
      font-size: 0.9rem;
      color: #5A6572;

      &:hover {
        background-color: #FFFFFF;
      }
    }

    li {
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

        .btns {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
      }

      .prescribe {
        margin-right: 1.5rem;
        padding: 6px 13px 8px 13px;
        height: auto;
        font-size: 0.9rem;
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
        color: var(--primary-color);
        font-family: var(--font-stack-segoe);

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


  .Spinner {
    margin-top: 2rem;
  }

  .Modal {
    .exit-fade {
      animation-name: shrink;
      animation-duration: 150ms;
      animation-timing-function: ease-in;

      
      @keyframes shrink {
        100% {
          transform: scale(0.75);
          opacity: 0.1;
        }

        0% {
          transform: scale(1);
          opacity: 1;
        }
      }
    }

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
    .Favourites__title {
      display: block;
    }
    
    .fav-list {
      border: none;
      box-shadow: none;

      .list-header {
        /* text-align: center; */
        display: none;
      }

      .fav-item {
        padding: 0;
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        border-radius: 6px;
        -moz-border-radius:6px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;
        border-top: none;

        &:hover {
          background-color: #fff;
        }

        .item-name {
          position: relative;
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
      .fav-item--none {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 7rem;
        font-size: 0.9rem;
        color: #5A6572;
        box-shadow: none;
        border: 1px dashed rgba(0, 0, 0, 0.1);

        border-radius: 6px; 

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