/* eslint-disable react-hooks/exhaustive-deps */
import BotaoNavbar from '../../NavBar/BotaoNavbar';
import { contextoAlura } from "../../../Context/UseContextHook";
import { CircleX } from 'lucide-react';
import { CampoCategoria } from './Dropdown';
import { CampoDescricaoModal, CampoFormularioModal, ModalFormulario, IconeFechamento, ConteudoModal, FormsModal, BotoesForms } from '../../Formulario';
import React from 'react';

const componentesFormularioModal = {
  CampoFormularioModal,
  CampoCategoria,
  CampoDescricaoModal
}

const Modal = () => {

  const { openModal, dispatch, videoAtual, salvarVideo } = contextoAlura();

  const videoInicial = {
    id: String(videoAtual?.id),
    titulo: videoAtual?.titulo,
    categoria: videoAtual?.categoria,
    imagem: videoAtual?.imagem,
    video: videoAtual?.video,
    descricao: videoAtual?.descricao
  }

  const [novoVideo, setNovoVideo] = React.useState(videoInicial);

  React.useEffect(() => {
    setNovoVideo(videoInicial);
  }, [videoAtual, openModal]);

  const guardarObjeto = (e) => {
    const { name, value } = e.target;

    setNovoVideo(estado => ({
      ...estado,
      [name]: value
    }));
  }

  const camposFormularioModal = [
    { tipo: "CampoFormularioModal", campo: "Título", name: "titulo", valor: novoVideo.titulo, funcao: guardarObjeto },
    { tipo: "CampoFormularioModal", campo: "Imagem", name: "imagem", valor: novoVideo.imagem, funcao: guardarObjeto },
    { tipo: "CampoFormularioModal", campo: "Vídeo", name: "video", valor: novoVideo.video, funcao: guardarObjeto },
    { tipo: "CampoDescricaoModal", campo: "Descrição", name: "descricao", valor: novoVideo.descricao, funcao: guardarObjeto },
    { tipo: "CampoCategoria", campo: "Categoria", fechar: openModal, valor: novoVideo.categoria, funcao: setNovoVideo }
  ]

  const renderizarCampoFormularioModal = (campo, index) => {
    const { tipo, ...props } = campo;

    const Elemento = componentesFormularioModal[tipo];
    return <Elemento key={index} {...props} />
  }

  return (
    <ModalFormulario open={openModal}>

      <IconeFechamento onMouseDown={() => dispatch({ tipo: "fechar-modal" })}>
        <CircleX size={40} />
      </IconeFechamento>

      <ConteudoModal>
        <h2>Editar Card: </h2>

        <FormsModal>
          {renderizarCampoFormularioModal(camposFormularioModal[0], 0)}
          {renderizarCampoFormularioModal(camposFormularioModal[4], 4)}
          {camposFormularioModal.slice(1, 4).map(renderizarCampoFormularioModal)}

          <BotoesForms>
            <BotaoNavbar
              onClick={(e) => {
                e.preventDefault();
                salvarVideo(novoVideo);
              }}
            >
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