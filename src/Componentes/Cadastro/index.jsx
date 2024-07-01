import React from "react";
import BotaoNavbar from "../NavBar/BotaoNavbar"
import {
  BotoesCadastro, CampoDescricaoCadastro, CampoFormularioCadastro,
  FormsCadastro, WrapperCadastro, DivisoriaCadastro, SectionCadastro
} from "../Formulario";
import { TituloForms, Titulo, SubTitulo } from "./TItuloForms";
import { CampoCategoria } from "../Card/Modal/Dropdown";
import { useNavigate } from "react-router-dom";
import { contextoAlura } from "../../Context/UseContextHook";

const componentesFormularioCadastro = {
  CampoFormularioCadastro,
  CampoCategoria,
  CampoDescricaoCadastro
};

const CadastroForms = () => {

  const { cadastrarNovoVideo } = contextoAlura();
  const navegar = useNavigate();

  const videoInicial = {
    titulo: "",
    categoria: "",
    imagem: "",
    video: "",
    descricao: ""
  }

  const [novoVideo, setNovoVideo] = React.useState(videoInicial);

  const guardarObjeto = (e) => {
    const { name, value } = e.target;

    setNovoVideo((estado) => ({
      ...estado,
      [name]: value
    }));
  }

  const camposFormularioCadastro = [
    { tipo: 'CampoFormularioCadastro', campo: 'Título', name: 'titulo', valor: novoVideo.titulo, funcao: guardarObjeto },
    { tipo: 'CampoCategoria', campo: 'Categoria', name: 'categoria', valor: novoVideo.categoria, funcao: setNovoVideo, extraProps: { tipo: 'cadastro' } },
    { tipo: 'CampoFormularioCadastro', campo: 'Imagem', name: 'imagem', valor: novoVideo.imagem, funcao: guardarObjeto },
    { tipo: 'CampoFormularioCadastro', campo: 'Vídeo', name: 'video', valor: novoVideo.video, funcao: guardarObjeto },
    { tipo: 'CampoDescricaoCadastro', campo: 'Descrição', name: 'descricao', valor: novoVideo.descricao, funcao: guardarObjeto }
  ];

  const renderizarCampoCadastro = (campo, index) => {
    const { tipo, extraProps, ...props } = campo;

    const Component = componentesFormularioCadastro[tipo];
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
              cadastrarNovoVideo(novoVideo, navegar);
            }}>
              Guardar
            </BotaoNavbar>

            <BotaoNavbar tipo={`Forms`} onClick={(e) => {
              e.preventDefault()
              camposFormularioCadastro[4].valor = ""
              return setNovoVideo(videoInicial)
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