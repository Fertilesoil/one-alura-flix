import React from "react";
import { childrenPropTypes } from "../Validacoes/PropTypes";

export const AluraContext = React.createContext();

const ContextProvider = ({ children }) => {
  AluraContext.displayName = "Alura Flix Context";
  const [openModal, setOpenModal] = React.useState(false);
  const [videos, setVideos] = React.useState([]);
  const [videoAtual, setVideoAtual] = React.useState(null);
  const [cardAtual, setCardAtual] = React.useState(null);
  const [categorias, setCategorias] = React.useState([]);

  const chamadaApi = async () => {
    const data = await fetch("https://667633a7a8d2b4d072f2b182.mockapi.io/video")
      .then(data => data.json());
    
      const gruposDeCards = data.reduce((acc, card) => {
        const categoria = card.categoria;
        if (!acc[categoria]) {
          acc[categoria] = [];
        }
        acc[categoria].push(card);
        return acc;
      }, {});
    setVideos(gruposDeCards);
    setCategorias([Object.keys(gruposDeCards)])
  }

  const salvarVideo = async (novoVideo) => {
    try {
      await fetch(`https://667633a7a8d2b4d072f2b182.mockapi.io/video/${novoVideo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoVideo)
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(data => {
          console.log(data)
          chamadaApi();
          setOpenModal(false);
        })
        .catch(err => console.log(err))
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  React.useEffect(() => {
    chamadaApi();
  }, []);

  const shared = {
    openModal,
    setOpenModal,
    videos,
    categorias,
    videoAtual,
    setVideoAtual,
    chamadaApi,
    salvarVideo,
    cardAtual,
    setCardAtual
  }

  return (
    <AluraContext.Provider value={shared}>
      {children}
    </AluraContext.Provider>
  )
}

ContextProvider.propTypes = childrenPropTypes;

export default ContextProvider