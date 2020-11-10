import React from 'react';
import PropTypes from 'prop-types';
import './GoodList.scss';
import classNames from 'classnames';

const GoodList = ({ goods }) => (
  <ul className="content">
    {goods.map(good => (
      <li
        key={good.id}
        className={classNames('content__item', `content__${good.color}`)}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

const goodShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
});

GoodList.propTypes = {
  goods: PropTypes.arrayOf(goodShape).isRequired,
};

export { GoodList };
