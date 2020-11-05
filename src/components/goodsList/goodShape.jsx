import PropTypes from 'prop-types';

export const goodShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}.isRequired).isRequired;
