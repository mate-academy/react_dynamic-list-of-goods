import PropTypes from 'prop-types';

export const GoodShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
