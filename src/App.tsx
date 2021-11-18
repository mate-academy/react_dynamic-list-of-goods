import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import * as goodsAPI from './api/goods';

interface State {
  goods: Good[];
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;
    const {
      getAll,
      get5First,
      getRed,
    } = goodsAPI;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <div className="buttons-group">
          <button
            type="button"
            className="buttons-group__button"
            onClick={() => this.loadGoods(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="buttons-group__button"
            onClick={() => this.loadGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="buttons-group__button"
            onClick={() => this.loadGoods(getRed)}
          >
            Load red goods
          </button>
        </div>
        {!!goods.length && <GoodsList goodsFromServer={goods} />}
      </div>
    );
  }
}
