import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[]
};

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  getGoods = async (callback: () => Promise<Good[]>) => {
    callback()
      .then(goods => this.setState({ goods }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
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
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}
