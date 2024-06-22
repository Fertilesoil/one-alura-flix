import { inputPropTypes } from "../../Validacoes/PropTypes";
import { LabelCadastro, LabelModal } from "./Label";
import { TextAreaCadastro, TextAreaModal } from "./TextArea";

export const CampoDescricaoModal = ({ campo, name, funcao, valor }) => {
  return (
    <LabelModal>
      {campo}
      <TextAreaModal name={name} onChange={funcao} value={valor} />
    </LabelModal>
  )
}

export const CampoDescricaoCadastro = ({ campo, name, funcao, valor }) => {
  return (
    <LabelCadastro>
      {campo}
      <TextAreaCadastro name={name} onChange={funcao} value={valor} />
    </LabelCadastro>
  )
}

CampoDescricaoModal.propTypes = inputPropTypes;
CampoDescricaoCadastro.propTypes = inputPropTypes;