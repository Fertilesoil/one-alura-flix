import React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { contextoAlura } from "../../../Context/UseContextHook"
import { campoCategoriaPropTypes } from "../../../Validacoes/PropTypes"
import { BotaoDrop, ConteudoDrop, OptionDrop, Paragrafo, Wrapper, WrapperDropDown } from "./ComponentesDropdown"

export const CampoCategoria = ({ campo, fechar, funcao, tipo = "modal", valor }) => {

  const { categorias } = contextoAlura();
  const [drop, setDrop] = React.useState(false);
  const [existe, setExiste] = React.useState(false);

  const operacaoClick = (e) => {
    const { textContent } = e.target;
    e.preventDefault();
    funcao(textContent);
    setDrop(false);
  }

  const toggleDropdown = () => {
    if (drop) {
      setExiste(true);
      setTimeout(() => {
        setDrop(false);
        setExiste(false);
      }, 570);
    } else {
      setDrop(true);
    }
  };

  React.useEffect(() => {
    if (!fechar) {
      setDrop(false);
    }
  }, [fechar]);

  return (
    <Wrapper>
      <Paragrafo>{campo}</Paragrafo>
      <WrapperDropDown $tipo={tipo}>
        <BotaoDrop
          $tipo={tipo}
          onClick={(e) => e.preventDefault()}
          onMouseDown={() => {
            return toggleDropdown()
          }}>
          {valor}

          {drop ? <ChevronUp /> : <ChevronDown />}
        </BotaoDrop>

        {drop &&
          <ConteudoDrop $ativo={existe} $tipo={tipo}>
            {categorias.map((tema) => {
              return <OptionDrop key={tema} $tipo={tipo} onClick={(e) => operacaoClick(e)}>{tema}</OptionDrop>
            })}
          </ConteudoDrop>
        }
      </WrapperDropDown>
    </Wrapper>
  )
}

CampoCategoria.propTypes = campoCategoriaPropTypes;