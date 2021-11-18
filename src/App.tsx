import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  handleClick = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.handleClick(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.handleClick(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.handleClick(getRed)}
        >
          Load red goods
        </button>

        {goods.length
          ? <GoodsList goods={goods} />
          : (
            <p>
              No goods
            </p>
          )}
      </div>
    );
  }
}

export default App;
