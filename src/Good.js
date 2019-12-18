import React from 'react';
import PropsTypes from 'prop-types';

const Good = ({ items }) => (
  items.map(item => (
    <li
      key={item.name}
      className={item.color}
    >
      {item.name}
    </li>
  ))
);

Good.propTypes = { items: PropsTypes.arrayOf.isRequired };

export default Good;
