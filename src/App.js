import React from 'react';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = async(request) => {
    const goods = await request();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            onClick={() => this.loadGoods(getAll)}
          >
            All goods
          </button>
          <button
            type="button"
            onClick={() => this.loadGoods(get5First)}
          >
            5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.loadGoods(getRedGoods)}
          >
            Red goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
