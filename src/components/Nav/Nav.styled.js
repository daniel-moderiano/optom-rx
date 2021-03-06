import styled from "styled-components";

const StyledNav = styled.nav`
  .Nav__list {
    list-style: none;
    display: flex;
    margin: 0;
    justify-content: space-between;

    .Nav__list-item {
      padding: 0 0 0 1.5rem;

      .Nav__link--std {
        text-decoration: none;
        color: ${props => props.user ? '#FFF' : 'var(--primary-color)'};
        font-family: var(--font-stack-segoe);
        font-weight: 400;
        font-size: 1.05rem;
        padding-bottom: 5px;  // Adds space btween link and underline
        position: relative;
        background-color: transparent;
        border: none;
        padding: 0 0 5px 0;
        margin: 0;
        box-sizing: border-box;
        
        /* Nav link underline styling */
        &:before,
        &:after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0; right: 0;
          height: 0.08rem;
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
          cursor: pointer;

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
          /* Focus fallback for browsers that do not support :focus-visible */
          outline: 0.1rem solid white;
          outline-offset: 1px;
          border-radius: 2px;
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
          border-radius: 2px;
        }
        
      }

      /* Permanent underline for the active page */
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

      /* Adjust colours for login/signup links */
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

      .Nav__link--homepage {
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
        padding: 0.15rem 0.7rem 0.35rem 0.7rem;
        background-color: var(--primary-color);
        color: #fff;
        border: 1px solid transparent;
        height: auto;
        border-radius: 2px;

        &:hover {
          background-color: transparent;
          border: 1px solid var(--primary-color);
          color: var(--primary-color);
        }

        &:focus {
          outline: 2px solid #104362;
          outline-offset: 1px;
        }

        &:focus:not(:focus-visible) {
          outline: none
        }

        &:focus-visible {
          outline: 0.1rem solid var(--primary-color);
          outline-offset: 2px;
        }
        &:before,
        &:after {
          display: none;
        }
      }
    }
  }


  /* Landscape phone to portrait tablet */
  @media (max-width: 768px) { 
    .Nav__list {
      position: fixed;
      left: calc(-100% - 1rem);
      top: ${props => props.user ? '3.8rem' : '5.8rem'};
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
        padding: 1.1rem 0;

        .Nav__link--signup {
          border: none;
          padding: 0 0 5px 0;
          background-color: transparent;
          
          &:before,
          &:after {
            display: block;
          }

          &:hover {
            background-color: #fff;
            border: none;
          }
        }

        .Nav__link {
          color: var(--primary-color);
          
          &:before,
          &:after {
            background-color: var(--primary-color);
          }
        }
      }
    }

    .Nav__list.active {
      left: 0;
      margin: 0;
      padding: 0;
    }
  }
`

export { StyledNav }