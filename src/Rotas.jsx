import { createBrowserRouter } from 'react-router-dom'
import Home from './Paginas/Home'
import Cadastro from './Paginas/Cadastro'
import PaginaPadrao from './Paginas/PaginaPadrao'
import Video from './Paginas/Video'
import { buscarVideoPorId } from './Api/Api'

export const rotas = createBrowserRouter([
  {
    path: "/", element: <PaginaPadrao />,
    children: [
      { index: true, element: <Home /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "video/:id", element: <Video />, loader: buscarVideoPorId }
    ]
  }
]);