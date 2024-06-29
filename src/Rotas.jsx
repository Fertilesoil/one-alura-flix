import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Paginas/Home'
import Cadastro from './Paginas/Cadastro'
import PaginaPadrao from './Paginas/PaginaPadrao'
import Video from './Paginas/Video'

export const rotas = createBrowserRouter(
  createRoutesFromElements(
      <Route>

        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path='cadastro' element={<Cadastro />} />
          <Route path='video/:id' element={<Video />} />
        </Route>

      </Route>
  )
)