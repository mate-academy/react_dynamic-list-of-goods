import PropTypes from 'prop-types';
import { GoodProps } from './GoodProps';

export const GoodListProps = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      ...GoodProps.isRequired,
    }),
  ).isRequired,
};
