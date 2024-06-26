import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;

  @media screen and (width < 400px) {
    padding: 1rem 0;
  }
`

const Frame = styled.iframe`
  border-radius: .7rem;
  width: 70%;
  height: 60vh;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, .7);

  @media screen and (width < 600px) {
    & {
      width: 90%;
    }
  }
`

const Descricao = styled.section`
  padding: 0 8rem;
  color: white;
  font-family: var(--font-source-sans);

  & > h1 {
    margin-bottom: .5rem;
  }

  & > p:not(:last-child) {
    margin-bottom: .5rem;
    color: white;
  }

  @media screen and (width < 600px) {
    & {
      padding: 0 2rem;
    }
  }
`

export { Wrapper, Frame, Descricao }