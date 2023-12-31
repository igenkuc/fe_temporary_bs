import styled from 'styled-components';

import { Button } from '../Button/Button';

export const ModalContainer = styled.div<{ isOpen: boolean }>`
  ${({ theme }) => theme.flexStyles()};
  opacity: ${({ isOpen }) => (!isOpen ? '0' : '1')};
  pointer-events: ${({ isOpen }) => (!isOpen ? 'none' : 'all')};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.5s;
`;

export const ModalCard = styled.div<{ isOpen: boolean }>`
  max-width: 60vw;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.black};
  background-color: white;
  border-radius: 20px;
  transform: ${({ isOpen }) => (!isOpen ? 'scale(.5)' : 'scale(1)')};
  transition: 0.4s all;
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => theme.flexStyles('end', 'center')};
  gap: 10px;
  margin-top: 50px;
`;

const BaseButton = styled(Button)`
  max-width: fit-content;
  padding: 10px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ConfirmButton = styled(BaseButton)`
  background-color: lightgreen;
`;

export const CancelButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.red};
  max-width: fit-content;
  padding: 10px;
  color: ${({ theme }) => theme.colors.black};
`;
