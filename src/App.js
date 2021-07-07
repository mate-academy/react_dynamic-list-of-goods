import React, { Component } from 'react';

import './App.scss';

import { getAll, getFiveFirst, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

export class App extends Component {
  state = {
    goods: [],
    typeLoad: '',
  };

  loadAll = () => {
    getAll()
      .then(result => this.setState({
        goods: result,
        typeLoad: 'loadAll',
      }));
  }

  loadFiveFirst = () => {
    getFiveFirst()
      .then(result => this.setState({
        goods: result,
        typeLoad: 'load5First',
      }));
  }

  loadRedGoods = () => {
    getRedGoods()
      .then(result => this.setState({
        goods: result,
        typeLoad: 'loadRed',
      }));
  }

  render() {
    const { goods, typeLoad } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="container">
          <button
            type="button"
            className="buttonAll"
            onClick={this.loadAll}
          >
            Load All goods
          </button>

          <button
            type="button"
            className="button5First"
            onClick={this.loadFiveFirst}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="buttonRed"
            onClick={this.loadRedGoods}
          >
            Load red goods
          </button>

          {(goods.length !== 0) && (
            <GoodsList
              goods={goods}
              typeLoad={typeLoad}
            />
          )}
        </div>
      </div>
    );
  }
}
