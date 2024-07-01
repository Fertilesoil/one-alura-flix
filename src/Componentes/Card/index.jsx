import { contextoAlura } from "../../Context/UseContextHook";
import { PencilLine, Trash, TvMinimalPlay } from "lucide-react"
import { Article, Imagem, Footer, Assistir } from "./Card";
import { cardPropTypes } from "../../Validacoes/PropTypes";
import { Link } from "react-router-dom";

const Card = ({ titulo, imagem, id, alt }) => {

  const { apagarCard, abrirModal } = contextoAlura();

  return (
    <Article $titulo={titulo}>
      <Imagem>
        <img src={imagem} alt={alt} />
      </Imagem>

      <Footer $titulo={titulo}>
        <button onMouseDown={() => apagarCard(id, titulo)}>
          <Trash strokeWidth={`2.5px`} size={27} />
        </button>

        <button onMouseDown={() => abrirModal(titulo, id)}>
          <PencilLine strokeWidth={`2.5px`} size={27} />
        </button>

        <Assistir $titulo={titulo}>
          <Link to={`video/${id}`}>
            <TvMinimalPlay strokeWidth={`1px`} size={160} />
          </Link>
        </Assistir>
      </Footer>
    </Article>
  )
}

Card.propTypes = cardPropTypes;

export default Card