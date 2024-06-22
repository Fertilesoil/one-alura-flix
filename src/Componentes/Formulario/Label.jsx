import styled from "styled-components";

export const LabelModal = styled.label`
  color: #F7F7F7;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media screen and (width < 1040px) {
    & {
      width: 100%;
    }
  }
`

export const LabelCadastro = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  width: 45%;

  @media screen and (width < 600px) {
    width: inherit;
  }

  @media screen and (width < 1000px) {
    flex: 1;
  }
`