
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