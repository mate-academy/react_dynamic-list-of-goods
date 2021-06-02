import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  }

  goodsSelected = (callback) => {
    callback()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => this.goodsSelected(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.goodsSelected(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.goodsSelected(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
