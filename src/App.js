import React, { Component } from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

class App extends Component {
  state = {
    goods: [],
    isGoodsLoaded: false,
  };

  fetchData = (event, getDataFunc) => {
    event.preventDefault();

    getDataFunc()
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
          onClick={event => this.fetchData(event, getAll)}
          type="button"
        >
          get all
        </button>
        <button
          onClick={event => this.fetchData(event, get5First)}
          type="button"
        >
          get 5
        </button>
        <button
          onClick={event => this.fetchData(event, getRed)}
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
