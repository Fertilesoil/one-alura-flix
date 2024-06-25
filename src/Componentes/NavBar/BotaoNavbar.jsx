import {botaoLink, forms, botao} from "./BotaoNavbar.module.css";
import { Link } from 'react-router-dom'
import { botaoNavBarPropTypes } from '../../Validacoes/PropTypes';

const BotaoNavbar = ({ children, to, tipo, ...props }) => {

  switch (tipo) {
    case "Link":
      return (
        <Link className={botaoLink} to={to}>
          {children}
        </Link>
      )
    case "Forms":
      return (
        <button className={forms} {...props}>
          {children}
        </button>
      )
    default:
      return (
        <button className={botao} {...props}>
          {children}
        </button>
      )
  }
}

BotaoNavbar.propTypes = botaoNavBarPropTypes;

export default BotaoNavbar