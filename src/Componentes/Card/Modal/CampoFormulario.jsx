import styled from "styled-components"

const Label = styled.label`
  color: #F7F7F7;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

const Input = styled.input`
  background-color: transparent;
  color: #f7f7f7d5;
  border: 2px solid var(--standard-blue);
  border-radius: .5rem;
  font-size: 1rem;
  padding: .87rem;
  transition: all .37s ease-in-out;

  &:focus-within {
    border: 2px solid var(--light-blue);
    box-shadow: 4px 4px 7px rgba(0,0,0,.5);
    transition: all .37s ease-in-out;
  }
`

const TextArea = styled.textarea`
  background-color: transparent;
  color: #f7f7f7d5;
  border: 2px solid var(--standard-blue);
  border-radius: .5rem;
  font-size: 1rem;
  padding: .87rem;
  resize: none;
  height: 8rem;
  transition: all .37s ease-in-out;

  &:focus-within {
    border: 2px solid var(--light-blue);
    box-shadow: 4px 4px 7px rgba(0,0,0,.5);
    transition: all .37s ease-in-out;
  }
`

export const CampoFormulario = ({ campo }) => {
  return (
    <Label>
      {campo}
      <Input type="text" name={campo} />
    </Label>
  )
}

export const CampoDescricao = ({ campo }) => {
  return (
    <Label>
      {campo}
      <TextArea name={campo} />
    </Label>
  )
}
