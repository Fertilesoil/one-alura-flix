import styled from "styled-components";
import { useContextoAlura } from "../../../Context/UseContextHook";

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
  z-index: 20;
`

export const OverLay = () => {

  const { openModal } = useContextoAlura();

  return (
    <CamadaModal $ativo={openModal} />
  )
}

export default OverLay