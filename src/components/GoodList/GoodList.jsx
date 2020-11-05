import React from 'react';
import PropTypes from 'prop-types';
import './GoodList.scss';
import 'bulma';

import classNames from 'classnames';

export const GoodList = ({ goods }) => (
  <>
    <ul>
      {goods.map((good) => {
        const itemClassName = classNames('list__item', good.color);

        return (
          <li
            key={good.id}
            className={itemClassName}
          >
            {`Name: ${good.name}, color: ${good.color}`}
          </li>
        );
      })}
    </ul>
  </>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isReqired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
