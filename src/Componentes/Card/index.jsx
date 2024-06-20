import { PencilLine, Trash } from "lucide-react"
import styled from "styled-components"
import { contextoAlura } from "../../Context/UseContextHook";

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 15%;

  & > button {
    background: transparent;
    color: ${props => {
    switch (props.$titulo) {
      case "frontend":
        return "var(--light-blue)";
      case "backend":
        return "var(--light-green)"
      case "mobile":
        return "var(--light-yellow)"
      default:
        return "#F7F7F7"
    }
  }};
    cursor: pointer;
  }
`

const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 18rem;
  border-radius: .5rem;
  box-shadow: ${props => {
    switch (props.$titulo) {
      case "frontend":
        return "var(--blue-shadow)";
      case "backend":
        return "var(--green-shadow)"
      case "mobile":
        return "var(--yellow-shadow)"
      default:
        return
    }
  }};
  background: var(--dark);
  margin-bottom: 1rem;
  flex-shrink: 0;
`

const Imagem = styled.figure`
  display: flex;
  flex: 1;
  position: relative;

  & > img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: 0 0 2% 2%;
    -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
  }
`

const Card = ({ imagem, titulo }) => {

  const { setOpenModal } = contextoAlura();

  return (
    <Article $titulo={titulo}>
      <Imagem>
        <img src={imagem} alt={titulo} />
      </Imagem>

      <Footer $titulo={titulo}>
        <button>
          <Trash strokeWidth={`2.5px`} size={27} />
        </button>

        <button onClick={() => setOpenModal(estado => !estado)}>
          <PencilLine strokeWidth={`2.5px`} size={27} />
        </button>
      </Footer>
    </Article>
  )
}

export default Card