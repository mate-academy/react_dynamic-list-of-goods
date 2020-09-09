import React from 'react';
import PropTypes from 'parse-json';

export class GoodsList extends React.PureComponent {
  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(item => (
          <li
            key={item.id}
            style={{ color: item.color }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf,
};

GoodsList.defaultProps = {
  goods: [],
};
