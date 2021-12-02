import styled from "styled-components";

const StyledUserMenu = styled.div`
  height: 20rem;
  width: 20rem;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid grey;
  box-shadow: 0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%);
  position: absolute;
  right: 10px;
  top: 4rem;

  .show {
    display: flex;
  }

  .hide {
    display: none;
  }
`

export { StyledUserMenu } 