import styled from "styled-components";

const Imagem = styled.figure`
  display: flex;
  flex: 1;
  position: relative;
  transition: all .27s ease-in-out;

  & > img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: 0 0 2% 2%;
    -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
    transition: all .27s ease-in-out;
  }
`

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
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  transition: all .27s ease-in-out;

  &:hover > figure {
    cursor: pointer;
    filter: grayscale(100%) blur(2px);
    transition: all .27s ease-in-out;
  }

  &:hover > figure > img {
    transform: scale(1.05);
    transition: all .27s ease-in-out;
  }

  &:hover:not(footer ~) {
    filter: grayscale(100%);
    transition: all .27s ease-in-out;
  }
`

export {
  Footer, Article, Imagem
}