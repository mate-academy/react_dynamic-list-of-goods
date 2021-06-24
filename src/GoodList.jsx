import React from 'react';
import PropTypes from 'prop-types';

function GoodList(props) {
  const { goods } = props;

  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {' '}
          {good.name}
          {' '}

        </li>
      ))}
    </ul>
  );
}

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GoodList;
