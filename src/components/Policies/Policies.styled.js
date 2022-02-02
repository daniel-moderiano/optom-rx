import styled from "styled-components";

const StyledPolicy = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 1.5rem 5rem 1.5rem;

  h2 {
    width: 100%;
    font-size: 3em;
    margin: 0 0 0.5rem 0;
  }

  .Policy__date {
    width: 100%;
    margin-bottom: 0;
  }

  section {
    width: 100%;
  }

  a {
    color: var(--neutral);

    &:hover {
      text-decoration: none;
    }
  }

  p {
    margin: 1rem 0;
    padding: 0;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 1.25rem 0 1.25rem 0;
  }

  ul {
    padding: 0 0 0 1rem;
    li {
      padding: 0.25rem 0;
    }
  }

  @media (max-width: 768px) {
    .Privacy__heading {
      font-size: 2.5em;
    }
    h3 {
      font-size: 1.7rem;
      font-weight: 600;
      margin: 1.25rem 0 1.25rem 0;
    }
  }

  @media (max-width: 450px) {
    .Privacy__heading {
      font-size: 2.1rem;
    }
    h3 {
      font-size: 1.6rem;
      font-weight: 600;
      margin: 1.25rem 0 1.25rem 0;
    }
  }


`

export { StyledPolicy }