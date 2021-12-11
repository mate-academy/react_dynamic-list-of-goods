import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsLIst';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  setGoods = (getGoods: () => Promise<Good[]>) => {
    getGoods().then(goods => {
      this.setState({ goods });
    });
  };

  render(): React.ReactNode {
    return (
      <>
        <button
          type="button"
          onClick={() => this.setGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.setGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.setGoods(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;
