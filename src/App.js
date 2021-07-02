import React, { Component } from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

export class App extends Component {
  state = {
    goods: [],
    isLoaded: false,
    typeLoad: '',
  };

  loadAll() {
    getAll()
      .then(res => this.setState({
        goods: res,
        isLoaded: true,
        typeLoad: 'loadAll',
      }));
  }

  load5First() {
    get5First()
      .then(res => this.setState({
        goods: res,
        isLoaded: true,
        typeLoad: 'load5First',
      }));
  }

  loadRed() {
    getRed()
      .then(res => this.setState({
        goods: res,
        isLoaded: true,
        typeLoad: 'loadRed',
      }));
  }

  render() {
    const { goods, isLoaded, typeLoad } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="container">
          <button
            type="button"
            className="buttonAll"
            onClick={() => this.loadAll()}
          >
            Load All goods
          </button>

          <button
            type="button"
            className="button5First"
            onClick={() => this.load5First()}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="buttonRed"
            onClick={() => this.loadRed()}
          >
            Load red goods
          </button>

          {isLoaded && (
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
