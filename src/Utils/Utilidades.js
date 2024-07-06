
export const agruparCards = (data) => {
  return data.reduce((acc, card) => {
    const categoria = card.categoria;
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    acc[categoria].push(card);
    return acc;
  }, {});
}

export const validarCampos = (video) => {
  let formularioValido = true;

  if (video) {
    Object.keys(video).forEach(campo => {
      const elemento = document.querySelector(`[name="${campo}"]`);
      const label = elemento?.closest("label");
      const nomeCampo = campo.charAt(0).toUpperCase() + campo.slice(1);

      if (video[campo] === "") {
        if (elemento) {
          label.style.color = "#f86846"
          label.style.transition = "color .23s ease"
          // #e77858
          elemento.style.border = "2px solid #f86846";
          elemento.setAttribute("placeholder", `O campo ${nomeCampo} não pode estar vazio`)
          elemento.style.transition = "border .23s ease";
        }
        formularioValido = false;
      } else if (elemento) {
        label.style.color = ""
        label.style.transition = "color .23s ease"
        elemento.style.border = "";
        elemento.style.transition = "border .23s ease";
      }
    });
  }
  return formularioValido;
}