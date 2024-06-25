import BotaoNavbar from '../../NavBar/BotaoNavbar';
import { contextoAlura } from "../../../Context/UseContextHook";
import { CircleX } from 'lucide-react';
import { CampoCategoria } from './Dropdown';
import { CampoDescricaoModal, CampoFormularioModal, ModalFormulario, IconeFechamento, ConteudoModal, FormsModal, BotoesForms } from '../../Formulario';
import React from 'react';

const Modal = () => {

  const { openModal, setOpenModal, videoAtual } = contextoAlura();

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

  const salvarVideo = async () => {
    try {
      await fetch(`https://667633a7a8d2b4d072f2b182.mockapi.io/video/${novoVideo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoVideo)
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(data => {
          console.log(data)
          setOpenModal(false);
        })
        .catch(err => console.log(err))
    } catch (error) {
      console.error('Erro:', error);
    }
  };

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
                salvarVideo()
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