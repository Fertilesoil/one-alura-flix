import Banner from "../Componentes/Banner"
import Card from "../Componentes/Card"
import ConteudoPrincipal from "../Componentes/ConteudoPrincipal"
import Secao from "../Componentes/Secao"
import { contextoAlura } from "../Context/UseContextHook"

const Home = () => {
  const { videos } = contextoAlura();
  return (
    <>
      <Banner />
      <ConteudoPrincipal>
        {Object.keys(videos).map(secao => {
          return <Secao key={secao} secao={secao}>
            {videos[secao].map((secao) => {
              return <Card key={secao.id} imagem={secao.imagem} titulo={secao.categoria} />
            })}
          </Secao>
        })}
      </ConteudoPrincipal>
    </>
  )
}

export default Home