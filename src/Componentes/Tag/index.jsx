import styled from "styled-components"

const TagPadrao = styled.div`
  text-transform: uppercase;
  background-color: ${props => {
    switch (props.$secao) {
      case "backend":
        return "var(--light-green)";
      case "frontend":
        return "var(--light-blue)";
      case "mobile":
        return "var(--light-yellow)";
      default:
        return "white";
    }
  }};
  color: #F7F7F7;
  font-family: var(--font-roboto);
  border-radius: .4rem;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => {
    switch (props.$tamanho) {
      case "lg":
        return "27rem";
      case "sm":
        return "17.8rem";
      default:
        return "27rem";
    }
  }};
  font-size: ${props => {
    switch (props.$tamanho) {
      case "lg":
        return "2rem";
      case "sm":
        return "1.4rem";
      default:
        return "1.4rem";
    }
  }};
  font-weight: 600;
  transition: all .37s ease-out;

  @media screen and (width < 850px) {  
    width: ${props => props.$tamanho && "17.8rem"};
    font-size: ${props => props.$tamanho && "1.8rem"};
    transition: all .37s ease-out;
  }
`

const Tag = ({ secao, children, tamanho }) => {
  return (
    <TagPadrao $secao={secao} $tamanho={tamanho}>
      {children}
    </TagPadrao>
  )
}

export default Tag