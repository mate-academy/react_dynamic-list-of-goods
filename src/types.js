import PropTypes from 'prop-types';

export const TodoType = PropTypes.shape({
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}).isRequired;
