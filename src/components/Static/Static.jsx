import PropTypes from 'prop-types';
import { Label, Percentage } from './Static.styled';

export const Static = ({ static: { label, percentage } }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </>
  );
};

Static.propTypes = {
  static: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
