import PropTypes from "prop-types";

export const botaoNavBarPropTypes = {
  children: PropTypes.element,
  to: PropTypes.string,
  tipo: PropTypes.string
}

export const cardPropTypes = {
  imagem: PropTypes.string,
  titulo: PropTypes.string
}

export const childrenPropTypes = {
  children: PropTypes.element
}

export const inputPropTypes = {
  campo: PropTypes.string,
  name: PropTypes.string,
  funcao: PropTypes.func,
}

export const campoCategoriaPropTypes = {
  campo: PropTypes.string,
}