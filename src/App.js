import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  }

  buttonClick = (func) => {
    func().then(goods => this.setState({ goods }));
  }

  render() {
    return (
      <>
        <h1>
          Dynamic list of Goods
        </h1>

        <button
          type="button"
          onClick={() => this.buttonClick(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.buttonClick(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.buttonClick(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;
