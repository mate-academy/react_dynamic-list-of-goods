import React from 'react';
import './GoodsList.scss';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {};

  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(good => (
          <li
            style={{ color: `${good.color}` }}
            key={good.id}
          >
            {good.name}
          </li>
        ))}
      </ul>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
