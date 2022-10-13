import PropTypes from 'prop-types';
import { Static } from '../Static/Static';
import { Item, StatList, StatSection, StatTitle } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection className="statistics">
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(stat => (
          <Item key={stat.id}>
            <Static static={stat} />
          </Item>
        ))}
      </StatList>
    </StatSection>
  );
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
