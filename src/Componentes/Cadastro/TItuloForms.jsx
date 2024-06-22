import styled from "styled-components";

const TituloForms = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-transform: uppercase;
  color: var(--font-white);

  & > * {
    font-family: var(--font-roboto);
  }
`

const Titulo = styled.h1`
  font-size: 3rem;
`

const SubTitulo = styled.h3`
  font-weight: 400;
`

export {TituloForms, Titulo, SubTitulo}