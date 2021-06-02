import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = (callback) => {
    callback()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;
    const { loadGoods } = this;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => {
            loadGoods(getAll);
          }}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => {
            loadGoods(get5First);
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => {
            loadGoods(getRedGoods);
          }}
        >
          Load red goods
        </button>

        {goods.length > 0
          && <GoodsList goods={goods} />
        }
      </div>
    );
  }
}

export default App;
