import toast from "react-hot-toast";
import { agruparCards } from "../Utils/Utilidades";

const url = import.meta.env.VITE_URL;

const chamadaApi = async (dispatch) => {
  const data = await fetch(`${url}/video`)
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
    await fetch(`${url}/video/${novoVideo.id}`, {
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

const buscarVideoPorId = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`${url}/video/${id}`);
  let video = await response.json();

  return {
    ...video,
    video: video.video.split("=")[1]
  };
}

const apagarCard = async (id, titulo, dispatch) => {
  dispatch({ tipo: "apagar-card", payload: { titulo, id } });

  await fetch(`${url}/video/${id}`, {
    method: "DELETE"
  }).then((() => toast.success("Vídeo deletado com sucesso!")));
}

const cadastrarNovoVideo = (novoVideo, navegar, dispatch) => {
  fetch(`${url}/video`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novoVideo)
  }).then(() => {
    chamadaApi(dispatch)
    toast.success("vídeo cadastrado com sucesso!");
    return navegar("/")
  })
}

export { chamadaApi, salvarVideo, apagarCard, cadastrarNovoVideo, buscarVideoPorId }
