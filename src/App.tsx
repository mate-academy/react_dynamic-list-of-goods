import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList/goodList';

import { getAll, getFiveFirstGood, getRedGoods } from './api/goods';

interface State {
  goods: Good[]
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  handleLoadAllGoodsButton = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  handleLoadFiveFirstGoodButton = async () => {
    const goods = await getFiveFirstGood();

    this.setState({ goods });
  };

  handleLoadRedGoodsButton = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>

        <div className="container">
          <button
            className="btn"
            onClick={this.handleLoadAllGoodsButton}
            type="button"
          >
            Load All goods
          </button>

          <button
            className="btn"
            onClick={this.handleLoadFiveFirstGoodButton}
            type="button"
          >
            Load 5 first goods
          </button>

          <button
            className="btn"
            onClick={this.handleLoadRedGoodsButton}
            type="button"
          >
            Load red goods only
          </button>
        </div>

        {!!goods.length && (
          <GoodList goods={goods} />
        )}
      </div>
    );
  }
}
