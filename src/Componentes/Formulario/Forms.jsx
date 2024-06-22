import styled from "styled-components";

export const FormsModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  margin-top: 2rem;
  width: 60%;
  height: fit-content;
  font-family: var(--font-source-sans);
  
  & * {
  font-family: var(--font-source-sans);
  }

  @media screen and (width < 1040px) {
    & {
      width: 100%;
    }
  }
`

export const FormsCadastro = styled.form`
  display: flex;
  flex-flow: column wrap;
  gap: 2.5rem;

  & > * {
    color: var(--font-white);
    font-family: var(--font-source-sans);
  }

  @media screen and (width < 600px) {
    width: 100%;
    align-items: center;
  }
`