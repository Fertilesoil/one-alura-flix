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
            <CampoFormularioCadastro
              campo={`Título`}
              name={`titulo`}
              valor={novoVideo.titulo}
              funcao={guardarObjeto}
            />

            <CampoCategoria
              campo={`Categoria`}
              name={`categoria`}
              valor={novoVideo.categoria}
              funcao={setNovoVideo}
              tipo="cadastro"
            />
          </DivisoriaCadastro>

          <DivisoriaCadastro>
            <CampoFormularioCadastro
              campo={`Imagem`}
              name={`imagem`}
              valor={novoVideo.imagem}
              funcao={guardarObjeto}
            />

            <CampoFormularioCadastro
              campo={`Vídeo`}
              name={`video`}
              valor={novoVideo.video}
              funcao={guardarObjeto}
            />
          </DivisoriaCadastro>

          <CampoDescricaoCadastro
            campo={`Descrição`}
            name={`descricao`}
            valor={novoVideo.descricao}
            funcao={guardarObjeto}
          />

          <BotoesCadastro>
            <BotaoNavbar tipo={`Forms`} onClick={e => {
              e.preventDefault();
              cadastrarNovoVideo(novoVideo, navegar);
            }}>
              Guardar
            </BotaoNavbar>

            <BotaoNavbar tipo={`Forms`} onClick={(e) => {
              e.preventDefault()
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