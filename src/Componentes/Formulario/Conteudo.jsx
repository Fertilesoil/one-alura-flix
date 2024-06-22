import styled from "styled-components";

export const ConteudoModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-roboto);

  & > h2 {
    color: var(--standard-blue);
    font-size: 60px;
    font-weight: 900;
    text-transform: uppercase;
  }

  @media screen and (width < 700px) {
    & > h2 {
      font-size: 2rem;
    }
  }
`

export const SectionCadastro = styled.section`
  display: flex;
  flex-flow: column wrap;
  gap: 1.3rem;
  margin-top: 2rem;
`

export const WrapperCadastro = styled.div`
  border-top: 1px solid var(--forms-grey);
  border-bottom: 1px solid var(--forms-grey);
  padding: 1.3rem 0;
  color: var(--font-white);

  @media screen and (width < 600px) {
    width: 100%;
  }
`

export const DivisoriaCadastro = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (width < 600px) {
    width: 100%;
    flex-flow: column wrap;
  }
`