import styled from 'styled-components';

export const AdminRolesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 34px);
`;

export const RolesPanel = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  text-transform: uppercase;
  font-weight: 600;
  padding-bottom: 20px;
  border-bottom: 2px solid black;
  padding-left: 20px;
`;

export const RequestError = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 500;
`;
export const RolesLoaderContainer = styled.div`
  margin-top: 100px;
`;
