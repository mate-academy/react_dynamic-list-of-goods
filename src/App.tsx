import React from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  };

  handleLoadAllGoodsButton = async () => {
    const goods = await getAll();

    this.setState(
      { goods },
    );
  };

  handleGet5FirstButton = async () => {
    const goods = await get5First();

    this.setState(
      { goods },
    );
  };

  handleGetRedButton = async () => {
    const goods = await getRed();

    this.setState(
      { goods },
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          className="App__button"
          onClick={this.handleLoadAllGoodsButton}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="App__button"
          onClick={this.handleGet5FirstButton}
        >
          Get 5 First
        </button>

        <button
          type="button"
          className="App__button"
          onClick={this.handleGetRedButton}
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
