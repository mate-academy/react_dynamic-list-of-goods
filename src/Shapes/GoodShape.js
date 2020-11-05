import PropTypes from 'prop-types';

export const GoodShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}).isRequired;
