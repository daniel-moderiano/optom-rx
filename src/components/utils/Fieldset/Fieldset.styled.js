import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border: none;
  /* padding: 2.6rem 1rem 2.5rem 4rem; */
  /* padding: 3.7rem 5.5rem 3.75rem 5.5rem; */
  padding: 2rem 0;
  background-color: #fff;
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
  border-bottom: 1px solid #dfe1e1;
  /* box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%); */

  legend {
    float: left;    // Moves the legend within the fieldset
    padding: 0;
    font-size: 1.6rem;
    font-family: var(--font-title);
    color: var(--title-color);
    width: 16rem;
    flex-shrink: 0;
  }

  .container {
    width: auto;
    display: flex;
    flex-direction: column;
    margin-top: -0.16rem;
    /* padding-right: 2rem; */
    /* width: 100%; */
    /* margin-left: 3rem; */
  }

`

export default StyledFieldset