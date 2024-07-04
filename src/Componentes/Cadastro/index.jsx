import BotaoNavbar from "../NavBar/BotaoNavbar"
import { BotoesCadastro, FormsCadastro, WrapperCadastro, DivisoriaCadastro, SectionCadastro } from "../Formulario";
import { TituloForms, Titulo, SubTitulo } from "./TItuloForms";
import { useNavigate } from "react-router-dom";
import { contextoAlura } from "../../Context/UseContextHook";
import { Componentes } from "../../Reducers/useReducerFormulario";

const CadastroForms = () => {

  const { cadastrarNovoVideo, estadoFormulario, dispatchFormulario } = contextoAlura();
  
  const navegar = useNavigate();

  const guardarObjeto = (e) => {
    const { name, value } = e.target;

    dispatchFormulario({
      tipo: "atualizar-video",
      payload: { name, value }
    })
    console.log(estadoFormulario.videoInicial)
  }

  const camposFormularioCadastro = Componentes.criarCamposFormularioCadastro(estadoFormulario, guardarObjeto, dispatchFormulario);

  const renderizarCampoCadastro = (campo, index) => {
    const { tipo, extraProps, ...props } = campo;

    const Component = Componentes.componentesFormularioCadastro[tipo];
    return <Component key={index} {...props} {...extraProps} />;
  };

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
            <BotaoNavbar tipo={`Forms`} onClick={e => {
              e.preventDefault();
              cadastrarNovoVideo(estadoFormulario.videoInicial, navegar);
            }}>
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