import styled from "styled-components";

export const TextAreaModal = styled.textarea`
  background-color: transparent;
  color: #f7f7f7d5;
  border: 2px solid var(--standard-blue);
  border-radius: .5rem;
  font-size: 1rem;
  padding: .87rem;
  resize: none;
  height: 8rem;
  line-height: 1.2lh;
  transition: all .37s ease-in-out;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    border-radius: 0 .8rem .8rem 0;
    background-color: #2271D12B;
  }

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to right, var(--standard-blue), #1458ac);
    border-radius: 0 .8rem .8rem 0;
  }

  &:focus-within {
    border: 2px solid var(--light-blue);
    box-shadow: 4px 4px 7px rgba(0,0,0,.5);
    transition: all .37s ease-in-out;
  }
`

export const TextAreaCadastro = styled.textarea`
  background: transparent;
  border: 2px solid var(--forms-grey);
  border-radius: .5rem;
  padding: 1rem;
  height: 10rem;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
  overflow: hidden;
  resize: none;
  overflow: auto;
  transition: all .37s ease-in-out;

  &:focus {
    border: 2px solid #404040;
    box-shadow: 4px 4px 7px rgba(0,0,0,.5);
    transition: all .37s ease-in-out;
  }

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`