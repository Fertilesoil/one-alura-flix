import styled from "styled-components";

export const IconeFechamento = styled.button`  
  position: absolute;
  top: 20px;
  left: 49rem;
  cursor: pointer;
  background: transparent;
  color: #F7F7F7;

  @media screen and (width < 940px) {
    & {
      left: 38rem;
    }
  }

  @media screen and (width < 770px) {
    & {
      top: 3px;
      left: 25rem;
    }
  }

  @media screen and (width < 700px) {
    & {
      top: 5px;
      left: 20rem;
    }
  }
`