import styled from 'styled-components'
import logo from "../../assets/logo-alura-flix.png";
import BotaoNavbar from './BotaoNavbar';

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--dark-grey);
  min-height: 10vh;
  box-shadow: 0px 5px 29px 0px #2271D1B2;

  & > nav {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    width: 100%;
  }
`

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
          <BotaoNavbar>
            <span>Home</span>
          </BotaoNavbar>

          <BotaoNavbar>
            <span>Novo Vídeo</span>
          </BotaoNavbar>
        </WrapperBotoes>
      </nav>
    </Header>
  )
}

export default NavBar