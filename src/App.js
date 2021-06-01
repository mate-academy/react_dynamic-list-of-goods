import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  handleClick = func => (
    func()
      .then((goods) => {
        this.setState({
          goods,
        });
      })
  )

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.handleClick(getAll)}
        >
          All goods
        </button>
        <button
          type="button"
          onClick={() => this.handleClick(get5First)}
        >
          5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.handleClick(getRedGoods)}
        >
          Red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
