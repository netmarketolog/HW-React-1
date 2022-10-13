import styled from 'styled-components';

// export const Online = styled.span``;
// export const Offline = styled.span``;
export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const Name = styled.p`
  font-weight: bold;
`;
