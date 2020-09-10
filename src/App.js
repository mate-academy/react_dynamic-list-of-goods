import React, { Component } from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

class App extends Component {
  state = {
    goods: [],
    isGoodsLoaded: false,
  };

  fetchAll = (event) => {
    event.preventDefault();

    getAll()
      .then(goods => this.setState({
        goods,
        isGoodsLoaded: true,
      }));
  }

  fetchFive = (event) => {
    event.preventDefault();

    get5First()
      .then(goods => this.setState({
        goods,
        isGoodsLoaded: true,
      }));
  }

  fetchRed = (event) => {
    event.preventDefault();

    getRed()
      .then(goods => this.setState({
        goods,
        isGoodsLoaded: true,
      }));
  }

  render() {
    const { goods, isGoodsLoaded } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          onClick={event => this.fetchAll(event)}
          type="button"
        >
          get all
        </button>
        <button
          onClick={event => this.fetchFive(event)}
          type="button"
        >
          get 5
        </button>
        <button
          onClick={event => this.fetchRed(event)}
          type="button"
        >
          get red
        </button>

        {isGoodsLoaded
          ? <GoodsList goods={goods} />
          : <h2>Please load a goods</h2>
        }
      </>
    );
  }
}

export default App;
