import React from "react";
import { childrenPropTypes } from "../Validacoes/PropTypes";
import { estadoInicial, reducer } from "../Reducers/useReduceCard";
import { apagarCard, cadastrarNovoVideo, chamadaApi, salvarVideo } from "../Api/Api";
import { estadoInicalCadastro, formularioReducer } from "../Reducers/useReducerFormulario";

export const AluraContext = React.createContext();

const ContextProvider = ({ children }) => {
  AluraContext.displayName = "Alura Flix Context";

  const [estado, dispatch] = React.useReducer(reducer, estadoInicial);
  const [estadoFormulario, dispatchFormulario] = React.useReducer(formularioReducer, estadoInicalCadastro);

  const abrirModal = (titulo, id) => {
    dispatch({ tipo: "abrir-modal", payload: { titulo, id } });
  }

  const guardarObjeto = (e, tipo) => {
    const { name, value } = e.target;

    dispatchFormulario({
      tipo: tipo,
      payload: { name, value }
    });
  }

  React.useEffect(() => {
    chamadaApi(dispatch);
  }, []);

  const shared = {
    ...estado,
    dispatch,
    ...estadoFormulario,
    dispatchFormulario,
    guardarObjeto,
    salvarVideo: (novoVideo) => salvarVideo(novoVideo, dispatch),
    apagarCard: (id, titulo) => apagarCard(id, titulo, dispatch),
    cadastrarNovoVideo: (novoVideo, navegar) => cadastrarNovoVideo(novoVideo, navegar, dispatch),
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