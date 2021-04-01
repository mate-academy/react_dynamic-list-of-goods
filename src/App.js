import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state ={
    goods: [],
  }

  loadGoods = (callback) => {
    callback()
      .then(result => (
        this.setState({ goods: result })
      ));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of goods</h1>
        <button
          type="button"
          onClick={() => this.loadGoods(getAll)}
        >
          Load all
        </button>
        <button
          type="button"
          onClick={() => this.loadGoods(get5First)}
        >
          Load five first
        </button>
        <button
          type="button"
          onClick={() => this.loadGoods(getRedGoods)}
        >
          Load only red
        </button>

        <ul>
          {goods.map(good => (
            <li key={good.id} style={{ color: good.color }}>{good.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
