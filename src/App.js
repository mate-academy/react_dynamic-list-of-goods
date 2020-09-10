import React from 'react';

import './App.scss';
import GoodsList from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  handleClick = (requestType) => {
    const goodsFromServer = requestType();

    goodsFromServer
      .then(data => this.setState({ goods: data }));
  }

  render() {
    return (
      <div>
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
          onClick={() => this.handleClick(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
