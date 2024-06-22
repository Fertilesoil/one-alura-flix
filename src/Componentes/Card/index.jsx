import { contextoAlura } from "../../Context/UseContextHook";
import { PencilLine, Trash } from "lucide-react"
import { Article, Imagem, Footer } from "./Card";
import { cardPropTypes } from "../../Validacoes/PropTypes";

const Card = ({ imagem, titulo }) => {

  const { setOpenModal } = contextoAlura();

  console.log(imagem);
  return (
    <Article $titulo={titulo}>
      <Imagem>
        <img src={imagem} alt={titulo} />
      </Imagem>

      <Footer $titulo={titulo}>
        <button>
          <Trash strokeWidth={`2.5px`} size={27} />
        </button>

        <button onMouseDown={() => setOpenModal(estado => !estado)}>
          <PencilLine strokeWidth={`2.5px`} size={27} />
        </button>
      </Footer>
    </Article>
  )
}

Card.propTypes = cardPropTypes;

export default Card