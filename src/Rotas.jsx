import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Home from './Paginas/Home'
import Cadastro from './Paginas/Cadastro'
import PaginaPadrao from './Paginas/PaginaPadrao'

const Rotas = () => {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path='cadastro' element={<Cadastro />} />
        </Route>

      </Routes>
      
    </BrowserRouter>
  )
}

export default Rotas