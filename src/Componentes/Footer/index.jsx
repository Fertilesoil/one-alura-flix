import styled from "styled-components"
import logo from "../../assets/LogoMain.png";

const FooterFixo = styled.footer`
  display: flex;
  justify-content: center;
  color: #F7F7F7;
  background: var(--dark);
  min-height: 10vh;
  box-shadow: 0px 5px 6px 9px #2271D1B2;

  & > img {
    display: block;
    object-fit: contain;
  }
`

const Footer = () => {
  return (
    <FooterFixo>
      <img src={logo} alt="Logo AluraFlix" />
    </FooterFixo>
  )
}

export default Footer