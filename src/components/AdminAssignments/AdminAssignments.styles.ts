import styled from 'styled-components';

export const AssignmentsPanel = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  list-style: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  padding-bottom: 20px;
  border-bottom: 2px solid black;
  padding-left: 20px;
`;

export const EmptyAssignmentsOrErr = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
`;

export const AssignmentsLoaderContainer = styled.div`
  margin-top: 100px;
`;
