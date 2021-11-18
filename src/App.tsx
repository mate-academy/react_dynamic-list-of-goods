import React from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  };

  handleClick = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          className="App__button"
          onClick={() => this.handleClick(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="App__button"
          onClick={() => this.handleClick(get5First)}
        >
          Get 5 First
        </button>

        <button
          type="button"
          className="App__button"
          onClick={() => this.handleClick(getRed)}
        >
          Get Red
        </button>

        {this.state.goods.length > 0 && (
          <GoodsList goods={this.state.goods} />
        )}
      </div>
    );
  }
}

export default App;
