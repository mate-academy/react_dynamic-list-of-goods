import React from 'react';
import { GoodsList } from './GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  getData = async(getGoods) => {
    const goods = await getGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <button
          onClick={() => this.getData(getAll)}
          className="button"
          type="button"
        >
          Load all goods
        </button>

        <button
          onClick={() => this.getData(get5First)}
          className="button"
          type="button"
        >
          Load 5 first goods
        </button>

        <button
          onClick={() => this.getData(getRedGoods)}
          className="button"
          type="button"
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
