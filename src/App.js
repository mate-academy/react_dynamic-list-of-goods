import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

export class App extends React.PureComponent {
  state = {
    goods: [],
  }

  filterGoods = (currentGoods) => {
    currentGoods()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;
    const { filterGoods } = this;

    return (
      <div>
        <h1>
          List of goods
        </h1>
        <GoodsList goods={goods} />
        <button
          type="button"
          onClick={() => {
            filterGoods(getAll);
          }}
        >
          Load all goods
        </button>
        <button
          type="button"
          onClick={() => {
            filterGoods(getRedGoods);
          }}
        >
          Load red goods
        </button>
        <button
          type="button"
          onClick={() => {
            filterGoods(get5First);
          }}
        >
          Load 5 first goods
        </button>
      </div>
    );
  }
}
