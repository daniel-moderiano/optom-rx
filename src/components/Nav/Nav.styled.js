import styled from "styled-components";

const StyledNav = styled.nav`

  

  .Nav__list {
    list-style: none;
    display: flex;
    margin: 0;
    padding-top: 0rem;



    .Nav__list-item {
      font-size: 1.1rem;
      padding: 0.85rem 0.65rem 0 0.65rem;

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
        padding: 0 0.2rem;
        border: none;
        font-family: var(--font-stack-segoe);
        font-size: 1.1rem;
        padding-bottom: 6px;

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

    

    

    .UserMenu__toggle {
      background-color: var(--primary-color);
      font-family: var(--font-stack-segoe);
      font-size: 1.1rem;
      margin: 0;
      padding: 0;
      border: none;
      display: flex;
      /* align-items: center; */

      .UserMenu__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 0.9rem;
        margin-left: 0.2rem;
        width: 1.1rem;
        height: 1.1rem;
      }

      &:hover {
        cursor: pointer;
      }
    }

  }
`

export { StyledNav }