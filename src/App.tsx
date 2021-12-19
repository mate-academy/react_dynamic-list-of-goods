import React from 'react';
import './App.scss';

import * as goodsAPI from './api/goods';
import { GoodsList } from './component/GoodsList/GoodsList';

type State = {
  goods: Good[]
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = async (getSpecificGoods: () => Promise<Good[]>) => {
    const goods = await getSpecificGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <button
          className="button"
          type="button"
          onClick={() => {
            this.loadGoods(goodsAPI.getAll);
          }}
        >
          Load All Goods
        </button>
        <button
          className="button"
          type="button"
          onClick={() => {
            this.loadGoods(goodsAPI.get5First);
          }}
        >
          Load 5 first goods
        </button>
        <button
          className="button"
          type="button"
          onClick={() => {
            this.loadGoods(goodsAPI.getRedGoods);
          }}
        >
          Load Red Goods
        </button>
        <br />
        {goods.length === 0 ? 'No goods' : (<GoodsList goods={goods} />)}
      </div>
    );
  }
}

export default App;
