import React, { PureComponent } from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends PureComponent {
  state = {
    goods: [],
  }

  setGoods = async(functionType) => {
    const goods = await functionType();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          className="ui primary button"
          type="button"
          onClick={() => this.setGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          className="ui primary button"
          type="button"
          onClick={() => this.setGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          className="ui primary button"
          type="button"
          onClick={() => this.setGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
