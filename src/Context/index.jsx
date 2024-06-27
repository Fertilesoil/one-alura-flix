import React from "react";
import { childrenPropTypes } from "../Validacoes/PropTypes";
import { estadoInicial, reducer } from "../Reducers/useReduceCard";
import { apagarCard, buscarCardPorId, chamadaApi, salvarVideo } from "../Api/Api";

export const AluraContext = React.createContext();

const ContextProvider = ({ children }) => {
  AluraContext.displayName = "Alura Flix Context";

  const [estado, dispatch] = React.useReducer(reducer, estadoInicial);

  const abrirModal = (titulo, id) => {
    dispatch({ tipo: "abrir-modal", payload: { titulo, id } });
  }

  React.useEffect(() => {
    chamadaApi(dispatch);
  }, []);

  const shared = {
    ...estado,
    dispatch,
    salvarVideo: (novoVideo) => salvarVideo(novoVideo, dispatch),
    apagarCard: (id, titulo) => apagarCard(id, titulo, dispatch),
    buscarCardPorId,
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