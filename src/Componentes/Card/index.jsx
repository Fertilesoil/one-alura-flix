import { contextoAlura } from "../../Context/UseContextHook";
import { Clapperboard, PencilLine, Trash } from "lucide-react"
import { Article, Imagem, Footer } from "./Card";
import { cardPropTypes } from "../../Validacoes/PropTypes";

const Card = ({ titulo, imagem, id }) => {

  const { setOpenModal, videos, setVideoAtual } = contextoAlura();

  const abrirModal = () => {
    const videoAtual = videos[titulo].find(video => video.id === id);
    setVideoAtual(videoAtual);
    setOpenModal(estado => !estado)
  }

  return (
    <Article $titulo={titulo}>
      <Imagem>
        <img src={imagem} alt={titulo} />
      </Imagem>

      <Footer $titulo={titulo}>
        <button>
          <Trash strokeWidth={`2.5px`} size={27} />
        </button>

        <button onMouseDown={abrirModal}>
          <PencilLine strokeWidth={`2.5px`} size={27} />
        </button>

        <button>
          <Clapperboard strokeWidth={`2.5px`} size={27} />
        </button>
      </Footer>
    </Article>
  )
}

Card.propTypes = cardPropTypes;

export default Card