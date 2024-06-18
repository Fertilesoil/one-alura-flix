import styled from 'styled-components'
import logo from "../../assets/logo-alura-flix.png";
import BotaoNavbar from './BotaoNavbar';

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--dark-grey);
  min-height: 10vh;
  box-shadow: 0px 5px 29px 0px #2271D1B2;
  transition: all .37s ease-out;

  & > nav {
    display: inherit;
    justify-content: space-between;
    align-items: inherit;
    padding: 0 2rem;
    width: 100%;
  }

  @media screen and (width < 750px) {
    & > nav > img {
      width: 7rem;
      transition: all .37s ease-out;
    }
  }

  @media screen and (width < 450px) {
    & > nav > img {
      display: none;
      transition: all .37s ease-out;
    }

    & > nav {
      justify-content: center;
      transition: all .37s ease-out;
    }
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