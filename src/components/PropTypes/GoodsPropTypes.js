import PropTypes from 'prop-types';

const GoodsPropTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};

export default GoodsPropTypes;
