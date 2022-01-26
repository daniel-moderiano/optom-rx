import styled from "styled-components";

const StyledTooltip = styled.div`
    position: relative;
    display: inline-block;
    line-height: 0;

    .question-icon {
      opacity: 0.5;
      width: 22px;
    }

    .question-icon:hover {
      opacity: 1.0;
    }

    .tooltip-text {
      visibility: hidden;
      width: 15.5rem;
      background-color: #3D3D3D;
      color: #fff;
      text-align: left;
      font-size: 0.9rem;
      padding: 0.6rem 0.75rem 0.75rem 0.9rem;
      border-radius: 6px;
      position: absolute;
      z-index: 1;
      left: 125%;
      top: 50%;
      margin-top: -0.05rem;
      transform: translateY(-50%);
      line-height: normal;

      /* Fade in tooltip */
      opacity: 0;
      transition: opacity 0.3s;

      a {
        color: #c9d5dc;
      }

      /* Tooltip arrow */
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 100%;
        margin-top: -4px;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent #555 transparent transparent;
      }
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    &:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
    }

  /* Landscape phones/portrait tables */
  @media (max-width: 800px) {
    .tooltip-text {
      left: -16rem;
      top: 50%;
      margin-top: -0.05rem;
      transform: translateY(-50%);

      &::after {
        left: 100%;
        margin-left: 0px;
        border-color: transparent transparent transparent #555;
      }
    }
  
  }

  /* Portrait phones */
  @media (max-width: 420px) {
    .tooltip-text {
      width: 10rem;
      left: -10.5rem;
    }
  }
`

export { StyledTooltip }