
const estadoInicial = {
  videos: [],
  videoAtual: null,
  categorias: [],
  openModal: false
}

const reducer = (estado, acao) => {

  switch (acao.tipo) {
    case "setar-videos":
      return {
        ...estado,
        videos: acao.payload.videos,
        categorias: acao.payload.categorias
      }

    case "abrir-modal":
      {
        const videoAtual = estado.videos[acao.payload.titulo].find(video => video.id === acao.payload.id)
        return {
          ...estado,
          videoAtual: videoAtual,
          openModal: !estado.openModal
        }
      }
      
    case "fechar-modal":
      return {
        ...estado,
        openModal: !estado.openModal
      }

    case "apagar-card":
      {
        const novoEstado = estado.videos[acao.payload.titulo].filter(video => video.id !== acao.payload.id)
        return {
          ...estado,
          videos: {
            ...estado.videos,
            [acao.payload.titulo]: novoEstado
          }
        }
      }

    default:
      return estado;
  }
}

export { estadoInicial, reducer }
