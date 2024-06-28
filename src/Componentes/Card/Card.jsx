import styled from "styled-components";

const Imagem = styled.figure`
  display: flex;
  flex: 1;
  max-height: 244px;
  z-index: -10;
  transition: all .27s ease-in-out;
  
  & > img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: 0 0 2% 2%;
    -webkit-mask-image: linear-gradient(to bottom, black 0% ,transparent 97%);
    mask-image: linear-gradient(to bottom, black 0% ,transparent 97%);
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
    z-index: 10;
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
  margin-bottom: 1rem;
  flex-shrink: 0;
  transition: all .27s ease-in-out;

  &:hover > figure {
    cursor: pointer;
    filter: grayscale(100%) blur(4px);
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

const Assistir = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0; 
  transform: translate(60%, 35%);
  opacity: 0;
  transition: all .27s ease-in-out;

  &:hover {
    opacity: 1;
    transition: all .27s ease-in-out;
  }

  & > a {
    position: absolute;
    top: -50px;
    left: -120px;
    width: 100%;
    height: 100%;
    color: ${props => {
    switch (props.$titulo) {
      case "frontend":
        return "var(--light-blue)"
      case "backend":
        return "var(--light-green)"
      case "mobile":
        return "var(--light-yellow)"
      default:
        return "#F7F7F7"
    }
  }};
  }
  
  &:hover > * {
    filter: ${props => {
    switch (props.$titulo) {
      case "frontend":
        return "drop-shadow(20px 15px 50px var(--light-blue))"
      case "backend":
        return "drop-shadow(20px 15px 50px var(--light-green))"
      case "mobile":
        return "drop-shadow(20px 15px 50px var(--light-yellow))"
      default:
        return "drop-shadow(20px 15px 50px rgba(222, 222, 222, .7))"
    }
  }};
  backdrop-filter: brightness(-2);
  transition: all .27s ease-in-out;
  }
`

export {
  Footer, Article, Imagem, Assistir
}