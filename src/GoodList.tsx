import React from 'react';

import { getGoodsFromServer } from './api';

interface Goods {
  id: string;
  name: string;
  color: string;
}

type State = {
  goods: Goods[];
};

export default class GoodList extends React.PureComponent {
  state: State = {
    goods: [],
  };

  getAllGoods = () => {
    getGoodsFromServer().then(goods => {
      this.setState({ goods });
    });
  };

  get5FirstGoods = () => {
    getGoodsFromServer().then(goods => {
      this.setState({
        goods: goods.sort((a: Goods, b: Goods) => a.name.localeCompare(b.name)).slice(0, 5),
      });
    });
  };

  getRedGoods = () => {
    getGoodsFromServer().then(goods => {
      this.setState({ goods: goods.filter((el: Goods) => el.color === 'red') });
    });
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.getAllGoods}>Download all goods</button>
        <button type="button" onClick={this.get5FirstGoods}>Download 5 first goods</button>
        <button type="button" onClick={this.getRedGoods}>Download Red goods</button>
        <ul>
          {this.state.goods.map(el => (
            <li key={el.id} style={{ color: el.color }}>{el.name}</li>
          ))}
        </ul>
      </>

    );
  }
}
