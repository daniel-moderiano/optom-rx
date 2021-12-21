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
        color: #FFFFFF;
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

  }
`

export { StyledNav }