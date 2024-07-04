import Banner from "../Componentes/Banner"
import Card from "../Componentes/Card"
import ConteudoPrincipal from "../Componentes/ConteudoPrincipal"
import Secao from "../Componentes/Secao"
import { useContextoAlura } from "../Context/UseContextHook"

const Home = () => {
  const { videos } = useContextoAlura();

  return (
    <>
      <Banner />
      <ConteudoPrincipal>
        {Object.keys(videos).map(secao => {
          return <Secao key={secao} secao={secao}>
            {videos[secao].map((card) => {
              return <Card key={card.id} imagem={card.imagem} titulo={card.categoria} alt={card.titulo} id={card.id} />
            })}
          </Secao>
        })}
      </ConteudoPrincipal>
    </>
  )
}

export default Home