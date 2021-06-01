import React from 'react';

import PropTypes from 'prop-types';

export class GoodsList extends React.PureComponent {
  render() {
    const { goods, showGoods } = this.props;

    return (
      <div className="GoodsList">
        {showGoods && (
          <ul>
            {goods.map(good => (
              <li
                key={good.id}
                style={{ color: good.color }}
              >
                {good.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  showGoods: PropTypes.bool.isRequired,
};
