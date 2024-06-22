import { inputPropTypes } from "../../Validacoes/PropTypes"
import { InputCadastro, InputModal } from "./Input"
import { LabelCadastro, LabelModal } from "./Label"

export const CampoFormularioModal = ({ campo, name, funcao }) => {
  return (
    <LabelModal>
      {campo}
      <InputModal type="text" name={name} onChange={funcao} />
    </LabelModal>
  )
}

export const CampoFormularioCadastro = ({ campo, name }) => {
  return (
    <LabelCadastro>
      {campo}
      <InputCadastro name={name} type="text" />
    </LabelCadastro>
  )
}

CampoFormularioModal.propTypes = inputPropTypes;
CampoFormularioCadastro.propTypes = inputPropTypes;