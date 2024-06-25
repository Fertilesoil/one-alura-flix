import { contextoAlura } from "../../Context/UseContextHook";
import { PencilLine, Trash, TvMinimalPlay } from "lucide-react"
import { Article, Imagem, Footer } from "./Card";
import { cardPropTypes } from "../../Validacoes/PropTypes";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Card.css"

const Assistir = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0; 
  transform: translate(31%, 18%);
  opacity: 0;
  transition: all .27s ease-in-out;

  &:hover {
    filter: drop-shadow(3px 3px 14px rgba(222, 222, 222, .7));
    opacity: 1;
    transition: all .27s ease-in-out;
  }
`

const Card = ({ titulo, imagem, id }) => {

  const { setOpenModal, videos, setVideoAtual, setCardAtual } = contextoAlura();

  const abrirModal = () => {
    const videoAtual = videos[titulo].find(video => video.id === id);
    setVideoAtual(videoAtual);
    setOpenModal(estado => !estado)
  }

  const setarCard = () => {
    const videoAtual = videos[titulo].find(video => video.id === id);
    setCardAtual(videoAtual);
  }

  return (
    <Article $titulo={titulo}>
      <Imagem>
        <img src={imagem} alt={titulo} />
      </Imagem>

      <Footer $titulo={titulo}>
        <button className="botao">
          <Trash strokeWidth={`2.5px`} size={27} />
        </button>

        <button className="botao" onMouseDown={abrirModal}>
          <PencilLine strokeWidth={`2.5px`} size={27} />
        </button>

        <Assistir>
          <Link className={`link-${titulo}`} to={`video`} onMouseDown={setarCard}>
            <TvMinimalPlay strokeWidth={`1px`} size={160} />
          </Link>
        </Assistir>
      </Footer>
    </Article>
  )
}

Card.propTypes = cardPropTypes;

export default Card