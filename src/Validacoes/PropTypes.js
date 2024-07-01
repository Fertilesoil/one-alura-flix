import PropTypes from "prop-types";

export const botaoNavBarPropTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  tipo: PropTypes.string,
  props: PropTypes.object
}

export const cardPropTypes = {
  imagem: PropTypes.string,
  titulo: PropTypes.string
}

export const childrenPropTypes = {
  children: PropTypes.node
}

export const inputPropTypes = {
  campo: PropTypes.string,
  name: PropTypes.string,
  funcao: PropTypes.func,
}

export const campoCategoriaPropTypes = {
  campo: PropTypes.string,
  fechar: PropTypes.bool,
  categoriaAtual: PropTypes.string,
  funcao: PropTypes.func,
}