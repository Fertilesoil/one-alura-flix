import React from "react";
import { childrenPropTypes } from "../Validacoes/PropTypes";

export const AluraContext = React.createContext();

const ContextProvider = ({ children }) => {
  AluraContext.displayName = "Alura Flix Context";
  const [openModal, setOpenModal] = React.useState(false);
  const [videos, setVideos] = React.useState([]);
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

  React.useEffect(() => {
    chamadaApi();
  }, []);

  const shared = {
    openModal,
    setOpenModal,
    videos,
    categorias
  }

  return (
    <AluraContext.Provider value={shared}>
      {children}
    </AluraContext.Provider>
  )
}

ContextProvider.propTypes = childrenPropTypes;

export default ContextProvider