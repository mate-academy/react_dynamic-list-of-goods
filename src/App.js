import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = (f) => {
    f().then(result => this.setState({ goods: result }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>
          <span> Dynamic</span>
          <span> list of</span>
          <span> Goods</span>
        </h1>

        <button
          type="button"
          className="green"
          onClick={() => this.getGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          className="blue"
          onClick={() => this.getGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="red"
          onClick={() => this.getGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
