import Banner from "../Componentes/Banner"
import Card from "../Componentes/Card"
import ConteudoPrincipal from "../Componentes/ConteudoPrincipal"
import Secao from "../Componentes/Secao"
import { gruposDeCards } from "../Utils/Utilidades"

const Home = () => {
  return (
    <>
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
    </>
  )
}

export default Home