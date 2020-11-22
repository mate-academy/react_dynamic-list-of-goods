import PropTypes from 'prop-types';

export const GoodsListTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
};
