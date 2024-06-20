import React, { createContext } from "react";

export const AluraContext = createContext();

const ContextProvider = ({ children }) => {

  const [openModal, setOpenModal] = React.useState(true);
  
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