import styled from "styled-components"
import imagemPlayer from "../../assets/player.png";
import Tag from "../Tag";

const SecaoBanner = styled.section`
  min-height: 80vh;
  position: relative;

  &::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url(${imagemPlayer});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: var(--blue-shadow);
  filter: opacity(.4);
  }
`

const ConteudoBanner = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  align-items: center;
  top: 210px;
  padding: 0 1.5rem;
  width: 100%;
  height: 25rem;
  font-family: var(--font-roboto);

  & > div:nth-child(1) {
    display: inherit;
    flex-direction: column;
    gap: 2rem;
    flex: 1;
    color: #F7F7F7;
  }

  & > div:nth-child(1) > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & > div:nth-child(1) > div > h1 {
    font-size: 2rem;
    font-weight: 400;
  }

  & > div:nth-child(1) > div > p {
    font-size: 1.1rem;
    overflow-wrap: break-word;
    line-height: 1.3lh;
    font-weight: 300;
  }

  & > div:nth-child(2) {
    position: relative;
    display: inherit;
    flex-direction: column;
    flex: 1;
  }

  & > div:nth-child(2) > img {
    width: 100%;
  }

  & > div:nth-child(2):before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: var(--blue-shadow);
  }

  @media screen and (width < 850px) {
    & > div:nth-child(2) {
      display: none;
    }
  }
`

const Banner = () => {
  return (
    <SecaoBanner>
      <ConteudoBanner>
        <div>
          <Tag secao={`frontend`} tamanho={`lg`}>
            front end
          </Tag>
          <div>
            <h1>SEO Com React</h1>
            <p>
              Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma <q>Pokedex</q>!
            </p>
          </div>
        </div>

        <div>
          <img src={imagemPlayer} alt="Imagem do Player" />
        </div>
      </ConteudoBanner>
    </SecaoBanner>
  )
}

export default Banner