import PropTypes from 'prop-types';
import {
  Label,
  Percent,
  StatsItem,
  StatsList,
  StatsTitle,
  Wraper,
} from './statistics.style';

export const Statistics = ({ title, stats }) => {
  return (
    <Wraper>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <Label>{label}</Label>
            <Percent>{percentage}%</Percent>
          </StatsItem>
        ))}
      </StatsList>
    </Wraper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
