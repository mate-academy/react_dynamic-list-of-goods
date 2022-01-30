import React from 'react';
import { GoodList } from './components/GoodList/GoodList';

import './App.scss';

import * as goodsAPI from './api/goods';

type Props = {};

type State = {
  goods: Good[],
};

export class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    const { getAll, get5First, getRedGoods } = goodsAPI;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            className="buttons__button"
            onClick={() => this.loadGoods(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={() => this.loadGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={() => this.loadGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>
        {!!this.state.goods.length && <GoodList goods={this.state.goods} />}
      </div>
    );
  }
}
