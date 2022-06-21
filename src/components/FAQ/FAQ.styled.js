import styled from "styled-components";

const StyledFAQ = styled.div`
max-width: 1140px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #fff;
padding: 3rem 3.5rem 5rem 3.5rem;
border-radius: 6px;

h2 {
  width: 100%;
  font-size: 3em;
  margin: 0 0 0.5rem 0;
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
  padding: 0;
  li {
    padding: 0.25rem 0;
  }
}

article {
  padding-bottom: 1rem;
}

.FAQ__list {
  list-style: none;
}

/* Large screens */
@media (min-width: 1000px) {
  padding: 3rem 7.5rem 5rem 7.5rem;
}

/* Tablets and below */
@media (max-width: 768px) {
  padding: 3rem 2.5rem 5rem 2.5rem;

  h2 {
    font-size: 2.5em;
  }
  h3 {
    font-size: 1.7rem;
    font-weight: 600;
    margin: 1.25rem 0 1.25rem 0;
  }
}

/* Phone portrait screens */
@media (max-width: 450px) {
  padding: 2rem 1.5rem 4rem 1.5rem;

  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    margin: 1.25rem 0 1.25rem 0;
  }
}
`

export { StyledFAQ }