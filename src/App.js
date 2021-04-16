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
      <>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            onClick={() => this.loadGoods(getAll)}
          >
            Get all
          </button>
          <button
            type="button"
            onClick={() => this.loadGoods(get5First)}
          >
            Get 5 first
          </button>
          <button
            type="button"
            onClick={() => this.loadGoods(getRedGoods)}
          >
            Get red
          </button>
        </div>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
