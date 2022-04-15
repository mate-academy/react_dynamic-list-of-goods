import React from 'react';
import './App.scss';
import GoodsList from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good[]
};

type GetGoodsCallback = () => Promise<Good[]>;

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (func: GetGoodsCallback) => {
    const res = await func();

    this.setState({
      goods: res,
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            className="button is-link"
            onClick={() => {
              this.loadGoods(getAll);
            }}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="button is-link"
            onClick={() => {
              this.loadGoods(get5First);
            }}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="button is-link"
            onClick={() => {
              this.loadGoods(getRedGoods);
            }}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
