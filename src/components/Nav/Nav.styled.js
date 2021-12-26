import styled from "styled-components";

const StyledNav = styled.nav`
  .Nav__list {
    list-style: none;
    display: flex;

    .Nav__list-item {
      font-size: 1.2rem;
      padding: 0 0.75rem;

      .Nav__link {
        text-decoration: none;
        color: ${props => props.user ? '#FFF' : 'var(--primary-color)'};
      }

      .Nav__logout-btn {
        border: none;
        font-size: 1.2rem;
        font-family: var(--font-stack-segoe);
        background-color: var(--primary-color);
        margin: 0;
        padding: 0;
        color: #FFFFFF;
      }

      .Nav__logout-btn:hover {
        cursor: pointer;
      }
    }

    .UserMenu__toggle {
      background-color: var(--primary-color);
      font-family: var(--font-stack-segoe);
      font-size: 1.2rem;
      margin: 0;
      padding: 0;
      border: none;
      display: flex;
      align-items: center;

      .UserMenu__icon {
        font-size: 0.8rem;
        padding-left: 0.3rem;
        padding-top: 0.2rem;
      }

      &:hover {
        cursor: pointer;
      }
    }

  }
`

export { StyledNav }