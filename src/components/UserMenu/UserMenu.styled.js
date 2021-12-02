import styled from "styled-components";

const StyledUserMenu = styled.div`
  height: 12rem;
  width: 15rem;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid grey;
  box-shadow: 0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%);
  position: absolute;
  right: 10px;
  top: 4rem;
  display: flex;
  flex-direction: column;
  z-index: 10;

  .UserMenu__info {
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    .UserMenu__name {
      
    }
  }

  .UserMenu__links {
    /* border-bottom: 1px solid #d4d4d4; */
    display: flex;
    align-items: center;
    justify-content: center;

    .UserMenu__list {
      margin: 1rem 0;
    }
  }

  .UserMenu__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .UserMenu__list-item {
      padding: 0.25rem 0;
    }

    .UserMenu__link {
      text-decoration: none;
      background-color: #fff;
      color: #5f6368;
      border: none;
      font-family: var(--font-stack-segoe);
      font-size: 1rem;
      padding: 0;
      margin: 0;
    }

    .UserMenu__link:hover {
      text-decoration: underline #5f6368;
      cursor: pointer;
    }


  }

  .show {
    display: flex;
  }

  .hide {
    display: none;
  }
`

export { StyledUserMenu } 