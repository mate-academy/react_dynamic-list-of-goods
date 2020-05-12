import React from 'react';
import { Good } from './IGood';

type GoodsListProps ={
  goods: Good[];
};

class GoodsList extends React.PureComponent<GoodsListProps> {
  render() {
    const { goods } = this.props;

    return (
      <ul className="list">
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

export default GoodsList;
