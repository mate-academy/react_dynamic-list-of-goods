import React from 'react';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  addGoods = async(callback) => {
    const goods = await callback;

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <button
          type="button"
          onClick={() => this.addGoods(getAll())}
        >
          Show All Goods
        </button>
        <button
          type="button"
          onClick={() => this.addGoods(get5First())}
        >
          Show 5 First Goods
        </button>
        <button
          type="button"
          onClick={() => this.addGoods(getRedGoods())}
        >
          Show Red Goods
        </button>
        <button
          type="button"
          onClick={() => this.setState({ goods: [] })}
        >
          Clear
        </button>
        <ul>
          <GoodsList goods={goods} />
        </ul>
      </>
    );
  }
}

export default App;
