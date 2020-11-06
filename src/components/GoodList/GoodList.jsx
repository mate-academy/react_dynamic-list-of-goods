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

GoodList.propTypes = {
  goods: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  })).isRequired,
};
