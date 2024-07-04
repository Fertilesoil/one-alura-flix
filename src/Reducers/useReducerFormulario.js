import { CampoCategoria } from "../Componentes/Card/Modal/Dropdown";
import { CampoDescricaoCadastro, CampoFormularioCadastro } from "../Componentes/Formulario";

const video = {
  titulo: "",
  categoria: "",
  imagem: "",
  video: "",
  descricao: ""
}

export const estadoInicalCadastro = {
  videoInicial: video
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

    case "limpar-campos":
      return {
        ...estado,
        videoInicial: {
          ...video
        }
      }

    default:
      return estado
  }
}

const criarCamposFormularioCadastro = (estado, guardarObjeto, dispatch) => [
  { tipo: 'CampoFormularioCadastro', campo: 'Título', name: 'titulo', valor: estado.videoInicial.titulo, funcao: guardarObjeto },
  { tipo: 'CampoCategoria', campo: 'Categoria', name: 'categoria', valor: estado.videoInicial.categoria, funcao: dispatch, extraProps: { tipo: 'cadastro' } },
  { tipo: 'CampoFormularioCadastro', campo: 'Imagem', name: 'imagem', valor: estado.videoInicial.imagem, funcao: guardarObjeto },
  { tipo: 'CampoFormularioCadastro', campo: 'Vídeo', name: 'video', valor: estado.videoInicial.video, funcao: guardarObjeto },
  { tipo: 'CampoDescricaoCadastro', campo: 'Descrição', name: 'descricao', valor: estado.videoInicial.descricao, funcao: guardarObjeto }
];

const componentesFormularioCadastro = {
  CampoFormularioCadastro,
  CampoCategoria,
  CampoDescricaoCadastro
};

export const Componentes = {
  criarCamposFormularioCadastro,
  componentesFormularioCadastro
}