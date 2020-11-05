import PropTypes from 'prop-types';

export const ButtonShape = {
  text: PropTypes.string.isRequired,
  data: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
