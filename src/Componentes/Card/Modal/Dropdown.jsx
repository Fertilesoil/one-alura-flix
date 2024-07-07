/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useContextoAlura } from "../../../Context/UseContextHook"
import { campoCategoriaPropTypes } from "../../../Validacoes/PropTypes"
import { BotaoDrop, ConteudoDrop, OptionDrop, Paragrafo, Wrapper, WrapperDropDown } from "./ComponentesDropdown"

export const CampoCategoria = ({ campo, fechar, funcao, tipo = "modal", valor }) => {

  const { categorias } = useContextoAlura();
  const [drop, setDrop] = React.useState(false);
  const [existe, setExiste] = React.useState(false);
  let dropdownRef = React.useRef(null);

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
    const handleClickOutside = (event) => {
      const alvoAtual = event.srcElement.attributes.class?.value.split(" ")[0];
      dropdownRef = alvoAtual;
      if (dropdownRef && dropdownRef !== "sc-fqkwJk") {
        setDrop(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef]);

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