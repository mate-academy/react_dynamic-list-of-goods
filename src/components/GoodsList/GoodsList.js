import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.goods.map(good => (
          <li
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

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};
