import styled from "styled-components"

const WrapperDropDown = styled.div`
  position: relative;
  bottom: ${props => props.$tipo === "cadastro" ? "-9px" : ""};
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
  min-width: ${props => props.$tipo === "cadastro" ? "20rem" : ""};
  color: #f7f7f7d5;
  background: transparent;
  border: ${props => {
    switch (props.$tipo) {
      case "modal":
        return "2px solid var(--standard-blue)"
      case "cadastro":
        return "2px solid var(--forms-grey)"
      default:
        return
    }
  }};
  border-radius: .5rem;
  font-size: 1rem;
  padding: ${props => {
    switch (props.$tipo) {
      case "modal":
        return ".87rem"
      case "cadastro":
        return ".80rem"
      default:
        return
    }
  }};
  cursor: pointer;
  transition: all .37s ease-in-out;

  &:focus-within {
    border:  ${props => {
    switch (props.$tipo) {
      case "modal":
        return "2px solid var(--light-blue)"
      case "cadastro":
        return "2px solid #404040"
      default:
        return
    }
  }};
    box-shadow: ${props => {
    switch (props.$tipo) {
      case "modal":
        return "4px 4px 7px rgba(0,0,0,.5)"
      case "cadastro":
        return "3px 3px 8px rgba(0,0,0,.5)"
      default:
        return
    }
  }};
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
  background: ${props => {
    switch (props.$tipo) {
      case "modal":
        return "#03122f"
      case "cadastro":
        return "#191919"
      default:
        return
    }
  }};
  border: ${props => {
    switch (props.$tipo) {
      case "modal":
        return "2px solid var(--light-blue)"
      case "cadastro":
        return "2px solid #404040"
      default:
        return
    }
  }};
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

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background: ${props => {
    switch (props.$tipo) {
      case "modal":
        return "#6bd0ff6a"
      case "cadastro":
        return "#404040"
      default:
        return
    }
  }};
  }

  &:nth-of-type(1) {
    border-top-right-radius: .3rem;
    border-top-left-radius: .3rem;
  }

  &:nth-last-of-type(1) {
    border-bottom-right-radius: .3rem;
    border-bottom-left-radius: .3rem;
  }
`

export {
  WrapperDropDown,
  Paragrafo,
  Wrapper,
  BotaoDrop,
  ConteudoDrop,
  OptionDrop
}