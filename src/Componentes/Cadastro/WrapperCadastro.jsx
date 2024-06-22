import { childrenPropTypes } from '../../Validacoes/PropTypes'
import styled from 'styled-components'

const Main = styled.main`
  min-height: 80vh;
  padding: 1.5rem 6rem;

  @media screen and (width < 1000px) { 
    padding: 1.5rem 4rem;
  }

  @media screen and (width < 600px) { 
  padding: 1.5rem 2rem;
  }
`

const WrapperCadastro = ({ children }) => {
  return (
    <Main>
      {children}
    </Main>
  )
}

WrapperCadastro.propTypes = childrenPropTypes;

export default WrapperCadastro