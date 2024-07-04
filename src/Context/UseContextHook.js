/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { AluraContext } from "./index";

export const useContextoAlura = () => {
  const contexto = useContext(AluraContext);
  if (!contexto) {
    throw new Error('Envolva o contexto na sua aplicação');
  }
  return contexto;
};