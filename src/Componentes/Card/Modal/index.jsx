import BotaoNavbar from '../../NavBar/BotaoNavbar';
import { contextoAlura } from "../../../Context/UseContextHook";
import { CircleX } from 'lucide-react';
import { CampoCategoria } from './Dropdown';
import { CampoDescricaoModal, CampoFormularioModal, ModalFormulario, IconeFechamento, ConteudoModal, FormsModal, BotoesForms } from '../../Formulario';
import React from 'react';

const Modal = () => {

  const video = {
    titulo: "",
    categoria: "",
    imagem: "",
    video: "",
    descicao: ""
  }

  const { openModal, setOpenModal } = contextoAlura();
  const [novoVideo, setNovoVideo] = React.useState(video);

  const guardarObjeto = (e) => {
    let nome = e.target.name;
    let valor = e.target.value;

    setNovoVideo(estado => ({
      ...estado,
      [nome]: valor
    }));
  }

  React.useEffect(() => {
    if (!openModal) {
      setNovoVideo({...video});
    }

  }, []);

  return (
    <ModalFormulario open={openModal}>

      <IconeFechamento onMouseDown={() => setOpenModal(estado => !estado)}>
        <CircleX size={40} />
      </IconeFechamento>

      <ConteudoModal>
        <h2>Editar Card: </h2>

        <FormsModal>
          <CampoFormularioModal
            campo={`Título`}
            name={`titulo`}
            funcao={guardarObjeto}
          />
          <CampoCategoria campo={`Categoria`} />
          <CampoFormularioModal campo={`Imagem`} name={`imagem`} />
          <CampoFormularioModal campo={`Vídeo`} name={`video`} />
          <CampoDescricaoModal campo={`Descrição`} name={`descricao`} />

          <BotoesForms>
            <BotaoNavbar>
              Salvar
            </BotaoNavbar>

            <BotaoNavbar>
              Limpar
            </BotaoNavbar>
          </BotoesForms>
        </FormsModal>
      </ConteudoModal>

    </ModalFormulario>
  )
}

export default Modal