import Banner from "./Componentes/Banner"
import ConteudoPrincipal from "./Componentes/ConteudoPrincipal"
import Footer from "./Componentes/Footer"
import NavBar from "./Componentes/NavBar"
import Secao from "./Componentes/Secao"
import Card from "./Componentes/Card"
import { gruposDeCards } from "./Utils/Utilidades"

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <ConteudoPrincipal>
        {Object.keys(gruposDeCards).map(secao => {
          return <Secao key={secao} secao={secao}>
            {gruposDeCards[secao].map((secao) => {
              return <Card key={secao.id} imagem={secao.imagem} titulo={secao.tema} />
            })}
          </Secao>
        })}
      </ConteudoPrincipal>
      <Footer />
    </>
  )
}

export default App
