
const chamadaApi = async (dispatch) => {
  const data = await fetch("https://667633a7a8d2b4d072f2b182.mockapi.io/video")
    .then(data => data.json());

  const gruposDeCards = data.reduce((acc, card) => {
    const categoria = card.categoria;
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    acc[categoria].push(card);
    return acc;
  }, {});

  dispatch({
    tipo: "setar-videos",
    payload: {
      videos: gruposDeCards,
      categorias: Object.keys(gruposDeCards),
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
        dispatch({ tipo: "fechar-modal" });
      })
      .catch(err => console.log(err))
  } catch (error) {
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
  })
}

const cadastrarNovoVideo = (novoVideo, navegar, dispatch) => {
  fetch(`https://667633a7a8d2b4d072f2b182.mockapi.io/video`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novoVideo)
  }).then(() => {
    chamadaApi(dispatch)
    return navegar("/")
  })
}

export { chamadaApi, salvarVideo, buscarCardPorId, apagarCard, cadastrarNovoVideo }
