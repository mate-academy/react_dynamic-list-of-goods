// import React, { useState, FC, useEffect } from 'react';
import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { Good } from './types';
import { loadGoods } from './api';

interface State {
  goods: Good[];
  error: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    error: '',
  };

  onLoadAll = () => {
    loadGoods()
      .then((goods) => {
        this.setState({
          goods,
          error: '',
        });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  onLoad5 = () => {
    loadGoods()
      .then((goods) => {
        this.setState({
          goods: goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
          error: '',
        });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  onLoadRed = () => {
    loadGoods()
      .then((goods) => {
        this.setState({
          goods: goods.filter(good => good.color === 'red'),
          error: '',
        });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    const { goods, error } = this.state;

    return (
      <div className="container">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.onLoadAll}
        >
          All goods
        </button>
        <button
          type="button"
          onClick={this.onLoad5}
        >
          5 goods
        </button>
        <button
          type="button"
          onClick={this.onLoadRed}
        >
          red goods
        </button>
        {error
          ? (<p>{error}</p>)
          : (<GoodsList goods={goods} />)}
      </div>
    );
  }
}

export default App;
