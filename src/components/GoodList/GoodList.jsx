import React from 'react';
import PropTypes from 'prop-types';

import './GoodList.scss';

export class GoodList extends React.PureComponent {
  render() {
    const { goods } = this.props;

    return (
      <ul className="GoodList">
        {goods.map(good => (
          <li
            className="GoodList__item"
            key={good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    );
  }
}

GoodList.propTypes = {
  goods: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
