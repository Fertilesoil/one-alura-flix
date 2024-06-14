import styled from 'styled-components'

const BotaoNav = styled.button`
  font-family: var(--font-source-sans);
  width: 9rem;
  border-radius: .4rem;
  line-height: 2lh;
  font-size: 1.1rem;
  font-weight: 600;
  color: #F7F7F7;
  background: transparent;
  border: 2px solid #F7F7F7;
  cursor: pointer;
  text-transform: uppercase;
  transition: all .37s ease-out;

  &:hover {
    color: var(--standard-blue);
    box-shadow: var(--blue-shadow-button);
    border: 2px solid var(--standard-blue);
    background: var(--dark);
    transition: all .37s ease-out;
  }
`

const BotaoNavbar = ({ children }) => {
  return (
    <BotaoNav>
      {children}
    </BotaoNav>
  )
}

export default BotaoNavbar