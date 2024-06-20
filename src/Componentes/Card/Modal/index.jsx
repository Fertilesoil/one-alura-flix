// import React from 'react'
import styled from 'styled-components'
import { contextoAlura } from "../../../Context/UseContextHook";
import { CircleX } from 'lucide-react';
import { CampoDescricao, CampoFormulario } from './CampoFormulario';
import BotaoNavbar from '../../NavBar/BotaoNavbar';
import { CampoCategoria } from './Dropdown';

const ModalFormulario = styled.dialog`
  position: fixed;
  overflow-x: hidden;
  top: 5%;
  left: 25%;
  transform: translateX(-50%, -50%);
  max-height: 90vh;
  min-height: auto;
  min-width: 53rem;
  border: 3px solid var(--light-blue);
  border-radius: .7rem;
  background: #03122F;
  padding: 2rem;
  z-index: 20;
  
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
`

const IconeFechamento = styled.button`  
  position: relative;
  top: -8px;
  left: 47rem;
  cursor: pointer;
  background: transparent;
  color: #F7F7F7;
`

const ConteudoModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-roboto);

  & > h2 {
    color: var(--standard-blue);
    font-size: 60px;
    font-weight: 900;
    text-transform: uppercase;
  }
`

const FormsModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  margin-top: 2rem;
  width: 60%;
  height: fit-content;
  font-family: var(--font-source-sans);
  
  & * {
  font-family: var(--font-source-sans);
  }
`

const BotoesForms = styled.div`
  display: flex;
  justify-content: space-around;
`


const Modal = () => {

  const { openModal, setOpenModal } = contextoAlura();

  return (
    <ModalFormulario open={openModal}>

      <IconeFechamento onClick={() => setOpenModal(estado => !estado)}>
        <CircleX size={40} />
      </IconeFechamento>

      <ConteudoModal>
        <h2>Editar Card: </h2>

        <FormsModal>
          <CampoFormulario campo={`Título`} />
          <CampoCategoria campo={`Categoria`}/>
          <CampoFormulario campo={`Imagem`} />
          <CampoFormulario campo={`Vídeo`} />
          <CampoDescricao campo={`Descrição`} />

          <BotoesForms>
            <BotaoNavbar>
              Salvar
            </BotaoNavbar>

            <BotaoNavbar>
              Limpar
            </BotaoNavbar>
          </BotoesForms>
        </FormsModal>
      </ConteudoModal>

    </ModalFormulario>
  )
}

const CamadaModal = styled.div`
  display: ${props => props.$ativo ? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  min-width: 100%;
  min-height: 100vh;
  background:#03122FC2;
  z-index: 10;
`

export const OverLay = () => {

  const { openModal } = contextoAlura();

  return (
    <CamadaModal $ativo={openModal} />
  )
}

export default Modal