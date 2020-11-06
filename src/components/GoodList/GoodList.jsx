import React from 'react';
import propTypes from 'prop-types';

export const GoodList = ({ goods }) => (
  <ul className="is-danger is-centered">
    {goods.map(({ name, id }) => (
      <li key={id} className="">
        {name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};
