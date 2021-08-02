import PropTypes from 'prop-types';

export const buttonPropTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
export const goodPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
});

export const goodListPropTypes = {
  goods: PropTypes.arrayOf(
    goodPropTypes,
  ).isRequired,
};
