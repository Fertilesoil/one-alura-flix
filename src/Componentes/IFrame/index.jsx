/* eslint-disable react-hooks/exhaustive-deps */
import ReactMarkdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import { Descricao, Wrapper, Frame } from "./IFrame";

const IFrame = () => {
  const card = useLoaderData();

  return (
    <Wrapper>
      <Frame
        src={`https://www.youtube.com/embed/${card?.video}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen />

      <Descricao>
        <ReactMarkdown>
          {card?.titulo && String(card?.titulo)}
        </ReactMarkdown>

        <ReactMarkdown>
          {card?.descricao && String(card?.descricao)}
        </ReactMarkdown>
      </Descricao>
    </Wrapper>
  )
}

export default IFrame