import PropTypes from 'prop-types';

export const ButtonShape = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    api: PropTypes.func.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
