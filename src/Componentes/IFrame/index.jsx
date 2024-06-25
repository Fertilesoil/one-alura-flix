import styled from "styled-components";
import { contextoAlura } from "../../Context/UseContextHook";
import ReactMarkdown from "react-markdown";

const Wrapper = styled.main`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 0;
`

const Frame = styled.iframe`
  border-radius: .7rem;
  width: 70%;
  height: 60vh;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, .7);
`

const Descricao = styled.section`
  padding: 0 8rem;
  color: white;
  font-family: var(--font-source-sans);

  & > h1 {
    margin-bottom: 1rem;
  }

  & > p {
    line-height: 1.1lh;
    color: white;
  }
`

const NaoEncontrado = styled.h1`

`

const IFrame = () => {

  const { cardAtual } = contextoAlura();

  if (cardAtual.video === undefined) {
    return (
      <Wrapper>
        <NaoEncontrado />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Frame
        src={`https://www.youtube.com/embed/${cardAtual.video?.split("=")[1]}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen />

      <Descricao>
        <ReactMarkdown>
          {String(cardAtual.titulo)}
        </ReactMarkdown>

        <ReactMarkdown>
          {String(cardAtual.descricao)}
        </ReactMarkdown>
      </Descricao>
    </Wrapper>
  )
}

export default IFrame