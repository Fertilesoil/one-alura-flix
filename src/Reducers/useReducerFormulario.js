import { CampoCategoria } from "../Componentes/Card/Modal/Dropdown";
import { CampoDescricaoCadastro, CampoDescricaoModal, CampoFormularioCadastro, CampoFormularioModal } from "../Componentes/Formulario";

const video = {
  titulo: "",
  categoria: "",
  imagem: "",
  video: "",
  descricao: ""
}

export const estadoInicalCadastro = {
  videoInicial: video,
  videoModal: null
}

export const formularioReducer = (estado, acao) => {
  switch (acao.tipo) {
    case "atualizar-video":
      return {
        ...estado,
        videoInicial: {
          ...estado.videoInicial,
          [acao.payload.name]: acao.payload.value
        }
      }

    case "atualizar-video-modal":
      return {
        ...estado,
        videoModal: {
          ...estado.videoModal,
          [acao.payload.name]: acao.payload.value
        }
      }

    case "limpar-campos":
      return {
        ...estado,
        videoInicial: {
          ...video
        }
      }

    case "limpar-campos-modal":
      {
        const objetoLimpo = Object.keys(estado.videoModal).reduce((acc, chave) => {
          acc[chave] = "";
          return acc
        }, {})
        console.log(objetoLimpo)
        return {
          ...estado,
          videoModal: {
            ...objetoLimpo
          }
        }
      }

    case "setar-video":
      return {
        ...estado,
        videoModal: {
          id: String(acao.payload.video?.id || "0"),
          titulo: acao.payload.video?.titulo || "",
          categoria: acao.payload.video?.categoria || "",
          imagem: acao.payload.video?.imagem || "",
          video: acao.payload.video?.video || "",
          descricao: acao.payload.video?.descricao || ""
        }
      }

    default:
      return estado
  }
}

const criarCamposFormularioCadastro = (estado, guardarObjeto, dispatch) => [
  { tipo: 'CampoFormularioCadastro', campo: 'Título', name: 'titulo', valor: estado.videoInicial.titulo, funcao: guardarObjeto },
  { tipo: 'CampoCategoria', campo: 'Categoria', name: 'categoria', valor: estado.videoInicial.categoria, funcao: (textContent) => dispatch({
    tipo: "atualizar-video",
    payload: { name: "categoria", value: textContent }
  }), extraProps: { tipo: 'cadastro' } },
  { tipo: 'CampoFormularioCadastro', campo: 'Imagem', name: 'imagem', valor: estado.videoInicial.imagem, funcao: guardarObjeto },
  { tipo: 'CampoFormularioCadastro', campo: 'Vídeo', name: 'video', valor: estado.videoInicial.video, funcao: guardarObjeto },
  { tipo: 'CampoDescricaoCadastro', campo: 'Descrição', name: 'descricao', valor: estado.videoInicial.descricao, funcao: guardarObjeto }
];

const criarCamposFormularioModal = (estado, guardarObjeto, dispatch, openModal) => [
  { tipo: "CampoFormularioModal", campo: "Título", name: "titulo", valor: estado.videoModal?.titulo, funcao: guardarObjeto },
  { tipo: "CampoFormularioModal", campo: "Imagem", name: "imagem", valor: estado.videoModal?.imagem, funcao: guardarObjeto },
  { tipo: "CampoFormularioModal", campo: "Vídeo", name: "video", valor: estado.videoModal?.video, funcao: guardarObjeto },
  { tipo: "CampoDescricaoModal", campo: "Descrição", name: "descricao", valor: estado.videoModal?.descricao, funcao: guardarObjeto },
  { tipo: "CampoCategoria", campo: "Categoria", fechar: openModal, valor: estado.videoModal?.categoria, funcao: (textContent) => dispatch({
    tipo: "atualizar-video-modal",
    payload: { name: "categoria", value: textContent }
  }) }
]

const componentesFormularioCadastro = {
  CampoFormularioCadastro,
  CampoCategoria,
  CampoDescricaoCadastro
};

const componentesFormularioModal = {
  CampoFormularioModal,
  CampoCategoria,
  CampoDescricaoModal
}

export const Componentes = {
  criarCamposFormularioCadastro,
  componentesFormularioCadastro,
  criarCamposFormularioModal,
  componentesFormularioModal
}