import styled from "styled-components";

export const ModalFormulario = styled.dialog`
  position: fixed;
  overflow-x: hidden;
  top: 5%;
  left: 25%;
  transform: translateX(-50%, -50%);
  max-height: 90vh;
  max-width: 100dvw;
  min-height: auto;
  min-width: 53rem;
  border: 3px solid var(--light-blue);
  border-radius: .7rem;
  background: #03122F;
  padding: 2rem;
  z-index: 20;
  transition: all .37s;
  
  &::-webkit-scrollbar-track {
    border-radius: 0 .8rem .8rem 0;
    background-color: #2271D12B;
  }

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to right, var(--standard-blue), #1458ac);
    border-radius: 0 .8rem .8rem 0;
  }

  @media screen and (width < 1290px) {
    & {
      left: 15%;
    }
  }

  @media screen and (width < 1040px) {
    & {
      left: 5%;
    }
  }

  @media screen and (width < 940px) {
    & {
      left: 15%;
      min-width: 43rem;
    }
  }

  @media screen and (width < 840px) {
    & {
      left: 10%;
      min-width: 43rem;
    }
  }

  @media screen and (width < 770px) {
    & {
      left: 20%;
      min-width: 13rem;
    }
  }

  @media screen and (width < 700px) {
    & {
      left: 20%;
      min-width: 23rem;
    }
  }

  @media screen and (width < 490px) {
    & {
      left: 10%;
      min-width: 23rem;
    }
  }

  @media screen and (width < 425px) {
    & {
      left: 5%;
      min-width: 23rem;
    }
  }
`