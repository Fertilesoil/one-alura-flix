import BotaoNavbar from "../NavBar/BotaoNavbar"
import { BotoesCadastro, CampoDescricaoCadastro, CampoFormularioCadastro, FormsCadastro, WrapperCadastro, DivisoriaCadastro, SectionCadastro } from "../Formulario";
import { TituloForms, Titulo, SubTitulo } from "./TItuloForms"

const CadastroForms = () => {
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
            <CampoFormularioCadastro campo={`Título`} name={`titulo`} />
            <CampoFormularioCadastro campo={`Categoria`} name={`categoria`} />
          </DivisoriaCadastro>

          <DivisoriaCadastro>
            <CampoFormularioCadastro campo={`Imagem`} name={`imagem`} />
            <CampoFormularioCadastro campo={`Vídeo`} name={`video`} />
          </DivisoriaCadastro>

          <CampoDescricaoCadastro campo={`Descrição`} name={`descricao`} />

          <BotoesCadastro>
            <BotaoNavbar tipo={`Forms`}>
              Guardar
            </BotaoNavbar>

            <BotaoNavbar tipo={`Forms`}>
              Limpar
            </BotaoNavbar>
          </BotoesCadastro>
        </FormsCadastro>
      </SectionCadastro>

    </section>
  )
}

export default CadastroForms