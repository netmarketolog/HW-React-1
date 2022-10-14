import styled from 'styled-components';

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${p =>
    p.isOnline ? p.theme.colors.green : p.theme.colors.red};
`;
export const Name = styled.p`
  font-weight: bold;
`;
