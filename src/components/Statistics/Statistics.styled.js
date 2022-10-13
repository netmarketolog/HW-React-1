import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatSection = styled.section`
  margin: 16px auto;
  background-color: white;
`;

export const StatTitle = styled.h2`
  text-align: center;
  padding: 16px 0;
  color: purple;
  font-size: 16px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
  align-items: center;
  background-color: ${getRandomHexColor};
  border-radius: 4px;
`;
