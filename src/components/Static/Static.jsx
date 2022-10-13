import { Label, Percentage } from './Static.styled';

export const Static = ({ static: { label, percentage } }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </>
  );
};
