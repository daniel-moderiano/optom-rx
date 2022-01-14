import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .hamburger {
    display: none;

    .bar {
      display: block;
      width: 25px;
      height: 2px;
      margin: 6px auto;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      background-color: ${props => props.user ? '#FFFFFF' : 'var(--primary-color)'}
    }
  }

  .hamburger--auth {
    display: none;

    .bar {
      display: block;
      width: 25px;
      height: 2px;
      margin: 6px auto;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      background-color: var(--primary-color);
    }
  }

  .Nav__list {
    list-style: none;
    display: flex;
    margin: 0;
    /* padding-top: 0rem; */
    justify-content: space-between;
    align-items: center;
    /* overflow-y: auto; */


    .Nav__list-item {
      font-size: 1.1rem;
      padding: 0rem 0.65rem 0.2rem 0.65rem;

      .Nav__link--std {
        text-decoration: none;
        color: ${props => props.user ? '#FFF' : 'var(--primary-color)'};
        padding-bottom: 5px;
        position: relative;
        padding-right: 0.2rem;
        padding-left: 0.2rem;
        border: 0px solid transparent;
        border-radius: 2px;
        
        &:before,
        &:after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0; right: 0;
          height: 0.1rem;
          background-color: #fff;
        }
        &:before {
          opacity: 0;
          transform: translateY(4px);
          transition: transform 0s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s;
        }
        &:after {
          opacity: 0;
          transform: translateY(2px);
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.2s;
        }

        &:hover {
          &:before,
          &:after {
            opacity: 1;
            transform: translateY(0);
          }
          &:before {
            transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.2s;
          }
          &:after {
            transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s 0.2s;
          }
        }

        &:focus {
          /* Focus fallback for browsers that do not suppert :focus-visible */
          outline: 0.1rem solid white;
          outline-offset: 1px;
        }

        &:focus:not(:focus-visible) {
          /* Remove the focus indicator on mouse-focus for browsers
            that do support :focus-visible */
          outline: none
        }

        &:focus-visible {
          /* Keyboard only focus styling, able to differ from fallback styling if required */
          outline: 0.1rem solid white;
          outline-offset: 1px;
        }
        
      }

      [aria-current=page] {
       
        &:before,
        &:after {
          opacity: 1;
          transform: translateY(0);
        }
        &:before {
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.2s;
        }
        &:after {
          transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s 0.2s;
        }
      }

      .Nav__link--active {
        &:before,
        &:after {
          opacity: 1;
          transform: translateY(0);
        }
        &:before {
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.2s;
        }
        &:after {
          transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s 0.2s;
        }
      }

      .Nav__link--login, .Nav__link--signup {
        
        &:before,
        &:after {
          background-color: var(--primary-color);
        }

        &:focus {
          outline: 0.1rem solid var(--primary-color);
          outline-offset: 1px;
        }

        &:focus {
          outline: 0.1rem solid var(--primary-color);
          outline-offset: 1px;
        }

        &:focus:not(:focus-visible) {
          outline: none
        }

        &:focus-visible {
          outline: 0.1rem solid var(--primary-color);
          outline-offset: 1px;
        }
      }

      .Nav__link--signup {
        /* border: 0.1rem solid var(--primary-color); */
        /* border-radius: 5px; */
        /* padding: 0.4rem 1rem 0.5rem 1rem; */
        text-decoration: none;
        color: ${props => props.user ? '#FFF' : 'var(--primary-color)'};
      }

      .Nav__link--logout {
        
        background-color: var(--primary-color);
        margin: 0;
        margin-top: 5px;
        padding: 0 0.2rem 5px 0.2rem;
        border: none;
        font-family: var(--font-stack-segoe);
        font-size: 1.1rem;
        

        &:hover {
          cursor: pointer;
        }

        &:focus {
          outline: 0.1rem solid white;
          outline-offset: 1px;
        }

        &:focus:not(:focus-visible) {
          outline: none
        }

        &:focus-visible {
          outline: 0.1rem solid white;
          outline-offset: 1px;
        }
      
      }
    }
  }

  /* Landscape phones and down */
  @media (max-width: 480px) { 
   
  }

  /* Landscape phone to portrait tablet */
  @media (max-width: 768px) { 
    .Nav__list {
      position: fixed;
      left: calc(-100% - 1rem);
      top: ${props => props.user ? '3.4rem' : '5.8rem'};
      flex-direction: column;
      background-color: #fff;
      width: 100vw;
      border-radius: 10px;
      text-align: center;
      transition: 0.3s;
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
      overflow-y: auto;
      max-height: calc(100% - 4rem);
      z-index: 1000;
      border-radius: 0;
      padding: 0;

      .Nav__list-item {
        margin: 1.25rem 0;
        border-radius: 0;

        .Nav__link {
          color: var(--primary-color);
          font-size: 1.1rem;

          &:before,
          &:after {
            background-color: var(--primary-color);
          }
          
        }

        .Nav__link--logout {
          color: var(--primary-color);
          background-color: #fff;
          margin: 0;
          padding: 0 0 5px 0;
          border: none;
          font-family: var(--font-stack-segoe);
          font-size: 1.1rem;
        }

      }
    }

    .Nav__list.active {
      left: 0;
      margin: 0;
      padding: 0;
    }
    

    .hamburger {
      display: block;
      cursor: pointer;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
  /* Portrait tablet to landscape and desktop */
  /* @media (min-width: 768px) and (max-width: 980px) { ... } */

  /* Large desktop */
  /* @media (min-width: 1200px) { ... } */
`

export { StyledNav }