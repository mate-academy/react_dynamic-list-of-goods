import React from 'react';
import PropTypes from 'prop-types';
import { Good } from './good';
import { goodShape } from './goodShape';

export function GoodsList({ goods }) {
  return (
    <ul>
      {goods.map(good => (
        <Good
          key={good.id}
          good={good}
        />
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(goodShape).isRequired,
};
