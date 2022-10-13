import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px auto;
  width: 200px;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;

  gap: 16px;
  padding: 8px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 8px;
  &:hover {
    transform: scale(1.1);
  }
`;
