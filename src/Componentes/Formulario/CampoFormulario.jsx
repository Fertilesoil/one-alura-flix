import { inputPropTypes } from "../../Validacoes/PropTypes"
import { InputCadastro, InputModal } from "./Input"
import { LabelCadastro, LabelModal } from "./Label"

export const CampoFormularioModal = ({ campo, name, funcao, valor }) => {
  return (
    <LabelModal>
      {campo}
      <InputModal type="text" name={name} onChange={funcao} value={valor} />
    </LabelModal>
  )
}

export const CampoFormularioCadastro = ({ campo, name, funcao, valor }) => {
  return (
    <LabelCadastro>
      {campo}
      <InputCadastro name={name} type="text" onChange={funcao} value={valor} />
    </LabelCadastro>
  )
}

CampoFormularioModal.propTypes = inputPropTypes;
CampoFormularioCadastro.propTypes = inputPropTypes;