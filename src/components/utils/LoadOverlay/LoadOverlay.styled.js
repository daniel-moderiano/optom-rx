import styled from "styled-components";

const StyledLoadOverlay = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: calc(100%);
  width: 100%;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  .Spinner {
    margin: 0;
  }

`

export { StyledLoadOverlay } 