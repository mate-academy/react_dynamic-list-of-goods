import React from 'react';

import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const url = 'https://mate-academy.github.io/react_dynamic-list-of-goods/';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAllGoods = async() => {
    const promise = await fetch(`${url}goods.json`);
    const result = await promise.json();

    this.setState({
      goods: result,
    });
  }

  loadFiveGoods = async() => {
    const promise = await fetch(`${url}goods.json`);
    const result = await promise.json();

    this.setState({
      goods: result.slice(1, 5),
    });
  }

  loadColorGoods = async() => {
    const promise = await fetch(`${url}goods.json`);
    const result = await promise.json();

    this.setState({
      goods: result.filter(good => good.color === 'red'),
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.loadFiveGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.loadColorGoods}
        >
          Load red goods
        </button>

        {goods.map(good => (
          <p
            key={good.id}
            style={{
              color: good.color,
            }}
          >
            {good.name}
          </p>
        ))}
      </>
    );
  }
}

export default App;
