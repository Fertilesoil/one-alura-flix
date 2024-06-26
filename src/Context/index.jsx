import React from "react";
import { childrenPropTypes } from "../Validacoes/PropTypes";

export const AluraContext = React.createContext();

const ContextProvider = ({ children }) => {
  AluraContext.displayName = "Alura Flix Context";
  const [openModal, setOpenModal] = React.useState(false);
  const [videos, setVideos] = React.useState([]);
  const [videoAtual, setVideoAtual] = React.useState(null);
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

  const buscarCardPorId = async (id, funcao, navegar) => {
    await fetch(`https://667633a7a8d2b4d072f2b182.mockapi.io/video/${id}`)
      .then(response => response.json())
      .then(data => {
        data = {
          ...data,
          video: data?.video.split("=")[1]
        }

        return funcao(data);
      })
      .catch(() => {
        return navegar("/");
      });
  }

  const apagarCard = async (id, titulo) => {
    const novoEstado = await videos[titulo].filter(video => video.id !== id);
    setVideos(estado => ({
      ...estado,
      [titulo]: novoEstado
    }));

    await fetch(`https://667633a7a8d2b4d072f2b182.mockapi.io/video/${id}`, {
      method: "DELETE"
    })
  }

  const abrirModal = (titulo, id) => {
    const videoAtual = videos[titulo].find(video => video.id === id);
    setVideoAtual(videoAtual);
    setOpenModal(estado => !estado)
  }

  React.useEffect(() => {
    chamadaApi();
  }, []);

  const shared = {
    openModal,
    setOpenModal,
    videos,
    categorias,
    videoAtual,
    chamadaApi,
    salvarVideo,
    buscarCardPorId,
    apagarCard,
    abrirModal
  }

  return (
    <AluraContext.Provider value={shared}>
      {children}
    </AluraContext.Provider>
  )
}

ContextProvider.propTypes = childrenPropTypes;

export default ContextProvider