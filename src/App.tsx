import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList/GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: [] | Good[]
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  getGoods = (method: { (): Promise<Good[]>; }) => {
    method()
      .then(goods => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <section>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.getGoods(getAll);
          }}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.getGoods(get5First);
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.getGoods(getRedGoods);
          }}
        >
          Load red goods
        </button>
        {goods.length > 0 && (
          <GoodList
            goods={goods}
          />
        )}
      </section>
    );
  }
}

export default App;
