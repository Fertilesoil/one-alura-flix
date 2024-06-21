import React from "react"
import styled from "styled-components"
import { ChevronDown, ChevronUp } from "lucide-react"
import { gruposDeCards } from "../../../Utils/Utilidades"

const WrapperDropDown = styled.div`
  position: relative;
  
`

const Paragrafo = styled.p`
  color: #f7f7f7d5;
  margin: 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

const BotaoDrop = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #f7f7f7d5;
  background: transparent;
  border: 2px solid var(--standard-blue);
  border-radius: .5rem;
  font-size: 1rem;
  padding: .87rem;
  cursor: pointer;
  transition: all .37s ease-in-out;

  &:focus-within {
    border: 2px solid var(--light-blue);
    box-shadow: 4px 4px 7px rgba(0,0,0,.5);
    transition: all .37s ease-in-out;
  }

  & ~ * {
    color: #F7F7F7;
  }
`

const ConteudoDrop = styled.div`
  width: 100%;
  position: absolute;
  margin-top: 1rem;
  background: #03122f;
  border: 2px solid var(--light-blue);
  border-radius: .5rem;
  min-height: 3.5rem;
  box-shadow: 4px 4px 7px rgba(0,0,0,.5);
  animation: ${props => props.$ativo ? `drop-out .57s` : `drop-in .55s`};
  transition: all .37s ease-in-out;

  @keyframes drop-out {
    from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(-15px);
  }
  }

  @keyframes drop-in {
    from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
  }   
`

const OptionDrop = styled.button`
  display: block;
  width: 100%;
  color: inherit;
  background: inherit;
  height: 2.7rem;
  padding: .87rem;
  text-align: start;
  cursor: pointer;

  &:hover {
    background: #6bd0ff6a;
  }

  &:nth-of-type(1) {
    border-radius: 5% 5% 0 0;
  }

  &:nth-last-of-type(1) {
    border-radius: 0 0 5% 5%;
  }
`

export const CampoCategoria = ({ campo }) => {

  const temas = Object.keys(gruposDeCards);
  const [drop, setDrop] = React.useState(false);
  const [existe, setExiste] = React.useState(false);
  const [categoria, setCategoria] = React.useState("Escolha sua categoria...");

  // const temas = ["Empresa", "Troca", "Mouse"];

  const toggleDropdown = () => {
    if (drop) {
      setExiste(true);
      setTimeout(() => {
        setDrop(false);
        setExiste(false);
      }, 570);
    } else {
      setDrop(true);
    }
  };

  return (
    <Wrapper>
      <Paragrafo>{campo}</Paragrafo>
      <WrapperDropDown>
        <BotaoDrop onClick={(e) => {
          e.preventDefault();
          return toggleDropdown();
        }}>
          {categoria}

          {drop ? <ChevronUp /> : <ChevronDown />}
        </BotaoDrop>

        {drop &&
          <ConteudoDrop $ativo={existe}>
            {temas.map((tema) => {
              return <OptionDrop key={tema}>{tema}</OptionDrop>
            })}
          </ConteudoDrop>
        }
      </WrapperDropDown>
    </Wrapper>
  )
}