import styled from "styled-components";

const StyledAlert = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 0.2rem;
  width: 26rem;
  font-size: 0.8rem;

  .alert--error {
    color: var(--error);
  }

  .alert--success {
    color: var(--success-text);
    margin-bottom: 0.05rem;
  }

  .alert--neutral {
    color: var(--neutral);
  }

  .alert--helper {
    color: #5A6572;
    width: 100%;
  }

  .alert-icon {
    margin-right: 0.25rem;
    flex-shrink: 0;
    margin-top: 0.1rem;
  }

  .alert-icon--neutral {
    margin-left: -0.04rem;
    margin-right: 0.2rem;
    margin-top: 0.05rem;
  }

  /* Landscape phones/portrait tables */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 26rem;
  }
`

export { StyledAlert }