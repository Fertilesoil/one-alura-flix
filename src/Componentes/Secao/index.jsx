import styled from "styled-components"
import Tag from "../Tag"
import Card from "../Card/index";

const SecaoTema = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`

const Tema = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  &::-webkit-scrollbar-track {
    border-radius: .7rem;
    background-color: #2271D12B;
  }

  &::-webkit-scrollbar {
    height: .7rem;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, var(--standard-blue), #1458ac);
    border-radius: .7rem;
  }
`

const Secao = ({ secao = "frontend", children }) => {
  
  return (
    <SecaoTema>
      <Tag secao={secao} tamanho={`lg`}>
        {secao}
      </Tag>
      <Tema>
        {children}
      </Tema>
    </SecaoTema>
  )
}

export default Secao