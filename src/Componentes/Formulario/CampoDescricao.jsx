import { inputPropTypes } from "../../Validacoes/PropTypes";
import { LabelCadastro, LabelModal } from "./Label";
import { TextAreaCadastro, TextAreaModal } from "./TextArea";

export const CampoDescricaoModal = ({ campo, name }) => {
  return (
    <LabelModal>
      {campo}
      <TextAreaModal name={name} />
    </LabelModal>
  )
}

export const CampoDescricaoCadastro = ({ campo, name }) => {
  return (
    <LabelCadastro>
      {campo}
      <TextAreaCadastro name={name} />
    </LabelCadastro>
  )
}

CampoDescricaoModal.propTypes = inputPropTypes;
CampoDescricaoCadastro.propTypes = inputPropTypes;