import React from 'react';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export default class App extends React.Component {
  state = {
    goods: [],
  };

  loader = async (promise: Promise<Good[]>) => {
    const goods = await promise
      .then(result => result);

    this.setState({
      goods: goods.length !== 5 ? goods : (
        goods.sort((a: Good, b: Good) => a.name.localeCompare(b.name))
      ),
    });
  };

  render() {
    const { goods } = this.state;
    const { loader } = this;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => loader(getAll())}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => loader(get5First())}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => loader(getRedGoods())}
        >
          Load red goods
        </button>
        {goods.length > 0 && (
          <GoodsList
            goods={goods}
          />
        )}
      </div>
    );
  }
}
