import styled from 'styled-components';
export const Box = styled.div`
  margin: 40px;
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
`;
export const Avatar = styled.img`
  width: 150px;
  border-radius: 10%;
  border: 1px solid ${p => p.theme.colors.grey};
`;

export const Username = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const Tag = styled.p`
  font-size: 20px;

  color: ${p => p.theme.colors.grey};
`;

export const Location = styled.p`
  font-size: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;

  color: white;
  border-radius: 8px;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 3);
  height: 80px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.grey};
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Quantity = styled.span`
  margin-top: 10px;
  font-weight: bold;
`;
