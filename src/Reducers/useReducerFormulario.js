import { CampoCategoria } from "../Componentes/Card/Modal/Dropdown";
import { CampoDescricaoCadastro, CampoDescricaoModal, CampoFormularioCadastro, CampoFormularioModal } from "../Componentes/Formulario";

const video = {
  titulo: "",
  categoria: "frontend",
  imagem: "",
  video: "",
  descricao: ""
}

const estadoInicalCadastro = {
  videoInicial: video,
  videoModal: null
}

const formularioReducer = (estado, acao) => {
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
          ...video,
          categoria: estado.videoInicial.categoria
        }
      }

    case "limpar-campos-modal":
      {
        const objetoLimpo = Object.keys(estado.videoModal).reduce((acc, chave) => {
          const valor = estado.videoModal[chave];
          acc[chave] = chave === "categoria" ? valor : "";
          return acc
        }, {})

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

const criarCamposFormularioCadastro = (videoInicial, guardarObjeto, dispatch) => [
  { tipo: 'CampoFormularioCadastro', campo: 'Título', name: 'titulo', valor: videoInicial.titulo, funcao: (e) => guardarObjeto(e, "atualizar-video") },
  {
    tipo: 'CampoCategoria', campo: 'Categoria', name: 'categoria', valor: videoInicial.categoria, funcao: (textContent) => dispatch({
      tipo: "atualizar-video",
      payload: { name: "categoria", value: textContent }
    }), extraProps: { tipo: 'cadastro' }
  },
  { tipo: 'CampoFormularioCadastro', campo: 'Imagem', name: 'imagem', valor: videoInicial.imagem, funcao: (e) => guardarObjeto(e, "atualizar-video") },
  { tipo: 'CampoFormularioCadastro', campo: 'Vídeo', name: 'video', valor: videoInicial.video, funcao: (e) => guardarObjeto(e, "atualizar-video") },
  { tipo: 'CampoDescricaoCadastro', campo: 'Descrição', name: 'descricao', valor: videoInicial.descricao, funcao: (e) => guardarObjeto(e, "atualizar-video") }
];

const criarCamposFormularioModal = (videoModal, guardarObjeto, dispatch, openModal) => [
  { tipo: "CampoFormularioModal", campo: "Título", name: "titulo", valor: videoModal?.titulo, funcao: (e) => guardarObjeto(e, "atualizar-video-modal") },
  { tipo: "CampoFormularioModal", campo: "Imagem", name: "imagem", valor: videoModal?.imagem, funcao: (e) => guardarObjeto(e, "atualizar-video-modal") },
  { tipo: "CampoFormularioModal", campo: "Vídeo", name: "video", valor: videoModal?.video, funcao: (e) => guardarObjeto(e, "atualizar-video-modal") },
  { tipo: "CampoDescricaoModal", campo: "Descrição", name: "descricao", valor: videoModal?.descricao, funcao: (e) => guardarObjeto(e, "atualizar-video-modal") },
  {
    tipo: "CampoCategoria", campo: "Categoria", fechar: openModal, valor: videoModal?.categoria, funcao: (textContent) => dispatch({
      tipo: "atualizar-video-modal",
      payload: { name: "categoria", value: textContent }
    })
  }
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

export { estadoInicalCadastro, formularioReducer }