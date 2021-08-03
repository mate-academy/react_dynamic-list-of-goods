import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  setGoods = (getGoods) => {
    getGoods().then((goods) => {
      this.setState({
        goods,
      });
    });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            onClick={() => this.setGoods(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={() => this.setGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.setGoods(getRed)}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={this.state.goods} />
      </>

    );
  }
}

export default App;
