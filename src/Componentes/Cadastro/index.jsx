import BotaoNavbar from "../NavBar/BotaoNavbar"
import { BotoesCadastro, FormsCadastro, WrapperCadastro, DivisoriaCadastro, SectionCadastro } from "../Formulario";
import { TituloForms, Titulo, SubTitulo } from "./TItuloForms";
import { useNavigate } from "react-router-dom";
import { useContextoAlura } from "../../Context/UseContextHook";
import { Componentes } from "../../Reducers/useReducerFormulario";
import React from "react";
import { validarCampos } from "../../Utils/Utilidades";

const CadastroForms = () => {
  const [validacaoIniciada, setValidacaoIniciada] = React.useState(false);
  const { cadastrarNovoVideo, videoInicial, dispatchFormulario, guardarObjeto } = useContextoAlura();

  const navegar = useNavigate();

  const camposFormularioCadastro = Componentes.criarCamposFormularioCadastro(videoInicial, guardarObjeto, dispatchFormulario);

  const renderizarCampoCadastro = (campo, index) => {
    const { tipo, extraProps, ...props } = campo;

    const Component = Componentes.componentesFormularioCadastro[tipo];
    return <Component key={index} {...props} {...extraProps} />;
  };

  const salvarVideo = (e) => {
    e.preventDefault();

    if (validarCampos(videoInicial)) {
      cadastrarNovoVideo(videoInicial, navegar);
    } else {
      setValidacaoIniciada(true);
    }
  };

  React.useEffect(() => {
    if (validacaoIniciada) {
      validarCampos(videoInicial)
    }
  }, [validacaoIniciada, videoInicial]);

  React.useEffect(() => {
    return () => {
      dispatchFormulario({ tipo: "limpar-campos" });
    }
  }, [])

  return (
    <section>
      <TituloForms>
        <Titulo>Novo Video</Titulo>
        <SubTitulo>Complete o formulário para criar um novo card de vídeo.</SubTitulo>
      </TituloForms>

      <SectionCadastro>
        <FormsCadastro>

          <WrapperCadastro>
            <h2>Criar Card</h2>
          </WrapperCadastro>

          <DivisoriaCadastro>
            {camposFormularioCadastro.slice(0, 2).map(renderizarCampoCadastro)}
          </DivisoriaCadastro>

          <DivisoriaCadastro>
            {camposFormularioCadastro.slice(2, 4).map(renderizarCampoCadastro)}
          </DivisoriaCadastro>

          {renderizarCampoCadastro(camposFormularioCadastro[4], 4)}

          <BotoesCadastro>
            <BotaoNavbar tipo={`Forms`} onClick={salvarVideo}>
              Guardar
            </BotaoNavbar>

            <BotaoNavbar tipo={`Forms`} onClick={(e) => {
              e.preventDefault()
              camposFormularioCadastro[4].valor = ""
              return dispatchFormulario({ tipo: "limpar-campos" })
            }}>
              Limpar
            </BotaoNavbar>
          </BotoesCadastro>
        </FormsCadastro>
      </SectionCadastro>

    </section>
  )
}

export default CadastroForms