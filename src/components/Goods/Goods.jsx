import React from 'react';
import PropTypes from 'prop-types';

export const Goods = ({ goods }) => (
  <>
    {goods.length > 0
      && goods.map(item => (
        <li key={item.id} style={{ color: `${item.color}` }}>
          {item.name}
        </li>
      ))
    }
  </>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
