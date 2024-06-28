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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 86%;
  padding: 0 8rem;
  color: white;
  font-family: var(--font-source-sans);
  transition: all .37s;

  & > h1 {
    margin-bottom: .5rem;
    color: #9BE1EB;
  }

  & > h3 {
    color: #DAA520;
  }

  & > p:not(:last-child) {
    margin-bottom: .4rem;
  }

  & > p {
    font-weight: 500;
    color: #DBDBCC;
    font-size: 1.05rem;
  }

  @media screen and (width < 1020px) {
    & {
      padding: 0 6rem;
      width: 100%;
    }
  }

  @media screen and (width < 600px) {
    & {
      padding: 0 2rem;
      width: 100%;
    }
  }
`

export { Wrapper, Frame, Descricao }