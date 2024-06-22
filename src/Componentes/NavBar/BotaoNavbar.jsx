import {botaoLink, forms, botao} from "./BotaoNavbar.module.css";
import { Link } from 'react-router-dom'
import { botaoNavBarPropTypes } from '../../Validacoes/PropTypes';

const BotaoNavbar = ({ children, to, tipo }) => {

  switch (tipo) {
    case "Link":
      return (
        <Link className={botaoLink} to={to}>
          {children}
        </Link>
      )
    case "Forms":
      return (
        <button className={forms}>
          {children}
        </button>
      )
    default:
      return (
        <button className={botao}>
          {children}
        </button>
      )
  }
}

BotaoNavbar.propTypes = botaoNavBarPropTypes;

export default BotaoNavbar