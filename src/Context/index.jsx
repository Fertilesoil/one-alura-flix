import React from "react";

export const AluraContext = React.createContext();

const ContextProvider = ({ children }) => {
  AluraContext.displayName = "Alura Flix Context";
  const [openModal, setOpenModal] = React.useState(false);
  
  const shared = {
    openModal,
    setOpenModal
  }

  return (
    <AluraContext.Provider value={shared}>
      {children}
    </AluraContext.Provider>
  ) 
}

export default ContextProvider