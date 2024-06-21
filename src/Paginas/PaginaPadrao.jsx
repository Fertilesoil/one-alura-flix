import { Outlet } from 'react-router-dom'
import NavBar from '../Componentes/NavBar'
import Footer from '../Componentes/Footer'
import Modal, { OverLay } from '../Componentes/Card/Modal'

const PaginaPadrao = () => {
  return (
    <>
      <OverLay />
      <NavBar />
      <Outlet />
      <Footer />
      <Modal />
    </>
  )
}

export default PaginaPadrao