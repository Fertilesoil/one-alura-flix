import toast from "react-hot-toast";
import { agruparCards } from "../Utils/Utilidades";

const chamadaApi = async (dispatch) => {
  const data = await fetch("https://667633a7a8d2b4d072f2b182.mockapi.io/video")
    .then(data => data.json());

  const grupos = agruparCards(data);

  dispatch({
    tipo: "setar-videos",
    payload: {
      videos: grupos,
      categorias: Object.keys(grupos),
    },
  });
}

const salvarVideo = async (novoVideo, dispatch) => {
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
      .then(() => {
        chamadaApi(dispatch);
        toast.success("Video atualizado com sucesso!");
        dispatch({ tipo: "fechar-modal" });
      })
      .catch(err => console.log(err))
  } catch (error) {
    toast.error("Houve um erro na atualização do vídeo atual");
    console.error('Erro:', error);
  }
};

const buscarCardPorId = async (id, funcao, navegar) => {
  await fetch(`https://667633a7a8d2b4d072f2b182.mockapi.io/video/${id}`)
    .then(response => response.json())
    .then(data => {
      data = {
        ...data,
        video: data?.video.split("=")[1]
      }

      return funcao(data);
    })
    .catch(() => {
      return navegar("/");
    });
}

const apagarCard = async (id, titulo, dispatch) => {
  dispatch({ tipo: "apagar-card", payload: { titulo, id } });

  await fetch(`https://667633a7a8d2b4d072f2b182.mockapi.io/video/${id}`, {
    method: "DELETE"
  }).then((() => toast.success("Vídeo deletado com sucesso!")));
}

const cadastrarNovoVideo = (novoVideo, navegar, dispatch) => {
  fetch(`https://667633a7a8d2b4d072f2b182.mockapi.io/video`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novoVideo)
  }).then(() => {
    chamadaApi(dispatch)
    toast.success("vídeo cadastrado com sucesso!");
    return navegar("/")
  })
}

export { chamadaApi, salvarVideo, buscarCardPorId, apagarCard, cadastrarNovoVideo }
