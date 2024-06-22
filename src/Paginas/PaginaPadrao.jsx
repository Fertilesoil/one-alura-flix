import { Outlet } from 'react-router-dom'
import NavBar from '../Componentes/NavBar'
import Footer from '../Componentes/Footer'
import OverLay from '../Componentes/Card/Modal/Overlay'
import Modal from '../Componentes/Card/Modal'

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