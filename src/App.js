import React from 'react';

import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const url = 'https://mate-academy.github.io/react_dynamic-list-of-goods/';

class App extends React.Component {
  state = {
    goods: [],
    color: 'red',
    start: 0,
    count: 5,
  }

  allGoods = async() => {
    const promise = await fetch(`${url}goods.json`);
    const result = await promise.json();

    return result;
  }

  loadAllGoods = async() => {
    this.setState({
      goods: await this.allGoods(),
    });
  }

  loadFiveGoods = async() => {
    const { start, count } = this.state;

    this.setState({
      goods: (await this.allGoods()).slice(start, count),
    });
  }

  loadColorGoods = async() => {
    const { color } = this.state;

    this.setState({
      goods: (await this.allGoods())
        .filter(good => good.color === color),
    });
  }

  render() {
    const { goods, count, start, color } = this.state;

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
          Download
          {' '}
          {count}
          {' '}
          products starting with
          {' '}
          {start + 1}
        </button>

        <button
          type="button"
          onClick={this.loadColorGoods}
        >
          Load
          {' '}
          {color}
          {' '}
          goods
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
