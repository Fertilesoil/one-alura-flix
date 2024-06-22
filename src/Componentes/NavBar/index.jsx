import styled from 'styled-components'
import logo from "../../assets/logo-alura-flix.png";
import BotaoNavbar from './BotaoNavbar';
import Header from './Header';

const WrapperBotoes = styled.div`
  display: flex;
  gap: 2rem;
  align-items: inherit;
  width: fit-content;
`

const NavBar = () => {
  return (
    <Header>
      <nav>
        <img src={logo} alt="Logo AluraFlix" />

        <WrapperBotoes>
          <BotaoNavbar to={`/`} tipo={`Link`}>
            <span>Home</span>
          </BotaoNavbar>

          <BotaoNavbar to={`cadastro`} tipo={`Link`}>
            <span>Novo Vídeo</span>
          </BotaoNavbar>
        </WrapperBotoes>
      </nav>
    </Header>
  )
}

export default NavBar