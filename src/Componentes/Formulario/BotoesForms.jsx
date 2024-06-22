import styled from "styled-components";

export const BotoesForms = styled.div`
  display: flex;
  justify-content: space-around;
`

export const BotoesCadastro = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (width < 600px) {
    flex-direction: column;
    align-items: center;
  }
`