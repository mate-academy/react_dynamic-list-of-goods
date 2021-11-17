import React from 'react';
import './App.scss';
import { GoodList } from './componets/GoodList/GoodList';

import { getAll, getFiveFirstGood, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
interface State {
  goods: Good[]
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  handleClick = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>

        <div className="container">
          <button
            className="btn btn-outline-primary"
            onClick={() => this.handleClick(getAll)}
            type="button"
          >
            Load All goods
          </button>

          <button
            className="btn btn-outline-primary"
            onClick={() => this.handleClick(getFiveFirstGood)}
            type="button"
          >
            Load 5 first goods
          </button>

          <button
            className="btn btn-outline-primary"
            onClick={() => this.handleClick(getRedGoods)}
            type="button"
          >
            Load red goods
          </button>
        </div>

        {!!goods.length && (
          <GoodList goods={goods} />
        )}
      </div>
    );
  }
}
