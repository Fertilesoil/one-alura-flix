import styled from "styled-components";

export const InputModal = styled.input`
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

export const InputCadastro = styled.input`
  background: transparent;
  border: 2px solid var(--forms-grey);
  border-radius: .5rem;
  padding: 1.5rem 1rem;
  height: 2rem;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
  transition: all .37s ease-in-out;

  &:focus {
    border: 2px solid #404040;
    box-shadow: 3px 3px 8px rgba(0,0,0,.5);
    transition: all .37s ease-in-out;
  }
`