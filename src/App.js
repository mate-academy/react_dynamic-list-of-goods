import React, { Component } from 'react';

// import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends Component {
  state = {
    goods: [],
  }

  getAllGoods = () => {
    getAll()
      .then(data => this.setState({ goods: data }));
  }

  getFirstFiveGoods = () => {
    get5First()
      .then(data => this.setState({ goods: data }));
  }

  getOnlyRedGoods = () => {
    getRedGoods()
      .then(data => this.setState({ goods: data }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div className="goods">
          <ul>
            {goods.map(good => (
              <li
                key={good.id}
                style={{
                  color: good.color,
                }}
              >
                {good.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="buttons">
          <button
            type="button"
            onClick={this.getAllGoods}
          >
            Get all
          </button>

          <button
            type="button"
            onClick={this.getFirstFiveGoods}
          >
            Get first 5 goods and sort it
          </button>

          <button
            type="button"
            onClick={this.getOnlyRedGoods}
          >
            Get red goods
          </button>
        </div>
      </>
    );
  }
}
