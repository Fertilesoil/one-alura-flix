import BotaoNavbar from '../../NavBar/BotaoNavbar';
import { contextoAlura } from "../../../Context/UseContextHook";
import { CircleX } from 'lucide-react';
import { CampoCategoria } from './Dropdown';
import { CampoDescricaoModal, CampoFormularioModal, ModalFormulario, IconeFechamento, ConteudoModal, FormsModal, BotoesForms } from '../../Formulario';
import React from 'react';

const Modal = () => {

  const { openModal, setOpenModal, videoAtual, salvarVideo } = contextoAlura();

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
    setNovoVideo({
      id: String(videoAtual?.id) || "0",
      titulo: videoAtual?.titulo || '',
      categoria: videoAtual?.categoria || '',
      imagem: videoAtual?.imagem || '',
      video: videoAtual?.video || '',
      descricao: videoAtual?.descricao || ''
    });
  }, [videoAtual]);

  const guardarObjeto = (e) => {
    const { name, value } = e.target;

    setNovoVideo(estado => ({
      ...estado,
      [name]: value
    }));
    console.log(novoVideo);
  }

  React.useEffect(() => {
    if (!openModal) {
      setNovoVideo(videoInicial);
    }
  }, [openModal]);

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
            valor={novoVideo.titulo}
            funcao={guardarObjeto}
          />

          <CampoCategoria campo={`Categoria`} fechar={openModal} categoriaAtual={novoVideo.categoria} funcao={setNovoVideo} />

          <CampoFormularioModal
            campo={`Imagem`}
            name={`imagem`}
            valor={novoVideo.imagem}
            funcao={guardarObjeto}
          />


          <CampoFormularioModal
            campo={`Vídeo`}
            name={`video`}
            valor={novoVideo.video}
            funcao={guardarObjeto}
          />

          <CampoDescricaoModal
            campo={`Descrição`}
            name={`descricao`}
            valor={novoVideo.descricao}
            funcao={guardarObjeto}
          />

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