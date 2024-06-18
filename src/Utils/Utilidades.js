import temas from "../Db.json";

export const gruposDeCards = temas.reduce((acc, card) => {
  const tema = card.tema;
  if (!acc[tema]) {
    acc[tema] = [];
  }
  acc[tema].push(card);
  return acc;
}, {});