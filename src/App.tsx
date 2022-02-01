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

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            className="buttons__button"
            onClick={() => this.loadGoods(goodsAPI.getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={() => this.loadGoods(goodsAPI.get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={() => this.loadGoods(goodsAPI.getRedGoods)}
          >
            Load red goods
          </button>
        </div>
        {!!goods.length && <GoodList goods={goods} />}
      </div>
    );
  }
}
