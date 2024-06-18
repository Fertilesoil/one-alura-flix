import styled from "styled-components"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block-start: 2rem;
  margin: 0 2rem 2rem 2rem;
`

const ConteudoPrincipal = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ConteudoPrincipal